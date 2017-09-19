$(document).ready(function(){
var urlWiki;
var userForm;
var userKeyword;



	$("#searchSubmit").click(function(){
		var userKeyword = $("#searchKey").val();
		urlWiki =
		"https://en.wikipedia.org/w/api.php" +
		"?" +
		$.param({
			action: "opensearch",
			search: userKeyword,
			prop: "extracts",
			format: "json",
			limit: 10
		}) +
		"&callback=?"; //that's for jsonp

		$.ajax({
		type: "GET",
		dataType: "json", //next time don't forget the Cap on Type, it's not datatype but dataType!!!
		url: urlWiki,
		success: function(data) {
			console.log(data[1]); //it WORKS!!!!
			for (var x = 0; x < data[1].length; x++) {
				//$("#test").html("<div><h2>"+ data[1][x] + "</h2></div>"); //works
				// $('<div class="results" />').text(arrayVariable[i]).appendTo('body');
			//	$("<div class='searchResult />").text(data[1][x]).appendTo("#test"); //doesn't work
				$("#top").html('<p>Results for "' + userKeyword + '":</p>')
				$("#content").append($("<div/>", { id: "result" + x, class : "searchResult"}));
				$("#result" + x).html("<a href='"+ data[3][x] +"' target=_blank>"+"<h1 class='resultTitle'>" + data[1][x] + "</h1>" + "<p>" + data[2][x]+ "</p></a>");

			}
		} //fin de success
	}) //fin de l'ajax
	})

	$("#searchKey").keypress(function(e){
			if(e.which==13) {
				$("#searchSubmit").click();
			}
		})
})
