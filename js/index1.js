/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-06-04 21:22:59
 * @version $Id$
 */

var index=0;
function ChangeImg(){
	index++;
	var a=document.getElementsByClassName("img-slide");
	var d=document.getElementsByClassName("dot");
	if(index>=a.length) index=0;
	for(var i=0;i<a.length;i++){
		a[i].style.display='none';
	}
	for(var i=0;i<a.length;i++){
		d[i].className='dot';
	}
	a[index].style.display='block';
	d[index].className+=" active";
}
setInterval(ChangeImg,3000);