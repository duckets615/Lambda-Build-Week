exports.up = function(knex, Promise) {
  return knex.schema.createTable("stories", tbl => {
    tbl.increments();

    tbl.string("title", 128).notNullable();

    tbl
      .string("story_country")
      .unsigned()
      .references("country_name")
      .inTable("coordinator");

    tbl.string("description", 255);

    tbl.date("date");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("stories");
};
