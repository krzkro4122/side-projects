import { execSync } from 'child_process';
import { prisma } from '../lib/prisma';

async function initializeDatabase() {
  try {
    console.log('🔧 Initializing database...');

    // Generate Prisma client
    console.log('📦 Generating Prisma client...');
    execSync('npx prisma generate', { stdio: 'inherit' });

    // Push schema to database
    console.log('🗄️  Pushing schema to database...');
    execSync('npx prisma db push', { stdio: 'inherit' });

    // Test database connection
    console.log('🔍 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful!');

    // Check if we have any todos
    const todoCount = await prisma.todo.count();
    console.log(`📝 Found ${todoCount} existing todos`);

    // Add some sample todos if database is empty
    if (todoCount === 0) {
      console.log('🌱 Adding sample todos...');
      await prisma.todo.createMany({
        data: [
          {
            title: 'Learn TypeScript',
            completed: false
          },
          {
            title: 'Set up Prisma with SQLite',
            completed: true
          },
          {
            title: 'Build a Todo API',
            completed: false
          },
          {
            title: 'Connect frontend to backend',
            completed: false
          }
        ]
      });
      console.log('✅ Sample todos added!');
    }

    console.log('🎉 Database initialization complete!');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run initialization if this script is executed directly
if (require.main === module) {
  initializeDatabase();
}

export { initializeDatabase };