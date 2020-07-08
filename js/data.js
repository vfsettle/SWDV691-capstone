$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        person: {
            name: "Francis Foodie",
            type: "Omnivore",
            home: "Sunnyvale, CA",
            quote: "experiencing different cultures through food"
        }
    })
    $("#target").html(rendered);
});