$(function(){
    var film = document.querySelector("#film")

    film.play();
    film.addEventListener("ended",()=>{
        film.currentTime = 0;
        film.play();
    })

    var t = 0;
    var timer;
    clearTimeout();
    var pic=$("#pic1, #pic2, #pic3, #pic4, #pic5, #text")

    $(window).scroll(function(){
        t = $(window).scrollTop();
        timer = setTimeout(function(){
            if( t < 500 ){
                pic.removeClass("on");
            }else if( t < 2400 ){
                pic.addClass("on");
            }else{
                pic.removeClass("on");
            }
        }, 120);
    });

    // 좋아요
    $(".fas").hover(
        function(){ 
            if($(this).hasClass("on") ){
                $(".fas").click(function(){
                    $(this).removeClass("on");
                });
            }else{
                $(this).addClass("over");
                $(".fas").click(function(){
                    $(this).addClass("on");
                });
            };
        },
        function(){ 
            $(this).removeClass("over");
        }
    );

    // 슬라이드
    var n = 0;
    var pos;

    setInterval(function(){
        n++;
        pos= n*(-1280)+"px";
        $("#banner ul").animate({left:pos},800,function(){
                if( n == 5){
                    n=0;
                    pos=0;
                    $("#banner ul").animate({left:0},0);
            };
        });
    }, 5000);

    // 검색창 활성화
    $("#search img").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(".main_ul").removeClass("on");
            $("#search").removeClass("on");
            $("#search input").removeClass("on");
        }else{
            $(this).addClass("on");
            $(".main_ul").addClass("on");
            $("#search").addClass("on");
            $("#search input").addClass("on");
        };
    });

    $(".photo").hover(
        function(){
            var src1=$(this).attr("src");
            var src2=src1.replace(".png","_over.png")
            $(this).attr("src", src2);
        },
        function(){
            var src1=$(this).attr("src");
            var src2=src1.replace("_over.png",".png")
            $(this).attr("src", src2);
        },
    );
});