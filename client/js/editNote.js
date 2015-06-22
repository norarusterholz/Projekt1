function getStarRating() {
    for (var i = 0; i < document.getElementsByName('rating').length; i++) {
        if (document.getElementsByName('rating')[i].checked == true) {
            return parseInt(document.getElementsByName('rating')[i].value);
        }
    }

    // No stars were selected
    return 0;
}

function generateId(notes) {
    return Math.max.apply(this, notes.map(function(a) {
        return a.id;
    })) + 1;
}

document.getElementById("saveButton").onclick = function() {
    var notes = JSON.parse(localStorage.getItem("notes")) || [];

    var note = {
        id: generateId(notes),
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

document.getElementById("cancelButton").onclick = function () {
    location.href = "notes.html";
};