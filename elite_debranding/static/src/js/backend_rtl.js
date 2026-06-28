/** @odoo-module **/
import { session } from "@web/session";

if (session && session.user_context && session.user_context.lang === 'ar_001') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    
    const applyBodyRTL = () => {
        if (document.body) {
            document.body.classList.add('o_rtl');
        }
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", applyBodyRTL);
    } else {
        applyBodyRTL();
    }
}
