const pool = require('../db');

const User = {
  async findByLogin(login) {
    const [rows] = await pool.query('SELECT * FROM users WHERE login = ?', [login]);
    return rows[0];
  },
  
  async create({ login, password, email, full_name }) {
    const [result] = await pool.query('INSERT INTO users (login, password, email, full_name) VALUES (?, ?, ?, ?)', [login, password, email, full_name]);
    return result.insertId;
  }
};

module.exports = User;
