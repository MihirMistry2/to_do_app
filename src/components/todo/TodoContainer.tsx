import { EMPTY_STATE_CONTENT } from '@/constants';

import EmptyState from '@/components/todo/EmptyState';
import TodoList from '@/components/todo/TodoList';

import type { TodoContainerProps } from '@/types';

const TodoContainer: React.FC<TodoContainerProps> = ({
    activeFilter,
    isAddTodoOpen,
    todos,
    toggleTodo,
    deleteTodo,
}): React.ReactElement => {
    const { title, description } = EMPTY_STATE_CONTENT[activeFilter];

    return todos.length ? (
        <TodoList
            isAddTodoOpen={isAddTodoOpen}
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
        />
    ) : (
        <EmptyState title={title} description={description} />
    );
};

export default TodoContainer;
