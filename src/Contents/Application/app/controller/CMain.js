function GMap(l,m)
{
	var TMap={};
	TMap.map = new google.maps.Map(document.getElementById('TMapPanel'),{
		zoom: 18,
		center: new google.maps.LatLng(l, m),
		mapTypeId: google.maps.MapTypeId.SATELLITE	
	});
	TMap.marker= new google.maps.Marker({
		position: new google.maps.LatLng(l,m)
	});		
	TMap.marker.setMap(TMap.map);
};

App.controller.define('CMain', {

	views: [
		"VMain",
		"VPrincipal"
	],
	
	models: [
	],
	
	init: function()
	{

		this.control({
			"mainform menu>menuitem": {
				click: "Menu_onClick"
			},
			"mainform treepanel#TreePanel": {
				itemclick: "tree_onclick"
			},
			"mainform grid#GridAgents": {
				itemdblclick: "grid_ondblclick",
				itemclick: "grid_onclick"
			},
			"mainform button#BtnFilter" : {
				click: "filter_onclick"
			},
			"mainform button#NewAgent" : {
				click: "NewAgent_onclick"
			},
			"mainform button#BtnExport" : {
				click: "btnExport_onclick"
			},
			"mainform ux-searchbox#searchbox" : {
				click: "onSearch"
			}
		});
		
		App.init('VMain',this.onLoad);
		
	},
	onSearch: function(v)
	{
		var grid=App.get('grid#GridAgents');
		grid.getStore().getProxy().extraParams={
			nom: v+"%"
		};
		grid.getStore().load();
	},
	btnExport_onclick: function()
	{
		var items=App.get('grid#GridAgents').getStore().data.items;
		var kage=[];
		for (var i=0;i<items.length;i++) kage.push(items[i].data.Kage);
		Ext.Ajax.request({
			url: '/export',
			params: {
				kage: kage.join(',')
			},
			success: function(response){
				var url=response.responseText;
				var iframe=document.createElement('iframe');
				iframe.src=url;
				document.getElementsByTagName('body')[0].appendChild(iframe);
			}
		});
	},
	filter_onclick: function()
	{
		App.get('FilterBox#FilterPanel').store=App.get('grid#GridAgents').getStore();
		if (App.get('FilterBox#FilterPanel').isVisible())
		App.get('FilterBox#FilterPanel').hide();
		else
		App.get('FilterBox#FilterPanel').show();
	},
	NewAgent_onclick: function()
	{
		App.view.create('VForm1',{
			agent: -1,
			modal: true
		}).show();
	},
	Menu_onClick: function(p)
	{
		if (p.itemId) {
			Ext.Msg.alert('Status', 'Click event on '+p.itemId);
		};			
	},
	grid_onclick: function(p, record, item, index)
	{
		$('#TPhone').html(record.data.Telephone);
		if (record.data.Portable!="") $('#TMobile').html(record.data.Portable); else $('#TMobile').html('&nbsp;&nbsp;');
		$('#Photo').css('background-image','url(/trombi/'+record.data.Matri+'.jpg)');
		$('#NomPrenom').html(record.data.Prenom+' '+record.data.Nom);
		try{
			$('#LibellePoste').html(record.data.libelle_poste);
		}catch(e)
		{
			$('#LibellePoste').html('...');
		};
		Ext.Ajax.request({
			url: '/agent',
			params: {
				kage: record.data.Kage
			},
			success: function(response){
				var response = JSON.parse(response.responseText);
				var r=[];
				for (var i=0;i<response.data.length;i++)
				{
					r.push(response.data[i].LibRol);
				};
				$('#Poste').html(r.join('<br>'));
			}
		});		
		Ext.Ajax.request({
			url: '/agent.mail',
			params: {
				kage: record.data.Kage
			},
			success: function(response){
				var response = JSON.parse(response.responseText);
				var r=[];
				for (var i=0;i<response.data.length;i++)
				{
					if (r.indexOf(response.data[i].LibMelA)==-1) r.push(response.data[i].LibMelA);
				};
				$('#TMail').html(r.join('<br>'));
			}
		});		
		try {
			GMap(record.data.GPS.split(' ')[0],record.data.GPS.split(' ')[1]);
		} catch(err) {
			Ext.getCmp('MyGMapPanel').hide();
		};	
	},
	grid_ondblclick: function(p, record, item, index)
	{
		App.view.create('VForm1',{
			agent: record.data,
			modal: true
		}).show();
	},
	tree_onclick: function(p, record, item, index)
	{
		var id=record.data.id;
		var grid=App.get('mainform grid#GridAgents');
		if (id.indexOf('Ksub')>-1) grid.getStore().getProxy().extraParams={
			ksub: id.split('Ksub')[1]
		}; else
		if (id.indexOf('Kuni')>-1) grid.getStore().getProxy().extraParams={
			kuni: id.split('Kuni')[1]
		}; else
		if (id.indexOf('Kets')>-1) grid.getStore().getProxy().extraParams={
			kets: id.split('Kets')[1]
		};
		grid.getStore().load();
		//grid.getStore().getProxy().extraParams={};		
	},
	onLoad: function()
	{
		App.loadAPI("http://maps.google.com/maps/api/js?sensor=false&callback=GMap");
		// update
		App.Update.position(-1,function(err,response) {
			/*console.log(err);
			console.log(response);*/
		});
		Auth.login(function(x) {
		
		});
	}
	
	
});
