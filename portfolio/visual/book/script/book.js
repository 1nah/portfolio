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

        if($(this).parent(".project").hasClass("cover")){
            var pos = num*(530);
        }else if($(this).parent(".project").hasClass("spread")){
            var pos = (num-4)*(980)+2120;
        }

        $("body, html").animate({scrollTop:pos}, 500);
    
        // 클릭한 순서에 nav 하이라이트
        $("#design h3").removeClass("on");
        $("#design nav li").eq(num+1).find("h3").addClass("on");
        pnum=0;
        
    });


    $("#design h3").click(function(){
        
        $("#design h3").removeClass("on");
        $(this).addClass("on");

        var num = $(this).parent().parent("li").index()-1;

        if($(".project").eq(num).hasClass("cover")){
            var pos = num*(530);
        }else if($(".project").eq(num).hasClass("spread")){
            var pos = (num-4)*(980)+2120;
        }

        $("body, html").animate({scrollTop:pos}, 500);

        $(".project").addClass("off")
        $(".project").eq(num).removeClass("off");

        $(".project").removeClass("on")
        $(".project").eq(num).addClass("on");
        pnum=0;
    });

    // 커버 호버 효과
    $(".cover .frame").hover(
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

    // 페이지 효과

    var pnum=0;

    $(".page div").click(function(){

        if($(this).hasClass("prev")){
            if( pnum > 0 ){
                pnum--;
            }
        }else if($(this).hasClass("next")){
            if( pnum < 2 ){
                pnum++;
            }
        }
        console.log(pnum)
        var snum=$(this).parent().parent(".project").index()-3;
        var ps = $(this).parent(".page").siblings("a").find(".frame");
        ps.attr("src","images/spread "+snum+"-"+(pnum+1)+".png");

    });

    $(".close").click(function(){
        $(".project").removeClass("off")
        $(".project").removeClass("on");
        $("#design h3").removeClass("on");
        pnum=0;
    });

});