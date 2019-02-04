exports.up = function(knex, Promise) {
  return knex.schema.createTable("coordinator", tbl => {
    tbl.increments();

    tbl
      .string("username", 128)
      .notNullable()
      .unique();

    tbl.string("password", 128).notNullable();

    tbl.string("name", 128).notNullable();

    tbl
      .string("email", 128)
      .notNullable()
      .unique();

    tbl.string("job-title", 128).notNullable();

    tbl
      .string("country_name")
      .unsigned()
      .references("name")
      .inTable("country");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("coordinator", tbl => {
    tbl.dropUnique("email");
    tbl.dropUnique("username");
  });
};
