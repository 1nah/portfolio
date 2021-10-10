$(function(){

    // 옵션 선택
    $("#select button").click(function(){

        loading();
        
        $(this).toggleClass("on");
        var cls1=$(this).attr("class");
        cls1=cls1.replace(" on","");
        $("#selected button."+cls1).toggleClass("selected");
        
        select_height();

    });

    $("#selected button").click(function(){

        loading();
        
        $(this).removeClass("selected");
        var cls2=$(this).attr("class");
        cls2=cls2.replace("on ","");
        $("#select button."+cls2).removeClass("on");

        select_height();

    });

    // 리셋
    $("#reset").click(function(){

        loading();
        
        $("#select button").removeClass("on");
        $("#selected button").removeClass("selected");

        select_height();
        
    });

    // 로딩

    function loading() {
        $("#loading").addClass("on");
        setTimeout(function(){
            $("#loading").removeClass("on");
        },1600);
    }

    // 더보기
    $("li.card:lt(4)").show();
    var num=0;
    $("#more").click(function(){
        if(num==1){
            $("li.card:lt(12)").show();
            $("#more").hide();
            $("#end").show();
            select_height();
        }else if(num==0){
            num=1;
            $("li.card:lt(8)").show();
            select_height();
        }else{

        }
    });

    // 검색영역 높이

    select_height();

    function select_height(){
        var h=$("#result").innerHeight();
        console.log(h);
        $("#select").css({height:h-100});
    }

    // 좋아요

    $(".like").click(function(){
        var like=$(this).attr("src");
        var off="images/like.png";
        var on="images/like_p.png";

        if(like==on){
            $(this).attr("src",off);
        }else if(like==off){
            $(this).attr("src",on);
        }

    });

});