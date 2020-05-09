const server = require("./api/server");

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`server running in port ${PORT}`));

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex("users")
//     .truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex("users").insert([
//         { first_name: "lalo", last_name: "perez" },
//         { first_name: "juan", last_name: "valdez" },
//         { first_name: "smith", last_name: "john" },
//         { first_name: "jake", last_name: "lug" },
//       ]);
//     });
// };
