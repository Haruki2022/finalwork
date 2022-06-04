/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-05-21 15:44:06
 * @version $Id$
 */

var index=0;
function ChangeImg(){
	index++;
	var a=document.getElementsByClassName("lib-img");
	var b=document.getElementsByClassName("li-img");
	if(index>=a.length) index=0;
	for(var i=0;i<a.length;i++){
		a[i].style.display='none';
		b[i].style.opacity='0.5';
		b[i].style.border='4px solid rgba(6,6,6,0)';
	}
	b[index].style.borderColor="#0072ce";
	a[index].style.display='block';
	b[index].style.opacity='1';
	
}
setInterval(ChangeImg,3000);

function change(i){
	index=i-1;
	var a=document.getElementsByClassName("lib-img");
	var b=document.getElementsByClassName("li-img");
	if(index>=a.length) index=0;
	for(var i=0;i<a.length;i++){
		a[i].style.display='none';
		b[i].style.opacity='0.5';
		b[i].style.border='4px solid rgba(6,6,6,0)';
	}
	a[index].style.display='block';
	b[index].style.borderColor="#0072ce";
	b[index].style.opacity='1';
	clearInterval(ChangeImg);
}
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
function game(){
	window.open("ps_game.html");
}
function hard(){
	window.open("ps_hard.html");
}
function HOME(){
	location.href="../index.html";
}
function user(){
	location.href="ps_user.html";
}
function changelogin(){
	document.querySelector("i.fa-user").style.display='block';
	document.querySelector("i.fa-spinner").style.display='none';
}
document.querySelector("button.login").addEventListener("click",function(e) {
	document.querySelector("i.fa-spinner").style.display='block';
	e.target.style.display='none';
	setInterval(changelogin,1500);
});