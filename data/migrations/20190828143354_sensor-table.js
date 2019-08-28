
exports.up = function(knex) {
  return knex.schema.createTable('sensors', function(tbl) {

    tbl
    .integer('sensorId')
    .notNullable()
    .unique();

    tbl
    .integer('overallStatus')
    .notNullable();

    tbl
    .specificType('datesArray', 'string ARRAY');

    tbl
    .specificType('statusesArray', 'object ARRAY');


  })

  return knex.schema.createTable('dates', function(tbl) {

    tbl
    .string('date', 16)
    .notNullable();

    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sensors');
};
