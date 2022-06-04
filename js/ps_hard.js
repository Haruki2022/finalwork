/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-06-01 10:49:59
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
function changelogin(){
	document.querySelector("i.fa-user").style.display='block';
	document.querySelector("i.fa-spinner").style.display='none';
}
document.querySelector("button.login").addEventListener("click",function(e) {
	document.querySelector("i.fa-spinner").style.display='block';
	e.target.style.display='none';
	setInterval(changelogin,1500);
});