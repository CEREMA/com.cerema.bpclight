Medical={
	getAll: function(o,cb)
	{
		Medical.using('db').model('bpclight','select medic_dossiers.id,date,medic_type.type,medic_cat.cat from medic_dossiers join medic_type on medic_type.id=medic_dossiers.type join medic_cat on medic_cat.id=medic_dossiers.cat where kage='+o.kage+' order by medic_dossiers.date desc',cb);
	},
	printme: function(o,cb)
	{
		console.log('select medic_dossiers.*,medic_type.*,medic_cat.*,agents.* from medic_dossiers left join medic_type on medic_type.id=medic_dossiers.type left join medic_cat on medic_cat.id=medic_dossiers.cat left join agents on agents.kage=medic_dossiers.kage where agents.kage='+o.kid+' order by medic_dossiers.date desc');
		Medical.using('db').query('bpclight','select medic_dossiers.*,medic_type.*,medic_cat.*,agents.* from medic_dossiers left join medic_type on medic_type.id=medic_dossiers.type left join medic_cat on medic_cat.id=medic_dossiers.cat left join agents on agents.kage=medic_dossiers.kage where agents.kage='+o.kid+' order by medic_dossiers.date desc',function(e,r){
			console.log(e);
			console.log(r);
			r=r[0];
			var html=[
				"<html>",
				"<head>",
				"<title>Dossier médical : "+r.Nom+" "+r.Prenom+"</title>",
				"</head>"
				
			]
		});
	}
};

module.exports=Medical;