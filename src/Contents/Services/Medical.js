Medical={
	getAll: function(o,cb)
	{
		Medical.using('db').model('bpclight','select medic_dossiers.id,date,medic_type.type,medic_cat.cat from medic_dossiers join medic_type on medic_type.id=medic_dossiers.type join medic_cat on medic_cat.id=medic_dossiers.cat where kage='+o.kage+' order by medic_dossiers.date desc',cb);
	},
	printme: function(o,cb)
	{
		Medical.using('db').query('bpclight','select medic_dossiers.*,medic_type.*,medic_cat.*,agents.*,medic_gen.* from medic_dossiers left join medic_type on medic_type.id=medic_dossiers.type left join medic_cat on medic_cat.id=medic_dossiers.cat left join medic_gen on medic_gen.kage=medic_dossiers.kage left join agents on agents.kage=medic_dossiers.kage where medic_dossiers.id='+o.kid+' order by medic_dossiers.date desc',function(e,r){
			console.log(e);
			console.log(r);
			if (r.length==0) {
			cb('NOT_FOUND',null);
			} else {
				r=r[0];
				var html=[
				"<html>",
				"<head>",
				"<style>",
				"html{-webkit-print-color-adjust:exact;zoom:255%;}",
				"h1{font-family:tahoma;font-size:20px;border-bottom:2px solid black;background-color:yellow}",
				"h2{font-family:tahoma;font-size:16px;border-bottom:1px dashed black;background-color:white}",
				".commentaire{font-family:tahoma;font-size:12px}",
				".page{font-family:tahoma;font-size:10px;text-align:right;width:100%}",
				"</style>",
				"<title>Dossier médical : "+r.Nom+" "+r.Prenom+"</title>",
				"</head>",
				"<body><br><br>"
				];
				html.push('<h1>'+r.Nom+" "+r.Prenom+'</h1>');
				html.push('<div class=page>Page 1/3</div>');
				html.push('<div class="commentaire">Type de visite : '+r.type+'</div>');
				html.push('<div class="commentaire">Catégorie : '+r.cat+'</div>');
				html.push('<div class="commentaire">Date : '+r.date+'</div>');
				html.push('<h2>Poste actuel</h2>');
				html.push('<div class="commentaire">'+r.poste_actuel+'</div>');
				html.push('<h2>Antécédents personnels</h2>');
				html.push('<div class="commentaire">'+r.gen_perso+'</div>');
				html.push('<h2>Antécédents familiaux</h2>');
				html.push('<div class="commentaire">'+r.gen_family+'</div>');
				html.push('<h2>Commentaires</h2>');
				html.push('<div class="commentaire">'+r.commentaires+'</div>');
				html.push('<div style="page-break-after: always;"></div>');
				
				html.push('<h1>'+r.Nom+" "+r.Prenom+'</h1>');
				html.push('<div class=page>Page 1/3</div>');
				
				html.push('</body></html>');
				html=html.join('');
				var tmp=App.temp('html');
				require('fs').writeFileSync(tmp.path,html); 
				
				var wkhtmltopdf = Medical.using('wkhtmltopdf');
				var out=App.temp('pdf');
				var stream=require('fs').createWriteStream(out.path);
				wkhtmltopdf('http://127.0.0.1:3000' + tmp.url,{ pageSize: 'A4',zoom: 1.33  }).pipe(stream).on('finish',function() {
					cb(out.url);
				});	
				
			}
		});
	}
};

module.exports=Medical;