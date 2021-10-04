function isHighlightable(element) {
    return element.index() != 0 && element.text() != "Not Available";
}

$(document).ready(function() {
    $("tbody tr td").hover(function() {
        if (isHighlightable($(this))) {
            $(this).css("cursor", "pointer");
        }
    })
    $("tbody tr td").click(function() {
        if (isHighlightable($(this))) {
            $(this).toggleClass("highlighted");
        }
    })
});