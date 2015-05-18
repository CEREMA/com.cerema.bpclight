App.view.define('VCreateAgent', {

    extend: 'Ext.Window.window',
	extend: "Ext.window.Window",
    alias: 'widget.createAgent',
    initComponent: function() {
		
		this.width = 800;
        this.height = 660;
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
				html: '<div style="padding:5px">1. Typologie du nouvel agent</div>',
				border: false,
				height: 40,
				width: "100%",
				padding: 5
			},
			{
				xtype: "radiogroup",
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
				html: '<div style="padding:5px">2. Affectation d\'un matricule</div>',
				border: false,
				height: 40,
				width: "100%",
				padding: 5
			}		
		];
		
		this.callParent();
		
	}
	
});

        

