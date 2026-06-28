/** @odoo-module **/
import { registry } from "@web/core/registry";

const BRAND = "Elite Tech";

const customTitleService = {
    dependencies: [],
    start() {
        let parts = {};
        function _computeTitle() {
            const elems = Object.values(parts).filter(Boolean);
            document.title = elems.join(" - ") || BRAND;
        }
        return {
            get current() { return document.title; },
            getParts() { return Object.assign({}, parts); },
            setParts(newParts) {
                if (newParts.zopenerp !== undefined) {
                    newParts.zopenerp = BRAND;
                }
                Object.assign(parts, newParts);
                _computeTitle();
            },
        };
    },
};

registry.category("services").add("title", customTitleService, { force: true });
