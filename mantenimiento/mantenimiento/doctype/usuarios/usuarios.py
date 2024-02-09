# Copyright (c) 2024, CHAPPSA and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Usuarios(Document):
    pass

@frappe.whitelist(allow_guest=True)
def actualizar_usuario_frappe(correo,usuario,clave,primer_nombre,rol):
    registro = frappe.get_doc("Usuarios", correo)
    print(registro)
    frappe.db.set_value('User',correo,'username', usuario)
    frappe.db.set_value('User',correo,'new_password', clave) 
    frappe.db.set_value('User',correo,'first_name', primer_nombre)
    frappe.db.set_value('User',correo,'role_profile_name', rol)
