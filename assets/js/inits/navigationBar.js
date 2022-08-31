/***
 *  Auto header
 */
$(document).ready(function () {
    var banner = $("#banner");
    var delta,
        nav_bar_height,
        scrolled,
        lastScrollTop = 0;

    /**
    修改导航栏样式
    */
    var toggle_header_style = function () {
        if (banner && typeof banner != "undefined" && banner.height() > 0) {
            var scrollY = $(this).scrollTop();
            if (scrollY <= banner.height()) {
                $("#header").removeClass("nav-opaque").addClass("nav-trans");
            } else {
                $("#header").removeClass("nav-trans").addClass("nav-opaque");
            }
        }
    };

    /**
    修改导航栏的可见状态
    */
    var toggle_header_visiable = function () {
        var st;
        st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) {
            return false;
        }
        if (st > lastScrollTop && st > nav_bar_height / 2) {
            $(".auto_header").css("top", "-" + nav_bar_height * 1.2 + "px");
        } else {
            if (st + $(window).height() < $(document).height()) {
                $(".auto_header").css("top", "0");
            }
        }
        return (lastScrollTop = st);
    };

    /**
    修改TOC导航栏可见状态
    */
    var toggle_toc_visiable = function () {
        if (banner && typeof banner != "undefined" && banner.height() > 0) {
            var windowWidth = $(window).width();
            if (windowWidth < 1350) {
                return;
            }
            var scroll_Y = $(this).scrollTop();
            if (scroll_Y <= banner.height()) {
                $("#content-toc-box").hide();
            } else {
                $("#content-toc-box").show();
            }
        }
    };

    if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
        var timeout = setTimeout(function () {
            scrolled = false;
            delta = 10; /*垂直位移触发量*/
            nav_bar_height = $(".auto_header").outerHeight();
            $(document).ready(function () {
                $("body").css("position", "relative");
                return $(".auto_header").css("transition", "top 0.3s ease-in-out").css("top", "0").css("position", "fixed").css("z-index", 1100);
            });
            $(window).scroll(function () {
                toggle_header_style();
                return (scrolled = true);
            });
            setInterval(
                (function (_this) {
                    return function () {
                        if (scrolled) {
                            toggle_header_visiable();
                            toggle_toc_visiable();
                            return (scrolled = false);
                        }
                    };
                })(this),
                250
            );
        }, 1200);

        toggle_header_style();
    }
});
