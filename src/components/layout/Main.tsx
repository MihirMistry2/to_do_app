import type { MainProps } from '@/types/todo';

import { EMPTY_STATE_CONTENT } from '@/constants';

import TodoFilters from '@/components/todo/TodoFilters';
import TodoAdd from '@/components/todo/TodoAdd';
import EmptyState from '@/components/todo/EmptyState';

const Main: React.FC<MainProps> = ({
    activeFilter,
    setActiveFilter,
    isAddTodoOpen,
    setIsAddTodoOpen,
}): React.ReactElement => {
    const { title, description } = EMPTY_STATE_CONTENT[activeFilter];

    return (
        <main className="flex h-full flex-1 flex-col gap-y-6 overflow-hidden">
            <TodoFilters
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <TodoAdd
                isAddTodoOpen={isAddTodoOpen}
                setIsAddTodoOpen={setIsAddTodoOpen}
            />
            <EmptyState title={title} description={description} />
        </main>
    );
};

export default Main;
