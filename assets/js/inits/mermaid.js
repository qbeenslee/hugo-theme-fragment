// Mermaid

var initMermaid = function() {
    for (var r = ".language-mermaid", i = document.querySelectorAll(r), o = 0; o < i.length; o++) {
        var a = i[o], f = a.innerText || a.textContent;
        var d = document.createElement("div");
        d.innerHTML = '<div class="mermaid">' + f + '</div>';
        a = a.parentElement;
        a.parentNode.insertBefore(d, a.nextSibling);
        a.parentElement.removeChild(a);
    }
};
document.addEventListener("DOMContentLoaded", function(e) {
    initMermaid()
})