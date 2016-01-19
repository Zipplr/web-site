var win = $(window).width();
$(document).ready(function(){
	$('.logo').animate({opacity:'0'});
	$('.code').animate({opacity:'0'});
});

$(document).ready(function(){
	$('.zip').animate({top: '100%'}, 300);
	$('.left').animate({width:'0%'}, 1100);
	$('.left2').animate({width:'0%'}, 1200);
	$('.left3').animate({width:'0%'}, 1300);
	$('.left4').animate({width:'0%'}, 1400);
	$('.left5').animate({width:'0%'}, 1500);
	$('.left5>p').hide(500);
	$('.left6').animate({width:'0%'}, 1600);
	$('.left7').animate({width:'0%'}, 1700);
	$('.left8').animate({width:'0%'}, 1800);
	$('.left9').animate({width:'0%'}, 1900);
	$('.left10').animate({width:'0%'}, 2000);
	$('.right').animate({width:'0%'}, 1100);
	$('.right2').animate({width:'0%'}, 1200);
	$('.right3').animate({width:'0%'}, 1300);
	$('.right4').animate({width:'0%'}, 1400);
	$('.right5').animate({width:'0%'}, 1500);
	$('.right6').animate({width:'0%'}, 1600);
	$('.right7').animate({width:'0%'}, 1700);
	$('.right8').animate({width:'0%'}, 1800);
	$('.right9').animate({width:'0%'}, 1900);
	$('.right10').animate({width:'0%'}, 2000)
	$('.ZIPPER').hide(3000);
	$('.logo').animate({opacity:'1'}, 3000);
	$('.code').animate({opacity:'1'}, 1500);
	$('.demo_href').animate({opacity:'1'}, 1950);
	$('.code').fadeOut().fadeIn();
	$('.demo_href').fadeOut().fadeIn();
});

$('.demo_btn').click(function(){
	$('.ZIPPER').show();
	$('.zip').css({top: '0%'});
	$('.zip').show();
	$('.left').css({width:'100%'});
	$('.left2').css({width:'100%'});
	$('.left3').css({width:'100%'});
	$('.left4').css({width:'100%'});
	$('.left5').css({width:'100%'});
	$('.left5>p').hide(500);
	$('.left6').css({width:'100%'});
	$('.left7').css({width:'100%'});
	$('.left8').css({width:'100%'});
	$('.left9').css({width:'100%'});
	$('.left10').css({width:'100%'});
	$('.right').css({width:'100%'});
	$('.right2').css({width:'100%'});
	$('.right3').css({width:'100%'});
	$('.right4').css({width:'100%'});
	$('.right5').css({width:'100%'});
	$('.right6').css({width:'100%'});
	$('.right7').css({width:'100%'});
	$('.right8').css({width:'100%'});
	$('.right9').css({width:'100%'});
	$('.right10').css({width:'100%'});
	//animation
	$('.zip').click(function(){
		$('.zip').animate({top:'0%'}, 475);
	    $('.zip').animate({top: '100%'}, 500);
	    $('.left').animate({width:'0%'}, 1000);
	    $('.left2').animate({width:'0%'}, 1100);
		$('.left3').animate({width:'0%'}, 1200);
		$('.left4').animate({width:'0%'}, 1300);
		$('.left5').animate({width:'0%'}, 1400);
		$('.left5>p').hide(500);
		$('.left6').animate({width:'0%'}, 1500);
		$('.left7').animate({width:'0%'}, 1600);
		$('.left8').animate({width:'0%'}, 1700);
		$('.left9').animate({width:'0%'}, 1800);
		$('.left10').animate({width:'0%'}, 1900);
		$('.right').animate({width:'0%'}, 1000);
		$('.right2').animate({width:'0%'}, 1100);
		$('.right3').animate({width:'0%'}, 1200);
		$('.right4').animate({width:'0%'}, 1300);
		$('.right5').animate({width:'0%'}, 1400);
		$('.right6').animate({width:'0%'}, 1500);
		$('.right7').animate({width:'0%'}, 1600);
		$('.right8').animate({width:'0%'}, 1700);
		$('.right9').animate({width:'0%'}, 1800);
		$('.right10').animate({width:'0%'}, 1900)
		$('.zip').hide(1500);
		$('.ZIPPER').hide(3000);
	});
	
})
//var final_width

//function Ziplr(value){
//	var	left_side = 'left';
//	var right_side = 'right';
//	var left = [];
//	var right = [];
	
//	for (var i = 0; i<value, i++){
//		left.push(left_side+i);
//		right.push(right_side+i);
//	}
	
//	alert(left);
//}

//Ziplr(20);