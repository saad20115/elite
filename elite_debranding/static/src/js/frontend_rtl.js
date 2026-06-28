/* Elite Tech - Frontend RTL Fix */
(function () {
    "use strict";

    function fixDirection() {
        // Detect RTL from URL path (/ar, /ar/, /ar/page)
        var path = window.location.pathname;
        var urlLang = path.match(/^\/(ar|he|fa|ur)(\/|$)/);

        // Detect RTL from HTML lang attribute
        var htmlLang = document.documentElement.getAttribute("lang") || "";

        // Detect RTL from cookie
        var cookieMatch = document.cookie.match(/frontend_lang=([^;]+)/);
        var cookieLang = cookieMatch ? cookieMatch[1] : "";

        var rtlCodes = ["ar", "he", "fa", "ur"];
        var isRTL = false;

        for (var i = 0; i < rtlCodes.length; i++) {
            if (urlLang ||
                htmlLang.toLowerCase().startsWith(rtlCodes[i]) ||
                cookieLang.toLowerCase().startsWith(rtlCodes[i])) {
                isRTL = true;
                break;
            }
        }

        if (isRTL) {
            document.documentElement.setAttribute("dir", "rtl");
            if (document.body) {
                document.body.classList.add("o_rtl");
            }
        }
    }

    // Run immediately
    fixDirection();

    // Run again after DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fixDirection);
    }
})();
