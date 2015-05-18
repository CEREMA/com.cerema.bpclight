App.view.define('VCreateAgent', {

    extend: 'Ext.Window.window',
	extend: "Ext.window.Window",
    alias: 'widget.createAgent',
    initComponent: function() {
		
		this.width = 430;
        this.height = 560;
        this.title = "Nouvel agent";

        this.layout = {
            type: 'vbox'
        };
		
		this.bodyStyle="background-color: white";

        this.bbar = [
            '->', {
                text: 'Enregistrer',
				itemId: "Record"
            }, {
                text: 'Quitter',
				itemId: "Exit"
            }
        ];		
        
		this.defaults = {
            split: true
        };	
		
		this.items = [
			{
				html: '<div style="font-weight: bold;padding:5px">1. Typologie du nouvel agent</div>',
				border: false,
				height: 40,
				width: "100%",
				padding: 5
			},
			{
				xtype: "radiogroup",
				itemId: "rdiona",
				vertical: true,
				columns: 1,
				height: 80,
				padding: 0,
				margin: {
					left: 40
				},
				width: "100%",
				items: [
					{boxLabel: 'Stagiaire', name: 'rb', inputValue: '1', checked: true},
					{boxLabel: 'Vacataire', name: 'rb', inputValue: '2'},
					{boxLabel: 'Titulaire', name: 'rb', inputValue: '3'}
				]
			},
			{
				xtype: 'ux-searchbox',
				width: 200,
				triggerCls : Ext.baseCSSPrefix + 'form-search-trigger',
				itemId: 'searchtpt',
				hidden: true,
				labelAlign: "top",
				fieldLabel: "Recherche Temptation",				
				padding:5,
				margin: {
					left: 40
				},
				width: 350
			},
			{
				html: '<div style="font-weight: bold;margin-top:10px;padding:5px">2. Renseignements</div>',
				border: false,
				height: 40,
				width: "100%",
				padding: 5
			},
			{
				xtype: "textfield",
				fieldLabel: "Nom",
				itemId: "TCANom",
				labelAlign: "top",
				padding: 5,
				margin: {
					left: 40
				},
				width: 350
			},
			{
				xtype: "textfield",
				fieldLabel: "Prénom",
				itemId: "TCAPrenom",
				labelAlign: "top",
				padding: 5,
				margin: {
					top: 10,
					left: 40
				},
				width: 350
			},
			{
				xtype: "combo",
				fieldLabel: "Etablissement",
				labelAlign: "top",
				itemId: "TCAEtablissement",
				padding: 5,
				store: App.store.create('App.Etablissements.getAll'),
				displayField: "LibEtsC",
				valueField: "Kets",				
				margin: {
					top: 10,
					left: 40
				},
				width: 350
			},
			{
				xtype: "combo",
				fieldLabel: "Département",
				itemId: "TCADepartement",
				labelAlign: "top",
				padding: 5,
				store: App.store.create('App.Departements.getAll'),	
				displayField: "LibUnic",
				valueField: "Kuni",				
				margin: {
					top: 10,
					left: 40
				},
				width: 350
			},
			{
				xtype: "combo",
				fieldLabel: "Service",
				labelAlign: "top",
				itemId: "TCAService",
				store: App.store.create('App.Services.getAll'),
				displayField: "LibSubC",
				valueField: "Ksub",					
				padding: 5,
				margin: {
					top: 10,
					left: 40
				},
				width: 350
			},
			{
				layout: "hbox",
				padding: 5,
				items: [
					{
						xtype: "combo",
						fieldLabel: "CatGrad",
						labelAlign: "top",
						itemId: "TCACadGrad",
						store: App.store.create('App.Categories.getAll'),
						displayField: "LibCgr",
						valueField: "Kcgr",
						padding: 5,
						margin: {
							top: 10,
							left: 40
						},
						width: 150
					},
					{
						xtype: "combo",
						fieldLabel: "Grades",
						labelAlign: "top",
						itemId: "TCAGrade",
						displayField: "LibGra",
						valueField: "Kgra",
						store: App.store.create('App.Categories.getGrades'),
						padding: 5,
						margin: {
							top: 10,
							left: 40
						},
						width: 350
					}				
				]
			}
		];
		
		this.callParent();
		
	}
	
});

        

