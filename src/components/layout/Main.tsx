import { useMemo } from 'react';
import useTodos from '@/hooks/useTodos';

import TodoAdd from '@/components/todo/TodoAdd';
import TodoContainer from '@/components/todo/TodoContainer';
import TodoFilters from '@/components/todo/TodoFilters';

import type { MainProps, Todo } from '@/types';

const Main: React.FC<MainProps> = ({
    search,
    activeFilter,
    setActiveFilter,
    isAddTodoOpen,
    setIsAddTodoOpen,
}): React.ReactElement => {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

    const filteredTodos = useMemo(() => {
        return todos.filter((todo: Todo) => {
            const matchesSearch = todo.title
                .toLowerCase()
                .includes(search.toLowerCase());
            let matchesFilter: boolean;

            switch (activeFilter) {
                case 'completed':
                    matchesFilter = todo.completed;
                    break;
                case 'pending':
                    matchesFilter = !todo.completed;
                    break;
                default:
                    matchesFilter = true;
                    break;
            }

            return matchesSearch && matchesFilter;
        });
    }, [todos, search, activeFilter]);

    return (
        <main className="flex h-full flex-1 flex-col gap-y-6 overflow-hidden">
            <TodoFilters
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <TodoAdd
                isAddTodoOpen={isAddTodoOpen}
                setIsAddTodoOpen={setIsAddTodoOpen}
                addTodo={addTodo}
            />
            <TodoContainer
                activeFilter={activeFilter}
                isAddTodoOpen={isAddTodoOpen}
                todos={filteredTodos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </main>
    );
};

export default Main;
