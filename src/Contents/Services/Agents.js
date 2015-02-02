Agents = {
	save: function(o,cb)
	{
		var db=Agents.using('db');
		db.post('bpclight','agents',o,cb);
	},
	getPhoto: function(o,cb)
	{
		Agents.using('db').query('bpclight','select trombi from trombi where kage='+o,cb);	
	},
	setPhoto: function(o,cb)
	{
		Agents.using('db').post('bpclight','trombi',o,cb);	
	},	
	getRole: function(o,cb)
	{
		var db=Agents.using('db');
		db.model('bpclight','select * from agerol, roles where agerol.krol=roles.krol and agerol.kage='+o.kage+' order by LibRol',cb);
	},
	saveSituation: function(o,cb)
	{
		var db=Agents.using('db');
		db.post('bpclight','ageetat',o,cb);	
	},
	addRole: function(o,cb)
	{
		var db=Agents.using('db');
		db.query('bpclight','insert into agerol (kage,krol) values ('+o.kage+','+o.krol+')',cb);
	},
	delRole: function(krol,kage,cb)
	{
		var db=Agents.using('db');
		db.query('bpclight','delete from agerol where kage='+kage+' and krol='+krol,cb);
	},	
	getPosition: function(o,cb)
	{
		var db=Agents.using('db');
		console.log('SELECT position.Position FROM bpclight.ageetat ageetat INNER JOIN bpclight.position position ON (ageetat.Kpst = position.Kpst) WHERE (ageetat.Kage = '+o+' and ageetat.DatEta<=NOW()) ORDER BY ageetat.DatEta desc');
		db.query('bpclight','SELECT position.Position FROM bpclight.ageetat ageetat INNER JOIN bpclight.position position ON (ageetat.Kpst = position.Kpst) WHERE (ageetat.Kage = '+o+' and ageetat.DatEta<=NOW()) ORDER BY ageetat.DatEta desc',cb);
	},
	delPosition: function(o,cb)
	{
		var db=Agents.using('db');
		db.del('bpclight','ageetat',o,cb);
	},
	getPositions: function(o,cb)
	{
		var db=Agents.using('db');
		db.model('bpclight','SELECT ageetat.Keta, position.Position,ageetat.dateta FROM bpclight.ageetat ageetat INNER JOIN bpclight.position position ON (ageetat.Kpst = position.Kpst) WHERE (ageetat.Kage = '+o.kage+') ORDER BY ageetat.DatEta desc',cb);
	},
	setAdresse: function(o,cb)
	{
		var db=Agents.using('db');
		db.post('bpclight','adresses',o,cb);
	},
	getAdresse: function(x,cb)
	{
		var db=Agents.using('db');
		var o={
			adresse: "",
			cpostal: "",
			ville: ""
		};
		var sql="SELECT kadr,adresse,kpos FROM agents,adresses where agents.kres = adresses.kadr and agents.kage=$kage order by date_derniere_modif";
		db.query('bpclight',sql.replace('$kage',x),function(err,r){
			if (r.length>0) {
				var kpos=r[0].kpos;
				o.adresse=r[0].adresse;
				o.kadr=r[0].kadr;
				db.query('bpclight','SELECT id, code,ville FROM postal where id='+kpos,function(err,r) {
					if (r.length>0) {
						o.id=r[0].id;
						o.cpostal=r[0].code;
						o.ville=r[0].ville;
						cb(null,o);
					} else cb(null,o);
				});
			} else cb(null,o);
		});
	},
	getCategory: function(o,cb)
	{
		Agents.using('db').model('bpclight','select Kcgr from grades where Kgra='+o,cb);
	},
	getMail: function(o,cb)
	{
		Agents.using('db').model('bpclight','select LibMelA from mela where LibMelA like "%@cerema.fr" and Kage='+o,cb);
	},
	getHierarchie: function(o,cb)
	{
		Agents.using('db').query('bpclight',"SELECT agerol.kage,agerol.krol,agents.nom,agents.prenom from agents,agerol where agerol.krol in (5,9) and agents.kage=agerol.kage and agents.actif=1 and agents.ksub=(select ksub from agents where kage="+o+")",function(err,response) {
			var r={};
			for (var i=0;i<response.length;i++) {
				if (response[i].krol==9) r.chef=response[i].prenom+' '+response[i].nom;
				if (response[i].krol==5) r.adjoint=response[i].prenom+' '+response[i].nom;
			};
			cb(null,r);
		});
	},
	getSecretaires: function(o,cb)
	{
		Agents.using('db').model('bpclight',"select kage, concat_ws(' ',nom,prenom) nomprenom from agents where actif=1 and kage in (select kage from agerol where krol=1) order by nomprenom",cb);
	},
	exportXLS: function(o,cb)
	{
		var db=Agents.using('db');
		if (o.length==0) {
			cb(true,null);
			return;
		};
		db.query('bpclight',db.sql("export",{
			kage: o
		}),cb);	
	}
};

module.exports = Agents;