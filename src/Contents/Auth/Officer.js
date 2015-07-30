Officer = {
	login : function(profile,auth_type,cb)
	{
		if (auth_type=="cas") {
			if (!profile.username) cb({});
			var mail=profile.username.toLowerCase();
			Officer.using('db').store('bpclight','select kage,nom,prenom from agents where kage in (select kage from mela where libmela="'+mail+'")',function(err,result){
				if (!err) {
					var response={
						lastname: result.data[0].nom,
						firstname: result.data[0].prenom,
						uid: result.data[0].kage,
						mail: mail,
						profiles: []
					};
					if (require('fs').existsSync(__dirname+require('path').sep+'Profiler.json')) {
						var profiler=JSON.parse(response.profile=require('fs').readFileSync(__dirname+require('path').sep+'Profiler.json'));
						for (var el in profiler.profile) {
							var p=profiler.profile[el];
							if (p.indexOf(mail)) response.profiles.push(el);
						};
					};
					cb(response);			
				} else cb(err);
			});
		};
		
	}
};

module.exports = Officer;