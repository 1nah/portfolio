$(function(){

    // resize
    var s=$(window).width()/1920;

    if($(window).width()<1200){
        $("#visual").css({transform:"scale(0.625)"});
    }else{
        $("#visual").css({transform:"scale("+s+")"});
    }

    $(window).resize(function(){
        var s=$(window).width()/1920;
        if($(window).width()>1200){
            $("#visual").css({transform:"scale("+s+")"});
        }
    });

    // hover

    $("#visual li").hover(
        function(){
            var src=$(this).find("img").attr("src");
            src=src.replace(".png","_g.png");
            $("#visual li").removeClass("on");
            $(this).addClass("on");
            $(this).find("img").attr("src",src);
        },
        function(){
            var src=$(this).find("img").attr("src");
            src=src.replace("_g.png",".png");
            $("#visual li").removeClass("on");
            $(this).find("img").attr("src",src);
        }
    )

});