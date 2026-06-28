{
    'name': 'Elite Tech Debranding',
    'version': '19.0.1.0.0',
    'category': 'Tools',
    'summary': 'Remove Odoo branding and replace with Elite Tech',
    'description': 'Removes all Odoo branding from backend, frontend, login page, and emails.',
    'author': 'Elite Tech',
    'website': 'https://elitetech.com',
    'license': 'LGPL-3',
    'depends': ['web', 'mail'],
    'data': [
        'views/templates.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'elite_debranding/static/src/js/debranding.js',
            'elite_debranding/static/src/css/debranding.css',
        ],
        'web.assets_frontend': [
            'elite_debranding/static/src/css/debranding.css',
        ],
    },
    'auto_install': False,
    'installable': True,
    'application': False,
}
