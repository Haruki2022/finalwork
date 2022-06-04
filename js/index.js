

function change(e){
	location.href="index"+e+".html";
}

function show(e){
	var a=document.getElementsByClassName("items");
	for(var i=0;i<a.length;i++){
		a[i].style.display='none';
	}
	a[e].style.display='block';
}

function select(e){
	if(e==1) location.href="html/index"+e+".html";
	else if(e==2) location.href="html/ps_home.html";
}

function returnn(){
	location.href="../index.html";
}