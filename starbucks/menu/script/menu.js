$(function(){

    var bnum=0;

    $(".bread .items ~ button").click(function(){

        if( bnum < 2 ){
            bnum++;
            $(this).siblings(".items").find("ul").eq(bnum).addClass("on");
            if( bnum == 2){
                $(this).hide();
            }
        }

    }); 

    var cnum=0;

    $(".cake .items ~ button").click(function(){

        if( cnum < 2 ){
            cnum++;
            $(this).siblings(".items").find("ul").eq(cnum).addClass("on");
            if( cnum == 2){
                $(this).hide();
            }
        }

    }); 

    var snum=0;

    $(".salad .items ~ button").click(function(){

        if( snum < 2 ){
            snum++;
            $(this).siblings(".items").find("ul").eq(snum).addClass("on");
            if( snum == 2){
                $(this).hide();
            }
        }

    }); 



});