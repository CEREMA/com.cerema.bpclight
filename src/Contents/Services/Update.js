Update = {
	position: function(cbx)
	{
		var select=[];
		var selectPNA=[];
		var selectPARTI=[];
		var selectCHANGEMENT=[];
		function get(response,i,cb)
		{
			var age=[2,4,5,10,9];
			var total=response.length;
			db.query('bpclight','select * from ageetat where ageetat.dateta<=NOW() and ageetat.Kage='+response[i].kage+' order by dateta desc limit 1',function(err,r0) {
				if (r0.length>0) {
					if (age.indexOf(r0[0].Kpst)>-1) select.push(r0[0].Kage);
					if (i+1<total) get(response,i+1,cb); else {
						cb(select);
					}
				} else {
					if (i+1<total) get(response,i+1,cb); else {
						cb(select);
					}				
				}
			});
		};
		function setPNA(response,i,cb)
		{
			var age=[1,3];
			var total=response.length;
			db.query('bpclight','select * from ageetat where ageetat.dateta<=NOW() and ageetat.Kage='+response[i].kage+' order by dateta desc limit 1',function(err,r0) {
				if (r0.length>0) {
					if (age.indexOf(r0[0].Kpst)>-1) {
						selectPNA.push(r0[0].Kage);
						db.query('bpclight','INSERT INTO ageetat (kage,kpst,dateta) VALUES ('+r0[0].Kage+',6,NOW())',function(e,a) {
							if (i+1<total) setPNA(response,i+1,cb); else {
								cb(selectPNA);
								console.log('FOUNDIT --------');
							}							
						});
					} else {
							if (i+1<total) setPNA(response,i+1,cb); else {
								cb(selectPNA);
							}		
					}
				} else {
					if (i+1<total) setPNA(response,i+1,cb); else {
						cb(selectPNA);
					}				
				}			
			});
		};
		function setParti(response,i,cb)
		{
			var age=[5];
			var total=response.length;
			db.query('bpclight','select * from ageetat where ageetat.dateta<=NOW() and ageetat.Kage='+response[i].kage+' order by dateta desc limit 1',function(err,r0) {
				if (r0.length>0) {
					if (age.indexOf(r0[0].Kpst)>-1) {
						selectPARTI.push(r0[0].Kage);
						db.query('bpclight','INSERT INTO ageetat (kage,kpst,dateta) VALUES ('+r0[0].Kage+',10,NOW())',function(e,a) {
							if (i+1<total) setParti(response,i+1,cb); else {
								cb(selectPARTI);
								console.log('FOUNDIT --------');
							}							
						});
					} else {
							if (i+1<total) setParti(response,i+1,cb); else {
								cb(selectPARTI);
							}		
					}
				} else {
					if (i+1<total) setParti(response,i+1,cb); else {
						cb(selectPARTI);
					}				
				}			
			});
		};		
		function setChangementService(response,i,cb)
		{
			var age=[1,3];
			var total=response.length;
			db.query('bpclight','select * from ageetat where ageetat.dateta<=NOW() and ageetat.Kage='+response[i].kage+' order by dateta desc limit 1',function(err,r0) {
				if (r0.length>0) {
					if (age.indexOf(r0[0].Kpst)>-1) {
						selectCHANGEMENT.push(r0[0].Kage);
						db.query('bpclight','UPDATE agents SET kets='+r0[0].Ketsnew+', kuni='+r0[0].Kuninew+', ksub='+r0[0].Ksubnew+' WHERE kage='+r0[0].Kage,function(e,a) {
							if (i+1<total) setChangementService(response,i+1,cb); else {
								cb(selectCHANGEMENT);
								console.log('FOUNDIT --------');
							}							
						});
					} else {
							if (i+1<total) setChangementService(response,i+1,cb); else {
								cb(selectCHANGEMENT);
							}		
					}
				} else {
					if (i+1<total) setChangementService(response,i+1,cb); else {
						cb(selectCHANGEMENT);
					}				
				}
			});
		};
		var db=Update.using('db');
		
		db.query('bpclight','select distinct kage from agents where actif=1',function(err,response) {
			// on recense les agents inactifs
			get(response,0,function(s) {
				db.query('bpclight','UPDATE agents set actif=0 where kage in ('+s.join(',')+')',function(err,rx) {
					cbx(err,rx);
				});			
			});
			console.log('SET CHANGEMENT ---------------------------------------------------------');
			setChangementService(response,0,function(s) {
				console.log('finished');
				console.log('SET PNA ---------------------------------------------------------------');
				setPNA(response,0,function(s) {
					console.log('finished');
				});
				console.log('SET PARTI --------------------------------------------------------------');
				setParti(response,0,function(s) {
					console.log('finished');
				});				
			});				
		});
			
	}
}

module.exports = Update;