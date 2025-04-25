console.log("Hello world!");

/* function makeHigherAnchor() {
    const higherAnchor = document.createElement("a");
    higherAnchor.setAttribute("id", "higherAnchor");
    document.body.appendChild(higherAnchor);
} */

$(document).ready(function () {
    //make header
    //make first paragraph
    //make second paragraph
    //make cards
    //make table
    //make list
    //make image
    //make button
    //make form
    //make etc.
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

            /* console.log("Higher has been reached!"); */
            /* if hovered the console will log everytime after too! */
    });
}