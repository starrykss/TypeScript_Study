import express from 'express';
import todoRoutes from './routes/todo.js';
const app = express();
app.use(express.json());
app.use(todoRoutes);
// 에러 처리
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'An error occurred!',
    });
});
app.listen(3000);
