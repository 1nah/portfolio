$(function(){

    var n=0;
    var w=0;

    
    $(window).scroll(function(){
        w=$(window).scrollTop();

        if( w < $("#movie").offset().top-200){
            n=0;
        }else if( w < $("#cu").offset().top-200){
            n=1;
        }else {
            n=2;
        }
        
        $("h3").removeClass("on");
        $(".text_inner").removeClass("on");
        $(".text_inner").removeClass("active");
        $("#activity nav li").eq(n+1).find("a").find("h3").addClass("on");
        $(".text_inner").eq(n).addClass("on");
        $(".text_inner").eq(n).addClass("active");
    
    });

    // resize

    var s= ($(window).width()-1920)/2;
    var pic=$("#movie li:nth-child(1), #movie li:nth-child(3), #cu li:nth-child(1),#cu li:nth-child(2)")

    if($(window).width() < 1200){
        pic.css({marginLeft:-360});
    }else{
        pic.css({marginLeft:s});
    }

    $(window).resize(function(){

        s= ($(window).width()-1920)/2;

        if($(window).width() > 1200){
            pic.css({marginLeft:s});
        }
        console.log(s)
    });

});