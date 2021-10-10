$(function(){

    $(window).width("480");

    // 검색창 활성화
    $("#search img").click(function(){
        $("#search").toggleClass("on");
    });

    // 메뉴 활성화
    $("#menu_btn").click(function(){
        $("#menu").addClass("on");
    });
    $("#close").click(function(){
        $("#menu").removeClass("on");
        $("#menu nav>ul>li").removeClass("on");
        $(".sub").stop().slideUp();
    });

    // 메뉴 펼치기
    $("#menu nav>ul>li").click(function(){
        $(this).toggleClass("on");
        $(this).find(".sub").stop().slideToggle(300);
    });

    //  네비

    $("header li").click(function(){
        $("header li").removeClass("on");
        $(this).addClass("on");
    });

    // 슬라이드

    $(".cap").eq(0).addClass("on");
    
    var n = 0;

    function test(){
        n++;
        var d = n*(-480); 
        $("#slide ul").animate({marginLeft:d},500,function(){
            if (n == 4 ){
                n = 0;
                $("#slide ul").css({marginLeft:0},0);
                $(".cap").eq(0).addClass("on");
            }
        });
        $(".cap").removeClass("on");
        $("#slide ul li").eq(n).find(".cap").addClass("on");

        $("#play span").html(n+1);
        if( n == 4 ){
            $("#play span").html(1)
        }
    }

    let slide = setInterval( test , 5000 );
    
    
    $("#play_btn").click(function(){
        
        var src=$("#play_btn").attr("src");
        var stop="images/stop.png";
        var play="images/play.png";
        
        if( src==stop ){
            $("#play_btn").attr("src",play);
            clearInterval(slide);
        }else{
            $("#play_btn").attr("src",stop);
            slide = setTimeout( test );
            slide = setInterval( test , 5000 );
        }

    });

    // 기획전

    var num=0;
    var dis=0;

    $(".s_btn").click(function(){
        console.log("악");
        $("#speacial ul li, #title p").removeClass("on");
        
        if($(this).hasClass("left")){
            if(num > 0){
                num--;
            }
        }else if($(this).hasClass("right")){
            if(num < 4){
                num++;
            }
        }
        dis = num*(-272)+106;
        $("#speacial ul").css({marginLeft:dis});
        $("#speacial ul li").eq(num).addClass("on");
        $("#title p").eq(num).addClass("on");
    });

    // 팝업

    $("#pop_close").click(function(){
        $("#popup").hide();
    });
});