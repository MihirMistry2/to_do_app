import clsx from 'clsx';
import { FaCheck, FaTrash } from 'react-icons/fa6';

interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
    id,
    title,
    completed,
    toggleTodo,
    deleteTodo,
}) => {
    return (
        <div className="group border-surface-tonal-a30 relative flex w-full items-center gap-4 border-b px-1 py-2 last:border-b-0">
            <label
                className={clsx(
                    'group/checkbox relative flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-sm hover:bg-[#c66be033] sm:h-7 sm:w-7 md:h-6 md:w-6',
                    completed && 'bg-[#c66be033]',
                )}
            >
                <input
                    id={id}
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleTodo(id)}
                    className="peer border-surface-tonal-a30 checked:border-primary-a40 checked:bg-primary-a40 group-hover/checkbox:border-primary-a40 absolute h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 sm:h-4 sm:w-4"
                />
                <FaCheck className="text-surface-tonal-a0 pointer-events-none absolute text-xs opacity-0 peer-checked:opacity-100 sm:text-sm" />
            </label>
            <p
                className={clsx(
                    'flex-1 text-sm transition-all duration-200',
                    completed
                        ? 'text-surface-tonal-a50 line-through'
                        : 'text-black dark:text-white',
                )}
            >
                {title}
            </p>
            <button
                className="absolute top-1/2 right-1 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full rounded-b-full p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                onClick={() => deleteTodo(id)}
            >
                <FaTrash className="text-danger-a10 text-base md:text-sm" />
            </button>
        </div>
    );
};

export default TodoItem;
