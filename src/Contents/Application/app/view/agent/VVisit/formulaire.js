App.view.define('agent.VVisit.formulaire', {
    extend: "Ext.window.Window",
	alias: "widget.TVisitData",
    initComponent: function() {
		this.title="Visite médicale";
        this.width = 800;
        this.height = 600;

        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
            '->', {
                text: 'Quitter',
				itemId: "Exit"
            }
        ];
		
		this.defaults={
			padding: 10
		};
		
        this.items = [
			{
				layout: "hbox",
				padding: 10,
				border: false,
				items: [
					{
						xtype: "textfield",
						fieldLabel: "Taille"
					},				
					{
						xtype: "textfield",
						fieldLabel: "Poids"
					},				
					{
						xtype: "checkbox",
						fieldLabel: "Tabac"
					},				
					{
						xtype: "checkbox",
						fieldLabel: "Alcool"
					},				
					{
						xtype: "checkbox",
						fieldLabel: "Sport"
					}
				]
			},
			{
				xtype: "htmleditor",
				fieldLabel: "Orientations",
				width: "100%"
			},
			{
				xtype: "htmleditor",
				fieldLabel: "Conclusion",
				width: "100%"
			}
		];

        this.callParent();
    }
});