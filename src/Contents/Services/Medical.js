Medical={
	getAll: function(o,cb)
	{
		Medical.using('db').model('bpclight','select medic_dossiers.id,date,medic_type.type,medic_cat.cat from medic_dossiers join medic_type on medic_type.id=medic_dossiers.type join medic_cat on medic_cat.id=medic_dossiers.cat where kage='+o.kage+' order by medic_dossiers.date desc',cb);
	},
	printme: function(o,cb)
	{
		Medical.using('db').query('bpclight','select medic_dossiers.*,medic_type.*,medic_cat.*,agents.* from medic_dossiers left join medic_type on medic_type.id=medic_dossiers.type left join medic_cat on medic_cat.id=medic_dossiers.cat left join agents on agents.kage=medic_dossiers.kage where medic_dossiers.id='+o.kid+' order by medic_dossiers.date desc',function(e,r){
			console.log(e);
			console.log(r);
			if (r.length==0) {
			cb('NOT_FOUND',null);
			} else {
				r=r[0];
				var html=[
				"<html>",
				"<head>",
				"<title>Dossier médical : "+r.Nom+" "+r.Prenom+"</title>",
				"</head>",
				"<body>"
				];
				html.push('</body></html>');
				html=html.join('');
				var tmp=App.temp('html');
				require('fs').writeFileSync(tmp.path,html); 
				//res.end(req.protocol+'://'+req.headers.host + tmp.url);
				var wkhtmltopdf = Medical.using('wkhtmltopdf');
				var out=App.temp('pdf');
				var stream=require('fs').createWriteStream(out.path);
				wkhtmltopdf(req.protocol+'://'+req.headers.host + tmp.url,{ pageSize: 'A4',zoom: 1.33  }).pipe(stream).on('finish',function() {
					res.end(out.url);
				});				
			}
		});
	}
};

module.exports=Medical;