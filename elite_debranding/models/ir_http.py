from odoo import models
from odoo.http import request


class IrHttp(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        result = super().session_info()
        result['server_version'] = '19.0-elite'
        result['server_version_info'] = (19, 0, 0, 'final', 0, 'elite')
        return result
