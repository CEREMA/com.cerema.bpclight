App.view.define('agent.VFormation', {
    alias: "widget.TFormation",
    extend: "Ext.Panel",
    initComponent: function() {
        this.title = "Formation";
        this.layout = "vbox";
        this.border = false;
        this.items = [
            {
                layout: "hbox",
                border: false,
                width: "100%",
                items: [

                    {
                        xtype: "combo",
						editable: false,
                        itemId: "cbo1",
                        margin: {
                            top: 10,
                            left: 10,
							right: 10
                        },
                        fieldLabel: "Type formation prévention sécurité",
                        labelAlign: "top",
                        labelWidth: 200,
                        flex: 1,
                        displayField: "Libelle",
                        valueField: "id_formation",

                        store: App.store.create('App.Formation.getAll',{
							autoLoad: true
						})

                    }
                ]
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: 'Session',
                margin: {
                    top: 10,
                    left: 10

                },
                defaultType: 'radiofield',
                items: [{
                    boxLabel: 'Initial',
                    name: 'topping',
                    inputValue: '1',
                    itemId: 'radiofield1'
                }, {
                    boxLabel: 'Recyclage',
                    name: 'topping',
                    inputValue: '2',
                    checked: true,
                    itemId: 'radiofield2'
                }]
            }, {
                    xtype: "datefield",
                    itemId: "date",
                    labelAlign: "left",
                    margin: {
                        top: 10,
                        left: 10
                    },
                    width: 200,
                    fieldLabel: 'Date'
                }, {
                layout: "hbox",
                border: false,
                width: "100%",
                items: [{
                    xtype: "textfield",
                    itemId: "organisme",
                    margin: {
                        top: 10,
                        left: 10,
						right: 10
                    },
                    flex: 1,
                    labelAlign: "top",
                    fieldLabel: "Organisme avec carte à ajouter",
                    labelWidth: 200
                }, ]
            }, {
                layout: "hbox",
                border: false,
                width: "100%",
				padding: 10,
                items: [{
					flex: 1,
					border: false
				},{
                    xtype: "button",
                    itemId: "ajouter",
                    text: "Ajouter"
                }
                ]
            }, {

                        xtype: "grid",
                        itemId: "gridFormation",
                        margin: {
                            top: 10,
                            bottom: 0,
                            left: 0,
                            right: 0
                        },
                        columns: [{
                            text: "Formations",
                            width: 250,
                            //columnWidth: 0.80,
                            dataIndex: "Libelle" // c'est le nom qu'il y a dans la base.
                        }, {
                            text: "Date",
                            type: "date",
                            renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                            dataIndex: "Date"
                        }, {
                            text: "Session I/R",
                            dataIndex: "Session"
                        }, {
                            text: "Fréquence",
                            dataIndex: "frequence"
                        }, {
                            text: "Nom de l'organisme avec carte à ajouter",
                            dataIndex: "Nom_organisme",
                            flex: 1
                        }],
                        width: "100%",
                        flex: 1,
                        store: App.store.create('App.Formation.getAll2')


                    }


        ];
        this.callParent();
    }
});