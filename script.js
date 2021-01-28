/*$().ready(function() {
	// $("h1:first").css("display", "none");
	$("h1:first").html("Teknologi @ Kea");
	//$(".page-header a").hide()
	$(".page-header").append("<div>Dat20A & Dat20B forår 2021</div>")
	//$(".page-header").append("<div>Underviser: Claus Bove, clbo@kea.dk</div>")
	$(".main-content").prepend("<div><i><small><a href='index.html'>Undervisningsplan</a> </small></i></div>")

	$(".site-footer").append("<div style='text-align:right'>&copy; clbo@kea.dk, spring 2021</div>")
	$(".site-footer-owner").hide()
});
*/

$().ready(function() {
		$("h1:first").css("display", "none");
		$(".markdown-body").prepend("<div><i><small><a href='index.html'>Semesterplan</a></small></i></div>")
		$(".markdown-body").prepend("<div><i><small>Dat20B & Dat20C, Teknologi 1, 2. Semester Forår 2021, Underviser: Claus Bove, clbo@kea.dk</small></i></div>")
		$(".markdown-body").append("<div style='text-align:right'><i><small>&copy; clbo@kea.dk, Forår 2021</small></i></div>")	
});

