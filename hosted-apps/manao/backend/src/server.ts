import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { readFile } from 'fs/promises';
import path from 'path';
import todoRoutes from './routes/todoRoutes';

const app = express();
const PORT = process.env.PORT || 5002;

app.use(helmet());

app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://krzysztofkrol.dev'] // Replace with your actual domain
    : ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

app.use(morgan('combined'));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(['/api/todo', '/manao/api/todo'], todoRoutes);

app.get(['/api/healthcheck', '/manao/api/healthcheck'], (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.use(express.static(path.join(__dirname, './templates')));

app.get(['/', '/manao'], async (req, res) => {
  try {
    const htmlPath = path.join(__dirname, './templates/index.html');
    const html = await readFile(htmlPath, 'utf-8');
    res.send(html);
  } catch (error) {
    console.error('Error serving index.html:', error);
    res.status(500).send('Error loading application');
  }
});

app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📝 Todo API: http://localhost:${PORT}/api/todo`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
