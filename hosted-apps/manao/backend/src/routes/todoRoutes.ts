import { Router, Request, Response } from 'express';
import { todoService } from '../services/todoService';
import { CreateTodoRequest, UpdateTodoRequest } from '../types/todo';

const router = Router();

/**
 * GET /api/todos - Get all todos
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json({
      success: true,
      data: todos
    });
  } catch (error) {
    console.error('Error in GET /api/todos:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

/**
 * GET /api/todos/:id - Get a single todo by ID
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid todo ID'
      });
    }

    const todo = await todoService.getTodoById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }

    res.json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Error in GET /api/todos/:id:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

/**
 * POST /api/todos - Create a new todo
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, completed }: CreateTodoRequest = req.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required and must be a non-empty string'
      });
    }

    const todo = await todoService.createTodo({
      title: title.trim(),
      completed: completed ?? false
    });

    res.status(201).json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Error in POST /api/todos:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

/**
 * PUT /api/todos/:id - Update an existing todo
 */
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid todo ID'
      });
    }

    const { title, completed }: UpdateTodoRequest = req.body;

    // Validate that at least one field is provided
    if (title === undefined && completed === undefined) {
      return res.status(400).json({
        success: false,
        error: 'At least one field (title or completed) must be provided'
      });
    }

    // Validate title if provided
    if (title !== undefined && (typeof title !== 'string' || title.trim().length === 0)) {
      return res.status(400).json({
        success: false,
        error: 'Title must be a non-empty string'
      });
    }

    const updateData: UpdateTodoRequest = {};
    if (title !== undefined) updateData.title = title.trim();
    if (completed !== undefined) updateData.completed = Boolean(completed);

    const todo = await todoService.updateTodo(id, updateData);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }

    res.json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Error in PUT /api/todos/:id:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

/**
 * PATCH /api/todos/:id/toggle - Toggle todo completion status
 */
router.patch('/:id/toggle', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid todo ID'
      });
    }

    const todo = await todoService.toggleTodo(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }

    res.json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Error in PATCH /api/todos/:id/toggle:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

/**
 * DELETE /api/todos/:id - Delete a todo
 */
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid todo ID'
      });
    }

    const deleted = await todoService.deleteTodo(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }

    res.json({
      success: true,
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    console.error('Error in DELETE /api/todos/:id:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

export default router;