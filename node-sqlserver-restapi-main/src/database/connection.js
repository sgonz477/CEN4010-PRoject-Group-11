import sql from "mysql2";
import config from "../config.js";

const connection = sql.createPool({
  host: config.dbServer,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
});

export const getConnection = async () => {
  try {
    return connection.promise();
  } catch (error) {
    console.error(error);
  }
};

export { sql };
