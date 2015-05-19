Temptation = {
	search: function(str,cb)
	{
		var db=Temptation.using('db');
		db.query('temptation',"SELECT DISTINCT Hm.MATRI matri, Hm.NOMPRE nompre FROM HopeMpl Hm WHERE Hm.NomPre LIKE '%"+str+"%'",cb);
	}
};

module.exports = Temptation;