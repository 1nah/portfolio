$(function(){
    
    // main nav
    $("#nav_btn").click(function(){
        $("#main_nav").toggleClass("open");
    });

    $("#main_nav li").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    );

    $("#contact").click(function(){
        $(this).toggleClass("open");
    });

    setTimeout(function(){
        $("body, html").animate({scrollTop:"0px"}, 500)
    });
});