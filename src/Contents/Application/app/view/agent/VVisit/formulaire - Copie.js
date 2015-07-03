App.view.define('agent.VVisit.formulaire', {
    extend: "Ext.window.Window",
	alias: "widget.TVisitData",
    initComponent: function() {
		this.title="Dossier médical";
        this.width = 800;
        this.height = 780;

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
				border: false,
				width: "100%",
				bodyStyle: "background-color: transparent",
				items: [
					{
						xtype: "combo",
						fieldLabel: "Type de visite",
						labelAlign: "top",
						width: 200,
						displayField: "typ",
						store: App.store.create({
							fields: [
								"typ"
							],
							data: [
								{
									typ: "Périodique"
								},
								{
									typ: "Reprise"
								},
								{
									typ: "Demande du service"
								},
								{
									typ: "Demande du médecin"
								},
								{
									typ: "Visite quinquennale"
								},
								{
									typ: "Annuelle"								
								}
							]
						})
					},
					{
						xtype: "combo",
						fieldLabel: "Catégorie",
						labelAlign: "top",
						width: 100,
						displayField: "cat",
						margin: {
							left: 10
						},
						store: App.store.create({
							fields: [
								"cat"
							],
							data: [
								{
									cat: "SMS"
								},
								{
									cat: "SMR"
								}
							]						
						})
					},
					{
						xtype: "datefield",
						fieldLabel: "Date",
						margin: {
							left: 10
						},						
						labelAlign: "top",
						width: 100
					}					
				]
			},
			{
				xtype: "textarea",
				fieldLabel: "Poste actuel",
				width: "100%"
			},
			{
				xtype: "textarea",
				fieldLabel: "Pathologies en cours",
				width: "100%"
			},
			{
				xtype: "textarea",
				fieldLabel: "Traitements actuels",
				width: "100%"
			},
			{
				xtype: "grid",
				height: 100,
				width: "100%",
				fieldLabel: "Renseignements",
				columns: [
					{
						text: "Type",
						dataIndex: "type"
					},
					{
						text: "Résultat",
						dataIndex: "value"
					}
				],
				store: App.store.create({
					fields: ["type","value"],
					data: [
					{
						type: "Taille",
						value: ""
					},
					{
						type: "Poids",
						value: ""
					}
					]
				})
			}/*,
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
						width: 80
					},				
					{
						xtype: "textfield",
						fieldLabel: "Poids",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 80
					},
					{
						xtype: "textfield",
						fieldLabel: "TA",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 80
					},
					{
						xtype: "textfield",
						fieldLabel: "Pouls",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 90
					},
					{
						xtype: "textfield",
						fieldLabel: "Test visuel",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 90
					},
					{
						xtype: "textfield",
						fieldLabel: "Test auditif",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 90
					},
					{
						xtype: "textfield",
						fieldLabel: "EFR",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 90
					},
					{
						xtype: "textfield",
						fieldLabel: "Test urinaire",
						labelAlign: "top",
						margin: {
							left: 10
						},
						width: 90
					}
				 ]
			}*/,
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
				xtype: "textarea",
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