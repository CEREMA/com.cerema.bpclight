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
				xtype: "htmleditor",
				fieldLabel: "Poste actuel",
				width: "100%"
			},
			{
				xtype: "htmleditor",
				fieldLabel: "Pathologies en cours",
				width: "100%"
			},
			{
				xtype: "htmleditor",
				fieldLabel: "Traitements actuels",
				width: "100%"
			},
			{
				layout: "hbox",
				border: false,
				width: "100%",
				bodyStyle: "background-color: transparent",
				items: [
					{
						xtype: "textfield",
						fieldLabel: "Taille",
						labelAlign: "top",
						width: 100
					},				
					{
						xtype: "textfield",
						fieldLabel: "Poids",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 100
					},
					{
						xtype: "textfield",
						fieldLabel: "Tension Artérielle",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 100
					},
					{
						xtype: "textfield",
						fieldLabel: "Pouls",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 100
					},
					{
						xtype: "textfield",
						fieldLabel: "Test visuel",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 100
					},
					{
						xtype: "textfield",
						fieldLabel: "Test auditif",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 100
					},
					{
						xtype: "textfield",
						fieldLabel: "EFR",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 100
					},
					{
						xtype: "textfield",
						fieldLabel: "Test urinaire",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 100
					}
				 ]
			},
			{
				xtype: "checkboxgroup",
				fieldLabel: "Divers",
				width: 400,
				items: [
					{boxLabel: 'Tabac', name: 'rb', inputValue: '1'},
					{boxLabel: 'Alcool', name: 'rb', inputValue: '1'},
					{boxLabel: 'Sport', name: 'rb', inputValue: '1'}
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