/** @odoo-module **/
import { localization } from "@web/core/l10n/localization";

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

// 2. Fix RTL direction for Arabic and other RTL languages
function applyDirection() {
    const dir = localization.direction;
    if (dir) {
        document.documentElement.setAttribute("dir", dir);
        document.documentElement.setAttribute("lang", localization.code || "");
        if (dir === "rtl") {
            document.body.classList.add("o_rtl");
        } else {
            document.body.classList.remove("o_rtl");
        }
    }
}

// Apply direction after localization is loaded
setTimeout(applyDirection, 500);
setTimeout(applyDirection, 1500);
setTimeout(applyDirection, 3000);
