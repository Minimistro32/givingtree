/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('gift', (table) =>  {
        table.increments('id');
        table.string('img');
        table.string('desc');
        table.float('suggest_price');
        table.timestamps(true, true)
        table.string('url');
        table.string('delivery_msg');
        table.float('commit_price');
        table.string('venmo');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('gift');
};
