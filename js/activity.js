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
        var content = $(this).text();
        var colIndex = $(this).index();
        var colName = $("th:eq("+ colIndex +")").text();

        if (isHighlightable($(this))) {
            $(this).toggleClass("highlighted");
            
            if ($(this).hasClass("highlighted")) {
                $('#displaySelected').css("visibility" ,"visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>" + content + " at " + colName + "</p>");
            } else {
               $('#result p:contains('+ content +')').remove();
               if ($('#result').has('p').length == false) {
                   $('#displaySelected').css("visibility", "hidden");
                   $('#displaySelected').css("margin-top", "0");
               }
            }
        }
    })
});