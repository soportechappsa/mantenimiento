// Copyright (c) 2024, CHAPPSA and contributors
// For license information, please see license.txt


frappe.ui.form.on('Usuarios', {
    refresh: function(frm) {
        // Establecer la fecha actual al cargar el formulario
        // Agregar un botón que abrirá el cuadro de diálogo emergente
        frm.add_custom_button(__('Designar Areas'), function() {
            // Realizar una solicitud para obtener las opciones del Doctype "Area"
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'Area',
                    fields: ['nombre']
                },
                callback: function(response) {
                    if (response.message) {
                        var areaOptions = response.message.map(function(area) {
                            return area.nombre;
                        });

                        // Crear el cuadro de diálogo emergente
                        var dialog = new frappe.ui.Dialog({
                            title: __('Seleccionar Areas'),
                            fields: [
                                {
                                    label: __('Areas disponibles'),
                                    fieldname: 'areas_seleccionadas',
                                    fieldtype: 'MultiSelect',
                                    options: areaOptions,
                                    reqd: 1  // Hace que el campo sea obligatorio
                                }
                            ],
                            primary_action_label: __('Aceptar'),
                            primary_action: function() {
                                // Obtener el valor del campo de texto
                                var valor_campo = dialog.get_value('areas_seleccionadas');
                                
                                // Asignar el valor del campo de texto al campo 'area' del formulario principal
                                frm.set_value('area', valor_campo);

                                // Ocultar el cuadro de diálogo emergente
                                dialog.hide();
                            },
                            secondary_action_label: __('Cancelar'),
                            secondary_action: function() {
                                // Acciones a realizar al hacer clic en "Cancelar" en el cuadro de diálogo
                                dialog.hide();
                            }
                        });

                        // Mostrar el cuadro de diálogo emergente
                        dialog.show();
                    }
                }
            });
        }).css({
            'background-color': '#FFAF00',  
            'color': 'white'
          });
    }
});


frappe.ui.form.on('Usuarios', {
    refresh: function(frm) {
        // Agregar un botón para eliminar el documento
        frm.add_custom_button(__('Eliminar Usuario'), function() {
			frappe.set_route("List", frm.doctype);
            eliminarDocumento(frm);
        }).css({
            'background-color': '#F95F53',  // Código de color rojo
            'color': 'white'
          });
        if(frm.doc.__islocal){
            frm.add_custom_button(__('Insertar Usuario'), function() {
                insertarDocumento(frm);
                frm.save()
    
            }).css({
                'background-color': '#1F3BB3',  // Código de color rojo
                'color': 'white'
              });
        }
        if(!frm.doc.__islocal){
        frm.add_custom_button(__('Actualizar'), function() {
            actualizarUsuario(frm);
			frm.save();
            
        }).css({
            'background-color': '#008000',  
            'color': 'white'
          });
        }
    }
});

function eliminarDocumento(frm) {


	frappe.call({
		method: 'frappe.client.set_value',
		args: {
			'doctype': 'User',
			'name': frm.doc.email,
			'fieldname': 'enabled',  // Nombre del campo que deseas actualizar
			'value': 0  // Valor que deseas establecer en el campo
		},
		callback: function(set_response) {
			console.log('Campo actualizado exitosamente:', set_response);
		},
		error: function(set_error) {
			console.error('Error durante la actualización del campo:', set_error);
		}
	});
	
            frappe.call({
                method: 'frappe.client.delete',
                args: {
                    'doctype': frm.doctype,
                    'name': frm.docname
                },
                callback: function(response) {
                    if (response.message) {
                        // Redirigir a la vista de lista después de eliminar el documento
                        
                    }
                }
            });
}
function insertarDocumento(frm) {

    var now = frappe.datetime.now_datetime();
    frappe.db.insert({
        "doctype": "User",
        "creation": now,
        "email": frm.doc.email,
        "new_password": frm.doc.clave,
        "username": frm.doc.usuario,
        "first_name": frm.doc.primer_nombre,
        "role_profile_name": frm.doc.rol,
        "module_profile": "Supervisor AMD"
    }).then(response => {
        console.log('Respuesta de la inserción:', response);
        // Intenta obtener el name del registro recién creado desde la lista permissions
    }).catch(error => {
        console.error('Error durante la inserción:', error);
    });
				

}

function actualizarUsuario(frm) {

    frappe.call({
		method: 'mantenimiento.mantenimiento.doctype.usuarios.usuarios.actualizar_usuario_frappe',
		args: {
			correo:  frm.doc.email,
            usuario: frm.doc.usuario,
            clave: frm.doc.clave,
            primer_nombre : frm.doc.primer_nombre,
            rol: frm.doc.rol
		},
		callback: function(response) {
			console.log('Usuario actualizado correctamente:', response);
		},
		error: function(error) {
			console.error('Error durante la actualización del campo:', error);
		}
	});

}