/**
 * plugin: search
 * */
// searching box
var searchVisible = !1;
var searchDataLoad = !1;
var searchScriptLoad = !1;

function loadScript(callback) {
    callback = $.isFunction(callback) ? callback : function() {};
    if (searchScriptLoad) {
        callback();
        return;
    }
    var script_url = document.location.origin + "/js/semantic-search.js";
    $.ajaxSetup({
        cache: true
    });
    $.getScript(script_url)
        .done(function(script, textStatus) {
            searchScriptLoad = 1;
            callback();
        })
        .fail(function(jqxhr, settings, exception) {
            console.log("Loading semantic-search.js failed.");
        });
}

function toggleSearch() {
    searchVisible ? $(".search-box").css("display", "") :
        ($(".search-box").css("display", "block"),
            setTimeout(function() {
                return $(".search-box input").focus();
            })), (searchVisible = !searchVisible);

    if (!searchDataLoad) {
        searchDataLoad = 1;
        var source_url = document.location.origin + "/index.json";
        loadScript(function() {
            $.getJSON(source_url, function(data) {
                $(".search-box").search({
                    source: data,
                    searchFields: ["title", "description", "tip", "date", "tags", "categories", "url"],
                    onResultsOpen: function(_this) {
                        setTimeout(function() {
                            $(".search-box").find("img").lazyload();
                        }, 220);
                    },
                });
            });
        });
    }
}

$(document).ready(function() {
    $(document).on("keydown", function(e) {
        e.metaKey && "/" === e.key && !searchVisible && toggleSearch(), "Escape" === e.key && searchVisible && toggleSearch();
    });
});