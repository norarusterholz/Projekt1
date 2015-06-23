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

$("#finishDateSort").click(function(){
	notes.sort(function(a, b) {
		return new Date(a.finishDate) > new Date(b.finishDate);
	});

	$("#finishDateSort span[class*='icon-']").toggle();

	renderNotes();
});

$("#importanceSort").click(function(){
	notes.sort(function(a, b) {
		return a.importance > b.importance;
	});

	$("#importanceSort span[class*='icon-']").toggle();

	renderNotes();
});

$("#createdDateSort").click(function(){
	notes.sort(function(a, b) {
		return a.createdDate < b.createdDate;
	});

	$("#createdDateSort span[class*='icon-']").toggle();

	renderNotes();
});

$("#finishedSort").click(function() {
	notes = notes.filter(function(a) {
		return a.finished === true; 
	});

	$("#finishedSort span[class*='icon-']").toggle();

	renderNotes();
});

renderNotes();

$(".finished").click(function(e){
	$target = $(e.target);

	var index = $target.closest(".note").index();

	notes[index].finished = $target.prop("checked");

	localStorage.setItem("notes", JSON.stringify(notes));
});