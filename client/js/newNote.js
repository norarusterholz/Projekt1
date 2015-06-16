function starRating() {
    for (i = 0; i < document.getElementsByName('rating').length; i++) {
        if(document.getElementsByName('rating')[i].checked == true) {
            return document.getElementsByName('rating')[i].value;
        } else {
            return 0;
        }
    }
}

document.getElementById("saveButton").onclick = function() {
    var notes = JSON.parse(localStorage.getItem("notes")) || [];

    var note = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        finishDate: document.getElementById("finishDate").value,
        importance: starRating(),
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