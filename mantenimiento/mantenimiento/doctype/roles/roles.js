// Copyright (c) 2024, CHAPPSA and contributors
// For license information, please see license.txt


frappe.ui.form.on('Roles', {

    registro_de_actividad: function(frm) {
		if(frm.doc.registro_de_actividad == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Registro de actividad por proceso",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);


					frappe.db.insert({
						"doctype": "Custom DocPerm",
						"parenttype": "DocType",
						"parent": "Area",
						"parentfield": "permissions",
						"creation": now,
						"permlevel": 0,
						"role": frm.doc.rol,
						"select": 1
					})
					frappe.db.insert({
						"doctype": "Custom DocPerm",
						"parenttype": "DocType",
						"parent": "Maquina",
						"parentfield": "permissions",
						"creation": now,
						"permlevel": 0,
						"role": frm.doc.rol,
						"select": 1
					})
					frappe.db.insert({
						"doctype": "Custom DocPerm",
						"parenttype": "DocType",
						"parent": "Turno",
						"parentfield": "permissions",
						"creation": now,
						"permlevel": 0,
						"role": frm.doc.rol,
						"select": 1
					})
					frappe.db.insert({
						"doctype": "Custom DocPerm",
						"parenttype": "DocType",
						"parent": "Empleado",
						"parentfield": "permissions",
						"creation": now,
						"permlevel": 0,
						"role": frm.doc.rol,
						"select": 1
					})
					frm.set_value('name_registro_de_actividad', nuevoName);

					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.registro_de_actividad == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_registro_de_actividad']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_registro_de_actividad;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_registro_de_actividad', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});

frappe.ui.form.on('Roles', {

    fallas: function(frm) {
		if(frm.doc.fallas == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Fallas",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_fallas', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.fallas == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_fallas']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_fallas;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_fallas', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});


frappe.ui.form.on('Roles', {

    turnos: function(frm) {
		if(frm.doc.turnos == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Turno",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_turnos', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.turnos == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_turnos']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_turnos;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_turnos', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});

frappe.ui.form.on('Roles', {

    areas: function(frm) {
		if(frm.doc.areas == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Area",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_areas', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.areas == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_areas']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_areas;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_areas', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});

frappe.ui.form.on('Roles', {

    maquinas: function(frm) {
		if(frm.doc.maquinas == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Maquina",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_maquinas', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.maquinas == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_maquinas']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_maquinas;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_maquinas', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});


frappe.ui.form.on('Roles', {

    empleados: function(frm) {
		if(frm.doc.empleados == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Empleado",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_empleados', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.empleados == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_empleados']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_empleados;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_empleados', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});


frappe.ui.form.on('Roles', {

    usuarios: function(frm) {
		if(frm.doc.usuarios == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Usuarios",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_usuarios', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.usuarios == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_usuarios']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_usuarios;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_usuarios', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});


frappe.ui.form.on('Roles', {

    roles: function(frm) {
		if(frm.doc.roles == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Roles",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_roles', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.roles == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name},
					fieldname: ['name_roles']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_roles;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_roles', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});


frappe.ui.form.on('Roles', {

    desperdicio: function(frm) {
		if(frm.doc.desperdicio == 1)
		{
			var now = frappe.datetime.now_datetime();
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Tipo Desperdicio",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frm.set_value('name_desperdicio', nuevoName);
					frm.save();

				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.desperdicio == 0) 
		{
	

			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name},
					fieldname: ['name_desperdicio']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameOperadores = response.message && response.message.name_desperdicio;
					if (nameOperadores) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameOperadores
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_desperdicio', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});	
		}	
    }
});


frappe.ui.form.on('Roles', {

    captura_de_pesos: function(frm) {
		if(frm.doc.captura_de_pesos == 1)
		{
			var now = frappe.datetime.now_datetime();
			
			frappe.db.insert({
				"doctype": "Custom DocPerm",
				"parenttype": "DocType",
				"parent": "Captura de pesos",
				"parentfield": "permissions",
				"creation": now,
				"permlevel": 0,
				"role": frm.doc.rol,
				"read": 1,
				"write": 1,
				"create": 1,
				"submit": 0,
				"cancel": 0,
				"delete": 1,
				"amend": 0,
				"report": 1,
				"export": 1,
				"share": 1,
				"print": 1,
				"select": 1
			}).then(response => {
				console.log('Respuesta de la inserción:', response);
			
				// Intenta obtener el name del registro recién creado desde la lista permissions
				var nuevoName = response.name;
			
				if (nuevoName) {
					console.log('Name del registro nuevo:', nuevoName);

					frappe.db.insert({
						"doctype": "Custom DocPerm",
						"parenttype": "DocType",
						"parent": "Empleado",
						"parentfield": "permissions",
						"creation": now,
						"permlevel": 0,
						"role": frm.doc.rol,
						"select": 1
					})
					frappe.db.insert({
						"doctype": "Custom DocPerm",
						"parenttype": "DocType",
						"parent": "Maquina",
						"parentfield": "permissions",
						"creation": now,
						"permlevel": 0,
						"role": frm.doc.rol,
						"select": 1
					})
					frappe.db.insert({
						"doctype": "Custom DocPerm",
						"parenttype": "DocType",
						"parent": "Tipo Desperdicio",
						"parentfield": "permissions",
						"creation": now,
						"permlevel": 0,
						"role": frm.doc.rol,
						"select": 1
					})

					frm.set_value('name_captura_de_pesos', nuevoName);
					frm.save();
				
				} else {
					console.warn('No se pudo obtener el name del registro nuevo.');
		
				}
			}).catch(error => {
				console.error('Error durante la inserción:', error);
			});

			
		}
		if (frm.doc.captura_de_pesos == 0) 
		{
	
			frappe.call({
				method: 'frappe.client.get_value',
				args: {
					doctype: 'Roles',
					filters: { 'name': frm.doc.name },
					fieldname: ['name_captura_de_pesos']
				},
				callback: function (response) {
					// Imprime el rol del usuario
					var nameCP = response.message && response.message.name_captura_de_pesos;
					if (nameCP) {
						frappe.call({
							method: 'frappe.client.delete',
							args: {
								"doctype": "Custom DocPerm",
								'name': nameCP
							},
							
							callback: function (delete_response) {
								
								console.log('Registros eliminados exitosamente:', delete_response);
								frm.set_value('name_captura_de_pesos', "");
								frm.save();
						
							
							},
							error: function (delete_error) {
								console.error('Error durante la eliminación:', delete_error);
							}
						});
					} else {
						console.error('Error');
					}
				}
			});
	
			
		}
		
    }
});
