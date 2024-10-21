
const db = require('../config/connect')

// Hàm để tạo người dùng mới
const createUser = (userData, callback) => {
  const sql = 'INSERT INTO nguoidung SET ?';
  db.query(sql, userData, callback);
};

// Hàm để tìm người dùng theo email
const findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM nguoidung WHERE email = ?';
  db.query(sql, [email], callback);
};

// Hàm để tìm người dùng để tạo JWT token
const findUserForJWT = (email, callback) => {
  const sql = 'SELECT idNguoiDung AS id, email, ten, quyen FROM nguoiDung WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    // Kiểm tra xem kết quả có dữ liệu không
    if (results.length > 0) {
      return callback(null, results[0]);  // Lấy phần tử đầu tiên của kết quả
    } else {
      return callback(new Error('Không tìm thấy người dùng'), null);
    }
  });
};

module.exports = { createUser, findUserByEmail, findUserForJWT };