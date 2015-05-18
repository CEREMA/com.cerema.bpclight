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
				itemId: "TCADepartement",
				padding: 5,
				store: App.store.create('App.Etablissements.getAll',{
					autoLoad: true
				}),
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
				padding: 5,
				margin: {
					top: 10,
					left: 40
				},
				width: 350
			}
		];
		
		this.callParent();
		
	}
	
});

        

