$(function(){

    // toggle

    $(".toggle").click(function(){
       $(this).toggleClass("on"); 
       if( $(this).hasClass("hannah") ){
           $("#members").toggleClass("on");  
       }
    });

    // hover

    $(".frame").hover(
        function(){
            var src=$(this).find("img").attr("src");
            src=src.replace(".png","_g.png");
            $(this).find("img").attr("src",src);
        },
        function(){
            var src=$(this).find("img").attr("src");
            src=src.replace("_g.png",".png");
            $(this).find("img").attr("src",src);
        }
    )
    // resize
    var s=$(window).width()/1920;
    var h=$("#wrapper").height();


    if($(window).width()<1200){
        $("section").css({transform:"scale(0.625)"});
        $("#wrapper").css({height:h*(0.625)});
    }else{
        $("section").css({transform:"scale("+s+")"});
        $("#wrapper").css({height:h*s});
    }

    $(window).resize(function(){
        var s=$(window).width()/1920;
        if($(window).width()<1200){
            $("section").css({transform:"scale(0.625)"});
            $("#wrapper").css({height:h*(0.625)});
        }else{
            $("section").css({transform:"scale("+s+")"});
            $("#wrapper").css({height:h*s});
        }
    });

    // text
    var t = 0;
    setTimeout(function(){
        $(window).scroll(function(){
            t = $(window).scrollTop();
            if( t > 300 ){
                $(".txt").addClass("on");
            }
        });
    });

});