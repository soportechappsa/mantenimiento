# Script Inicial de Python
import frappe

def cantidad_de_personal():
    # Obtener todas las áreas
    areas = frappe.get_all('Area')

    for area in areas:
        # Obtener la cantidad actual de empleados en el área
        cantidad_actual = frappe.get_value('Empleado', {'area': area.name}, 'count(name)')

        # Establecer la cantidad de personal en el Doctype 'Area'
        frappe.db.set_value('Area', area.name, 'cantidad_de_personal', cantidad_actual)
