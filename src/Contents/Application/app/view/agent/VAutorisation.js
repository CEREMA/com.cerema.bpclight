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
			columns: [
			{	
				header: "Permis",
				dataIndex: "NumPie"
			},
			{
				header: "Date",
				dataIndex: "DatPie",
				width: 150,
				renderer:Ext.util.Format.dateRenderer('d/m/Y')
			},
			{
				header: "Signature",
				dataIndex: "SignPie",
				flex: 1
			}
			],
			store: App.store.create({fields:[],data:[]})
		}
		];
		this.callParent();
	}
})