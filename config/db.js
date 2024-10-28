const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('utegara', 'root', '123456@', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối đến MySQL thành công!');
  } catch (error) {
    console.error('Kết nối thất bại:', error);
  }
};

module.exports = { sequelize, connectDB };
