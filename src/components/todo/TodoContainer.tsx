import { EMPTY_STATE_CONTENT } from '@/constants';
import type { TodoContainerProps, Todo } from '@/types';

import TodoList from '@/components/todo/TodoList';
import EmptyState from '@/components/todo/EmptyState';

const TodoContainer: React.FC<TodoContainerProps> = ({
    activeFilter,
    isAddTodoOpen,
    todos,
    toggleTodo,
    deleteTodo,
}): React.ReactElement => {
    const { title, description } = EMPTY_STATE_CONTENT[activeFilter];

    const filteredTodos = todos.filter((todo: Todo) => {
        if (activeFilter === 'completed') return todo.completed;
        if (activeFilter === 'pending') return !todo.completed;
        return true;
    });

    return filteredTodos.length ? (
        <TodoList
            isAddTodoOpen={isAddTodoOpen}
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
        />
    ) : (
        <EmptyState title={title} description={description} />
    );
};

export default TodoContainer;
