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
			itemId: "",
			width: "100%",
			fieldLabel: "Données médicales générales"
			labelAlign: "top",
			height: 250
		}
		];
		this.callParent();
	}
});