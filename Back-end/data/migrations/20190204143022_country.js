exports.up = function(knex, Promise) {
  return knex.schema.createTable("country", tbl => {
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("country", tbl => {
    tbl.dropUnique("name");
  });
};
