App.view.define('agent.VRendezVous', {
	alias: "widget.TRendezVous",
	extend: "Ext.Panel",
	initComponent: function()
	{
		this.title="Visites médicales";
		this.layout="vbox";
        this.height="100%";
		this.border=false;
		this.items = [
        {
            html: "<div class=redtext>L’identification d’un poste à risque doit être validée par le conseiller prévention <br>et le médecin de prévention</div>",
            padding: 10,
            border: false
        },
        {
            xtype: "checkboxfield",
            itemId: "posteRisque",
            width: "100%",
            padding: 10,
            boxLabel: 'Agent occupant un poste à risque'
        },
        {
            xtype: "radiofield",
            width: "100%",
            itemId: "dossierdemande",
            padding: 10,
            boxLabel: 'Dossier demandé'
        },
        {
            xtype: "radiofield",
            width: "100%",
            itemId: "dossierrecu",
            padding: 10,
            boxLabel: 'Dossier reçu'
        },
        {
            xtype: "grid",
            width: "100%",
            height: 420,
            tbar: [
            {
                text: "Ajouter",
                itemId: "add_rdv"
            }
            ],
            plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit : 1
            })],
            columns:[
                
            ],
            store: App.store.create({fields:[],data:[]})
        }
		];
		this.callParent();
	}
});