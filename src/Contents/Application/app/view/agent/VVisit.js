App.view.define('agent.VVist', {
	alias: "widget.TVistes",
	extend: "Ext.Panel",
	initComponent: function()
	{
		this.title="Visites médicales";
		this.layout="vbox";
		this.border=false;
		this.items = [
		];
		this.callParent();
	}
});