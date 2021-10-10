$(function(){

    //click
    $(".project>a").click(function(){

        $(".inner").animate({scrollTop:0}, 300);
        // 나머지 흐리게 하기
        $(".project").addClass("off")
        $(this).parent("li").removeClass("off");

        // 클릭한 객체 확대
        $(".project").removeClass("on")
        $(this).parent("li").addClass("on");

        // 클릭한 객체 위치로 이동
        var num = $(this).parent("li").index()
        var pos = num*(1080);

        $("body, html").animate({scrollTop:pos}, 500);
    
        // 클릭한 순서에 nav 하이라이트
        $("#design h3").removeClass("on");
        $("#design nav li").eq(num+1).find("h3").addClass("on");

        
    });

    $(".close").click(function(){

        $(".project").removeClass("off")
        $(".inner").animate({scrollTop:0}, 300);
        $(".project").removeClass("on");
        $("#design h3").removeClass("on");

    });

    $("#design h3").click(function(){
        
        $(".inner").animate({scrollTop:0}, 300);
        $("#design h3").removeClass("on");
        $(this).addClass("on");

        var num = $(this).parent().parent("li").index()-1;
        var pos = num*(1080);
        $("body, html").animate({scrollTop:pos}, 500);

        $(".project").addClass("off")
        $(".project").eq(num).removeClass("off");

        $(".project").removeClass("on")
        $(".project").eq(num).addClass("on");

    });

});