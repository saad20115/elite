/** @odoo-module **/
import { session } from "@web/session";

if (session.user_context.lang === 'ar_001') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    document.body.classList.add('o_rtl');
}
