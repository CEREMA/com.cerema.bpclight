App.view.define('agent.VAutorisation',{
	extend: "Ext.Panel",
	alias: 'widget.TAutorisation',
	initComponent: function()
	{
		this.title = "Autorisations";
		this.border= false;
		this.layout="vbox";
		this.height="100%";
		this.width="100%";
		this.items = [
		{
			xtype: "grid",
			flex: 1,
			width: "100%",
			fieldLabel: "Permis",
			labelAlign: "top",
            plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit : 1
            })],
			columns: [
			{	
				header: "Permis N°",
				dataIndex: "NumPie",
				editor: {
					xtype: 'textfield',
                	allowBlank: false			
				}
			},
			{	
				header: "Type",
				dataIndex: "Kcpe",
				renderer: function(value) {
					if (value==1) return "Permis A";
					if (value==2) return "Permis B";
					if (value==3) return "Permis C";
					if (value==4) return "Permis D";
					if (value==5) return "Permis E";
					if (value==6) return "Permis EB";
				},
				editor: {
                	xtype: 'combo',
					store: App.store.create('bpclight://catperm'),
					displayField: "CatPerm",
					valueField: "Kcpe",
                	allowBlank: false					
				}
			},				
			{
				header: "Date",
				dataIndex: "DatPie",
				width: 150,
				renderer:Ext.util.Format.dateRenderer('d/m/Y'),
				editor: {
                	xtype: 'datetimefield',
                	allowBlank: false					
				}
			},
			{
				header: "Signature",
				dataIndex: "SignPie",
				flex: 1,
				editor: {
					xtype: 'textfield',
                	allowBlank: false			
				}
			}
			],
			store: App.store.create({fields:[],data:[]})
		}
		];
		this.callParent();
	}
})