function makeFluid() {
		// Randomize photos
		var ar = $('#content').children();
	    ar.sort(function(a,b){
	      // Get a random number between 0 and 10
	      var temp = parseInt( Math.random()*10 );
	      // Get 1 or 0, whether temp is odd or even
	      var isOddOrEven = temp%2;
	      // Get +1 or -1, whether temp greater or smaller than 5
	      var isPosOrNeg = temp>5 ? 1 : -1;
	      // Return -1, 0, or +1
	      return( isOddOrEven*isPosOrNeg );
	    });
	    
	    $('#content').html(ar);
		
		$('#content').masonry({
		columnWidth: 120,
		itemSelector: '.item',
		isFitWidth:	true,
		isAnimated: true
		}).imagesLoaded(function() {
		$('#content').masonry('reload');
		});
		
		$(".item img[title]").tooltip({cancelDefault: false});

		
		$('img').on('click', function() {
			$('.tooltip').hide();
			makeFluid();
			
		});

	}

$(document).ready(function() {
	
	
	makeFluid();
	
	$('img').on('click', function() {
		$('.tooltip').hide();
		makeFluid();
	});
	
	// Tooltip
	$(".item img[title]").tooltip({cancelDefault: false});
		
});
