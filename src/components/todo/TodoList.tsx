import clsx from 'clsx';

import TodoItem from '@/components/todo/TodoItem';

import type { TodoListProps } from '@/types';

const TodoList: React.FC<TodoListProps> = ({
    isAddTodoOpen,
    todos,
    toggleTodo,
    deleteTodo,
}) => {
    return (
        <section
            className={clsx(
                'hide-scrollbar hide-scrollbar hide-scrollbar flex-1 space-y-1 overflow-y-auto',
                isAddTodoOpen ? 'h-[calc(100%-122px)]' : 'h-[calc(100%-52px)]',
            )}
        >
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </section>
    );
};

export default TodoList;
