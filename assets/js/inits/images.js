/*
Put this file in /static/js/load-photoswipe.js
Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/
*/

/* Show an alert if this js file has been loaded twice */
$(document).ready(function() {
    // $("main").find("img").not(".image-compare-item").lazyload();
    //
    // lazyload();
    var lazy_imgs = document.querySelectorAll("img");
    lazyload(lazy_imgs);
});

/**
 * Image viewer loading
 */
$(document).ready(function() {
    var imageHolder = function(image) {
        // get properties from child a/img/figcaption elements,
        // ignore any figures where class="no-photoswipe" or "nozoom"
        $img = $(image);
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
            return false;
        }
        var $src = $img.attr("href"),
            $title = $img.attr("alt"),
            $msrc = $img.attr("src"),
            $dataOriginal = $img.attr("data-src");

        $img.css("cursor", "zoom-in");
        if (($msrc == undefined || $msrc.startsWith("data:")) && $dataOriginal != undefined) {
            $msrc = $dataOriginal;
        }
        if ($src == undefined) {
            $src = $msrc;
        }
        return true;
    };

    new Viewer(document.getElementById("content"), {
        filter: function(image) {
            return imageHolder(image);
        },
        loading: false,
        navbar: 0,
        toolbar: 0
    });
});
