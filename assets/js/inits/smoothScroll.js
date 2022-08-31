$(document).ready(function() {
    $('#content-toc-tree a[href*="#"]').click(function(e) {
        e.preventDefault(), $.smoothScroll({
            offset: -60,
            scrollTarget: decodeURI(this.hash),
            speed: 500
        });
    }), $('#banner a[href*="#"]').click(function(e) {
        e.preventDefault(), $.smoothScroll({
            offset: 0,
            scrollTarget: decodeURI(this.hash),
            speed: 500
        });
    });
});