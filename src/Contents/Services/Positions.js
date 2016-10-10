Positions={
	getAll: function(o,cb)
	{
		var db=Positions.using('db');
		db.model('bpclight','select * from position where Archive<>1',cb);
	}
};

module.exports = Positions;