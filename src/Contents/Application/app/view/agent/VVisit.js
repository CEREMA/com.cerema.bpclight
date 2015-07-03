App.view.define('agent.VVisit', {
	alias: "widget.TVisit",
	extend: "Ext.Panel",
	initComponent: function()
	{
		this.title="Dossier médical";
		this.layout="vbox";
		this.border=false;
		this.items = [
		{
			xtype: "htmleditor",
			itemId: "data_medic_gen",
			width: "100%",
			fieldLabel: "Données médicales générales",
			labelAlign: "top",
			height: 250,
			padding: 10
		},
		{
			layout: "hbox",
			width: "100%",
			items: [
				{
					flex: 1
				},
				{
					xtype: "button",
					itemId: "btn_record",
					text: "Enregistrer",
					width: 150
				}
			]
		},
		{
			padding: 10,
			html: "Visites médicales",
			border: false
		},
		{
			xtype: "grid",
			itemId: "grid_medic",
			width: "100%",
			height: 260,
			padding: 10,
			flex: 1,
			tbar: [
				{
					text: "Nouveau",
					iconCls: "ico_new",
					itemId: "medic_new"
				}
			],
			columns: [
				{
					text: "Date",
					dataIndex: "date",
					renderer: Ext.util.Format.dateRenderer('d/m/Y')
				},
				{
					text: "Type",
					dataIndex: "type"
				},
				{
					text: "Catégorie",
					dataIndex: "cat"
				}
			],
			store: App.store.create("App.Medical.getAll")
		}
		];
		this.callParent();
	}
});