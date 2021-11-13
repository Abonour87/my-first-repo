$(function(){
	setTimeout(function(){
		$(".loader_bg").fadeToggle()
	},1500)	
})
$(window).load(function(){
    $("header .navi .navi-bod").css({display:"none"})
})

$("header .navi .tog").click(function(){
    $("header .navi .navi-bod").slideToggle("1000")
})
$("header .navi ul > li").click(function(){
	$("html,body").animate({
		scrollTop : $($(this).find("a").data("target")).offset().top
	},1000)
})