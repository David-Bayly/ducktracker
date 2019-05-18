
exports.up = function(knex, Promise) {
	return Promise.all([
	    knex.schema.createTable('feedentries', (table) => {
	      table.integer('feeding record').references('feedingrecords');
	      table.string('Type');
	      table.string('Quantity');
	    }),
	    knex.schema.createTable("feedingrecords",(table)=>{
	    	table.increments();
	    	table.dateTime('Date');
	    	table.dateTime('Time');
	    	table.integer('Number of Ducks');
	    	table.string("Location");
	    	table.string("Repeat");
	    })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
    knex.schema.dropTableIfExists('feedingrecords'),
    knex.schema.dropTableIfExists('feedentries')
  ]);
};
