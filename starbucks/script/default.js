$(function(){

    // header

    // search
    $("#search img").click(function(){
        $("#search").toggleClass("on");
    })
    // menu
    $("#main_nav>ul>li").hover(
        function(){
            $("#main_nav>ul>li").removeClass("on");
            if(!$(this).hasClass("logo")){
                $(this).addClass("on");
                $("#nav_bg").addClass("on");
            }
        },
        function(){
            $("#main_nav>ul>li").removeClass("on");
            $("#nav_bg").removeClass("on");
        }
    );

    // notice

    var n1=0;
    var p1;

    setInterval(function(){
        n1++;
        p1=n1*(-30)+"px"
        $("#notice ul ul").animate({marginTop:p1},300,function(){
            if(n1 == 4){
                n1=0;
                $("#notice ul ul").animate({marginTop:0},0);
            }
        });
    }, 4000);
    
});