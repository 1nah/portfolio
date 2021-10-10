$(function(){

    $(".option li").click(function(){
        $(".option li").removeClass("on");
        $(this).addClass("on");

        if($(".ended").hasClass("on")){
            $(".ing").hide();
        }else{
            $(".ing").show();
        }

        if($(".all").hasClass("on")){
            $(".ing").show();
            $(".contents li").show();
        }else if($(".card").hasClass("on")){
            $(".ing").show();
            $(".contents li").hide();
            $(".card").show();
        }else if($(".reward").hasClass("on")){
            $(".ing").show();
            $(".contents li").hide();
            $(".reward").show();
        }else if($(".online").hasClass("on")){
            $(".ing").show();
            $(".contents li").hide();
            $(".online").show();
        }else if($(".ended").hasClass("on")){
            $(".contents li").show();
            $(".ing").hide();
        }
    });

});