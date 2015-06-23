var source = $("#entry-template").html();
var template = Handlebars.compile(source);
var notes = JSON.parse(localStorage.getItem("notes"));
var $notes = $("#notes");

var renderNotes = function() {
	$notes.html(template(notes));
};

$("#colorSelectArea").change(function() {
  if (this.value == 1) {
  	$(".thema").attr("href", "css/beach.css");
  } else if (this.value == 2) {
  	$(".thema").attr("href", "css/iceCream.css");
  } else if (this.value == 3) {
  	$(".thema").attr("href", "css/strongGirl.css");
  }
});

Handlebars.registerHelper("for", function(stars, options) {
	var html = "";

	for (var i = 0; i < parseInt(stars); i++) {
		html = html + options.fn();
	}

	return new Handlebars.SafeString(html);
});

function sortByAndRender(key, isDate){
	notes.sort(function(a, b) {
		if (isDate) {
			return new Date(a[key]) > new Date(b[key]);
		}

		return a[key] < b[key];
	});

	$("#" + key + "Sort span[class*='icon-']").toggle();
	renderNotes();
};

$("#finishDateSort").click(function(){
	sortByAndRender("finishDate", true);
});

$("#importanceSort").click(function(){
	sortByAndRender("importance");
});

$("#createdDateSort").click(function(){
	sortByAndRender("createdDate", true);
});

$("#finishedSort").click(function() {
	notes = notes.filter(function(a) {
		return a.finished === true; 
	});

	renderNotes();
});

renderNotes();

$(".finished").click(function(e){
	$target = $(e.target);

	var index = $target.closest(".note").index();

	notes[index].finished = $target.prop("checked");

	localStorage.setItem("notes", JSON.stringify(notes));
});

$(".icon-cross").click(function(){
	location.reload();
 });