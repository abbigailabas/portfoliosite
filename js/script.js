// var waypoint = new Waypoint({
//   element: document.getElementById('about'),
//   handler: function(direction) {
//   	console.log(direction);
//   	// $('.main-heroBG').toggleClass('heroBG2', direction === "down");
//     if (direction === "down") {
// 		$('.main-heroBG').addClass('heroBG2');    	
//     } else if (direction === "up") {
//     	$('.main-heroBG').removeClass('heroBG2');
//     }
//   }
// })

// var waypoint = new Waypoint({
//   element: document.getElementById('work'),
//   handler: function(direction) {
//   	console.log(direction);
//   	// $('.main-heroBG').toggleClass('heroBG3', direction === "down");
//     if (direction === "down") {
// 		$('.main-heroBG').removeClass('heroBG2')
// 		setTimeout(
//     		function(){
//     			$('.main-heroBG').addClass('heroBG3');
//     		}, 1 );    	
//     } else if (direction === "up") {
//     	$('.main-heroBG').removeClass('heroBG3');
//     	setTimeout(
//     		function(){
//     			$('.main-heroBG').addClass('heroBG2');
//     		}, 1 );
//     }
//   }
// })



// // $.scrollify({
// // 		section : ".main-content__section",
// // 		sectionName : "section-name",
// // 		easing: "easeOutExpo",
// // 		scrollSpeed: 900,
// // 		offset : 0,
// // 		scrollbars: true,
// // 		// standardScrollElements: "",
// // 		// before:function() {},
// // 		// after:function() {},
// // 		// afterResize:function() {},
// // 		// afterRender:function() {}
// // 	});











var waypoint = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    console.log(direction);
    // $('.main-heroBG').toggleClass('heroBG2', direction === "down");
    if (direction === "down") {
      $('.main-heroBG').removeClass('js-hero-animation').addClass('heroBG2');
      setTimeout(
        function(){
          $('.main-heroBG').addClass('js-hero-animation');
        }, 1 );

    } else if (direction === "up") {
      console.log('this one');
      $('.main-heroBG').removeClass('heroBG2 js-hero-animation');
       setTimeout(
        function(){
          $('.main-heroBG').addClass('js-hero-animation heroBG1');
        }, 1 );
    }
  }, offset: '50%'
})

var waypoint = new Waypoint({
  element: document.getElementById('work'),
  handler: function(direction) {
    console.log(direction);
    // $('.main-heroBG').toggleClass('heroBG3', direction === "down");
    if (direction === "down") {
    $('.main-heroBG').removeClass('js-hero-animation').addClass('heroBG3');
    setTimeout(
        function(){
          $('.main-heroBG').addClass('js-hero-animation');
        }, 1 );
    } else if (direction === "up") {
      $('.main-heroBG').removeClass('js-hero-animation').removeClass('heroBG3');
      setTimeout(
        function(){
          $('.main-heroBG').addClass('js-hero-animation');
        }, 1 );
    }
  }, offset: '50%'
})



/**
 *
 * if you dont want the smooth scroll to section comment the
 *
 */

function scrollifyToSection() {
//target link in menu
$('.main-nav__link a').on('click', function(event) {
  //prevent default action
  event.preventDefault();
  /* Act on the event */
  //get href attribute
  var $a_href = $(this).attr('href');
  console.log('clicked');
  //scrollify move to section
  $.scrollify.move($a_href);
});

}

scrollifyToSection();





$.scrollify({
    section : ".main-content__section",
    sectionName : "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 900,
    offset : 0,
    scrollbars: true,
    // standardScrollElements: "",
    // before:function() {},
    // after:function() {},
    // afterResize:function() {},
    // afterRender:function() {}
  });
