//SOURCE CODE BUTTON
var insert = "<pre><br>- Pre-alpha -<br>Simpy Animation<br><br>$('.zip').click(function(){<br>$('.zip').animate({top: '100%'}, 300);<br>$('.left').animate({width:'0%'}, 1100);<br>$('.left2').animate({width:'0%'}, 1200);<br>$('.left3').animate({width:'0%'}, 1300);<br>$('.left4').animate({width:'0%'}, 1400);<br>$('.left5').animate({width:'0%'}, 1500);<br>$('.left6').animate({width:'0%'}, 1600);<br>$('.left7').animate({width:'0%'}, 1700);<br>$('.left8').animate({width:'0%'}, 1800);<br>$('.left9').animate({width:'0%'}, 1900);<br>$('.left10').animate({width:'0%'}, 2000);<br>$('.right').animate({width:'0%'}, 1100);<br>$('.right2').animate({width:'0%'}, 1200);<br>$('.right3').animate({width:'0%'}, 1300);<br>$('.right4').animate({width:'0%'}, 1400);<br>$('.right5').animate({width:'0%'}, 1500);<br>$('.right6').animate({width:'0%'}, 1600);<br>$('.right7').animate({width:'0%'}, 1700);<br>$('.right8').animate({width:'0%'}, 1800);<br>$('.right9').animate({width:'0%'}, 1900);<br>$('.right10').animate({width:'0%'}, 2000)<br>$('.ZIPPER').hide(3000);<br>});<br><br></pre>";
var i = 0;

$('.code_btn').click(function(){
	if (i<1){
		$('.code_code_pre').css({backgroundColor:'#ffaf38'});
	    $('.code_code_pre').append(insert);
	}
	i += 1;
});
//