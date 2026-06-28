from odoo import models, api
from odoo.http import request


class IrHttp(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        result = super().session_info()
        result['server_version'] = '19.0-elite'
        result['server_version_info'] = (19, 0, 0, 'final', 0, 'elite')
        return result

    @classmethod
    def _get_web_editor_context(cls):
        result = super()._get_web_editor_context() if hasattr(super(), '_get_web_editor_context') else {}
        return result


class IrQweb(models.Model):
    _inherit = 'ir.qweb'

    def _prepare_frontend_rendering_context(self, additionnal_values=None):
        values = super()._prepare_frontend_rendering_context(additionnal_values)
        lang_code = self.env.context.get('lang', 'en_US')
        try:
            lang_data = self.env['res.lang']._get_data(code=lang_code)
            if lang_data and lang_data.direction == 'rtl':
                html_data = values.get('html_data', {}) or {}
                html_data['dir'] = 'rtl'
                values['html_data'] = html_data
        except Exception:
            pass
        return values
