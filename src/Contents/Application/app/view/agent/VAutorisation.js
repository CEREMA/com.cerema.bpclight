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
			padding: 5,
			labelField: "Permis",
			labelAlign: "top",
			columns: [
			{	
				header: "Permis",
				dataIndex: "NumPie"
			},
			{
				header: "Date",
				dataIndex: "DatPie"
			},
			{
				header: "Signature",
				dataIndex: "SignPie"
			}
			],
			store: App.store.create({fields:[],data:[]})
		}
		];
		this.callParent();
	}
})