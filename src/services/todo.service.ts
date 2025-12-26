import type { Todo } from '@/types';

import todoStorage from '@/services/todo.storage';

const generateId = (): string => {
    if (crypto?.randomUUID) return crypto.randomUUID();

    return (
        Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
    );
};

const todoService = {
    getTodos: async (): Promise<Todo[]> => {
        return todoStorage.getAll();
    },
    addTodo: async (title: string): Promise<Todo[]> => {
        const todos = todoStorage.getAll();

        const newTodo: Todo = {
            id: generateId(),
            title,
            completed: false,
            createdAt: Date.now(),
        };

        const updatedTodos: Todo[] = [newTodo, ...todos];
        todoStorage.saveAll(updatedTodos);

        return updatedTodos;
    },
    toggleTodo: async (id: string): Promise<Todo[]> => {
        const todos = todoStorage.getAll();

        const updatedTodos: Todo[] = todos.map((todo: Todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        );

        todoStorage.saveAll(updatedTodos);
        return updatedTodos;
    },
    deleteTodo: async (id: string): Promise<Todo[]> => {
        const todos = todoStorage.getAll();

        const updatedTodos: Todo[] = todos.filter(
            (todo: Todo) => todo.id !== id,
        );

        todoStorage.saveAll(updatedTodos);
        return updatedTodos;
    },
};

export default todoService;
