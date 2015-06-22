var source = $("#entry-template").html();
var template = Handlebars.compile(source);

function getStarRating() {
    for (var i = 0; i < document.getElementsByName('rating').length; i++) {
        if (document.getElementsByName('rating')[i].checked == true) {
            return parseInt(document.getElementsByName('rating')[i].value);
        }
    }

    // No stars were selected
    return 0;
}

function generateId() {
    return Math.max.apply(this, notes.map(function(a) {
        return a.id;
    })) + 1;
}

document.getElementById("cancelButton").onclick = function () {
    location.href = "notes.html";
};

document.getElementById("saveButton").onclick = function() {
    var note = {
        id: generateId(),
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        finishDate: document.getElementById("finishDate").value,
        importance: getStarRating(),
        createdDate: new Date().toDateString(),
        finished: false
    };

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));
    location.href = "notes.html";
};

var notes = JSON.parse(localStorage.getItem("notes")) || [];
var id = parseInt(location.href.split("?id=")[1]);

Handlebars.registerHelper ("setChecked", function (value, importance) {
    if ( value == importance ) {
       return "checked"
    } else {
       return "";
    }
 });

$("#editor").html(template(notes.filter(function(item) { return item.id === id; })[0]));