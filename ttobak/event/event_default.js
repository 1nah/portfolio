$(function(){

    var num=0;
    var pos;

    $("#control a").click(function(){

        if($(this).hasClass("prev")){
            num--;
            if(num==-1){
                num=4;
                $("#slide ul").animate({marginLeft:-2000},0);
            }
            console.log(num)
        }else if($(this).hasClass("next")){
            num++;
            if(num==6){
                num=1;
                $("#slide ul").animate({marginLeft:0},0);
            }
            console.log(num)
        }

        pos=num*(-400)+"px";

        $("#slide ul").animate({marginLeft:pos},300);

    });

});