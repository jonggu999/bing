$(document).ready(function(){

  $(".tab li").click(function(){
    let tabNum = $(this).index();
    let tabMove = 160*tabNum;

    $(".tab-header .tab-highlight").animate({left:tabMove});
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    let tabResult = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#"+tabResult).addClass("active");
  }); 
});