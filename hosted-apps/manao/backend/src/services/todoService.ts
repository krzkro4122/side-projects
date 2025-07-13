import { prisma } from '../lib/prisma';
import {
  TodoResolved,
  CreateTodoRequest,
  UpdateTodoRequest
} from '../types/todo';

export class TodoService {
  /**
   * Get all todos
   */
  async getAllTodos(): Promise<TodoResolved[]> {
    try {
      const todos = await prisma.todo.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });

      return todos.map(todo => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      }));
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw new Error('Failed to fetch todos');
    }
  }

  /**
   * Get a single todo by ID
   */
  async getTodoById(id: number): Promise<TodoResolved | null> {
    try {
      const todo = await prisma.todo.findUnique({
        where: { id }
      });

      if (!todo) {
        return null;
      }

      return {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      };
    } catch (error) {
      console.error('Error fetching todo:', error);
      throw new Error('Failed to fetch todo');
    }
  }

  /**
   * Create a new todo
   */
  async createTodo(data: CreateTodoRequest): Promise<TodoResolved> {
    try {
      const todo = await prisma.todo.create({
        data: {
          title: data.title,
          completed: data.completed ?? false
        }
      });

      return {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      };
    } catch (error) {
      console.error('Error creating todo:', error);
      throw new Error('Failed to create todo');
    }
  }

  /**
   * Update an existing todo
   */
  async updateTodo(id: number, data: UpdateTodoRequest): Promise<TodoResolved | null> {
    try {
      const todo = await prisma.todo.update({
        where: { id },
        data: {
          ...(data.title !== undefined && { title: data.title }),
          ...(data.completed !== undefined && { completed: data.completed })
        }
      });

      return {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      };
    } catch (error) {
      console.error('Error updating todo:', error);
      if (error instanceof Error && error.message.includes('Record to update not found')) {
        return null;
      }
      throw new Error('Failed to update todo');
    }
  }

  /**
   * Delete a todo
   */
  async deleteTodo(id: number): Promise<boolean> {
    try {
      await prisma.todo.delete({
        where: { id }
      });
      return true;
    } catch (error) {
      console.error('Error deleting todo:', error);
      if (error instanceof Error && error.message.includes('Record to delete does not exist')) {
        return false;
      }
      throw new Error('Failed to delete todo');
    }
  }

  /**
   * Toggle todo completion status
   */
  async toggleTodo(id: number): Promise<TodoResolved | null> {
    try {
      const existingTodo = await prisma.todo.findUnique({
        where: { id }
      });

      if (!existingTodo) {
        return null;
      }

      const todo = await prisma.todo.update({
        where: { id },
        data: {
          completed: !existingTodo.completed
        }
      });

      return {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      };
    } catch (error) {
      console.error('Error toggling todo:', error);
      throw new Error('Failed to toggle todo');
    }
  }
}

export const todoService = new TodoService();
