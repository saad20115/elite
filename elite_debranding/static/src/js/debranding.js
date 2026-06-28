/** @odoo-module **/

const BRAND = "Elite Tech";

// 1. Replace "Odoo" in browser tab title
function replaceTitle() {
    if (document.title && document.title.includes("Odoo")) {
        document.title = document.title.replace(/Odoo/g, BRAND);
    }
}

const titleEl = document.querySelector("title");
if (titleEl) {
    new MutationObserver(replaceTitle).observe(
        titleEl, { childList: true, characterData: true, subtree: true }
    );
}
replaceTitle();
setInterval(replaceTitle, 2000);

// 2. Fix RTL: read direction from session info (available before services start)
function applyRTL() {
    try {
        const sessionInfo = odoo.__session_info__;
        if (sessionInfo && sessionInfo.bundle_params && sessionInfo.bundle_params.lang) {
            const lang = sessionInfo.bundle_params.lang;
            const rtlLangs = ["ar", "he", "fa", "ur"];
            const isRTL = rtlLangs.some(function(l) { return lang.startsWith(l); });
            if (isRTL) {
                document.documentElement.setAttribute("dir", "rtl");
                document.body.classList.add("o_rtl");
            }
        }
    } catch (e) {
        // Fallback: check HTML dir attribute set by server
        if (document.documentElement.getAttribute("dir") === "rtl") {
            document.body.classList.add("o_rtl");
        }
    }
}

// Run after DOM is ready and after body loads
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyRTL);
} else {
    applyRTL();
}
setTimeout(applyRTL, 1000);
