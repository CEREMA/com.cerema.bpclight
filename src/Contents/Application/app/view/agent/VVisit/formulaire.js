
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
										fieldValue: "id",
										itemId: "TMedicTypeVisite",
										store: App.store.create("bpclight://medic_type",{autoLoad: true})
									},
									{
										xtype: "combo",
										fieldLabel: "Catégorie",
										labelAlign: "top",
										width: 100,
										displayField: "cat",
										fieldValue: "id",
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
								itemId: "TTraitements",
								fieldLabel: "Traitements actuels",
								width: "100%"
							},
							{
								xtype: "combo",
								fieldLabel: "Tabac",
								itemId: "TTabac",
								fieldValue: "item",
								displayField: "value",
								store: App.store.create({
									fields: [
										"item",
										"value"
									],
									data: [
										{
											item: 0,
											value: "Non fumeur"
										},
										{
											item: 1,
											value: "< 10 cigarettes/jour"
										},
										{
											item: 2,
											value: "> 10 cigarettes/jour"
										},
										{
											item: 3,
											value: "> 1 paquet/jour"
										},
										{
											item: 4,
											value: "Fumeur repenti"
										}
									]
								})
							},
							{
								xtype: "combo",
								fieldLabel: "Alcool",
								itemId: "TAlcool",
								fieldValue: "item",
								displayField: "value",
								store: App.store.create({
									fields: [
										"item",
										"value"
									],
									data: [
										{
											item: 0,
											value: "Pas d'alcool"
										},
										{
											item: 1,
											value: "Occasionnel"
										},
										{
											item: 2,
											value: "1 à 2 verres/jour"
										},
										{
											item: 3,
											value: "> 2 verres/jour"
										}
									]
								})
							},
							{
								xtype: "combo",
								fieldLabel: "Sport",
								itemId: "TSport",
								fieldValue: "item",
								displayField: "value",
								store: App.store.create({
									fields: [
										"item",
										"value"
									],
									data: [
										{
											item: 0,
											value: "Pas de sport"
										},
										{
											item: 1,
											value: "Occasionnel"
										},
										{
											item: 2,
											value: "Régulier"
										},
										{
											item: 3,
											value: "Compétition"
										}
									]
								})
							},
							{
								xtype: "boxselect",
								width: "100%",
								fieldLabel: "Orientations",
								itemId: "orientations",
								fieldValue: "item",
								displayField: "value",
								store: App.store.create({
									fields: [
										"item",
										"value"
									],
									data: [
										{
											item: 1,
											value: "Médecin traitant"
										},
										{
											item: 2,
											value: "Cardiologue"
										},
										{
											item: 3,
											value: "Pneumologue"
										},
										{
											item: 4,
											value: "Dermatologue"
										},
										{
											item: 5,
											value: "ORL"
										},
										{
											item: 6,
											value: "Ophtalmologue"
										},
										{
											item: 7,
											value: "Gynécologue"
										},
										{
											item: 8,
											value: "Autres médecins"
										},
										{
											item: 9,
											value: "Assistance sociale"
										},
										{
											item: 10,
											value: "MDPH"
										}
									]
								})

							},
							{
								xtype: "combo",
								fieldLabel: "Conclusion",
								itemId: "TConclusions",
								width: "100%",	
								store: App.store.create({
									fields: [
										"value",
										"display"
									],
									data: [
									{
										value: 1,
										display: "Compatible"
									},
									{
										value: 2,
										display: "Compatible avec aménagement"
									},
									{
										value: 3,
										display: "Compatible avec restriction"
									},
									{
										value: 4,
										display: "Incompatibilité temporaire"
									},
									{
										value: 5,
										display: "Incompatibilité au poste"
									},
									{
										value: 6,
										display: "Incompatibilité à tous les postes"
									},
									{
										value: 7,
										display: "Pas d'avis ce jour"
									}
									]
								}),
								displayField: "display",
								editable: false,
								fieldValue: "value",
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
											fieldValue: 'value',
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
											fieldValue: 'value',
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
										"ORD": '',
										"ORG": '',
										"Correction": false,
										"Rq": ""
									}						
								}								
							]
						}
					]
				},
				{
					title: "Commentaires",
					layout: "fit",
					defaults: {
						padding: 0
					},
					items: [
						{
							xtype: "htmleditor",
							itemId: "comments",
							border: false,
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