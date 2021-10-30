
$(function(){

	//滑動header連動效果 -pc
	$(window).on("scroll",function(){
	var scrollDistance = $(window).scrollTop();
	var $menu = $("#js-pc_menu");
	if(scrollDistance > 900){
		$menu.addClass('pc_menu--colored')
	}
	else{
		$menu.removeClass('pc_menu--colored')
	   }
	})

  //播放器JQ效果-1
  var $modal = $('.modal');
  var HIDE_CLASS = 'is-hide';
  
  $('#js-startbtn').on('click',function(){
    $modal.removeClass(HIDE_CLASS);
  });
  
  $('.js-modal-close').on('click',function(){
    $modal.addClass(HIDE_CLASS);
  });

    //播放器JQ效果-2
  var $modal = $('.modal');
  var HIDE_CLASS = 'is-hide';
  
  $('#js-startbtn-2').on('click',function(){
    $modal.removeClass(HIDE_CLASS);
  });
  
  $('.js-modal-close-2').on('click',function(){
    $modal.addClass(HIDE_CLASS);
  });

      //播放器JQ效果-3
  var $modal = $('.modal');
  var HIDE_CLASS = 'is-hide';
  
  $('#js-startbtn-3').on('click',function(){
    $modal.removeClass(HIDE_CLASS);
  });
  
  $('.js-modal-close-3').on('click',function(){
    $modal.addClass(HIDE_CLASS);
  });

        //播放器JQ效果-4
  var $modal = $('.modal');
  var HIDE_CLASS = 'is-hide';
  
  $('#js-startbtn-4').on('click',function(){
    $modal.removeClass(HIDE_CLASS);
  });
  
  $('.js-modal-close-4').on('click',function(){
    $modal.addClass(HIDE_CLASS);
  });


//規格顯示器

$("#mi-jq-format-one").click(function(){
  $(".mi-format-one").toggle(300);
});

$("#mi-jq-format-two").click(function(){
  $(".mi-format-two").toggle(300);
});

$("#mi-jq-format-three").click(function(){
  $(".mi-format-three").toggle(300);
});


      //錨點連結有滑動的效果
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });


    //輪播效果
    $(document).ready(function() {

        var i = 0;

        var clone = $(".banner .img li").first().clone(); //克隆第一張圖片
        $(".banner .img").append(clone); //復制到列表最後
        var size = $(".banner .img li").size();


        for (var j = 0; j < size - 1; j++) {
            $(".banner .num").append("<li></li>");
        }

        $(".banner .num li").first().addClass("on");

        /*自動輪播*/

        var t = setInterval(function() { i++;
            move(); }, 4000);

        /*鼠標懸停事件*/

        $(".banner").hover(function() {
            clearInterval(t); //鼠標懸停時清除定時器
        }, function() {
            t = setInterval(function() { i++;
                move(); }, 2000); //鼠標移出時清除定時器
        });


        /*鼠標滑入原點事件*/

        $(".banner .num li").hover(function() {

            var index = $(this).index(); //獲取當前索引值
            i = index;
            $(".banner .img").stop().animate({ left: -index * 1200 }, 1200);
            $(this).addClass("on").siblings().removeClass("on");
        });



        /*向左按鈕*/
        $(".banner .btn_l").click(function() {
            i++;
            move();
        })


        /*向右按鈕*/
        $(".banner .btn_r").click(function() {
            i--;
            move();
        })

        /*移動事件*/
        function move() {
            if (i == size) {
                $(".banner .img").css({ left: 0 });
                i = 1;
            }
            if (i == -1) {
                $(".banner .img").css({ left: -(size - 1) * 1200 });
                i = size - 2;
            }
            $(".banner .img").stop().animate({ left: -i * 1200 }, 1200);

            if (i == size - 1) {
                $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }

        if($(window).width() < 767)
          {


           $(".banner .num li").hover(function() {

            var index = $(this).index(); //獲取當前索引值
            i = index;
            $(".banner .img").stop().animate({ left: -index * 300 }, 300);
            $(this).addClass("on").siblings().removeClass("on");
        });

              // JavaScript here 
              // 當視窗寬度小於767px時執行
              function move() {
            if (i == size) {
                $(".banner .img").css({ left: 0 });
                i = 1;
            }
            if (i == -1) {
                $(".banner .img").css({ left: -(size - 1) * 300 });
                i = size - 2;
            }
            $(".banner .img").stop().animate({ left: -i * 300 }, 300);

            if (i == size - 1) {
                $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
            }
              }
              
          }


    });


	var arr = new Array(5);
	
    $("button").click(function(){
		var count=0;
      let array = [];
      //增加或移除 class="active"
      //$(this).toggleClass("active");
      //取 button class="active" 的 value

	//尺寸
	if($(this).hasClass("s-size")) {
			if($(this).hasClass("active")) {
				$(".s-size").removeClass("active");
				arr[0]=undefined;
			}else{
				$(".s-size").removeClass("active");
				$(this).addClass("active");
				arr[0]=$(this).attr("value");
			};
    };
		
	//解析度
	if($(this).hasClass("s-reso")) {
			if($(this).hasClass("active")) {
				$(".s-reso").removeClass("active");
				arr[1]=undefined;
			}else{
				$(".s-reso").removeClass("active");
				$(this).addClass("active");
				arr[1]=$(this).attr("value");
			};
    };
		
	//防護等級-IP
	if($(this).hasClass("s-ip")) {
			if($(this).hasClass("active")) {
				$(".s-ip").removeClass("active");
				arr[2]=undefined;
			}else{
				$(".s-ip").removeClass("active");
				$(this).addClass("active");
				arr[2]=$(this).attr("value");
			};
    };
		
	//防護等級-面板
	if($(this).hasClass("s-panel")) {
			if($(this).hasClass("active")) {
				$(".s-panel").removeClass("active");
				arr[3]=undefined;
			}else{
				$(".s-panel").removeClass("active");
				$(this).addClass("active");
				arr[3]=$(this).attr("value");
			};
    };
		
	//背光壽命
	if($(this).hasClass("s-life")) {
			if($(this).hasClass("active")) {
				$(".s-life").removeClass("active");
				arr[4]=undefined;
			}else{
				$(".s-life").removeClass("active");
				$(this).addClass("active");
				arr[4]=$(this).attr("value");
			};
    };

	//統計選項計數
	$.each(arr, function( index, value ) {
		if(typeof value !== "undefined"){
			 count++;
		}
	});

        //轉為字串
        //let value = array.toString().replace(/,/g," ");

        if(count===0){//若無選擇，顯示全部產品
			
            $("#list #list-box").show();
            $("#list #list-box").animate({ "opacity": 1 }, 300);
        }else{
			
            //列表迴圈  匹配的value 元素顯示
            $('#list #list-box').each(function(key,tval){
                var x="";
                $(tval).animate({ "opacity": 0 }, 300, function(){
                $(tval).hide();
				  
                    $.each(arr, function( index, value ) {
                        if(typeof value !== "undefined"){
                            if($(tval).hasClass(value)) {//A=符合條件，B=不符合
                                x+='A';
                            }else{
                                x+='B';
                            }
                        }
                    });
                    if(x.indexOf("B")==-1){ //若找出有B，則不顯示
                        $(tval).show();
                        $(tval).animate({ "opacity": 1 }, 300);
                    };
                });
                x="";
            });

        };
        return false;
    });


        //wow plugin initialize
        new WOW().init();


});


