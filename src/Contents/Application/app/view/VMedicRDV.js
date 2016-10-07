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