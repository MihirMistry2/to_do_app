import { useMemo } from 'react';
import { FaRegClipboard, FaMagnifyingGlass } from 'react-icons/fa6';

import { EMPTY_STATE_CONTENT } from '@/constants';

import EmptyState from '@/components/todo/EmptyState';
import TodoList from '@/components/todo/TodoList';

import type { TodoContainerProps, Todo } from '@/types';

const TodoContainer: React.FC<TodoContainerProps> = ({
    search,
    activeFilter,
    isAddTodoOpen,
    todos,
    toggleTodo,
    deleteTodo,
}): React.ReactElement => {
    const { title, description } = EMPTY_STATE_CONTENT[activeFilter];

    const normalizedSearch = search.trim().toLowerCase();
    const hasSearch = normalizedSearch.length > 0;

    const filteredTodos = useMemo(() => {
        return todos.filter((todo: Todo) => {
            const matchesSearch = todo.title
                .toLowerCase()
                .includes(normalizedSearch);
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
    }, [todos, normalizedSearch, activeFilter]);

    return filteredTodos.length ? (
        <TodoList
            isAddTodoOpen={isAddTodoOpen}
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
        />
    ) : hasSearch ? (
        <EmptyState
            icon={FaMagnifyingGlass}
            title={`No Matches For "${search}"`}
            description="Try A Different Keyword Or Clear The Search"
        />
    ) : (
        <EmptyState
            icon={FaRegClipboard}
            title={title}
            description={description}
        />
    );
};

export default TodoContainer;
