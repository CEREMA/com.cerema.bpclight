App.view.define('VCreateAgent', {

    extend: 'Ext.Window.window',
	extend: "Ext.window.Window",
    alias: 'widget.createAgent',
    initComponent: function() {
		
		this.width = 1024;
        this.height = 660;
        this.title = "Nouvel agent";

        this.layout = {
            type: 'border'
        };

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
		
		];
		
		this.callParent();	
	}
	
});

        

