var width = window.innerWidth;
var height = window.innerHeight;
 $(document).ready(function () {
  $(".navbar").width(width)
  $(".image1").width(width)
  $(".image1").height(window, innerHeight / 8)
  $(".home-pic").width(width).height(1700)
  $(".cover").width(width).height(1116).css("top",height)
 
  $(".piece").width(width/3).height(height/3)

// $(".intro-content").css("right", width / 2).css("top", height / 4).css("color", "white")
// $("intro-content2").css("left", width / 2).css("top", height/1.2).css("color","black")
// $(".intro-content3").css("right", width / 2).css("top", height / 4).css("color", "white")
})
