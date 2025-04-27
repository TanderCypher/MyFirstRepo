console.log("Hello world!");

/* function makeHigherAnchor() {
    const higherAnchor = document.createElement("a");
    higherAnchor.setAttribute("id", "higherAnchor");
    document.body.appendChild(higherAnchor);
} */

$(document).ready(function () {
    makeHigherAnchor();
});

function makeHigherAnchor() {
    $("body").append("<a id='higherAnchor'>Touch me!</a>");
    console.log("Higher has been reached!");

    $("#higherAnchor").hover(function () {
        $(this)
            .attr("href", "#Top")
            .attr("class", "position-fixed bottom-0 end-0 m-3")
            .text("Top");
    });
}

$("document").ready(function () {
    $(".list-group-item").click(function () {
        $(this).toggleClass("goButton");
    });
});