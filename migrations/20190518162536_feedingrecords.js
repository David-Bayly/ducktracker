
exports.up = function(knex, Promise) {
	return knex.schema.table("feedingrecords",(table)=>{
		table.dropColumn('Time');
    	table.string("time");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('feedingrecords', function(table) {
        table.dropColumn('time');
    });
};
