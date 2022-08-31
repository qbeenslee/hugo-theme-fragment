/*
Put this file in /static/js/load-photoswipe.js
Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/
*/

/* Show an alert if this js file has been loaded twice */
$(document).ready(function () {
    $("main").find("img").not(".image-compare-item").lazyload();
});

$(document).ready(function () {
    if (typeof window.mediumZoom === undefined || typeof window.mediumZoom === "undefined") {
        return true;
    }
    var zoom = mediumZoom();
    zoom.update({ background: "#000C", margin: 45 });

    var attachHolder = function () {
        // get properties from child a/img/figcaption elements,
        var $img = $(this);
        // ignore any figures where class="no-photoswipe" or "nozoom"
        if (
            $img.hasClass("no-photoswipe") ||
            $img.hasClass("nozoom") ||
            !$img.parent().is("figure") ||
            // Skip special image view framework almost
            ($img.parent().is("div") && !$img.parent().hasClass("content")) ||
            $img.parent().is("a")
        ) {
            if ($img.parent().is("a")) {
                $img.css("cursor", "pointer");
            } else {
                $img.css("cursor", "default");
            }
            return true;
        }
        var $src = $img.attr("href"),
            $title = $img.attr("alt"),
            $msrc = $img.attr("src"),
            $dataOriginal = $img.attr("data-original");

        $(this).css("cursor", "zoom-in");
        if (($msrc == undefined || $msrc.startsWith("data:")) && $dataOriginal != undefined) {
            $msrc = $dataOriginal;
        }
        if ($src == undefined) {
            $src = $msrc;
        }
        zoom.attach(this);
    };
    // for every figure element on the page:
    $("#content img").each(attachHolder);
});
