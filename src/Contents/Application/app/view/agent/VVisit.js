App.view.define('agent.VVisit', {
	alias: "widget.TVisit",
	extend: "Ext.Panel",
	initComponent: function()
	{
		this.title="Visites m�dicales";
		this.layout="vbox";
		this.border=false;
		this.items = [
		];
		this.callParent();
	}
});