Formation = {
	getAll: function(o,cb) {
		var db=Formation.using('db');
		db.model('bpclight','select id_formation, Libelle from Type_formation',cb);
	},
	
	getAll2: function(o,cb) {
		var db=Formation.using('db');
		db.model('bpclight','SELECT * FROM Recapitulatif, Type_formation WHERE Recapitulatif.type_formation=Type_formation.id_formation AND Recapitulatif.Kage ="'+o.Kage+'" ORDER BY 3 ',cb);		
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
		db.query('bpclight','insert into Recapitulatif (Kage,Date,Session,Nom_organisme,type_formation) values ("'+o.Kage+'","'+o.Date+'","'+o.Session+'","'+o.Nom_organisme+'","'+o.Formations+'")',cb);	
		console.log(cb);
	}, 
	test_delete: function(o,cb)
	{
		var db=Formation.using('db');
		db.query('bpclight','delete from Recapitulatif where id_recapitulatif="'+o.id_recapitulatif+'"',cb);
	},
}

module.exports = Formation;
