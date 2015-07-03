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
						items: [
						
						],
						flex: 1
					},
					{
						xtype: "grid",
						border: false,
						height: "100%",
						width: 205,
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