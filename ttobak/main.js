$(function(){

	// 슬라이드

	var n=0;
	var p;
	var banner = $("#banner_container");

	function test (){
		n++;
		p=n*(-1280)+"px"
		banner.animate({marginLeft:p},500,function(){
			if( n == 5 ){
				n = 0;
				banner.css({marginLeft:0});
			}
			$("#play_num span").html(n+1);
		});
	}

	var slide = setInterval( test, 3000);

	$("#play_btn").click(function(){

		if($("#play_btn").hasClass("on")){
			console.log("재생")
			$("#play_btn").toggleClass("on");
			slide = setInterval( test, 3000);
		}else{
			console.log("멈춰")
			clearInterval(slide);
			$("#play_btn").toggleClass("on");
		}

	});	
	
	$("#banner_arrow img").click(function(){
		console.log("버튼클릭")
		if($(this).hasClass("bannerprev")){
			console.log("왼쪽인데")
			if( n > 0 ){
				console.log("왼쪽작동")
				n--;
			};
		}else if($(this).hasClass("bannernext")){
			console.log("오른쪽인데")
			if( n < 5 ){
				console.log("오른쪽작동")
				n++;
			};
		}
		p=n*(-1280)+"px"
		banner.animate({marginLeft:p},500,function(){
			if( n == 5 ){
				n = 0;
				banner.css({marginLeft:0});
			}
			$("#play_num span").html(n+1);
		});
		
	});	


	// 검색버튼
	$(".choice").click(function(){

		if($(this).parent("a").parent("div").hasClass("cls1")){
			$(".cls1 a .choice").removeClass("on");
		}else if($(this).parent("a").parent("div").hasClass("cls2")){
			$(".cls2 a .choice").removeClass("on");
		}
		$(this).addClass("on");

	});

	// 추천픽

	$("#abroadbox label").click(function(){
		$("#abroadbox label").removeClass("on");
		$(this).addClass("on");
	});
	$("#domesticbox label").click(function(){
		$("#domesticbox label").removeClass("on");
		$(this).addClass("on");
	});

	// mbti
	var m=0;
	var d;
	var mbti = $("#mbtis");

	$("#mbti_btn img").click(function(){

		if($(this).hasClass("mbti_prev")){

			if( m > 0 ){
				m--;
			};

		}else if($(this).hasClass("mbti_next")){

			if( m < 5 ){
				m++;
			};
		}
		console.log(m);

		if(m==0){
			d=0;
		}else if(m==1){
			d=-280;
		}else if(m==2){
			d=-510;
		}else if(m==3){
			d=-790;
		}else if(m==4){
			d=-1020;
		}else if(m==5){
			d=-1300;
		}
		mbti.animate({left:d+20},300);
		
	});	

	// 네비바
	$("#index_bar li").hover(
		function(){
			$("#index_bar li").removeClass("on");
			$(this).addClass("on");
		},
		function(){
			$("#index_bar li").removeClass("on");
		}
	);

	// 팝업
	$("#popup button").click(function(){
		$("#popup").hide();
	});


});
