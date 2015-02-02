Formation = {
	getAll: function(o,cb) {
		var db=Formation.using('db');
		db.model('bpclight','select id_formation, Libelle from type_formation',cb);
	},
	
	getAll2: function(o,cb) {
		var db=Formation.using('db');
		console.log('SELECT id_recapitulatif,Kage,Date,Session,Nom_organisme,type_formation,Libelle,frequence FROM recapitulatif, type_formation WHERE recapitulatif.type_formation=type_formation.id_formation AND recapitulatif.Kage ="'+o.Kage+'" ORDER BY 3');
		db.model('bpclight','SELECT id_recapitulatif,Kage,Date,Session,Nom_organisme,type_formation FROM recapitulatif, type_formation WHERE recapitulatif.type_formation=type_formation.id_formation AND recapitulatif.Kage ="'+o.Kage+'" ORDER BY 3',cb);
	},
	del: function(o,cb)
	{
		var db=Formation.using('db');
		db.query('bpclight','delete from recapitulatif where id_recapitulatif='+o,cb);
	},
	test_insert: function(o,cb)
	{
		var db=Formation.using('db');
		//console.log('insert into Recapitulatif(Kage,Formations,Date,Session,Frequence,Nom_organisme) values ("'+o.Kage+'","'+o.Formations+'","'+o.Date+'","'+"a"+'","'+"g"+'","'+o.Nom_organisme+'");
		db.query('bpclight','insert into recapitulatif (Kage,Date,Session,Nom_organisme,type_formation) values ("'+o.Kage+'","'+o.Date+'","'+o.Session+'","'+o.Nom_organisme+'","'+o.Formations+'")',cb);	
		console.log(cb);
	}, 
	test_delete: function(o,cb)
	{
		var db=Formation.using('db');
		db.query('bpclight','delete from recapitulatif where id_recapitulatif="'+o.id_recapitulatif+'"',cb);
	},
}

module.exports = Formation;
