$(function(){

    // banner1
    
    $("#modal button").click(function(){
        $("#modal").hide();
        $("#banner1_contents img,#banner1_contents a").addClass("on")
    });

    // promotion
    var n = 0;

    var d;
    var b;

    setInterval(function(){

        n++;
        d=n*(-600)+"px";

        $("#slide").animate({marginLeft:d},500);

        if( n == 5 ){
            $("#slide").animate({marginLeft:0},0);
            n = 0;
        }

        b=n*(240)+"px";
        $("#thumb").animate({marginLeft:b},500);

        $("#slide li").removeClass("on");
        $("#slide li").eq(n+2).addClass("on");

    }, 4000);

    $("#btn img").click(function(){
        // console.log("버튼 누름")
        if($(this).hasClass("left")){
            if( n > 0){
                n--;
            }else if( n == 0){
                $("#slide").animate({marginLeft:-3000},0);
                n = 4;
            }
        }else if($(this).hasClass("right")){
            if( n < 4){
                n++;
            }else if( n == 4){
                $("#slide").animate({marginLeft:600},0);
                n = 0;
            }
        }
        d=n*(-600)+"px";
        $("#slide").animate({marginLeft:d},500);

        b=n*(240)+"px";
        $("#thumb").animate({marginLeft:b},500);

        $("#slide li").removeClass("on");
        $("#slide li").eq(n+2).addClass("on");

    });

    // banner2, banner3
    
    var s=0;
    
    $(window).scroll(function(){
        s = $(window).scrollTop();
        if( s > $("#banner2").offset().top - 500){
            $("#banner2_contents").addClass("on");
            if( s > $("#suit").offset().top){
                $("#banner2_contents").removeClass("on");
            }
            if( s > $("#banner3").offset().top - 500){
                $("#banner3_contents").addClass("on");
                if( s > $("#magazine").offset().top){
                    $("#banner3_contents").removeClass("on");
                }
            }
        }else{
            $("#banner2_contents").removeClass("on");
            $("#banner3_contents").removeClass("on");
        }
    });

    // popup

   

    

});