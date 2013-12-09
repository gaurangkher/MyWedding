$(document).ready(function()
  {
	$('#top').css('visibility','visible');
	$("#top").fadeTo(1500, 0.5, mid);
});

function mid() {
	$("#mid").css('visibility','visible');
	$("#mid").fadeTo(1500, 0.5, bottom);

}

function bottom() {
	$("#bottom").css('visibility','visible');
	$("#bottom").fadeTo(1500, 0.5, next);
}

function next() {
$("#next").css('visibility','visible');
}
