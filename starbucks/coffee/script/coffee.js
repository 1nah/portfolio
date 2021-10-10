$(function(){

    $(".choice li").click(function(){
        $(this).siblings("li").removeClass("on");
        $(this).siblings("li").addClass('off');
        $(this).removeClass("off");
        $(this).addClass('on');
    });
    var n=0;
    var d;

    $("button").click(function(){
        var choice = $(this).parent().siblings(".choice").find("li");

        if( $(this).hasClass("prev") ){
            if( n > 0 ){
                n--;
            }
        }else if( $(this).hasClass("next") ){
            if( n < 3 && choice.hasClass("on")){
                n++;
            }else{
                $("#modal").show();
            }
        }else if( $(this).hasClass("retry") ){
            location.reload();
        }

        d=n*(-1280)+"px"
        $("#container>ul").animate({marginLeft:d},500);

    });

    $("#modal button").click(function(){
        $("#modal").hide();
    });


});