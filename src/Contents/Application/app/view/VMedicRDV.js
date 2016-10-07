App.view.define('VMedicRDV',{
	extend: "Ext.window.Window",
	alias: "widget.vmedicwindow",
    width : 630,
    height : 250,
	itemId: "RDV",
    layout : 'vbox',
	title: "Rendez vous",
	bodyStyle:{"background-color":"white"}, 
	initComponent : function() {
		var _p=this;
		this.bbar = [
			'->',
			{
				xtype: "button",
				text: "OK",
				handler: function(me)
				{
					var request={
						kage: me.up('window').dta.kage,
						nature: Ext4.getCmp('EdVMNature').getValue(),
						StartDate: Ext4.getCmp('EdVMDate').getValue(),
						resultat: Ext4.getCmp('EdVMResultats').getValue(),
						commentaires: Ext4.getCmp('EdVMCommentaires').getValue()
					};
					//if (me.up('window').dta.)
					
				}
			},{
				xtype: "button",
				text: "Annuler",
				handler: function()
				{
					//Ext.getCmp('VMedicWindow').close();
				}
			}
		];
		this.items = [
		{
				layout: 'hbox',
				border: false,
				width: "100%",
				items: [
					{
						xtype: 'combo',
						itemId:'EdVMNature',
						fieldLabel: 'Nature de la visite',
						flex: 1,
						labelAlign: 'top',
						padding: 5,
						store: App.store.create("bpclight://vm_natures",{autoLoad:true}),
						editable: false,						
						displayField: 'nature',
						valueField: 'kvm_natures'
					},{
						xtype: 'datetimefield',
						itemId:'EdVMDate',
						width: 140,
						fieldLabel: 'Date RDV',
						labelAlign:'top',
						padding:5						
					},{
						xtype: 'combo',
						fieldLabel: 'Résultats',
						itemId:'EdVMResultats',
						flex: 1,
						labelAlign:'top',
						editable: false,
						padding:5,
						flex: 1,
						store: App.store.create("bpclight://vm_resultats",{autoLoad:true}),
						displayField:'resultat',
						valueField:'kvm_resultats'						
					}
				]
		},{
				xtype: 'textarea',
				fieldLabel: 'Commentaires',
				itemId: 'EdVMCommentaires',
				labelAlign:'top',
				padding: 5,
				flex: 1,
				width: "100%"
		}];
		this.callParent();
	}
});