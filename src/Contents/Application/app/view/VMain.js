App.view.define('VMain', {

    extend: 'Ext.Panel',
	alias : 'widget.mainform',
	border: false,
	
	layout: "border",
	
	items: [
		{
			region: 'north',
			height: 25,
			minHeight: 25,
			border:false,
			baseCls: 'cls-header',
			xtype: "Menu",
			itemId: "MenuPanel",
			menu: [
				{
					text: "Agent",
					menu: [
						{
							text: "Nouveau",
							id: "MNU_AGENT_NEW"
						}
					]
				}
			]		
		},
		{
			region: "center",
			xtype: "TPrincipal"
		}
	]
	
});
