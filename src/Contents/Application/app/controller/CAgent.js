function parseJsonDate(jsonDate) {
    var offset = new Date().getTimezoneOffset() * 60000;
    var parts = /\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(jsonDate);
    
    if (parts[2] == undefined) 
      parts[2] = 0;
    
    if (parts[3] == undefined) 
      parts[3] = 0;
    
    return new Date(+parts[1] + offset + parts[2]*3600000 + parts[3]*60000);
};

App.controller.define('CAgent', {

	views: [
		"VForm1",
		"VShowFormation",
		"agent.VSidePanel",
		"agent.VAgent",
		"agent.VSituation",
		"agent.VAutorisation",
		"agent.VFormation",
		"agent.VVisit",
		"agent.VVisit.formulaire"
	],
	
	models: [

	],
	
	init: function()
	{
		this.control({		
			"menu>menuitem": {
				click: "Menu_onclick"
			},
			/*
			TForm1
			*/		
			"TForm1": {
				show: "TForm1_onshow"
			},
			"TForm1 button#Record": {
				click: "record_onclick"
			},
			"TForm1 combo#TCat": {
				select: "TCat_onchange"
			},
			"TForm1 button#Exit": {
				click: "close_agent"
			},
			"TForm1 textfield#TMelA": {
				render: "TMelA_onclick"
			},
			"TForm1 textfield#CodePostal": {
				render: "TCodePostal_onclick",
				keyup: "TCodePostal_onchange"
			},
			"TForm1 combo#VilleCBO": {
				select: "VilleCBO_onclick"
			},
			"TForm1 button#RoleAdd": {
				click: "RoleAdd_click"
			},
			"TForm1 grid#roles": {
				itemcontextmenu: "Roles_onContextMenu"
			},
			/*
			TSidePanel
			*/
			"TSidePanel combo#TEtablissement": {
				select: "TEtablissement_onchange"
			},
			"TSidePanel panel#PanelPhoto" : {
				load: "photo_onload"
			},
			"TSidePanel combo#TDepartement": {
				select: "TDepartement_onchange"
			},
			/*
			TSituation
			*/
			"TSituation": {
				show: "TSituation_onshow"
			},
			"TSituation combo#position": {
				select: "position_onchange"
			},
			"TSituation button#situation_cancel": {
				click: "situation_cancel_onclick"
			},
			"TSituation button#Add": {
				click: "situation_add"
			},
			"TSituation button#situation_ok": {
				click: "situation_record"
			},
			"TSituation combo#TIEtablissement": {
				select: "TIEtablissement_onchange"
			},			
			"TSituation combo#TIDepartement": {
				select: "TIDepartement_onchange"
			},
			"TSituation grid#gridPositions": {
				itemcontextmenu: "Positions_onContextMenu",
				itemclick: "Positions_click"
			},
			/*
			TFormation
			*/
			"TFormation" : {
				show: "TFormation_onShow"
			},
			"TFormation panel#organisme": {
				load: "formation_upload"
			},			
			"TFormation grid#gridFormation": {
				itemcontextmenu: "Formation_onContextMenu",
				itemdblclick: "formation_download"
			},
			"TFormation button#ajouter": {
				click: "ajouter_onclick"
			},
			/*
			TShowFormation
			*/
			"TShowFormation button#Exit": {
				click: "formation_exit"
			},
			/*
			TVisit
			*/
			"TVisit": {
				show: "Visit_onShow"
			},
			"TVisit button#medic_new": {
				click: "VisitDataOpen"
			},
			"TVisit button#btn_record": {
				click: "Visit_recordgen"
			},
			"TVisit grid#grid_medic": {
				itemdblclick: "grid_medic_click"
			},
			/*
			TVisitData
			*/
			"TVisitData": {
				show: "visitdata_onshow"
			},
			"TVisitData toolbar #Exit": {
				click: "Visit_onExit"
			},
			"TVisitData toolbar #RecordMe": {
				click: "Visit_onRecord"
			}			
		});
	},
	Visit_onRecord: function(p)
	{
		alert('x');
		var gridvalues = App.get( 'TVisitData propertygrid#RG' ).getSource();
		console.log(gridValues);
		var doss={
		
		};
	},
	visitdata_onshow: function(p)
	{
		if (p._id) {
			App.Medical.getDossierById(p._id,function(o) {
				console.log(o);
				console.log(App.get('TVisitData combo#TMedicTypeVisite'));
				App.get('TVisitData combo#TMedicTypeVisite').setValue(o[0].type);
				App.get('TVisitData combo#TMedicCategorie').setValue(o[0].cat);
				App.get('TVisitData datefield#TMedicDate').setValue(o[0].date.toDate());
			});
		} else alert('creation');
	},
	grid_medic_click: function(me,s)
	{
		App.view.create('agent.VVisit.formulaire',{
			_id: s.data.id 
		}).show();
	},
	Visit_onExit: function(p)
	{
		p.up('TVisitData').close();
	},
	Visit_recordgen: function(p)
	{
		var o={
			kage: App.get('TForm1').agent.Kage,
			libelle: App.get('TVisit htmleditor#data_medic_gen').getValue()
		};
		App.Medical.setLibelle(o,function(response) {
			App.notify('Changement enregistré');
		});
	},
	Visit_onShow: function(p)
	{
		App.Medical.getLibelle(p.up('TForm1').agent.Kage,function(response) {
			if (response.data.length>0) App.get('TVisit htmleditor#data_medic_gen').setValue(response.data[0].libelle);
			else App.get('TVisit htmleditor#data_medic_gen').setValue('');
		});
		App.get('TVisit grid#grid_medic').getStore().getProxy().extraParams.kage=p.up('TForm1').agent.Kage;
		App.get('TVisit grid#grid_medic').getStore().load();
	},
	VisitDataOpen: function()
	{
		App.view.create('agent.VVisit.formulaire',{
		
		}).show();
	},
	Positions_click: function(p, record, item, index, e, eOpts)
	{
		App.Agents.getMyPosition(record.data.Keta,function(err,response) {		
			// on reset les panels
			App.get(p.up('TForm1'),'panel#situation_header').hide();
			App.get(p.up('TForm1'),'panel#situation_cancel_ok').hide();
			App.get(p.up('TForm1'),'grid#gridPositions').show();
			App.get(p.up('TForm1'),'panel#mutation_arrivee').hide();	
			App.get(p.up('TSituation'),'panel#CPACFARetraite').hide();			
			App.get(p.up('TForm1'),'textarea#Motif').hide();	
			App.get(p.up('TForm1'),'panel#TPanelI').hide();
			App.get(p.up('TSituation'),'textfield#Motif').setValue('');
			
			
			App.get(p.up('TForm1'),'combo#position').setValue('');
			App.get(p.up('TForm1'),'datefield#datEta').setValue('');
			App.get(p.up('TForm1'),'textarea#Motif').setValue('');
			App.get(p.up('TForm1'),'combo#MotifCBO').setValue('');
			App.get(p.up('TForm1'),'combo#TIEtablissement').setValue('');
			App.get(p.up('TForm1'),'combo#TIDepartement').setValue('');
			App.get(p.up('TForm1'),'combo#TIService').setValue('');
			App.get(p.up('TForm1'),'panel#TPanelI').hide();
			App.get(p.up('TForm1'),'datefield#TDateCFA').setValue('');
			App.get(p.up('TForm1'),'datefield#TDateCPA').setValue('');
			App.get(p.up('TForm1'),'datefield#TDateRetraite').setValue('');		
			
			App.get(p.up('TForm1'),'combo#position').setReadOnly(true);
			App.get(p.up('TForm1'),'datefield#datEta').setReadOnly(true);
			App.get(p.up('TForm1'),'textarea#Motif').setReadOnly(true);
			App.get(p.up('TForm1'),'combo#MotifCBO').setReadOnly(true);
			App.get(p.up('TForm1'),'combo#TIEtablissement').setReadOnly(true);
			App.get(p.up('TForm1'),'combo#TIDepartement').setReadOnly(true);
			App.get(p.up('TForm1'),'combo#TIService').setReadOnly(true);
			App.get(p.up('TForm1'),'datefield#TDateCFA').setReadOnly(true);
			App.get(p.up('TForm1'),'datefield#TDateCPA').setReadOnly(true);
			App.get(p.up('TForm1'),'datefield#TDateRetraite').setReadOnly(true);		
			
			
			console.log(response);
			var record=response.result.data;
			// Mutation arrivée		
			if ((record[0].Kpst==1) || (record[0].Kpst==3)) {
				App.get(p.up('TSituation'),'panel#mutation_arrivee').show();
				App.get(p.up('TForm1'),'panel#TPanelI').show();
				if (record[0].Kpst==1) {
					App.get(p.up('TSituation'),'combo#MotifCBO').show();
					App.get(p.up('TSituation'),'combo#MotifCBO').setValue(response.result.data[0].Arrivee*1);
					App.get(p.up('TSituation'),'combo#TIEtablissement').setValue(response.result.data[0].Ketsnew);
					App.get(p.up('TSituation'),'combo#TIDepartement').setValue(response.result.data[0].Kuninew);
					App.get(p.up('TSituation'),'combo#TIService').setValue(response.result.data[0].Ksubnew);
					App.get(p.up('TSituation'),'textfield#Motif').hide();
					App.get(p.up('TSituation'),'panel#situation_separator').show();
				} else {
					App.get(p.up('TSituation'),'combo#MotifCBO').hide();
					App.get(p.up('TSituation'),'combo#TIEtablissement').setValue(response.result.data[0].Ketsnew);
					App.get(p.up('TSituation'),'combo#TIDepartement').setValue(response.result.data[0].Kuninew);
					App.get(p.up('TSituation'),'combo#TIService').setValue(response.result.data[0].Ksubnew);
					App.get(p.up('TSituation'),'textfield#Motif').show();
					App.get(p.up('TSituation'),'textfield#Motif').setValue(response.result.data[0].Arrivee);
					App.get(p.up('TSituation'),'panel#situation_separator').hide();
				}
			};
			// Mutation départ & absence longue
			if ((record[0].Kpst==4) || (record[0].Kpst==5)) {
				App.get(p.up('TSituation'),'textarea#Motif').show();
				App.get(p.up('TSituation'),'textarea#Motif').setValue(response.result.data[0].Motif);
			};
			// CPA + CFA + Retraite
			if ((record[0].Kpst==8) || (record[0].Kpst==7) || (record[0].Kpst==14)) {
				App.get(p.up('TSituation'),'panel#CPACFARetraite').show();
				App.get(p.up('TSituation'),'datefield#TDateCFA').hide();
				App.get(p.up('TSituation'),'datefield#TDateCPA').hide();
				App.get(p.up('TSituation'),'datefield#TDateCFA').setValue(record[0].DatCFA.toDate());
				App.get(p.up('TSituation'),'datefield#TDateCPA').setValue(record[0].DatCPA.toDate());
				App.get(p.up('TSituation'),'datefield#TDateRetraite').setValue(record[0].DatRet.toDate());
				
				if (record[0].Kpst==8 || record[0].Kpst==14) App.get(p.up('TSituation'),'datefield#TDateCFA').show();
				if (record[0].Kpst==7 || record[0].Kpst==14) App.get(p.up('TSituation'),'datefield#TDateCPA').show();
			}
		
		});
	},
	formation_exit: function(p)
	{
		p.up('window').close();
	},
	formation_download: function(p, record, item, index, e, eOpts)
	{
		App.view.create('VShowFormation',{
			title: record.data.Libelle+' ('+record.data.Session+')',
			pid: record.data.id_recapitulatif
		}).show();
	},
	formation_upload: function(cmp,e,file)
	{
		App.get(cmp.up('TFormation'),'button#ajouter').setDisabled(true);
		App.readFile(file,function(result) {
			App.get(cmp.up('TFormation'),'textarea#Formation_document').setValue(result);
			App.get(cmp.up('TFormation'),'button#ajouter').setDisabled(false);
		});	
	},
	photo_onload: function(cmp,e,file)
	{
		App.readFile(file,function(result) {
			App.get(cmp.up('TSidePanel'),'panel#PanelPhoto').update('<div class=IPhoto><img src="'+result+'" width=100 height=120></img></div>');
			var o={
				kage: cmp.up('TForm1').agent.Kage,
				trombi: result
			};
			App.Agents.setPhoto(o,function() {
				App.notify('Mise à jour effectuée.');
			});
		});
	},
	ajouter_onclick: function(p)
	{
		var o = {
			Kage: p.up('TForm1').agent.Kage,
			type_formation: App.get(p.up('TForm1'),'TFormation combo#cbo1').getValue(),
			Date: App.get(p.up('TForm1'),'TFormation datefield#date').getValue(),
			upload: App.get(p.up('TForm1'),'TFormation textarea#Formation_document').getValue()
		};
		console.log(o);
		if (App.get(p.up('TForm1'),'TFormation radiofield#radiofield1').getValue()===true) o.Session='Initiale';
		else o.Session='Recyclage';
		App.Agents.saveFormation(o,function() {
			App.get(p.up('TForm1'),'grid#gridFormation').getStore().load();
		});
	},
	Formation_onContextMenu: function(view,rec,node,index,e) {
		e.stopEvent();
		var x=Ext.create('Ext.menu.Menu',{
			items: [
				{
					itemId: 'ctx-gridForm-delete',
					text: "Supprimer"
				}				
			]
		});
		x.on('click',function(p) {
			if (p.itemId="ctx-gridForm-delete") {
				App.Agents.delFormation(rec.data.id_recapitulatif,function(err,response){
					view.getStore().load();
				});
			}
		});
		x.showAt(e.getXY());
		return false;	
	},
	TFormation_onShow: function(p)
	{
		App.get(p.up('TForm1'),'grid#gridFormation').getStore().getProxy().extraParams.Kage=p.up('TForm1').agent.Kage;
		App.get(p.up('TForm1'),'grid#gridFormation').getStore().load();
	},
	situation_record: function(p)
	{
		
		var o={
			Kpst: App.get(p.up('TForm1'),'textfield#Situation_Kpst').getValue(),
			DatEta: App.get(p.up('TForm1'),'datefield#datEta').getValue(),
			Kage: p.up('TForm1').agent.Kage
		};
		
		if ((o.Kpst==1) || (o.Kpst==3)) {
			if (o.Kpst==1) 
			o.Arrivee=App.get(p.up('TForm1'),'combo#MotifCBO').getValue();
			else
			o.Arrivee=App.get(p.up('TForm1'),'textarea#Motif').getValue();
			
			o.Ketsnew=App.get(p.up('TForm1'),'combo#TIEtablissement').getValue();
			o.Kuninew=App.get(p.up('TForm1'),'combo#TIDepartement').getValue();
			o.Ksubnew=App.get(p.up('TForm1'),'combo#TIService').getValue();
			
			o.Ketsex=App.get(p.up('TForm1'),'combo#TEtablissement').getValue();
			o.Kuniex=App.get(p.up('TForm1'),'combo#TDepartement').getValue();
			o.Ksubex=App.get(p.up('TForm1'),'combo#TDepartement').getValue();
		};
		
		if (o.Kpst==14) {
			o.DatCPA=App.get(p.up('TForm1'),'datefield#TDateCPA').getValue();
			o.DatCFA=App.get(p.up('TForm1'),'datefield#TDateCFA').getValue();
			o.DatRet=App.get(p.up('TForm1'),'datefield#TDateRetraite').getValue();
		};
		if (o.Kpst==8) {
			o.DatCFA=App.get(p.up('TForm1'),'datefield#TDateCFA').getValue();
			o.DatRet=App.get(p.up('TForm1'),'datefield#TDateRetraite').getValue();
		};	
		if (o.Kpst==7) {
			o.DatCPA=App.get(p.up('TForm1'),'datefield#TDateCPA').getValue();
			o.DatRet=App.get(p.up('TForm1'),'datefield#TDateRetraite').getValue();
		};		
		o.Motif=App.get(p.up('TForm1'),'textarea#Motif').getValue();
		
		App.Agents.saveSituation(o,function(err,response) {			
			App.get(p.up('TForm1'),'panel#situation_header').hide();
			App.get(p.up('TForm1'),'panel#situation_cancel_ok').hide();
			App.get(p.up('TForm1'),'grid#gridPositions').show();
			App.get(p.up('TForm1'),'panel#mutation_arrivee').hide();	
			App.get(p.up('TSituation'),'panel#CPACFARetraite').hide();			
			App.get(p.up('TForm1'),'textarea#Motif').hide();			
			App.get(p.up('TForm1'),'grid#gridPositions').getStore().load();
		});
		
	},
	situation_add: function(p)
	{
		App.get(p.up('TForm1'),'combo#position').setReadOnly(false);
		App.get(p.up('TForm1'),'datefield#datEta').setReadOnly(false);
		App.get(p.up('TForm1'),'textarea#Motif').setReadOnly(false);
		App.get(p.up('TForm1'),'combo#MotifCBO').setReadOnly(false);
		App.get(p.up('TForm1'),'combo#TIEtablissement').setReadOnly(false);
		App.get(p.up('TForm1'),'combo#TIDepartement').setReadOnly(false);
		App.get(p.up('TForm1'),'combo#TIService').setReadOnly(false);
		App.get(p.up('TForm1'),'datefield#TDateCFA').setReadOnly(false);
		App.get(p.up('TForm1'),'datefield#TDateCPA').setReadOnly(false);
		App.get(p.up('TForm1'),'datefield#TDateRetraite').setReadOnly(false);		
		App.get(p.up('TForm1'),'panel#mutation_arrivee').hide();	
		App.get(p.up('TForm1'),'combo#position').setValue('');
		App.get(p.up('TForm1'),'datefield#datEta').setValue('');
		App.get(p.up('TForm1'),'panel#situation_header').show();
		App.get(p.up('TForm1'),'textarea#Motif').setValue('');
		App.get(p.up('TForm1'),'combo#MotifCBO').setValue('');
		App.get(p.up('TForm1'),'combo#TIEtablissement').setValue('');
		App.get(p.up('TForm1'),'combo#TIDepartement').setValue('');
		App.get(p.up('TForm1'),'combo#TIService').setValue('');
		App.get(p.up('TForm1'),'panel#TPanelI').hide();
		App.get(p.up('TForm1'),'datefield#TDateCFA').setValue('');
		App.get(p.up('TForm1'),'datefield#TDateCPA').setValue('');
		App.get(p.up('TForm1'),'datefield#TDateRetraite').setValue('');		
		App.get(p.up('TForm1'),'grid#gridPositions').hide();		
		App.get(p.up('TForm1'),'textarea#Motif').hide();
	},
	situation_cancel_onclick: function(p)
	{
		App.get(p.up('TSituation'),'panel#situation_header').hide();
		App.get(p.up('TSituation'),'panel#situation_cancel_ok').hide();
		App.get(p.up('TSituation'),'grid#gridPositions').show();
		App.get(p.up('TSituation'),'panel#mutation_arrivee').hide();
		App.get(p.up('TSituation'),'panel#TPanelI').hide();
		App.get(p.up('TSituation'),'panel#CPACFARetraite').hide();
	},
	position_onchange: function(p,record)
	{
		this.situation_cancel_onclick(p);
		App.get(p.up('TSituation'),'grid#gridPositions').hide();
		App.get(p.up('TSituation'),'panel#situation_header').show();
		App.get(p.up('TSituation'),'panel#situation_cancel_ok').show();
		App.get(p.up('TSituation'),'textarea#Motif').hide();
		App.get(p.up('TSituation'),'panel#CPACFARetraite').hide();
		App.get(p.up('TSituation'),'textfield#Situation_Kpst').setValue(record[0].data.Kpst);
		// Mutation arrivée		
		if ((record[0].data.Kpst==1) || (record[0].data.Kpst==3)) {
			App.get(p.up('TSituation'),'panel#mutation_arrivee').show();
			App.get(p.up('TSituation'),'panel#TPanelI').show();
			if (record[0].data.Kpst==1) {
				App.get(p.up('TSituation'),'combo#MotifCBO').show();
				App.get(p.up('TSituation'),'textfield#Motif').hide();
				App.get(p.up('TSituation'),'panel#situation_separator').show();
			} else {
				App.get(p.up('TSituation'),'combo#MotifCBO').hide();
				App.get(p.up('TSituation'),'textfield#Motif').show();
				App.get(p.up('TSituation'),'panel#situation_separator').hide();
			}
		};
		// Mutation départ & absence longue
		if ((record[0].data.Kpst==4) || (record[0].data.Kpst==5)) {
			App.get(p.up('TSituation'),'textarea#Motif').show();
		};
		// CPA + CFA + Retraite
		if ((record[0].data.Kpst==8) || (record[0].data.Kpst==7) || (record[0].data.Kpst==14)) {
			App.get(p.up('TSituation'),'panel#CPACFARetraite').show();
			App.get(p.up('TSituation'),'datefield#TDateCFA').hide();
			App.get(p.up('TSituation'),'datefield#TDateCPA').hide();
			if (record[0].data.Kpst==8 || record[0].data.Kpst==14) App.get(p.up('TSituation'),'datefield#TDateCFA').show();
			if (record[0].data.Kpst==7 || record[0].data.Kpst==14) App.get(p.up('TSituation'),'datefield#TDateCPA').show();
		}
	},
	VilleCBO_onclick: function(p,record)
	{
		p.hide();
		App.get(p.up('TForm1'),'textfield#CodePostal').setValue(p.getValue());
		App.get(p.up('TForm1'),'textfield#Ville').show();
		App.get(p.up('TForm1'),'textfield#Ville').setValue(p.getRawValue().split(' (')[0]);
		App.get(p.up('TForm1'),'textfield#AdrCode').setValue(record[0].data.Id);
	},
	TCodePostal_onchange: function(p)
	{
		App.get(p.up('TForm1'),'combo#VilleCBO').getStore().getProxy().extraParams.Code=p.getValue();
		App.get(p.up('TForm1'),'combo#VilleCBO').getStore().load();
		App.get(p.up('TForm1'),'combo#VilleCBO').getStore().on('load',function(s) {
			if (s.data.items.length==1) {
				App.get(p.up('TForm1'),'combo#VilleCBO').hide();
				App.get(p.up('TForm1'),'textfield#AdrCode').setValue(s.data.items[0].data.Id);
				App.get(p.up('TForm1'),'textfield#Ville').setValue(s.data.items[0].data.Ville.split(' (')[0]);
				App.get(p.up('TForm1'),'textfield#CodePostal').setValue(s.data.items[0].data.Ville.split(' (')[1].split(')')[0]);
				App.get(p.up('TForm1'),'textfield#Ville').show();
			} else {
				App.get(p.up('TForm1'),'combo#VilleCBO').show();
				App.get(p.up('TForm1'),'textfield#Ville').hide();
			};
		});
	},
	TMelA_onclick: function(cmp)
	{
		cmp.getEl().on('click', function() {	
			if (cmp.getValue()=="") {
				var suffix="@cerema.fr";
				var nom=cmp.up('TForm1').agent.Nom.latinize().toLowerCase();
				var prenom=cmp.up('TForm1').agent.Prenom.latinize().toLowerCase();
				cmp.setValue(prenom+'.'+nom+suffix);
			}
		});
	},
	TCodePostal_onclick: function(cmp)
	{
		cmp.getEl().on('click', function() {	
			cmp.setValue('');
			App.get(cmp.up('TForm1'),'textfield#Ville').hide(true);
			App.get(cmp.up('TForm1'),'combo#VilleCBO').show();
		});
	},
	record_onclick: function(p)
	{
		var o={
			Kage: p.up('TForm1').agent.Kage,
			INSEE: App.get(p.up('TForm1'),'textfield#TInsee').getValue()+' '+App.get(p.up('TForm1'),'textfield#TInseeKey').getValue(),
			REHUCIT: App.get(p.up('TForm1'),'textfield#TRehucit').getValue(),
			Nom: App.get(p.up('TForm1'),'textfield#LAgentNom').getValue(),
			Prenom: App.get(p.up('TForm1'),'textfield#LAgentPrenom').getValue(),
			Matri: App.get(p.up('TForm1'),'textfield#LAgentMatri').getValue(),
			Kuni: App.get(p.up('TForm1'),'combo#TDepartement').getValue(),
			Ksub: App.get(p.up('TForm1'),'combo#TService').getValue(),
			libelle_poste: App.get(p.up('TForm1'),'htmleditor#metier').getValue(),
			telephone: App.get(p.up('TForm1'),'textfield#Phone').getValue(),
			portable: App.get(p.up('TForm1'),'textfield#Cell').getValue(),
			DatNai: App.get(p.up('TForm1'),'datefield#DatNai').getValue(),
			DepNai: App.get(p.up('TForm1'),'textfield#DeptNai').getValue(),
			VilNai: App.get(p.up('TForm1'),'textfield#VilleNai').getValue(),
			PaysNai: App.get(p.up('TForm1'),'textfield#PaysNai').getValue(),
			Kgra: App.get(p.up('TForm1'),'combo#TGrade').getValue(),
			Kbat: App.get(p.up('TForm1'),'combo#batiment').getValue(),
			Ksec: App.get(p.up('TForm1'),'combo#Sec1').getValue(),
			Ksec2: App.get(p.up('TForm1'),'combo#Sec2').getValue()
		};
		App.Agents.save(o,function(err,response) {
			var o={
				Kage: p.up('TForm1').agent.Kage,
				Kadr: App.get(p.up('TForm1'),'textfield#AdrK').getValue(),
				Kpos: App.get(p.up('TForm1'),'textfield#AdrCode').getValue(),
				Adresse: App.get(p.up('TForm1'),'textarea#Adresse').getValue()
			};
			App.Agents.setAdresse(o,function(err,response) {
				App.get('TPrincipal grid#GridAgents').getStore().load();
				p.up('window').close();
			});
		});
	},
	Menu_onclick: function(p)
	{
		if (p.itemId) {

		};		
	},
	Positions_onContextMenu: function(view,rec,node,index,e) {
		e.stopEvent();
		var x=Ext.create('Ext.menu.Menu',{
			items: [
				{
					itemId: 'ctx-gridpos-delete',
					text: "Supprimer"
				}				
			]
		});
		x.on('click',function(p) {
			if (p.itemId="ctx-gridpos-delete") {
				App.Agents.delPosition(rec.data.Keta,function(err,response){
					view.getStore().load();
				});
			}
		});
		x.showAt(e.getXY());
		return false;	
	},
	Roles_onContextMenu: function(view, rec, node, index, e) {
		e.stopEvent();
		console.log(view);
		var x=Ext.create('Ext.menu.Menu',{
			items: [
				{
					itemId: 'ctx-grid-delete',
					text: "Supprimer"
				}				
			]
		});
		x.on('click',function(p) {
			if (p.itemId="ctx-grid-delete") {
				App.Agents.delRole(rec.data.CodRol,rec.data.Kage,function(err,response){
					view.getStore().load();
				});
			}
		});
		x.showAt(e.getXY());
		return false;
    },
	RoleAdd_click: function(p)
	{
		p.setDisabled(true);
		var o={
			Kage: p.up('TForm1').agent.Kage,
			Krol: App.get(p.up('TForm1'),'combo#cboRoles').getValue()
		};
		// exists already ?
		var tb=[];
		for (var i=0;i<App.get(p.up('TForm1'),'grid#roles').getStore().data.items.length;i++)
		{
			tb.push(App.get(p.up('TForm1'),'grid#roles').getStore().data.items[i].data.CodRol);
		};
		if (tb.indexOf(o.krol)>-1) {
			Ext.MessageBox.alert('BPCLight', 'Ce rôle est déjà renseigné.');
			p.setDisabled(false);
		} else {		
			App.Agents.addRole(o,function(response) {
				App.get(p.up('TForm1'),'grid#roles').getStore().load();
				p.setDisabled(false);				
			});			
		}
	},
	TSituation_onshow: function(p)
	{
		App.get(p.up('TForm1'),'grid#gridPositions').getStore().getProxy().extraParams.kage=p.up('TForm1').agent.Kage;
		App.get(p.up('TForm1'),'grid#gridPositions').getStore().load();
		App.Agents.getPosition(p.up('TForm1').agent.Kage,function(response) {
			if (response.length==0) 
			App.get(p.up('TForm1'),'panel#maposition').update('<div style="padding:4px"><b>---</b></div>');
			else
			App.get(p.up('TForm1'),'panel#maposition').update('<div style="padding:4px"><b>'+response[0].Position+'</b></div>');
		});
	},
	close_agent: function(p)
	{
		p.up('window').close();
	},
	TForm1_onshow: function(p)
	{	
		var _p=this;
		if (p.agent==-1) {
			p.INSERT=true;
			return;
		};
		p.setTitle(p.agent.Prenom+" "+p.agent.Nom);
		App.Agents.getPhoto(p.agent.Kage,function(o) {
			if (o.length>0)	App.get(p,'TSidePanel panel#PanelPhoto').update('<div class=IPhoto><img src="'+o[0].trombi+'" width=100 height=120></img></div>');
		});		
		App.get(p,'TSidePanel textfield#LAgentNom').setValue(p.agent.Nom);
		App.get(p,'TSidePanel textfield#LAgentPrenom').setValue(p.agent.Prenom);
		App.get(p,'TSidePanel textfield#LAgentMatri').setValue(p.agent.Matri);
		try {
			App.get(p,'TSidePanel textfield#TInsee').setValue(p.agent.INSEE.split(' ')[0]);
			App.get(p,'TSidePanel textfield#TInseeKey').setValue(p.agent.INSEE.split(' ')[1]);
		} catch(ex) {
			App.get(p,'TSidePanel textfield#TInsee').setValue('');
			App.get(p,'TSidePanel textfield#TInseeKey').setValue('');			
		};
		App.get(p,'TSidePanel textfield#TRehucit').setValue(p.agent.REHUCIT);		
		App.get(p,'TSidePanel combo#TDepartement').setValue(p.agent.Kuni);
		App.Etablissements.getByUnite(p.agent.Kuni,function(err,r) {
			App.get(p,'TSidePanel combo#TEtablissement').setValue(r.result.data[0].kets);
		});
		App.get(p,'TSidePanel combo#TService').setValue(p.agent.Ksub);	
		App.get(p,'htmleditor#metier').setValue(p.agent.libelle_poste);
		App.get(p,'grid#roles').getStore().getProxy().extraParams.kage=p.agent.Kage;
		App.get(p,'grid#roles').getStore().load();
		App.get(p,'TAgent datefield#DatNai').setValue(new Date(p.agent.DatNai));
		App.get(p,'TAgent textfield#DeptNai').setValue(p.agent.DepNai);
		App.get(p,'TAgent textfield#VilleNai').setValue(p.agent.VilNai);
		App.get(p,'TAgent textfield#PaysNai').setValue(p.agent.PaysNai);
		App.get(p,'TAgent textfield#Phone').setValue(p.agent.Telephone);
		App.get(p,'TAgent textfield#Cell').setValue(p.agent.Portable);
		// App.Agents.getAdresse
		App.Agents.getAdresse(p.agent.Kage,function(response,x) {
			if (response) 
			{
				App.get(p,'TAgent textfield#AdrK').setValue(response.kadr);
				App.get(p,'TAgent textfield#AdrCode').setValue(response.id);
				App.get(p,'TAgent textarea#Adresse').setValue(response.adresse);
				App.get(p,'TAgent textfield#CodePostal').setValue(response.cpostal);
				App.get(p,'TAgent textfield#Ville').setValue(response.ville);
			};
		});
		App.get(p,'TAgent combo#batiment').setValue(p.agent.Kbat);
		// App.Agents.getCategory
		App.Agents.getCategory(p.agent.Kgra,function(response,x) {
			App.get(p,'TAgent combo#TCat').setValue(response.data[0].Kcgr);
			var TGrade=App.get(p,'TAgent combo#TGrade').getStore();
			TGrade.getProxy().extraParams.catgrad=response.data[0].Kcgr;
			TGrade.load();
			TGrade.on('load',function() {
				App.get(p,'TAgent combo#TGrade').setValue(p.agent.Kgra);
			});			
		});
		App.Agents.getMail(p.agent.Kage,function(response,x) {
			if (response.data.length>0) App.get(p,'TAgent textfield#TMelA').setValue(response.data[0].LibMelA);
		});
		App.Agents.getHierarchie(p.agent.Kage,function(err,response) {
			if (!response.result.chef) response.result.chef="";
			if (!response.result.adjoint) response.result.adjoint="";
			App.get(p,'TAgent panel#Hierarchie').update("<br>Chef de service<br><b>"+response.result.chef+"</b><br><br>Adjoint<br><b>"+response.result.adjoint+"</b>");
		});
		App.get(p,'combo#Sec1').getStore().on('load',function() {
			App.get(p,'TAgent combo#Sec1').setValue(p.agent.Ksec);
			App.get(p,'TAgent combo#Sec2').setValue(p.agent.Ksec2);
		});
	},
	TCat_onchange: function(p,record)
	{
		App.get(p.up('window'),'combo#TGrade').setValue('');
		var cbo=App.get(p.up('window'),'combo#TGrade');
		cbo.getStore().getProxy().extraParams.catgrad=record[0].data.Kcgr;
		cbo.getStore().load();		
	},
	TEtablissement_onchange: function(p,record)
	{
		App.get(p.up('window'),'combo#TDepartement').setValue('');
		App.get(p.up('window'),'combo#TService').setValue('');
		var cbo=App.get(p.up('window'),'combo#TDepartement');
		cbo.getStore().getProxy().extraParams.kets=record[0].data.Kets;
		cbo.getStore().load();
	},
	TDepartement_onchange: function(p,record)
	{
		App.get(p.up('window'),'combo#TService').setValue('');
		var cbo=App.get(p.up('window'),'combo#TService');
		cbo.getStore().getProxy().extraParams.kuni=record[0].data.Kuni;
		cbo.getStore().load();
	},
	TIEtablissement_onchange: function(p,record)
	{
		App.get(p.up('window'),'combo#TIDepartement').setValue('');
		App.get(p.up('window'),'combo#TIService').setValue('');
		var cbo=App.get(p.up('window'),'combo#TIDepartement');
		cbo.getStore().getProxy().extraParams.kets=record[0].data.Kets;
		cbo.getStore().load();
	},
	TIDepartement_onchange: function(p,record)
	{
		App.get(p.up('window'),'combo#TIService').setValue('');
		var cbo=App.get(p.up('window'),'combo#TIService');
		cbo.getStore().getProxy().extraParams.kuni=record[0].data.Kuni;
		cbo.getStore().load();
	}	
	
});