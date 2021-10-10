$(function(){

    //click
    $(".project>a").click(function(){

        // 나머지 흐리게 하기
        $(".project").addClass("off")
        $(this).parent(".project").removeClass("off");

        // 클릭한 객체 확대
        $(".project").removeClass("on")
        $(this).parent(".project").addClass("on");

        // 클릭한 객체 위치로 이동
        var num = $(this).parent(".project").index()
        var pos = num*(580);

        $("body, html").animate({scrollTop:pos}, 500);
    
        // 클릭한 순서에 nav 하이라이트
        $("#design h3").removeClass("on");
        $("#design nav li").eq(num+1).find("h3").addClass("on");
        
    });


    $("#design h3").click(function(){
        
        $("#design h3").removeClass("on");
        $(this).addClass("on");

        var num = $(this).parent().parent("li").index()-1;
        var pos = num*(580);

        $("body, html").animate({scrollTop:pos}, 500);

        $(".project").addClass("off")
        $(".project").eq(num).removeClass("off");

        $(".project").removeClass("on")
        $(".project").eq(num).addClass("on");
    });

    // 커버 호버 효과
    $(".frame").hover(
        function(){
            if($(this).parent().parent("li").hasClass("on")){
                var s = $(this).attr("src");
                s=s.replace("-1","-2");
                $(this).attr("src",s);
            }
        },
        function(){
            var s = $(this).attr("src");
            s=s.replace("-2","-1");
            $(this).attr("src",s);
        }
    );

    $(".close").click(function(){
        $(".project").removeClass("off")
        $(".project").removeClass("on");
        $("#design h3").removeClass("on");
    });

});