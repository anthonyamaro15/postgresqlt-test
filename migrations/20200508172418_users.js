exports.up = function (knex) {
  return knex.schema.createTable("users2", (table) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users2");
};
