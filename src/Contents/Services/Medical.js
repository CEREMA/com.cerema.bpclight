Medical={
	getAll: function(o,cb)
	{
		Medical.using('db').model('bpclight','select medic_dossiers.id,date,medic_type.type,medic_cat.cat from medic_dossiers join medic_type on medic_type.id=medic_dossiers.type join medic_cat on medic_cat.id=medic_dossiers.cat where kage='+o.kage+' order by medic_dossiers.date desc',cb);
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