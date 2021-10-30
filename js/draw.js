$(function () {
    const name = $('#name-input1'),
        phone = $('#name-input2'),
        mail = $('#name-input3'),
        company = $('#name-input4'),
        ok = $('#div-ok'),
        ng = $('#div-ng'),
        dbl = $('#div-double');

    var flag = false;

    $('#complete').click(function () {
        let nVal = name.val(),
            pVal = phone.val(),
            mVal = mail.val(),
            cVal = company.val();

        // 防呆-以下資訊未輸入提示訊息
        if (!nVal) {
            name.addClass('alert-error');
            showNg();
            return;
        }

        if (!pVal) {
            phone.addClass('alert-error');
            showNg();
            return;
        } else {
            const re = new RegExp('^09\\d{8}$');
            if (!pVal.match(re)) {
                alert('電話號碼格式錯誤');
                return;
            }
        }

        if (!mVal) {
            mail.addClass('alert-error');
            showNg();
            return;
        } else {
            const re = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
            if (!mVal.match(re)) {
                alert('信箱格式錯誤');
                return;
            }
        }

        if (!cVal) {
            company.addClass('alert-error');
            showNg();
            return;
        }

        const aDiv = $('#aDiv'),
            bDiv = $('#bDiv'),
            cDiv = $('#cDiv'),
            dDiv = $('#dDiv'),
            sDiv = $('#sDiv'),
            aAwards = $('#aAwards'),
            bAwards = $('#bAwards'),
            cAwards = $('#cAwards'),
            dAwards = $('#dAwards'),
            sAwards = $('#sAwards');

        // 傳送基本資料
        $.ajax({
            type: 'GET',
            data: {
                name: nVal,
                phone: pVal,
                mail: mVal,
                company: cVal
            },
            url: 'https://script.google.com/macros/s/AKfycbwmu82mtxijK_DDfNSFf8GoEU-ZcBHCLUY-2vUnOwdKPPsKXR-b4-kHD2-vhFo-PrjJ8w/exec',
            success: function (res) {
                if (res != 'false') {
                    flag = res;
                    let key = res.split('-')[0];

                    switch (key) {
                        case 'A':
                            aDiv.css('display', 'block');
                            aAwards.text(responseStr(aAwards.text(), res));
                            break;
                        case 'B':
                            bDiv.css('display', 'block');
                            bAwards.text(responseStr(bAwards.text(), res));
                            break;
                        case 'C':
                            cDiv.css('display', 'block');
                            cAwards.text(responseStr(cAwards.text(), res));
                            break;
                        case 'D':
                            dDiv.css('display', 'block');
                            dAwards.text(responseStr(dAwards.text(), res));
                            break;
                        case 'SS':
                            sAwards.text(responseStr(sAwards.text(), res));
                            sDiv.css('display', 'block');
                            break;
                    }
                    showOk();
                    draw();
                } else {
                    showDbl();
                }
            },
            fail: function (err) {
                console.log(err);
            }
        });
    });

    function showNg() {
        ng.css('display', 'block');
    }

    function showOk() {
        ok.css('display', 'block');
        ng.css('display', 'none');
        dbl.css('display', 'none');
    }

    function showDbl() {
        ok.css('display', 'none');
        ng.css('display', 'none');
        dbl.css('display', 'block');
    }

    var topCanvas = document.querySelector('#top'),
        ctxTop = topCanvas.getContext('2d'),
        mousedown;

    topCanvas.addEventListener('click', alertMsg);

    function alertMsg() {
        if (!flag) {
            showNg();
        }
    }

    setDraw();
    function setDraw() {
        // 設定背景
        ctxTop.canvas.style.opacity = 1;
        ctxTop.fillStyle = 'silver';
        ctxTop.fillRect(0, 0, 600, 100);
        ctxTop.globalCompositeOperation = 'destination-out';
    }

    // 刮刮樂
    function draw() {
        topCanvas.removeEventListener('click', alertMsg);
        //鼠標移動開始刮圖層
        topCanvas.addEventListener('touchstart', eventDown);
        topCanvas.addEventListener('touchend', eventUp);
        topCanvas.addEventListener('touchmove', eventMove);
        topCanvas.addEventListener('mousedown', eventDown);
        topCanvas.addEventListener('mousemove', eventMove);
        document.addEventListener('mouseup', eventUp);

        function eventDown(ev) {
            ev = ev || event;
            ev.preventDefault();
            mousedown = true;
        }

        function eventUp(ev) {
            ev = ev || event;
            ev.preventDefault();
            mousedown = false;
        }

        function eventMove(ev) {
            ev = ev || event;
            ev.preventDefault();
            if (mousedown) {
                if (ev.changedTouches) {
                    ev = ev.changedTouches[ev.changedTouches.length - 1];
                }

                var x = ev.layerX;
                var y = ev.layerY;
                ctxTop.beginPath();
                ctxTop.arc(x, y, 10, 0, Math.PI * 2);
                ctxTop.fill();
                alertInfo();
            }
        }

        // 超出60%時，直接顯示全部
        function alertInfo() {
            var data = ctxTop.getImageData(0, 0, 300, 150).data;
            var n = 0;
            for (var i = 0; i < data.length; i++) {
                if (data[i] == 0) {
                    n++;
                }
            }

            if (n >= data.length * 0.6) {
                ctxTop.globalCompositeOperation = 'destination-over';
                ctxTop.canvas.style.opacity = 0;
            }
        }
    }

    function responseStr(text, award) {
        return text + '(' + award + ')'
    }
});
