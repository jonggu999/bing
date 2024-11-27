$(document).ready(function(){

  $("#scroll_btn").hide();

  $(window).scroll(function(){

    /* 스크롤 위치 */
    let scrPosition = $(this).scrollTop();
    $("#txt1").text(scrPosition);

    if(scrPosition>=600){
      $("#scroll_btn").fadeIn(); 
    }else{
      $("#scroll_btn").fadeOut(); 
    };

    if(scrPosition>700 && scrPosition<1400){
      $("#scroll_btn ul li.scb1").addClass("active");
      $("#scroll_btn ul li.scb1 a .scroll_hover").addClass("active");
      $("#brandlist .hide").fadeIn(500);
    }else{
      $("#scroll_btn ul li.scb1").removeClass("active");
      $("#scroll_btn ul li.scb1 a .scroll_hover").removeClass("active");
      $("#brandlist .hide").fadeOut(500);
    };

    if(scrPosition>=2000 && scrPosition<2700){
      $("#scroll_btn ul li.scb2").addClass("active");
      $("#scroll_btn ul li.scb2 a .scroll_hover").addClass("active");
      $("#manegement .hide").fadeIn(500);
    }else{
      $("#scroll_btn ul li.scb2").removeClass("active");
      $("#scroll_btn ul li.scb2 a .scroll_hover").removeClass("active");
      $("#manegement .hide").fadeOut(500);
    };

    if(scrPosition>=3000){
      $("#scroll_btn ul li.scb3").addClass("active");
      $("#scroll_btn ul li.scb3 a .scroll_hover").addClass("active");
      $("#news .hide").fadeIn(500);
    }else{
      $("#scroll_btn ul li.scb3").removeClass("active");
      $("#scroll_btn ul li.scb3 a .scroll_hover").removeClass("active");
      $("#news .hide").fadeOut(500);
    };

  });

  /* btn click */
  $("#scroll_btn ul .scb1").click(function(){
    $("body,html").animate({scrollTop:"1150px"},1000);
  });
  $("#scroll_btn ul .scb2").click(function(){
    $("body,html").animate({scrollTop:"2200px"},1000);
  });
  $("#scroll_btn ul .scb3").click(function(){
    $("body,html").animate({scrollTop:"3250px"},1000);
  });

});