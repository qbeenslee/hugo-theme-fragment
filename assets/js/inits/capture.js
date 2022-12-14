/**
 * Capture page, save as image
 * */
 function capturePage() {
    var t = document.querySelector("#save-article-as-img"), e = window.getComputedStyle(t), a = $("#save-article-as-img .page"), n = $(":first-child", a).prop("offsetWidth") + e.paddingLeft + e.paddingRight, o = 0, i = (o = a.each(function() {
        $(this).prop("offsetHeight");
    }), document.createElement("canvas"));
    return i.width = 2 * n, i.height = 2 * o, i.getContext("2d").scale(2, 2), html2canvas(document.querySelector("#save-article-as-img"), {
        canvas: i,
        width: n,
        height: o,
        scale: 2,
        useCORS: !0
    }).then(function(t) {
        var e = t.getContext("2d");
        e.mozImageSmoothingEnabled = !1, e.webkitImageSmoothingEnabled = !1, e.msImageSmoothingEnabled = !1, 
        e.imageSmoothingEnabled = !1;
        var a = t.toDataURL("image/png"), n = document.createElement("a");
        n.href = URL.createObjectURL(dataURLtoBlob(a)), n.download = "".concat(document.title.split("|").map(function(t) {
            return t.trim();
        }).join("-"), ".png"), n.click();
    }), !1;
}

function dataURLtoBlob(t) {
    for (var e = t.split(","), a = e[0].match(/:(.*?);/)[1], n = atob(e[1]), o = n.length, i = new Uint8Array(o); o--; ) i[o] = n.charCodeAt(o);
    return new Blob([ i ], {
        type: a
    });
}