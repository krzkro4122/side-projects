# Manao Todo Backend

A modern TypeScript backend for the Manao Todo application with Express, Prisma, and SQLite.

## 🚀 Features

- **TypeScript** - Full type safety and modern JavaScript features
- **Express.js** - Fast, unopinionated web framework
- **Prisma** - Type-safe database client with auto-generated types
- **SQLite** - Lightweight, file-based database
- **CORS** - Cross-origin resource sharing support
- **Helmet** - Security headers
- **Morgan** - HTTP request logging
- **Full CRUD API** - Create, Read, Update, Delete todos

## 📋 API Endpoints

### Todos

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a single todo by ID
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update an existing todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion status
- `DELETE /api/todos/:id` - Delete a todo

### Health Check

- `GET /api/health` - Server health status

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   ```bash
   npm run setup
   ```
   This will:
   - Generate the Prisma client
   - Create the SQLite database
   - Add sample todos

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5002`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run setup` - Initialize database and add sample data
- `npm run db:init` - Initialize database only
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio (database GUI)
- `npm run db:migrate` - Create and apply migrations
- `npm run db:reset` - Reset database (⚠️ destructive)

## 🗄️ Database

The application uses SQLite with Prisma as the ORM. The database file is located at `prisma/dev.db`.

### Schema

```prisma
model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("todos")
}
```

## 🔧 Development

### Project Structure

```
src/
├── lib/
│   └── prisma.ts          # Prisma client configuration
├── routes/
│   └── todoRoutes.ts      # Todo API routes
├── services/
│   └── todoService.ts     # Todo business logic
├── types/
│   └── todo.ts           # TypeScript type definitions
├── scripts/
│   └── initDb.ts         # Database initialization
└── server.ts             # Main server file
```

### Adding New Features

1. **New Models**: Update `prisma/schema.prisma`
2. **New Services**: Create in `src/services/`
3. **New Routes**: Create in `src/routes/`
4. **New Types**: Add to `src/types/`

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
NODE_ENV=development
PORT=5002
```

## 🚀 Production

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

## 🔍 API Examples

### Create a Todo

```bash
curl -X POST http://localhost:5002/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "completed": false}'
```

### Get All Todos

```bash
curl http://localhost:5002/api/todos
```

### Update a Todo

```bash
curl -X PUT http://localhost:5002/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries and milk", "completed": true}'
```

### Toggle Todo Completion

```bash
curl -X PATCH http://localhost:5002/api/todos/1/toggle
```

### Delete a Todo

```bash
curl -X DELETE http://localhost:5002/api/todos/1
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.