import { FaPlus, FaXmark, FaCheck } from 'react-icons/fa6';

import type { TodoAddProps } from '@/types/todo';
import IconButton from '@/components/ui/IconButton';

const TodoAdd: React.FC<TodoAddProps> = ({
    isAddTodoOpen,
    setIsAddTodoOpen,
}): React.ReactElement | null => {
    const handleAddClick = () => {
        setIsAddTodoOpen(false);
    };
    const handleCancleCLick = () => {
        setIsAddTodoOpen(false);
    };

    return isAddTodoOpen ? (
        <section className="border-surface-tonal-a30 bg-surface-tonal-a05 flex h-auto shrink-0 items-center gap-2 rounded-full border p-2">
            <div className="text-primary-a40 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#c66be033] p-2 sm:h-8 sm:min-w-8 md:h-8 md:min-w-8">
                <FaPlus className="text-base md:text-sm" />
            </div>
            <input
                type="text"
                className="h-9 w-full bg-transparent p-2 text-sm text-black outline-none sm:h-8 sm:py-1.5 dark:text-white"
                placeholder="Add a new task..."
            />
            <IconButton
                className="bg-danger-a30 text-danger-a0 active:bg-danger-a30 flex h-9 min-w-9 items-center justify-center rounded-full p-2 transition duration-200 ease-out outline-none active:scale-[0.97] sm:h-8 sm:min-w-8 md:h-8 md:min-w-8"
                icon={FaXmark}
                iconClassName="text-base md:text-sm"
                onClick={handleAddClick}
            />
            <IconButton
                className="bg-success-a30 text-success-a0 active:bg-success-a30 flex h-9 min-w-9 items-center justify-center rounded-full p-2 transition duration-200 ease-out outline-none active:scale-[0.97] sm:h-8 sm:min-w-8 md:h-8 md:min-w-8"
                icon={FaCheck}
                iconClassName="text-base md:text-sm"
                onClick={handleCancleCLick}
            />
        </section>
    ) : null;
};

export default TodoAdd;
