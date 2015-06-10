var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

var notes = localStorage.getItem("notes");
notes = JSON.parse(notes);

console.log();

var data = {
    notes: [
        {
            date: "Nächsten Mittwoch",
            title: "CAS FEE Selbststudium/ Projekt Aufgabe erledigen",
            status: "finished",
            content: "HTML für de note App erstelln CSS erstellen für die note App"
        },
        {
            date: "Heute",
            title: "Einkaufen",
            status: "finished",
            content: "Eier, Milch, Butter..."
        },
        {
            date: "Morgen",
            title: "Mama Anrufen",
            status: "Not yet",
            content: "078 616 2293"
        }
    ]};

$("#notes").html(template(data));