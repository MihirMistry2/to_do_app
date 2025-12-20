import type { MainProps } from '@/types/todo';

import TodoFilters from '@/components/todo/TodoFilters';
import TodoAdd from '@/components/todo/TodoAdd';

const Main: React.FC<MainProps> = ({
    activeFilter,
    setActiveFilter,
    isAddTodoOpen,
    setIsAddTodoOpen,
}): React.ReactElement => {
    return (
        <main className="flex h-full flex-1 flex-col gap-y-6 overflow-hidden">
            <TodoFilters
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            {isAddTodoOpen && <TodoAdd setIsAddTodoOpen={setIsAddTodoOpen} />}
        </main>
    );
};

export default Main;
