import pool from "./db.js";

const UserModel = {
  async createUser(username, password) {
    const { rows } = await pool.query(
      `INSERT INTO users(username, password)
       VALUES($1, $2)
       RETURNING *`,
      [username, password]
    );

    return rows[0];
  },

  async findUserByUsername(username) {
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE username = $1`,
      [username]
    );

    return rows[0];
  },

  async findUserById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );

    return rows[0];
  },
};

export default UserModel;