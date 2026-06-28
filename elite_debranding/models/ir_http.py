from odoo import models
from odoo.http import request


class IrHttp(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        result = super().session_info()
        result['server_version'] = '19.0-elite'
        result['server_version_info'] = (19, 0, 0, 'final', 0, 'elite')
        return result

    def webclient_rendering_context(self):
        # Fix RTL: ensure user's language is in env context
        # so QWeb generates RTL CSS bundles for RTL languages
        if request.session.context and request.session.context.get('lang'):
            request.update_env(context={'lang': request.session.context['lang']})
        return super().webclient_rendering_context()
