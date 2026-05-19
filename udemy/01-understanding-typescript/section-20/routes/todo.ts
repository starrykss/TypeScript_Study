import express, { type Request, type Response } from 'express';

import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from '../data.ts';

enum TODO_TYPE {
  BASIC,
  URGENT,
}

const router = express.Router();

// function handlePostTodos(req: Request, res: Response) {}

// POST 요청
router.post('/todos', (req, res) => {
  const text = req.body.text;

  const addedTodo = addTodo(text);

  res.json({
    message: 'Todo added!',
    todo: addedTodo,
  });
});

// GET 요청
router.get('/todos', (req, res) => {
  const todos = getTodos();
  res.json({
    todos,
  });
});

router.get('/todos/:id', (req, res) => {
  const todo = getTodo(+req.params.id); // + : string -> number

  res.json({ todo });
});

// PATCH 요청
router.patch('/todos/:id', (req, res) => {
  const updatedTodo = updateTodo(+req.params.id, req.body.text);

  res.json({
    message: 'Todo updated',
    todo: updatedTodo,
  });
});

// DELETE 요청
router.delete('/todos/:id', (req, res) => {
  removeTodo(+req.params.id);

  res.json({
    message: 'Todo deleted!',
  });
});

export default router;
