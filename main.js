$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 111) {
          $("nav").css("background" , "url("images/bg-dubai.jpg")");
        }
  
        else{
            $(".black").css("background" , "#333");  	
        }
    })
  })