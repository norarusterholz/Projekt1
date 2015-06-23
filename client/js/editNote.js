var source = $("#entry-template").html();
var template = Handlebars.compile(source);

Handlebars.registerHelper("setChecked", function (value, importance) {
    if ( value == importance ) {
        return "checked"
    } else {
        return "";
    }
});

function getNoteAndIndexById(id) {
    var found = {};

    notes.filter(function(item, index) {
        if (item.id === id) {
            found.note = item;
            found.index = index;
            return true;
        }

        return false;
    })[0];

    return found;
}

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
    if (notes.length) {
        return Math.max.apply(this, notes.map(function(a) {
            return a.id;
        })) + 1;
    }

    return 1;
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

    if (id) {
        notes[getNoteAndIndexById(id).index] = note;
    } else {
        notes.push(note);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    location.href = "notes.html";
};

var notes = JSON.parse(localStorage.getItem("notes")) || [];
var id = parseInt(location.href.split("?id=")[1]);

$("#editor").html(template(getNoteAndIndexById(id).note));