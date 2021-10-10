$(function(){

    var n=0;
    var w=0;

    
    $(window).scroll(function(){
        w=$(window).scrollTop();

        if( w <= $("#intro").offset().top){
            n=0;
        }else if( w <= $("#activities").offset().top){
            n=1;
        }else if( w <= $("#link").offset().top-300){
            n=2;
        }else {
            n=3;
        }
        
        $("h3").removeClass("on");
        $(".text_inner").removeClass("on");
        $(".text_inner").removeClass("active");
        $("#activity nav li").eq(n+1).find("a").find("h3").addClass("on");
        $(".text_inner").eq(n).addClass("on");
        $(".text_inner").eq(n).addClass("active");
    
    });


});