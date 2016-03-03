var waypoint = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
  	console.log(direction);
  	// $('.main-heroBG').toggleClass('heroBG2', direction === "down");
    if (direction === "down") {
		$('.main-heroBG').addClass('heroBG2');    	
    } else if (direction === "up") {
    	$('.main-heroBG').removeClass('heroBG2');
    }
  }
})

var waypoint = new Waypoint({
  element: document.getElementById('work'),
  handler: function(direction) {
  	console.log(direction);
  	// $('.main-heroBG').toggleClass('heroBG3', direction === "down");
    if (direction === "down") {
		$('.main-heroBG').removeClass('heroBG2')
		setTimeout(
    		function(){
    			$('.main-heroBG').addClass('heroBG3');
    		}, 1 );    	
    } else if (direction === "up") {
    	$('.main-heroBG').removeClass('heroBG3');
    	setTimeout(
    		function(){
    			$('.main-heroBG').addClass('heroBG2');
    		}, 1 );
    }
  }
})

