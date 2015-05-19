Temptation = {
	search: function(str,cb)
	{
		var db=Temptation.using('db');
		db.query('temptation',"SELECT DISTINCT Hm.MATRI, Hm.NOMPRE FROM HopeMpl Hm WHERE Hm.NomPre LIKE '%"+str+"%'",cb);
	}
};

module.exports = Temptation;