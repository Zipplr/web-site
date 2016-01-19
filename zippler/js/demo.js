//$(document).ready(function(){
	var i = 0;
	for (i; i< 50; i++){
		$('<div class="demo1_lefty"'+i+'></div>').appendTo('.demo1').css({display:'block', height:'2%', width:'100%', position:'relative', right:'0%', backgroundColor:'#2FE2A1'});
	}
});

//$(document).ready(function(){
	var i = 0;
	for (i; i< 50; i++){
		$('<div class="demo2_righty"'+i+'></div>').appendTo('.demo2').css({display:'block', height:'2%', width:'100%', position:'relative', left:'0%', backgroundColor:'#2FE2A1'});
	}
});

//$(document).ready(function(){
	var i = 0;
	for (i; i< 50; i++){
		$('<div class="demo3_lefty"'+i+'></div>').appendTo('.demo3').css({display:'block', height:'2%', width:'100%', position:'relative', left:'0%', backgroundColor:'#1B845E'});
	}
});

//$(document).ready(function(){
	var i = 0;
	for (i; i< 50; i++){
		$('<div class="demo4_righty"'+i+'></div>').appendTo('.demo4').css({display:'block', height:'2%', width:'100%', position:'relative', left:'0%', backgroundColor:'#1B845E'}).animate({width:'0%'}, 3000);
	}
});

/*CATCH=EVENT=-=CATCH=EVENT=-=CATCH=EVEN=-=CATCH=EVENT=-=CATCH=EVENT=-=CATCH=EVENT=-=CATCH=EVENT=-=CATCH=EVENT=-=CATCH=EVENT*/
//what is it?
$//(document).ready(function(){
	var i = 1;
	var topM = i*2;
	var top = '-'+topM.toString()+'%';
	for (i; i<49; i++){
		if i == 1{
			continue;
		}
		else{
			$('.demo1_l' + i.toString()).css({top: top});
		}
	}
});
//

//$('.demo_btn').click(function(){
	$('.demo1').css({opacity:'1'});
	$('.demo2').css({opacity:'1'});
});

//var namesLeftSide = ['.demo1_l1', '.demo1_l2', '.demo1_l3', '.demo1_l4', '.demo1_l5', '.demo1_l6', '.demo1_l7', '.demo1_l8', '.demo1_l9', '.demo1_l10', '.demo1_l11', '.demo1_l12', '.demo1_l13', '.demo1_l14', '.demo1_l15', '.demo1_l16', '.demo1_l17', '.demo1_l18', '.demo1_l19', '.demo1_l20']
//var nameRightSide = ['.demo1_r1', '.demo1_r2', '.demo1_r3', '.demo1_r4', '.demo1_r5', '.demo1_r6', '.demo1_r7', '.demo1_r8', '.demo1_r9', '.demo1_r10', '.demo1_r11', '.demo1_r12', '.demo1_r13', '.demo1_r14', '.demo1_r15', '.demo1_r16', '.demo1_r17', '.demo1_r18', '.demo1_r19', '.demo1_r20']
//$(document).ready(function(){
//	alert(namesLeftSide)
//})

//$(document).ready(function(){
	var i = 0;
	var time = 1000;
	for (i; i<20;i++){
		$(namesLeftSide[i]).animate({width:'0%'}, time);
		time += 100;
	}
});