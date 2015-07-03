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
				items: [
					{
						html: "yes",
						flex: 1
					},
					{
						xtype: "grid",
						height: "100%",
						width: 250,
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
					}
				]
			}
		];

        this.callParent();
    }
});