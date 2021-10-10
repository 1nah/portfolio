$(function(){

    var n=0;
    var d;

    setInterval(function(){
        n++
        d=n*(-200)+"px";
        $("#slide").animate({marginTop:d},500,function(){
            if(n == 6){
                n=0;
                $("#slide").animate({marginTop:0},800);
                $("#home").animate({width:850+"px"},800);
                $("#brace span").animate({width:300+"px"},800);
                $("#slide li").animate({marginLeft:50+"px"},800);
            }
        });
        if(n == 0){
            $("#home").animate({width:850+"px"},500);
            $("#brace span").animate({width:300+"px"},500);
            $("#slide li").animate({marginLeft:50+"px"},500);
        }else if(n == 2){
            $("#home").animate({width:910+"px"},500);
            $("#brace span").animate({width:360+"px"},500);
            $("#slide li").animate({marginLeft:70+"px"},500);
        }else if(n == 3){
            $("#home").animate({width:810+"px"},500);
            $("#brace span").animate({width:260+"px"},500);
            $("#slide li").animate({marginLeft:30+"px"},500);
        }else if(n == 4){
            $("#home").animate({width:940+"px"},500);
            $("#brace span").animate({width:390+"px"},500);
            $("#slide li").animate({marginLeft:90+"px"},500);
        }
    },2000);

     // resize
     var s=$(window).width()/1920;

     if($(window).width()<1200){
         $("#home").css({transform:"scale(0.625)"});
     }else{
         $("#home").css({transform:"scale("+s+")"});
     }
 
     $(window).resize(function(){
         var s=$(window).width()/1920;
         if($(window).width()>1200){
             $("#home").css({transform:"scale("+s+")"});
         }
     });

    //  pdf

     $("#pdf a").click(function(){
        $("#modal").show();
     });
     $("#no").click(function(){
        $("#modal").hide();
     });
});