$(document).ready(function() {
    if (-1 !== $("meta[property='theme-config']").attr("content").trim().indexOf("protectImage")) {
        var imgs = $("img");
        imgs.on("contextmenu", function() {
            return !1;
        });
        imgs.on("dragstart", function() {
            return !1;
        });
    }
});
