/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-05-23 12:57:41
 * @version $Id$
 */

var flag=0;
function kw(i){
  var a=document.getElementsByClassName("m-kw");
  if(flag==0){	
	for(var j=0;j<a.length;j++){
		a[j].style.display='none';
	}
	a[i].style.display='block';
	flag=1;
  }
  else{
  	for(var j=0;j<a.length;j++){
		a[j].style.display='none';
	}
	flag=0;
  }
}
function home(){
	location.href="ps_home.html";
}
function user(){
	location.href="ps_user.html";
}
var f=0;
function sort(){
	var a=document.getElementsByClassName("m-game1");
	var b=document.getElementsByClassName("m-game2");
	var c=document.getElementById("sort");
	if(f==0){
	a[0].style.display='none';
	b[0].style.display='block';
	c.innerHTML="还原默认排列";
	f=1;
	}
	else {
	b[0].style.display='none';
	a[0].style.display='block';
	c.innerHTML="按价格排序";
	f=0;
	}
}

document.querySelectorAll("div.game")[0].addEventListener("click",function(e) {
	if(e.target.nodeName == 'IMG') {
		var item = e.target;
		var hide=document.querySelector("div.g-hide");
		var a=document.querySelector("img.m-hide");
		document.querySelector("div.m-game1").style.opacity=0.5;
		document.querySelector("div.m-game2").style.opacity=0.5;
		hide.style.display='flex';
		a.src=item.src;
		document.querySelector(".hide-bt").addEventListener("click",function(e) {
    	hide.style.display = "none";
    	document.querySelector("div.m-game1").style.opacity=1;
		document.querySelector("div.m-game2").style.opacity=1;
		if(e.target.className == 'sure'){
			document.querySelector("div.m-game1").style.opacity=0.5;
			document.querySelector("div.m-game2").style.opacity=0.5;
			document.querySelector("div.hide2").style.display='flex';
			document.querySelector(".hide2-bt").addEventListener("click",function(e) {
				document.querySelector("div.hide2").style.display='none';
				document.querySelector("div.m-game1").style.opacity=1;
				document.querySelector("div.m-game2").style.opacity=1;
			});
		}
    	});
	}
});
function buy(){
	document.querySelector("div.g-hide").style.display = "none";
    	document.querySelector("div.m-game1").style.opacity=1;
		document.querySelector("div.m-game2").style.opacity=1;
		if(document.querySelector(".hide-bt").className == 'sure'){
			document.querySelector("div.m-game1").style.opacity=0.5;
			document.querySelector("div.m-game2").style.opacity=0.5;
			document.querySelector("div.hide2").style.display='flex';
			document.querySelector(".hide2-bt").addEventListener("click",function(e) {
				document.querySelector("div.hide2").style.display='none';
				document.querySelector("div.m-game1").style.opacity=1;
				document.querySelector("div.m-game2").style.opacity=1;
			});
		}
}
document.querySelectorAll("div.game")[1].addEventListener("click",function(e) {
	if(e.target.nodeName == 'IMG') {
		var item = e.target;
		var hide=document.querySelector("div.g-hide");
		var a=document.querySelector("img.m-hide");
		document.querySelector("div.m-game1").style.opacity=0.5;
		document.querySelector("div.m-game2").style.opacity=0.5;
		hide.style.display='flex';
		a.src=item.src;
		document.querySelector(".hide-bt").addEventListener("click",function(e) {
    	setInterval(buy,3000);
    	});
	}
});
function changelogin(){
	document.querySelector("i.fa-user").style.display='block';
	document.querySelector("i.fa-spinner").style.display='none';
}
document.querySelector("button.login").addEventListener("click",function(e) {
	document.querySelector("i.fa-spinner").style.display='block';
	e.target.style.display='none';
	setInterval(changelogin,1500);
});