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
				xtype: "tabpanel",
				width: "100%",
				items: [
				{
					title: "Général",
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
										itemId: "TMedicDate",
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
								itemId: "TPosteActuel",
								fieldLabel: "Poste actuel",
								width: "100%"
							},
							{
								xtype: "textarea",
								itemId: "TPathologies",
								fieldLabel: "Pathologies en cours",
								width: "100%"
							},
							{
								xtype: "textarea",
								itemId: "TTraitements",
								fieldLabel: "Traitements actuels",
								width: "100%"
							},
							{
								xtype: "htmleditor",
								fieldLabel: "Conclusion",
								itemId: "TConclusions",
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
									itemId: "RG",
									border: false,
									height: 120,
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
									itemId: "EFR",
									border: false,
									height: 120,
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
									itemId: "TU",
									border: false,
									customEditors: {
										TU: {
											xtype: 'combo',
											store: {
												fields: ['display', 'value'],
												data: [
													{ 'display': 'négatif', 'value': '0' },
													{ 'display': 'positif', 'value': '1' }
												]
											},
											queryMode: 'local',
											displayField: 'display',
											valueField: 'value',
											editable: false
										}
									},
									height: 70,
									width: "100%",
									source: {
										"Resultat": 'négatif',
										"Rq": ""
									}						
								},
								{
									html: "Test visuel",
									border: false,
									padding: 5
								},
								{
									xtype: "propertygrid",
									itemId: "TV",
									border: false,
									height: 150,
									width: "100%",
									customEditors: {
										Anomalie: {
											xtype: 'combo',
											store: {
												fields: ['display', 'value'],
												data: [
													{ 'display': '-', 'value': '0' },
													{ 'display': 'presbytie', 'value': '1' },
													{ 'display': 'myopie', 'value': '2' }
												]
											},
											queryMode: 'local',
											displayField: 'display',
											valueField: 'value',
											editable: false
										}
									},									
									source: {
										"Oeil droit": 0,
										"Oeil gauche": 0,
										"Correction": false,
										"Rq": "",
										"Anomalie": '-',
										"Astigmatie": false
									}						
								},
								{
									html: "Test auditif",
									border: false,
									padding: 5
								},	
								{
									xtype: "propertygrid",
									itemId: "TA",
									border: false,
									height: 140,
									width: "100%",
									source: {
										"OD": '',
										"OG": '',
										"Correction": false,
										"Rq": ""
									}						
								}								
							]
						}
					]
				},
				{
					title: "Détails",
					layout: "vbox",
					defaults: {
						padding: 15
					},
					items: [
						{
							xtype: "checkboxgroup",
							fieldLabel: "Tabac",
							itemId: "TABAC",
							width: "100%",
							items: [
								{boxLabel: '', name: 'rb0', inputValue: '1'}
							]
						},
						{
							xtype: "textarea",
							width: "100%",
							fieldLabel: "Commentaires",
							height: 100
						},
						{
							xtype: "checkboxgroup",
							fieldLabel: "Alcool",
							itemId: "ALCOOL",
							width: "100%",
							items: [
								{boxLabel: '', name: 'rb1', inputValue: '1'}
							]
						},				
						{
							xtype: "textarea",
							width: "100%",
							fieldLabel: "Commentaires",
							height: 100
						},
						{
							xtype: "checkboxgroup",
							fieldLabel: "Sport",
							itemId: "SPORT",
							width: "100%",
							items: [
								{boxLabel: '', name: 'rb2', inputValue: '1'}
							]
						},				
						{
							xtype: "textarea",
							width: "100%",
							height: 100,
							fieldLabel: "Commentaires"
						},
						{
							xtype: "textarea",
							fieldLabel: "Orientations",
							itemId: "TOrientations",
							width: "100%"
						}					
					]
				}
				]
			}
		];

        this.callParent();
    }
});