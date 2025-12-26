import { type Todo, TODOS_STORAGE_KEY } from '@/types';

const parseTodos = (value: string | null): Todo[] => {
    if (!value) return [];

    try {
        return JSON.parse(value) as Todo[];
    } catch {
        return [];
    }
};

const todoStorage = {
    getAll: (): Todo[] => {
        const stored = localStorage.getItem(TODOS_STORAGE_KEY);
        return parseTodos(stored);
    },
    saveAll: (todos: Todo[]): void => {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    },
};

export default todoStorage;
