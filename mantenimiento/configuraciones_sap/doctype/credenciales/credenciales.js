// Copyright (c) 2023, CHAPPSA and contributors
// For license information, please see license.txt

frappe.ui.form.on('Credenciales', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Credenciales', {
    refresh: function(frm) {
        frm.add_custom_button(__('Conectar a SQL Server'), function() {
            // Llama a tu función de Python aquí
            frappe.call({
                method: 'mantenimiento.configuraciones_sap.doctype.credenciales.credenciales.login_sql',
                callback: function(response) {
                    // Haz algo después de la llamada, si es necesario
                    if (response.message) {
                        frappe.msgprint(response.message);
						console.log(response.message);
                    }
                }
            });
        });
    }
});
