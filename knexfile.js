// Update with your config settings.

module.exports = {
  //   development: {
  //     client: "sqlite3",
  //     useNullAsDefault: true,
  //     connection: {
  //       filename: "./data/users.db3",
  //     },
  //   },
  development: {
    client: "pg",
    connection: "postgres://localhost/users2",
  },
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreing_keys = ON", done);
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    //  migrations: {
    //    directory: "./data/migrations",
    //  },
    //  seeds: {
    //    directory: "./data/seeds",
    //  },
  },
};
