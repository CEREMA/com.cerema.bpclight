App.view.define('agent.VVisit.formulaire', {
    extend: "Ext.window.Window",
	alias: "widget.TVisitData",
    initComponent: function() {
		this.title="Dossier médical";
        this.width = 800;
        this.height = 780;

        this.layout = {
            type: 'fit'
        };

        this.bbar = [
            '->', 
			{
                text: 'Quitter',
				itemId: "Exit"
            },
			{
                text: 'Enregistrer',
				itemId: "RecordMe"
            }			
        ];
		
		this.defaults={
			border: false
		};
		
        this.items = [
			{
				layout: "hbox",
				items: [
					{
						layout: "vbox",
						border: false,
						defaults: {
							padding: 15
						},
						items: [
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
									displayField: "type",
									valueField: "id",
									itemId: "TMedicTypeVisite",
									store: App.store.create("bpclight://medic_type",{autoLoad: true})
								},
								{
									xtype: "combo",
									fieldLabel: "Catégorie",
									labelAlign: "top",
									width: 100,
									displayField: "cat",
									valueField: "id",
									itemId: "TMedicCategorie",
									margin: {
										left: 10
									},
									store: App.store.create("bpclight://medic_cat",{autoLoad: true})
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
						],
						flex: 1
					},
					{
						layout: "vbox",
						width: 205,
						border: false,
						height: "100%",
						items: [
							{
								html: "Renseignement généraux",
								border: false,
								padding: 5							
							},
							{
								xtype: "propertygrid",
								border: false,
								height: 150,
								width: "100%",
								source: {
									"Taille": 0,
									"Poids": 0,
									"TA": 0,
									"Pouls": 0
								}						
							},
							{
								html: "Test EFR",
								border: false,
								padding: 5
							},
							{
								xtype: "propertygrid",
								border: false,
								height: 150,
								width: "100%",
								source: {
									"CVF": 0,
									"VEMS": 0,
									"VEMS/CVF": 0,
									"DEMM": 0
								}						
							},
							{
								html: "Test urinaire",
								border: false,
								padding: 5
							},
							{
								xtype: "propertygrid",
								border: false,
								customEditors: {
									TU: {
										xtype: 'combo',
										store: {
											fields: ['display', 'value'],
											data: [
												{ 'display': 'négatif', 'value': 'négatif' },
												{ 'display': 'traces', 'value': 'traces' },
												{ 'display': '1+', 'value': '1+' },
												{ 'display': '2+', 'value': '2+' },
												{ 'display': '3+', 'value': '3+' },
												{ 'display': '4+', 'value': '4+' }
											]
										},
										queryMode: 'local',
										displayField: 'display',
										valueField: 'value',
										editable: false
									}
								},
								height: 60,
								width: "100%",
								source: {
									"TU": 0
								}						
							},
							{
								html: "Test visuel",
								border: false,
								padding: 5
							},
							{
								xtype: "propertygrid",
								border: false,
								height: 100,
								width: "100%",
								source: {
									"Oeil droit": 0,
									"Oeil gauche": 0
								}						
							}							
						]
					}
				]
			}
		];

        this.callParent();
    }
});