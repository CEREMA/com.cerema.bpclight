Medical={
	getTypes: function(o,cb)
	{
		Medical.using('db').model('bpclight','select * from medic_types',cb);
	},
	getCats: function(o,cb)
	{
		Medical.using('db').model('bpclight','select * from medic_cats',cb);
	}
};

module.exports=Medical;