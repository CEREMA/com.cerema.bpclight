App.controller.define('CAgent', {

	views: [
		"VForm1",
		"agent.VSidePanel",
		"agent.VAgent",
		"agent.VSituation",
		"agent.VAutorisation",
		"agent.VFormation"
	],
	
	models: [

	],
	
	init: function()
	{
		this.control({
			"TForm1": {
				show: "TForm1_onshow"
			},
			"TSidePanel panel#PanelPhoto" : {
				load: "photo_onload",
				beforeload: "photo_test"
			},
			"TForm1 button#Record": {
				click: "record_onclick"
			},
			"menu>menuitem": {
				click: "Menu_onclick"
			},
			"combo#TEtablissement": {
				select: "TEtablissement_onchange"
			},
			"combo#TDepartement": {
				select: "TDepartement_onchange"
			},
			"combo#TIEtablissement": {
				select: "TIEtablissement_onchange"
			},
			"combo#TIDepartement": {
				select: "TIDepartement_onchange"
			},
			"combo#TCat": {
				select: "TCat_onchange"
			},
			"button#Exit": {
				click: "close_agent"
			},
			"button#formationAdd": {
				click: "formationAdd_click"
			},
			"button#RoleAdd": {
				click: "RoleAdd_click"
			},
			"grid#roles": {
				itemcontextmenu: "Roles_onContextMenu"
			},
			"TSituation": {
				show: "TSituation_onshow"
			},
			"textfield#TMelA": {
				render: "TMelA_onclick"
			},
			"textfield#CodePostal": {
				render: "TCodePostal_onclick",
				keyup: "TCodePostal_onchange"
			},
			"combo#VilleCBO": {
				select: "VilleCBO_onclick"
			},
			"combo#position": {
				select: "position_onchange"
			},
			"button#situation_cancel": {
				click: "situation_cancel_onclick"
			},
			"button#Add": {
				click: "situation_add"
			},
			"button#situation_ok": {
				click: "situation_record"
			},
			"grid#gridPositions": {
				itemcontextmenu: "Positions_onContextMenu"
			},
			"TFormation" : {
				show: "TFormation_onShow"
			},
			"TFormation grid#gridFormation": {
				itemcontextmenu: "Formation_onContextMenu"
			},
			"TFormation button#ajouter": {
				click: "ajouter_onclick"
			}
		});
	},
	photo_test: function(cmp, file) {
		var imageType = /image.*/;
		console.log(file);
		//return Ext.isArray(file.type.match(imageType));
	},
	photo_onload: function(cmp,e,file)
	{
		App.readFile(file,function(result) {
			console.log(result);
		});
	},
	ajouter_onclick: function(p)
	{
		var o = {
			Kage: p.up('TForm1').agent.Kage,
			type_formation: App.get('TFormation combo#cbo1').getValue(),
			Date: App.get('TFormation datefield#date').getValue(),
			Nom_organisme: App.get('TFormation textfield#organisme').getValue()
		};
		if (App.get('TFormation radiofield#radiofield1').getValue()===true) o.Session='Initiale';
		else o.Session='Recyclage';
		console.log(o);
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
				App.Formation.del(rec.data.id_recapitulatif,function(err,response){
					App.get('grid#gridFormation').getStore().load();
				});
			}
		});
		x.showAt(e.getXY());
		return false;	
	},
	TFormation_onShow: function(p)
	{
		App.get(p,'grid#gridFormation').getStore().getProxy().extraParams.Kage=p.up('TForm1').agent.Kage;
		App.get(p,'grid#gridFormation').getStore().load();
	},
	situation_record: function(p)
	{
		console.log(App.get('datefield#datEta').getValue());
		var o={
			Kpst: App.get('textfield#Situation_Kpst').getValue(),
			DatEta: App.get('datefield#datEta').getValue(),
			Kage: p.up('TForm1').agent.Kage
		};
		if ((o.Kpst==1) || (o.Kpst==3)) {
			if (o.Kpst==1) 
			o.Arrivee=App.get('combo#MotifCBO').getValue();
			else
			o.Arrivee=App.get('textarea#VMotif').getValue();
			
			o.Ketsnew=App.get('combo#TIEtablissement').getValue();
			o.Kuninew=App.get('combo#TIDepartement').getValue();
			o.Ksubnew=App.get('combo#TIService').getValue();
			
			o.Ketsex=App.get('combo#TEtablissement').getValue();
			o.Kuniex=App.get('combo#TDepartement').getValue();
			o.Ksubex=App.get('combo#TDepartement').getValue();
		};
		
		App.Agents.saveSituation(o,function(err,response) {
			App.get('panel#situation_header').hide();
			App.get('panel#situation_cancel_ok').hide();
			App.get('grid#gridPositions').show();
			App.get('panel#mutation_arrivee').hide();	
			App.get('grid#gridPositions').getStore().load();
		});
	},
	situation_add: function()
	{
		App.get('combo#position').setValue('');
		App.get('datefield#datEta').setValue('');
		App.get('panel#situation_header').show();
		App.get('grid#gridPositions').hide();		
	},
	situation_cancel_onclick: function(p)
	{
		App.get('panel#situation_header').hide();
		App.get('panel#situation_cancel_ok').hide();
		App.get('grid#gridPositions').show();
		App.get('panel#mutation_arrivee').hide();
	},
	position_onchange: function(p,record)
	{
		this.situation_cancel_onclick();
		App.get('grid#gridPositions').hide();
		App.get('panel#situation_header').show();
		App.get('panel#situation_cancel_ok').show();
		App.get('textarea#VMotif').hide();
		App.get('panel#CPACFARetraite').hide();
		App.get('textfield#Situation_Kpst').setValue(record[0].data.Kpst);
		// Mutation arrivée		
		if ((record[0].data.Kpst==1) || (record[0].data.Kpst==3)) {
			App.get('panel#mutation_arrivee').show();
			if (record[0].data.Kpst==1) {
				App.get('combo#MotifCBO').show();
				App.get('textfield#Motif').hide();
				App.get('panel#situation_separator').show();
			} else {
				App.get('combo#MotifCBO').hide();
				App.get('textfield#Motif').show();
				App.get('panel#situation_separator').hide();
			}
		};
		// Mutation départ & absence longue
		if ((record[0].data.Kpst==4) || (record[0].data.Kpst==5)) {
			App.get('textarea#VMotif').show();
		};
		// CPA + CFA + Retraite
		if ((record[0].data.Kpst==8) || (record[0].data.Kpst==7) || (record[0].data.Kpst==14)) {
			App.get('panel#CPACFARetraite').show();
			App.get('datefield#TDateCFA').hide();
			App.get('datefield#TDateCPA').hide();
			if (record[0].data.Kpst==8 || record[0].data.Kpst==14) App.get('datefield#TDateCFA').show();
			if (record[0].data.Kpst==7 || record[0].data.Kpst==14) App.get('datefield#TDateCPA').show();
		}
	},
	VilleCBO_onclick: function(p,record)
	{
		p.hide();
		App.get('textfield#CodePostal').setValue(p.getValue());
		App.get('textfield#Ville').show();
		App.get('textfield#Ville').setValue(p.getRawValue().split(' (')[0]);
		App.get('textfield#AdrCode').setValue(record[0].data.Id);
	},
	TCodePostal_onchange: function(p)
	{
		App.get('combo#VilleCBO').getStore().getProxy().extraParams.Code=p.getValue();
		App.get('combo#VilleCBO').getStore().load();
		App.get('combo#VilleCBO').getStore().on('load',function(s) {
			if (s.data.items.length==1) {
				App.get('combo#VilleCBO').hide();
				App.get('textfield#AdrCode').setValue(s.data.items[0].data.Id);
				App.get('textfield#Ville').setValue(s.data.items[0].data.Ville.split(' (')[0]);
				App.get('textfield#CodePostal').setValue(s.data.items[0].data.Ville.split(' (')[1].split(')')[0]);
				App.get('textfield#Ville').show();
			} else {
				App.get('combo#VilleCBO').show();
				App.get('textfield#Ville').hide();
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
			App.get('textfield#Ville').hide(true);
			App.get('combo#VilleCBO').show();
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
			libelle_poste: App.get(p.up('TForm1'),'htmleditor').getValue(),
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
				Kadr: App.get('textfield#AdrK').getValue(),
				Kpos: App.get('textfield#AdrCode').getValue(),
				Adresse: App.get('textarea#Adresse').getValue()
			};
			App.Agents.setAdresse(o,function(err,response) {
				App.get('grid#GridAgents').getStore().load();
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
					App.get('grid#gridPositions').getStore().load();
				});
			}
		});
		x.showAt(e.getXY());
		return false;	
	},
	Roles_onContextMenu: function(view, rec, node, index, e) {
		e.stopEvent();
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
					App.get('grid#roles').getStore().load();
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
			kage: p.up('TForm1').agent.Kage,
			krol: App.get('combo#cboRoles').getValue()
		};
		// exists already ?
		var tb=[];
		for (var i=0;i<App.get('grid#roles').getStore().data.items.length;i++)
		{
			tb.push(App.get('grid#roles').getStore().data.items[i].data.CodRol);
		};
		if (tb.indexOf(o.krol)>-1) {
			Ext.MessageBox.alert('BPCLight', 'Ce rôle est déjà renseigné.');
			p.setDisabled(false);
		} else {		
			App.Agents.addRole(o,function(response) {
				App.get('grid#roles').getStore().load();
				p.setDisabled(false);				
			});			
		}
	},
	TSituation_onshow: function(p)
	{
		App.get(p,'grid#gridPositions').getStore().getProxy().extraParams.kage=p.up('TForm1').agent.Kage;
		App.get(p,'grid#gridPositions').getStore().load();
		App.Agents.getPosition(p.up('TForm1').agent.Kage,function(response) {
			console.log(response);
			if (response.length==0) 
			App.get('panel#maposition').update('<div style="padding:4px"><b>---</b></div>');
			else
			App.get('panel#maposition').update('<div style="padding:4px"><b>'+response[0].Position+'</b></div>');
		});
	},
	close_agent: function(p)
	{
		p.up('window').close();
	},
	formationAdd_click: function()
	{
		alert('x');
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
			if (o.length>0)	$('.IPhoto').html('<img src="'+o[0].trombi+'" width=100 height=120></img>');
		});
		
		App.get(p,'textfield#LAgentNom').setValue(p.agent.Nom);
		App.get(p,'textfield#LAgentPrenom').setValue(p.agent.Prenom);
		App.get(p,'textfield#LAgentMatri').setValue(p.agent.Matri);
		try {
			App.get(p,'textfield#TInsee').setValue(p.agent.INSEE.split(' ')[0]);
			App.get(p,'textfield#TInseeKey').setValue(p.agent.INSEE.split(' ')[1]);
		} catch(ex) {
			App.get(p,'textfield#TInsee').setValue('');
			App.get(p,'textfield#TInseeKey').setValue('');			
		};
		App.get(p,'textfield#TRehucit').setValue(p.agent.REHUCIT);		
		App.get(p,'combo#TDepartement').setValue(p.agent.Kuni);
		App.Etablissements.getByUnite(p.agent.Kuni,function(err,r) {
			App.get(p,'combo#TEtablissement').setValue(r.result.data[0].kets);
		});
		App.get(p,'combo#TService').setValue(p.agent.Ksub);	
		App.get(p,'htmleditor').setValue(p.agent.libelle_poste);
		App.get(p,'grid#roles').getStore().getProxy().extraParams.kage=p.agent.Kage;
		App.get(p,'grid#roles').getStore().load();
		App.get(p,'datefield#DatNai').setValue(new Date(p.agent.DatNai));
		App.get(p,'textfield#DeptNai').setValue(p.agent.DepNai);
		App.get(p,'textfield#VilleNai').setValue(p.agent.VilNai);
		App.get(p,'textfield#PaysNai').setValue(p.agent.PaysNai);
		App.get(p,'textfield#Phone').setValue(p.agent.Telephone);
		App.get(p,'textfield#Cell').setValue(p.agent.Portable);
		// App.Agents.getAdresse
		App.Agents.getAdresse(p.agent.Kage,function(response,x) {
			if (response) 
			{
				App.get(p,'textfield#AdrK').setValue(response.kadr);
				App.get(p,'textfield#AdrCode').setValue(response.id);
				App.get(p,'textarea#Adresse').setValue(response.adresse);
				App.get(p,'textfield#CodePostal').setValue(response.cpostal);
				App.get(p,'textfield#Ville').setValue(response.ville);
			};
		});
		App.get(p,'combo#batiment').setValue(p.agent.Kbat);
		// App.Agents.getCategory
		App.Agents.getCategory(p.agent.Kgra,function(response,x) {
			App.get(p,'combo#TCat').setValue(response.data[0].Kcgr);
			var TGrade=App.get(p,'combo#TGrade').getStore();
			TGrade.getProxy().extraParams.catgrad=response.data[0].Kcgr;
			TGrade.load();
			TGrade.on('load',function() {
				App.get(p,'combo#TGrade').setValue(p.agent.Kgra);
			});			
		});
		App.Agents.getMail(p.agent.Kage,function(response,x) {
			if (response.data.length>0) App.get(p,'textfield#TMelA').setValue(response.data[0].LibMelA);
		});
		App.Agents.getHierarchie(p.agent.Kage,function(err,response) {
			if (!response.result.chef) response.result.chef="";
			if (!response.result.adjoint) response.result.adjoint="";
			App.get(p,'panel#Hierarchie').update("<br>Chef de service<br><b>"+response.result.chef+"</b><br><br>Adjoint<br><b>"+response.result.adjoint+"</b>");
		});
		App.get(p,'combo#Sec1').getStore().on('load',function() {
			App.get(p,'combo#Sec1').setValue(p.agent.Ksec);
			App.get(p,'combo#Sec2').setValue(p.agent.Ksec2);
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