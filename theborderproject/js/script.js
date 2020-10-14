jQuery(document).ready(function($) {



$('.my-slider').unslider({
  animateHeight: true
});

$("#header .header-arrow").click(function() {  
  $("#header .header-arrow img").toggleClass("header-arrow-rotate");      
  $("#header ul").toggleClass("menuheight");
    $("#header #logos").toggleClass("logosheight");     
});

$("#share").hover(function() {  
    $("#share").toggleClass("sharefull");     
});

$("#header2 .header-arrow").click(function() {  
  $("#header2 .header-arrow img").toggleClass("header-arrow-rotate");      
  $("#header2").toggleClass("menuheight2"); 
  $("#header2 ul.share-buttons").toggleClass("sharebottom");
});

$(".title-home").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom").offset().top - 50
  }, 700);
});

$(".home-bottom").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom-page1").offset().top - 50
  }, 700);
});

$(".home-bottom-page1").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom-page2").offset().top - 50
  }, 700);
});

$(".home-bottom-page2").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom-page3").offset().top - 50
  }, 700);
});

$(".home-bottom-page3").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom-page4").offset().top - 50
  }, 700);
});

$(".home-bottom-page4").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom-page5").offset().top - 50
  }, 700);
});

$(".home-bottom-page5").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom-page6").offset().top - 50
  }, 700);
});

$(".home-bottom-page6").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-bottom-page7").offset().top - 50
  }, 700);
});

$(".home-bottom-page7").click(function (){
  $('html, body').animate({
  scrollTop: $("div.home-footer").offset().top - 50
  }, 700);
});

$( ".title-1" ).click(function() {
  $( "#title-page" ).slideUp("300");
  $( "#timeline" ).fadeIn("fast");
  $( "ul.timeline-nav" ).fadeIn("fast");
  $( "ul.timeline-nav li p" ).removeClass( "fill");
});

$( ".title-2, .title-3" ).click(function() {
  $( "#title-page" ).slideUp("300");
  $( "#intro" ).fadeIn("fast");
  $( "li.chap1" ).addClass( "underline"); 

});

$( "#intro" ).click(function() {
  $( "#intro" ).slideUp("300");
  $( ".unslider" ).fadeIn("fast");
  $( "ul.topnav" ).fadeIn("fast");
});

$('#header li.home img').hover(function ()
{
  $('#header li.home img').attr('src' ,'images/icons/home_icon_sm_HOVER.png');
  }, function () {
  $("#header li.home img").attr('src', 'images/icons/home_icon_sm.png');
});

$('#header li.section1 img').hover(function ()
{
  $('#header li.section1 img').attr('src' ,'images/icons/history_icon_sm_HOVER.png');
  }, function () {
  $("#header li.section1 img").attr('src', 'images/icons/history_icon_sm.png');
});

$('#header li.section2 img').hover(function ()
{
  $('#header li.section2 img').attr('src' ,'images/icons/quiz_icon_sm_HOVER.png');
  }, function () {
  $("#header li.section2 img").attr('src', 'images/icons/quiz_icon_sm.png');
});

$('#header li.section3 img').hover(function ()
{
  $('#header li.section3 img').attr('src' ,'images/icons/equality_icon_sm_HOVER.png');
  }, function () {
  $("#header li.section3 img").attr('src', 'images/icons/equality_icon_sm.png');
});

$('ul.homebottomlinks li.section1 img').hover(function ()
{
  $('ul.homebottomlinks li.section1 img').attr('src' ,'images/icons/history_icon_lg_HOVER.png');
  }, function () {
  $("ul.homebottomlinks li.section1 img").attr('src', 'images/icons/history_icon_lg.png');
});

$('ul.homebottomlinks li.section2 img').hover(function ()
{
  $('ul.homebottomlinks li.section2 img').attr('src' ,'images/icons/quiz_icon_lg_HOVER.png');
  }, function () {
  $("ul.homebottomlinks li.section2 img").attr('src', 'images/icons/quiz_icon_lg.png');
});

$('ul.homebottomlinks li.section3 img').hover(function ()
{
  $('ul.homebottomlinks li.section3 img').attr('src' ,'images/icons/equality_icon_lg_HOVER.png');
  }, function () {
  $("ul.homebottomlinks li.section3 img").attr('src', 'images/icons/equality_icon_lg.png');
});
/* Section 1 */

$(".t1").click(function (){
  $('html, body').animate({
   scrollTop: $(".t1span").offset().top + 25
   }, 700);
});

$(".t2").click(function (){
  $('html, body').animate({
   scrollTop: $(".t2span").offset().top + 25
   }, 700);
});

$(".t3").click(function (){
  $('html, body').animate({
   scrollTop: $(".t3span").offset().top + 25
   }, 700);
});

$(".t4").click(function (){
  $('html, body').animate({
   scrollTop: $(".t4span").offset().top + 25
   }, 700);
});

$(".t5").click(function (){
  $('html, body').animate({
   scrollTop: $(".t5span").offset().top + 25
   }, 700);
});

