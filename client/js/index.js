var notesElement = document.getElementsByClassName("notes")[0];

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];

        /*create elements*/
        var noteElement = document.createElement("div");
        noteElement.className = "note";

        var noteHeaderElement = document.createElement("div");
        noteHeaderElement.className = "header";
        
        var dateElement = document.createElement("p");
        dateElement.className = "date";
        dateElement.innerHTML = note.date;

        var titleElement = document.createElement("p");
        titleElement.className = "title";
        titleElement.innerHTML = note.title;

        var importanceElement = document.createElement("p");
        importanceElement.className = "importance";

        for (var m = 0; m < 5; m++) {
            var starElement = document.createElement("span");
            starElement.className = "icon-star";

            importanceElement.appendChild(starElement);
        }

        var contentAreaElement = document.createElement("div");
        contentAreaElement.className = "content-area";

        var statusElement = document.createElement("span");
        statusElement.className = "status";
        var statusCheckElement = document.createElement("input");
        statusCheckElement.setAttribute("type", "checkbox");
        var statusTextElement = document.createTextNode("Finished");

        var contentElement = document.createElement("textarea");
        contentElement.setAttribute("placeholder", "Write a note...");
        contentElement.className = "content";

        var editElement = document.createElement("button");
        editElement.className = "edit";
        var editLinkElement = document.createElement("a");
        var editLinkTextElement = document.createTextNode("Edit");

        /*append elements*/
        notesElement.appendChild(noteElement);

        noteElement.appendChild(noteHeaderElement);
        noteHeaderElement.appendChild(dateElement);
        noteHeaderElement.appendChild(titleElement);
        noteHeaderElement.appendChild(importanceElement);
        
        noteElement.appendChild(contentAreaElement);

        contentAreaElement.appendChild(statusElement);
        statusElement.appendChild(statusCheckElement);
        statusElement.appendChild(statusTextElement);
        contentAreaElement.appendChild(contentElement);
        contentAreaElement.appendChild(editElement);

        editElement.appendChild(editLinkElement);
        editLinkElement.appendChild(editLinkTextElement);
    }