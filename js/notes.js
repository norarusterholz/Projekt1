var source = $("#entry-template").html();
var template = Handlebars.compile(source);

var notes = localStorage.getItem("notes");
notes = JSON.parse(notes);

$("#notes").html(template(notes));