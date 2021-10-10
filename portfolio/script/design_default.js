$(function(){

    // scroll

    setTimeout(function(){
        $("body, html").animate({scrollTop:"0px"}, 500);
        setTimeout(function(){
            $("#scroll").hide();
        },3000);
    });
    
    $(window).scroll(function(){
        var t = $(window).scrollTop()*(-1);
        $("#slide ul").css({marginLeft:t});
    });


    // resize
    var s=$(window).width()/1920;
    var h=$("#wrapper").height();
    var d=927-$(window).height();

    $("#wrapper").css({height:h-d});

    if($(window).width()<1200){
        $("#slide").css({transform:"scale(0.625)"});
    }else{
        $("#slide").css({transform:"scale("+s+")"});
    }

    $(window).resize(function(){

        s=$(window).width()/1920;
        d=927-$(window).height();

        if($(window).width()>1200){
            $("#slide").css({transform:"scale("+s+")"});
        }

        $("#wrapper").css({height:h-d});
        
    });

});