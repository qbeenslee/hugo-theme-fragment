$(document).ready(function() {
    /*
    修改下拉框的显示/隐藏
    */
    var n = function(n) {
        "block" === n.css("display") ? (n.css("display", "none"), $(".dropdown-content").on("mouseleave", null)) : (n.css("display", "block"), 
        $(".dropdown-content").on("mouseleave", function() {
            $(".dropdown-content").css("display", "none");
        }));
    };
    $(".dropdown-content").parent().click(function() {
        n($(this).find(".dropdown-content"));
    });
});