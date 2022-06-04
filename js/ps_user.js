/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-06-01 10:04:51
 * @version $Id$
 */

$(init) 
function init() {
$(".bd-menu").hover(function(){
  	$(this).css("background-color","#ddd");
  },function(){
  	$(this).css("background-color","white");
  });
$(".bd-menu").each(function(i){

  $(this).on("click",function(){
  	$(".bd-menu").css("background-color","white")
  	$(this).css("background-color","#ccc");
  	$(".mess").text($(this).text());
  	$(".mess").css("font-size","22px");
  	$(".bd i").removeClass();
  	var fa=["fa fa-renren","fa fa-gear","fa fa-circle","fa fa-get-pocket","	fa fa-gittip","	fa fa-hotel","	fa fa-indent"];
  	$(".bd i").addClass(fa[$(this).index()]);
  });
});
}

$(".m-btn button").on("click",function(){
	location.href="ps_home.html";
});