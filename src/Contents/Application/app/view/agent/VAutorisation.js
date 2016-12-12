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
				header: "Permis",
				dataIndex: "Kcpe",
				renderer: function(value) {
					if (value==1) return "Permis A";
					if (value==2) return "Permis B";
					if (value==3) return "Permis C";
					if (value==4) return "Permis D";
					if (value==5) return "Permis E";
					if (value==6) return "Permis EB";
				}
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