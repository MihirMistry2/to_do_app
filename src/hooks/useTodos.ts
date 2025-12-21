import { useEffect, useState } from 'react';

import { type Todo, TODOS_STORAGE_KEY } from '@/types';

const loadTodos = (): Todo[] => {
    try {
        const stored = localStorage.getItem(TODOS_STORAGE_KEY);
        return stored ? (JSON.parse(stored) as Todo[]) : [];
    } catch (error) {
        return [];
    }
};

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(loadTodos);

    useEffect(() => {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title: string) => {
        setTodos(prev => [
            {
                id: crypto.randomUUID(),
                title,
                completed: false,
                createdAt: Date.now(),
            },
            ...prev,
        ]);
    };

    const toggleTodo = (id: string) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
    };
};

export default useTodos;
