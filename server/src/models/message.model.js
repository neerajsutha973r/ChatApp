import pool from "./db.js";

const MessageModel = {
  async createMessage(userId, message) {
    // Insert the message and get its ID
    const { rows } = await pool.query(
      `INSERT INTO messages (user_id, message)
       VALUES ($1, $2)
       RETURNING id`,
      [userId, message]
    );

    const messageId = rows[0].id;

    // Fetch the complete message with username
    const result = await pool.query(
      `SELECT
          m.id,
          m.user_id,
          u.username,
          m.message,
          m.created_at
       FROM messages m
       JOIN users u
         ON m.user_id = u.id
       WHERE m.id = $1`,
      [messageId]
    );

    return result.rows[0];
  },

  async getAllMessages() {
    const { rows } = await pool.query(
      `SELECT
          m.id,
          m.user_id,
          u.username,
          m.message,
          m.created_at
       FROM messages m
       JOIN users u
         ON m.user_id = u.id
       ORDER BY m.created_at ASC`
    );

    return rows;
  },
};

export default MessageModel;