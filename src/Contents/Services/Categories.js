Categories = {
	getAll: function(o,cb)
	{
		var db=Categories.using('db');
		db.model('bpclight','select * from catgrad order by LibCgr',cb);
	},
	getAllButOther: function(o,cb)
	{
		var db=Categories.using('db');
		db.model('bpclight','select * from catgrad order by LibCgr where kcgr<>5',cb);
	},	
	getGrades: function(o,cb)
	{
		var db=Categories.using('db');
		db.model('bpclight','select * from grades where Kcgr='+o.catgrad,cb);
	}
};

module.exports=Categories;
