App.view.define('VMedicRDV',{
	extend: "Ext.window.Window",
	alias: "widget.vmedicwindow",
    width : 630,
    height : 200,
	itemId: "RDV",
    layout : 'vbox',
	bodyStyle:{"background-color":"white"}, 
	initComponent : function() {
		var _p=this;
		this.bbar = [
			'->',
			{
				xtype: "button",
				text: "OK",
				handler: function()
				{
					/*var request={};
					request.kage=AGENT_KAGE;
					request.nature=Ext4.getCmp('EdVMNature').getValue();
					request.date=Ext4.getCmp('EdVMDate').getValue();
					request.heure=Ext4.getCmp('EdVMHeure').getValue();
					request.resultats=Ext4.getCmp('EdVMResultats').getValue();
					request.commentaires=Ext4.getCmp('EdVMCommentaires').getValue();
					request.kvm=VM_KVM;
					VM.update(request,function(b){
						/*if (b)
						{
							$.gritter.add({
								title: 'BPCLight Notification',
								text: "Enregistrement effectué.",
								image: "",
								sticky: false,
								time: ''
							});		
							Me().StoreVM.load();
							_p.close();
						} else Ext4.MessageBox.alert('BPC Light',"Erreur lors de l'enregistrement");
					});*/
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
				items: [
					{
						xtype: 'combo',
						id:'EdVMNature',
						fieldLabel: 'Nature de la visite',
						labelAlign: 'top',
						padding: 5,
						store: Me().StoreVMNatures,
						editable: false,						
						displayField: 'nature',
						valueField: 'kvm_natures'
					},{
						xtype: 'datefield',
						id:'EdVMDate',
						fieldLabel: 'Date RDV',
						labelAlign:'top',
						padding:5						
					},{
						xtype: 'textfield',
						id:'EdVMHeure',
						fieldLabel: 'Heure RDV',
						labelAlign:'top',
						padding:5						
					},{
						xtype: 'combo',
						fieldLabel: 'Résultats',
						id:'EdVMResultats',
						labelAlign:'top',
						editable: false,
						padding:5,
						store: Me().StoreVMResultats,
						displayField:'resultat',
						valueField:'kvm_resultats'						
					}
				]
		},{
				xtype: 'textfield',
				fieldLabel: 'Commentaires',
				id: 'EdVMCommentaires',
				labelAlign:'top',
				padding: 5,
				flex: 1,
				width: 595
		}];
		this.callParent();
	}
});