Utils = {
	getVille: function(o,cb) {
		var db=Utils.using('db');
		db.model('bpclight','select Id, Code,concat(Ville, " (",Code,")") Ville from postal where Code like "'+o.Code+'%"',cb);
	},
	dumpVisites: function(o,cb) {
		var db=Utils.using('db');
		var excelbuilder=App.using('msexcel-builder');
		var Agents=[];
		var AllAgents=[];
		var Agent={};
		var VM=[];
		db.query("bpclight",'select Kage,Nom,Prenom,unites.libunic,subdis.libsubc,"" date_visite,"" resultat,"" commentaires,"" nature from agents, unites,subdis where unites.kuni=agents.kuni and subdis.ksub=agents.ksub and actif=1 order by Nom,Prenom', function(e,r) {
			for (var i=0;i<r.length;i++) {
				AllAgents.push(r[i].Kage);
				Agent[r[i].Kage]=r[i];	
			};
			db.query("bpclight",'SELECT agents.Kage,Nom,Prenom,libunic,libsubc,date_visite,resultat,commentaires,nature FROM bpclight.vm join bpclight.agents on bpclight.agents.kage=bpclight.vm.kage left join vm_resultats on vm_resultats.kvm_resultats=vm.resultats left join vm_natures on vm_natures.kvm_natures=vm.nature_visite join unites on unites.kuni=agents.kuni join subdis on subdis.ksub=agents.ksub where agents.actif=1 order by Nom,Prenom, date_visite desc;', function(err, rows) {
				for (var i=0;i<rows.length;i++) {
					if (Agents.indexOf(rows[i].Kage)==-1) {
						Agents.push(rows[i].Kage);
						VM.push(rows[i]);
					}
				};

				var CSV=[];
				for (var i=0;i<VM.length;i++) {
					var item=[];
					for (var el in VM[i]) {
						if (el=="date_visite")
						item.push(VM[i][el].ymd());
						else
						item.push(VM[i][el]);
					};
					CSV.push('"'+item.join('","')+'"');
				};

				for (var i=0;i<AllAgents.length;i++) {
					var item=[];
					if (Agents.indexOf(AllAgents[i])==-1) {
						for (var el in Agent[AllAgents[i]]) item.push(Agent[AllAgents[i]][el]);
						CSV.push('"'+item.join('","')+'"');
					}
				};
				var tempfile=App.temp('xlsx');
						var workbook = excelbuilder.createWorkbook(tempfile.dir, tempfile.filename);                        
						var conf={};
						conf.cols = [
						];
				/*console.log(CSV.join('\n'));
				fs.writeFileSync('export.csv',CSV.join('\n'));*/
				
			});
		});

	}
};

module.exports=Utils;