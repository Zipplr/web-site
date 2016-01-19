$(document).ready(function(){
	$('.news').animate({top:'10%', opacity:'1'}, 500);
	$('.news').animate({top:'25%'}, 300);
	$('.news').animate({top:'5%'}, 200);
	$('.news').animate({top:'10%'}, 400);
	$('.news').fadeOut().fadeIn();
});

function hrefTo(){
	location.assign('http://www.ziplr.ru');
}

$('#zip').click(function(){
	var j = 0;
	for (i; i<1; i++){
		$('.ziplr').animate({width:'100%'}, 1000);
		$('.ziplr').css({height:'100%'});
	}
	setTimeout(hrefTo, 1000);	
});

var i = 0;
var myDiv = document.getElementsByClassName('answer');
var msg = '*Вы подписались на рассылку новостей*<br>';

$('.btn').click(function(){
	if (i < 1){
		$('.answer').append(msg);
	}
	else{
		('.answer').replaceWith("<div class=answer>*Вы подписались на рассылку новостей*<br></div>");
	}
	i+=1;
});

if ($(window).width() < 640){
	$('.autor').css({display:'inline-block', margin:'auto', top:'40%', right:'30%'});
	$('.autor_text').css({fontSize:'12px'});
	$('.news').css({display:'inline-block', margin:'auto'})
}
//var xmlHttp = AJAXcreate();
//var server = "form.php?action=Mail";
//var answer = document.getElementsByClassName('answer');
//var msg = '*Вы подписались на рассылку новостей*';

//function AJAXcreate(){
//	var xmlHttp
//	try{
//		xmlHttp = new XMLHttpRequest();
//	}
//	catch(e){
//		var xmlHttpVersion = new Array("MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP");
		
//		for (var i = 0; i<xmlHttp.length && !xmlHttp; i++){
//			try{
//				xmlHttp = new ActiveXObject(xmlHttpVersion[i]);
//			}
//			catch(e){}
//		}
//	}
//	if (!xmlHttp){
//		alert('Ошибка создания AJAX запроса');
//	}
//	else{
//		return xmlHttp;
//		Send();
//	}
//}

//function Send(){
//	if (xmlHttp){
//		try{
//			xmlHttp.open("POST", server, true);
//			xmlHttp.onreadystatechange = Success;
//			xmlHttp.send(null);
//		}
//		catch(e){
//			alert(e.toString());
//		}
//	}
//}

//function Success(){
//	if (xmlHttp.readyState == 4){
//		if(xmlHttp.status == 200){
//			try{
//				answer.innerHTML += msg;
//			}
//			catch(e){
//				alert(e.toString());
//			}
//		}
//		else{
//			alert(xmlHttp.statusText);
//		}
//	}
//}

