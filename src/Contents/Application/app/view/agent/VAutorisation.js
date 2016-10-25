App.view.define('agent.VAutorisation',{
	extend: "Ext.Panel",
	alias: 'widget.TAutorisation',
	initComponent: function()
	{
		this.title = "Autorisation";
		this.border= false;
		this.layout="vbox";
		this.items = [
		];
		this.callParent();
	}
})