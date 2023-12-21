import frappe
import requests
from frappe.model.document import Document

class Credenciales(Document):
	pass

def login_service_layer():
    bd,user,password,url = frappe.db.get_value('Credenciales', {'docstatus':1},['base_de_datos','usuario','pass','url'])
    url_login = f"{url}Login"
    headers_login = {
        "Content-Type": "application/json"
    }
    body_login = {
        "CompanyDB": bd,
        "UserName": user,
        "Password": password
    }

    try:
        response = requests.post(url_login, headers=headers_login, json=body_login, verify=False)

        if response.status_code == 200:
            cookies = response.cookies
            session_cookie = cookies.get("B1SESSION")
            route_cookie = cookies.get("ROUTEID")
            if session_cookie and route_cookie:

                return session_cookie, route_cookie
            else:

                return None, None
        else:
            frappe.msgprint(f"Error en el inicio de sesión. Código de estado: {response.status_code}")
            return None, None
    except requests.exceptions.RequestException as e:
        frappe.msgprint(f"EError de conexión al iniciar sesión: {str(e)}")
        return None, None

@frappe.whitelist()
def login_sql():
    server,database,username,password,driver = frappe.db.get_value('Credenciales', {'docstatus':1},['server_sql','database_sql','username_sql','password_sql','driver_sql'])
    connection_string = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}'

    
