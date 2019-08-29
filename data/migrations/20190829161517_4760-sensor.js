
exports.up = function(knex) {
    return knex.schema.createTable('4760', function(tbl) {
        tbl
        .string('date', 16)
        .notNullable();

        tbl
        .integer('status', 1)
        .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('4760');
};
