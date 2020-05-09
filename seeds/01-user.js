exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users2")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users2").insert([
        { first_name: "lalo", last_name: "perez" },
        { first_name: "juan", last_name: "valdez" },
        { first_name: "smith", last_name: "john" },
        { first_name: "jake", last_name: "lug" },
      ]);
    });
};
