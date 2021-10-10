$(function(){

    $("#event_nav li").click(function(){

        $("#event_nav li").removeClass("on");
        $(this).addClass("on");

        if($(this).hasClass("all")){
            $(".card").show();
        }else if($(this).hasClass("ing")){
            $(".card").hide();
            $(".card.ing").show();
        }else if($(this).hasClass("end")){
            $(".card").hide();
            $(".card.end").show();
        }

    });



});