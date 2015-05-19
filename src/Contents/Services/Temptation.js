Temptation = {
	search: function(str,cb)
	{
		var db=Temptation.using('db');
		var matri=[];
		db.query('bpclight','SELECT matri FROM agents WHERE actif=1',function(e,o) {
			for (var i=0;i<o.length;i++) matri.push(o[i].matri);
			db.query('temptation',"SELECT DISTINCT Hm.MATRI matri, Hm.NOMPRE nompre FROM HopeMpl Hm WHERE Hm.MATRI not in ('"+matri.join('\',\'')+"')",cb);
		});		
	}
};

module.exports = Temptation;