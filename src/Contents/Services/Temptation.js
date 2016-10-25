Temptation = {
	search: function(str,cb)
	{
		var db=Temptation.using('db');
		db.query('temptation',"SELECT MATRI matri, NOMPRE nompre, datouv FROM HopeMpl Hm where YEAR(datouv)>=YEAR(GetDate()) and datclo='1900-01-01' order by datouv desc",cb);
	},
	quotite: function(str,cb) {
		Temptation.using('db').query('temptation',"SELECT MATRI, INETP,DAT FROM dbo.hophjoup WHERE MATRI LIKE '"+str+"' ORDER BY DAT",function(e,r){
			console.log(e);
			console.log(r);
			cb();
		})
	}
};

module.exports = Temptation;