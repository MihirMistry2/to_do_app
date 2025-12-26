import { useEffect, useState } from 'react';

import { type Todo } from '@/types';
import todoService from '@/services/todo.service';

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        todoService
            .getTodos()
            .then(setTodos)
            .catch(err => setError(err as Error))
            .finally(() => setLoading(false));
    }, []);

    const addTodo = async (title: string) => {
        try {
            const todos = await todoService.addTodo(title);
            setTodos(todos);
        } catch (error) {
            setError(error as Error);
        }
    };

    const toggleTodo = async (id: string) => {
        try {
            const todos = await todoService.toggleTodo(id);
            setTodos(todos);
        } catch (error) {
            setError(error as Error);
        }
    };

    const deleteTodo = async (id: string) => {
        try {
            const todos = await todoService.deleteTodo(id);
            setTodos(todos);
        } catch (error) {
            setError(error as Error);
        }
    };

    return {
        todos,
        loading,
        error,
        addTodo,
        toggleTodo,
        deleteTodo,
    };
};

export default useTodos;
