import type { Dispatch, SetStateAction } from 'react';

import type { FilterType as Filter } from '@/constants';

export const TODOS_STORAGE_KEY = 'todos';

export interface Todo {
    readonly id: string;
    title: string;
    completed: boolean;
    readonly createdAt: number;
}

export interface MainProps {
    activeFilter: Filter;
    setActiveFilter: Dispatch<React.SetStateAction<Filter>>;
    isAddTodoOpen: boolean;
    setIsAddTodoOpen: Dispatch<React.SetStateAction<boolean>>;
}

export interface TodoAddProps {
    isAddTodoOpen: boolean;
    setIsAddTodoOpen: Dispatch<SetStateAction<boolean>>;
}

export interface TodoContainerProps {
    activeFilter: Filter;
    isAddTodoOpen: boolean;
}

export interface TodoListProps {
    isAddTodoOpen: boolean;
    todos: Todo[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}
