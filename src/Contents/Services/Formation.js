Formation = {
	getAll: function(o,cb) {
		var db=Formation.using('db');
		db.model('bpclight','select id_formation, Libelle from type_formation',cb);
	},
	del: function(o,cb)
	{
		var db=Formation.using('db');
		db.query('bpclight','delete from recapitulatif where id_recapitulatif='+o,cb);
	},
	test_insert: function(o,cb)
	{
		var db=Formation.using('db');
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
