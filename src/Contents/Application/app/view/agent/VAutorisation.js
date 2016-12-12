App.view.define('agent.VAutorisation',{
	extend: "Ext.Panel",
	alias: 'widget.TAutorisation',
	initComponent: function()
	{
		this.title = "Autorisations";
		this.border= false;
		this.layout="vbox";
		this.items = [
		{
			xtype: "grid",
			height: 200,
			width: "100%",
			padding: 5,
			labelField: "Permis",
			labelAlign: "top",
			columns: [
				
			],
			store: App.store.create('bpclight://agepiece?TypPie=1&kage=614&kcpe=2',{autoLoad:true})
		}
		];
		this.callParent();
	}
})