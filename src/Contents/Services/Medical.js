Medical={
	getAll: function(o,cb)
	{
		Medical.using('db').model('bpclight','select * from medic_dossiers where kage='+o.kage,cb);
	},
	getLibelle: function(o,cb)
	{
		Medical.using('db').model('bpclight','select libelle from medic_gen where kage='+o,cb);
	},
	setLibelle: function(o,cb)
	{
		Medical.using('db').post('bpclight','medic_gen',o,cb);
	},
	getDossierById: function(o,cb)
	{
		console.log('select * from medic_dossiers where id='+o);
		Medical.using('db').query('bpclight','select * from medic_dossiers where id='+o,cb);
	}
};

module.exports=Medical;