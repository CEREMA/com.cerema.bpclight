Medical={
	getAll: function()
	{
		var db=Medical.using('db');
		db.model('bpclight','select medic_dossiers.id,date,medic_type.type,medic_cat.cat from medic_dossiers join medic_type on medic_type.id=medic_dossiers.type join medic_cat on medic_cat.id=medic_dossiers.cat where kage=614',cb);
	}
};

module.exports=Medical;