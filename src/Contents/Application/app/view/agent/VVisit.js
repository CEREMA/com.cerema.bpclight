App.view.define('agent.VVisit', {
	alias: "widget.TVisit",
	extend: "Ext.Panel",
	initComponent: function()
	{
		this.title="Visites médicales";
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
			xtype: "grid",
			itemId: "grid_medic",
			width: "100%",
			fieldLabel: "Visites médicales",
			labelAlign: "top",
			flex: 1,
			padding: 10,
			tbar: [
				{
				
				}
			],
			columns: [
				{
					text: "Date"
				},
				{
					text: "Type"
				},
				{
					text: "Catégorie"
				}
			],
			store: App.store.create({
				fields: [],
				data: []
			})
		}
		];
		this.callParent();
	}
});