$(document).ready(function(){
	
	//상단메뉴 배경색 조절
	//휴대폰에서는 배경색 보임
	if($(window).width() <= 600 ){
		$("nav").addClass('act');
	}
	//휴대폰보다 큰 화면일때는 스크롤 높이에 따라 배경색을 조절함
	else {
		const change = $("#top").height()-100;
		$(window).scroll(function(){
			if( $(window).scrollTop() >= change ){
				$("nav").addClass('act');
			} else {
				$("nav").removeClass('act');
			}
		});
	}
	
	//타자치는 효과
	const $typing = "안녕하세요.\n홍길동의 포트폴리오입니다.";
	//console.log( $typing[7]  );
	const tyLen  = $typing.length;
	console.log( tyLen ); //21개
	let i = 0;
	let txt = "";
	function type(){
		if( i < tyLen ){
			txt += $typing[i];
			//$("#typing").html(  txt );
			document.querySelector("#typing").innerText = txt;
			i++;
			setTimeout( type, 200);
		}
	}
	type();	
	
	
	
	//콘텐츠의 top값을 절대값으로 얻어온다. /상대값은 position().top
	//절대값은 기준이 윈도우 / 상대값은 기준이 부모
	const aboutTop = $("#about").offset().top;
	const port1Top = $("#port1").offset().top - 400;
	const port2Top = $("#port2").offset().top - 400;
	const port3Top = $("#port3").offset().top - 400;
	
	let st = 0;
	//스크롤바를 내렸을때의 효과 (스크롤이벤트 감지!)
	$(window).scroll(function(){
		st = $(window).scrollTop();
		console.log(st);
		if( st>= aboutTop ){
			//About에서 오른쪽 "skill" bar 애니메이션
			$("#photo progress").animate({value : 90});
			$("#html progress").delay(100).animate({value : 80});
			$("#jquery progress").delay(200).animate({value : 70});
			$("#oven progress").delay(300).animate({value : 80});			
		}
		if( st>= port1Top ){
			$("#port1").addClass("act");
		}
		if( st>= port2Top ){
			$("#port2").addClass("act");
		}
		if( st>= port3Top ){
			$("#port3").addClass("act");
		}
	});
	
	// 이벤트 이미지를 클릭하면 큰 이미지가 나타난다
	$("#event>div>div").click(function(){
					//클릭한 썸네일의 이미지주소를 가져온다
					const thumb = $(this).children("img").attr("src");
					//가져온 주소를 큰이미지주소로 변경한다
					const change = thumb.replace('.', '_big.');
					//변경한 이미지주소를 큰이미지에 대입한다
					$("#popup img").attr("src",change);
					//클릭한 썸네일이미지에서 alt값을 가져온다.
					const alt = $(this).children("img").attr("alt");
					//검정팝업 상단에 작품 제목을 대입한다.
					$("#popup h3").text(alt);
		


					$("#popup").fadeIn();
	});

	//큰 팝업창 닫기
	$("#popup").click(function(){
			$(this).fadeOut();
	});
	
	
	
	
		
});//////////////all end











