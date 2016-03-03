var waypoint = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
  	console.log(direction);
  	$('.main-heroBG').toggleClass('heroBG2', direction === "down");
    
  }
})

var waypoint = new Waypoint({
  element: document.getElementById('work'),
  handler: function(direction) {
  	console.log(direction);
  	$('.main-heroBG').toggleClass('heroBG3', direction === "down");
    
  }
})

