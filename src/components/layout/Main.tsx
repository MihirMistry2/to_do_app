import useTodos from '@/hooks/useTodos';

import TodoAdd from '@/components/todo/TodoAdd';
import TodoContainer from '@/components/todo/TodoContainer';
import TodoFilters from '@/components/todo/TodoFilters';

import type { MainProps } from '@/types';

const Main: React.FC<MainProps> = ({
    activeFilter,
    setActiveFilter,
    isAddTodoOpen,
    setIsAddTodoOpen,
}): React.ReactElement => {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

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
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </main>
    );
};

export default Main;
