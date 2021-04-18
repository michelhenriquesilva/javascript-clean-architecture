import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "full_cycle_clean_arch",
  idleTimeoutMillis: 100,
});

export default db;
