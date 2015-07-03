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
            '->', {
                text: 'Quitter',
				itemId: "Exit"
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
						border: false,
						width: 205,
						height: "100%",
						items: [
						
						]
					}
				]
			}
		];

        this.callParent();
    }
});