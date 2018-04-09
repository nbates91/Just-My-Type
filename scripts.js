$(document).ready(function() {
	$('#keyboard-upper-container').hide();
});

$(document).keydown(function(e) {
	if (e.keyCode == 16) {
		$('#keyboard-upper-container').toggle();
		$('#keyboard-lower-container').toggle();
	}
});

$(document).keyup(function(e) {
	if (e.keyCode == 16) {
		$('#keyboard-upper-container').toggle();
		$('#keyboard-lower-container').toggle();
	}
});

// function highlightKey() {
// var keyPress = $(document).keypress();

// }
var keyLit = $('.well well-lg key');
$(keyLit.id).keypress(function(event) {
	console.log(this);
});

// $('span').keypress(highlightKey);

// var span = $('span');
// var keyCode = $('span').getElementById();
// console.log(keyCode);

// function highlightKey() {
// $(this).css.('background-color', 'yellow');
// }
