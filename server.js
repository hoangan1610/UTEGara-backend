const express = require('express');
const { connectDB, sequelize } = require('./config/db'); // Đảm bảo bạn đang xuất `sequelize` từ config/db
require('dotenv').config(); // Đọc các biến môi trường từ file .env

// Khởi tạo ứng dụng Express
const app = express();

// Kết nối đến cơ sở dữ liệu MySQL
connectDB();

// Middleware
app.use(express.json()); // Xử lý JSON từ body của request

// Routes (Thêm các route khi cần)
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));


// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});

// Đồng bộ cơ sở dữ liệu (Đảm bảo cơ sở dữ liệu được đồng bộ mà không xóa dữ liệu)
sequelize.sync({ force: false });