$(".t6").click(function (){
  $('html, body').animate({
   scrollTop: $(".t6span").offset().top + 25
   }, 700);
});

$(".t7").click(function (){
  $('html, body').animate({
   scrollTop: $(".t7span").offset().top + 25
   }, 700);
});

$(".t8").click(function (){
  $('html, body').animate({
   scrollTop: $("#footer").offset().top + 25
   }, 700);
});


/* Section 2 */
$( ".section2 .unslider-arrow.next" ).click(function() {
  $( this ).hide("fast");
});

/* Q1 ---------*/ 

$( "li.q1 li.right" ).click(function() {
  $("li.q1 .q1-img").attr('src',"images/quiz/q1/Q1_1R.png");
  $( "li.q1 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q1 .q1-img").fadeTo(200,0.30, function() {
    $("li.q1 .q1-img").attr('src',"images/quiz/q1/Q1_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
    $( "li.q1 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q1 ul" ).addClass("animated bounceOutLeft");
    $( "li.q1 p.words1" ).hide("300");
    }, 1000);
    setTimeout(function() {
    $( "li.q1 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

$( "li.q1 li.wrong" ).click(function() {
  $("li.q1 .q1-img").attr('src',"images/quiz/q1/Q1_1W.png");
  $( "li.q1 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q1 .q1-img").fadeTo(200,0.30, function() {
    $("li.q1 .q1-img").attr('src',"images/quiz/q1/Q1_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
    $( "li.q1 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q1 ul" ).addClass("animated bounceOutLeft");
    $( "li.q1 p.words1" ).hide("300");
    }, 1000);
    setTimeout(function() {
    $( "li.q1 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

/* Q2 ---------*/ 

$( "li.q2 li.right" ).click(function() {
  $("li.q2 .q1-img").attr('src',"images/quiz/q2/Q2_1R.png");
  $( "li.q2 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q2 .q1-img").fadeTo(200,0.30, function() {
    $("li.q2 .q1-img").attr('src',"images/quiz/q2/Q2_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
    $( "li.q2 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q2 ul" ).addClass("animated bounceOutLeft");
    $( "li.q2 p.words1" ).hide("300");
    }, 1000);
    setTimeout(function() {
    $( "li.q2 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

$( "li.q2 li.wrong" ).click(function() {
  $("li.q2 .q1-img").attr('src',"images/quiz/q2/Q2_1W.png");
  $( "li.q2 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q2 .q1-img").fadeTo(200,0.30, function() {
    $("li.q2 .q1-img").attr('src',"images/quiz/q2/Q2_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
    $( "li.q2 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q2 ul" ).addClass("animated bounceOutLeft");
    $( "li.q2 p.words1" ).hide("300");
    }, 1000);
    setTimeout(function() {
    $( "li.q2 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

/* Q3 ---------*/ 

$( "li.q3 li.right" ).click(function() {
  $("li.q3 .q1-img").attr('src',"images/quiz/q3/Q3_1R.png");
  $( "li.q3 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q3 .q1-img").fadeTo(200,0.30, function() {
    $("li.q3 .q1-img").attr('src',"images/quiz/q3/Q3_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
    $( "li.q3 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q3 ul" ).addClass("animated bounceOutLeft");
    $( "li.q3 p.words1" ).hide("300");
    }, 1000);
    setTimeout(function() {
    $( "li.q3 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

$( "li.q3 li.wrong" ).click(function() {
  $("li.q3 .q1-img").attr('src',"images/quiz/q3/Q3_1W.png");
  $( "li.q3 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q3 .q1-img").fadeTo(200,0.30, function() {
    $("li.q3 .q1-img").attr('src',"images/quiz/q3/Q3_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
   $( "li.q3 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q3 ul" ).addClass("animated bounceOutLeft");
    $( "li.q3 p.words1" ).hide("300");
    }, 1000);
    setTimeout(function() {
    $( "li.q3 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

/* Q4 ---------*/ 

$( "li.q4 li.right" ).click(function() {
  $("li.q4 .q1-img").attr('src',"images/quiz/q4/Q4_1R.png");
  $( "li.q4 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q4 .q1-img").fadeTo(200,0.30, function() {
    $("li.q4 .q1-img").attr('src',"images/quiz/q4/Q4_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
     $( "li.q4 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q4 ul" ).addClass("animated bounceOutLeft");
    $( "li.q4 p.words1" ).hide("300");
    }, 1000);
    setTimeout(function() {
    $( "li.q4 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

$( "li.q4 li.wrong" ).click(function() {
  $("li.q4 .q1-img").attr('src',"images/quiz/q4/Q4_1W.png");
  $( "li.q4 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q4 .q1-img").fadeTo(200,0.30, function() {
    $("li.q4 .q1-img").attr('src',"images/quiz/q4/Q4_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
     $( "li.q4 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q4 ul" ).addClass("animated bounceOutLeft");
    $( "li.q4 p.words1" ).hide("300");
        }, 1000);
    setTimeout(function() {
    $( "li.q4 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

/* Q5 ---------*/ 

$( "li.q5 li.right" ).click(function() {
  $("li.q5 .q1-img").attr('src',"images/quiz/q5/Q5_1R.png");
  $( "li.q5 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q5 .q1-img").fadeTo(200,0.30, function() {
    $("li.q5 .q1-img").attr('src',"images/quiz/q5/Q5_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
     $( "li.q5 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q5 ul" ).addClass("animated bounceOutLeft");
    $( "li.q5 p.words1" ).hide("300");   
     }, 1000);
    setTimeout(function() {
    $( "li.q5 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

$( "li.q5 li.wrong" ).click(function() {
  $("li.q5 .q1-img").attr('src',"images/quiz/q5/Q5_1W.png");
  $( "li.q5 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q5 .q1-img").fadeTo(200,0.30, function() {
    $("li.q5 .q1-img").attr('src',"images/quiz/q5/Q5_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
        $( "li.q5 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q5 ul" ).addClass("animated bounceOutLeft");
    $( "li.q5 p.words1" ).hide("300");   
    }, 1000);
    setTimeout(function() {
    $( "li.q5 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

/* Q6 ---------*/ 

$( "li.q6 li.right" ).click(function() {
  $("li.q6 .q1-img").attr('src',"images/quiz/q6/Q6_1R.png");
  $( "li.q6 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q6 .q1-img").fadeTo(200,0.30, function() {
    $("li.q6 .q1-img").attr('src',"images/quiz/q6/Q6_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
     $( "li.q6 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q6 ul" ).addClass("animated bounceOutLeft");
    $( "li.q6 p.words1" ).hide("300");   
        }, 1000);
    setTimeout(function() {
    $( "li.q6 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

$( "li.q6 li.wrong" ).click(function() {
  $("li.q6 .q1-img").attr('src',"images/quiz/q6/Q6_1W.png");
  $( "li.q6 .right" ).addClass( "correctanswerhighlight");
    setTimeout(function() {
    $("li.q6 .q1-img").fadeTo(200,0.30, function() {
    $("li.q6 .q1-img").attr('src',"images/quiz/q6/Q6_2.png");
    }).fadeTo(300,1);
    }, 1000);
    setTimeout(function() {
     $( "li.q6 p.words1" ).addClass("animated bounceOutLeft");
    $( "li.q6 ul" ).addClass("animated bounceOutLeft");
    $( "li.q6 p.words1" ).hide("300");   
        }, 1000);
    setTimeout(function() {
    $( "li.q6 p.words2" ).fadeIn("fast");
    $( ".unslider-arrow.next" ).css( "display", "block");
    }, 1500);
});

/* SECTION 3 */
$('.section3 .unslider-arrow.next').show();

$(".section3 .unslider-arrow.next").click(function(){
$( ".section3 .unslider-arrow.prev" ).css( "display", "block");

 });

$("li.chap1").click(function(){
$('.my-slider').unslider('animate:0');
$( ".unslider-arrow.prev" ).css( "display", "block");

 });

$("li.chap2").click(function(){
$('.my-slider').unslider('animate:4');
$( ".unslider-arrow.prev" ).css( "display", "block");

 });

$("li.chap3").click(function(){
$('.my-slider').unslider('animate:7');
$( ".unslider-arrow.prev" ).css( "display", "block");

 });
$("li.chap4").click(function(){
$('.my-slider').unslider('animate:12');
$( ".unslider-arrow.prev" ).css( "display", "block");


 });
$(".my-slider").on('unslider.change', function(event, index, slide) {
    if(index > -1 && index < 4) {
     $( "li.chap1" ).addClass( "underline"); 
     $( "li.chap2" ).removeClass( "underline");
     $( "li.chap3" ).removeClass( "underline");
     $( "li.chap4" ).removeClass( "underline");
    }
});
$(".my-slider").on('unslider.change', function(event, index, slide) {
    if(index > 3 && index < 7) {
     $( "li.chap2" ).addClass( "underline");
     $( "li.chap1" ).removeClass( "underline");
     $( "li.chap3" ).removeClass( "underline");
     $( "li.chap4" ).removeClass( "underline");
    }
});

$(".my-slider").on('unslider.change', function(event, index, slide) {
    if(index > 6 && index < 11) {
     $( "li.chap3" ).addClass( "underline");
     $( "li.chap2" ).removeClass( "underline");
     $( "li.chap1" ).removeClass( "underline");
     $( "li.chap4" ).removeClass( "underline"); 
    }
});

$(".my-slider").on('unslider.change', function(event, index, slide) {
    if(index > 10 && index < 13) {
     $( "li.chap4" ).addClass( "underline");
     $( "li.chap3" ).removeClass( "underline");
     $( "li.chap1" ).removeClass( "underline");
     $( "li.chap2" ).removeClass( "underline"); 
    }
});

});

