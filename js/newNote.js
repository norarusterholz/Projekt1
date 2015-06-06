function starRating() {
    for (i = 0; i < document.getElementsByName('rating').length; i++) {
        if(document.getElementsByName('rating')[i].checked == true) {
            return document.getElementsByName('rating')[i].value;
        }
    }

}

document.getElementById("saveButton").onclick = function() {
    var note = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        finishDate: document.getElementById("finishDate").value,
        importance:  starRating()

    };

    console.log(note);
    console.log(JSON.stringify(note));

    localStorage.setItem("notes", JSON.stringify(note));
    location.href = "index.html";s
};

document.getElementById("cancelButton").onclick = function () {
    location.href = "index.html";
};