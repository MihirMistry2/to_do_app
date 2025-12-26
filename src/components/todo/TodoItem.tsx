import React from 'react';
import clsx from 'clsx';
import { FaCheck, FaTrash } from 'react-icons/fa6';

import { TOAST_MESSAGES } from '@/constants';
import showToast from '@/utils/toast';

import Tooltip from '@/components/ui/Tooltip';

import type { TodoItemProps } from '@/types';

const TodoItem: React.FC<TodoItemProps> = ({
    id,
    title,
    completed,
    toggleTodo,
    deleteTodo,
}) => {
    const handleToggleTodo = (id: string) => {
        toggleTodo(id);
        if (completed) {
            showToast(TOAST_MESSAGES.TODO_PENDING, 'info');
        } else {
            showToast(TOAST_MESSAGES.TODO_COMPLETED, 'success');
        }
    };
    const handleDeleteClick = (id: string) => {
        deleteTodo(id);
        showToast(TOAST_MESSAGES.TODO_DELETED, 'error');
    };

    return (
        <div className="group border-surface-tonal-a30 relative mb-0 flex w-full gap-4 border-b px-1 py-2 last:border-b-0">
            <label
                className={clsx(
                    'group/checkbox hover:bg-primary-a30-overlay relative flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-sm sm:h-7 sm:w-7 md:h-6 md:w-6',
                    completed && 'bg-primary-a30-overlay',
                )}
            >
                <input
                    id={id}
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleToggleTodo(id)}
                    className="peer border-surface-tonal-a30 checked:border-primary-a40 checked:bg-primary-a40 group-hover/checkbox:border-primary-a40 absolute h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 sm:h-4 sm:w-4"
                />
                <FaCheck className="text-surface-tonal-a0 pointer-events-none absolute text-xs opacity-0 peer-checked:opacity-100 sm:text-sm" />
            </label>
            <p
                className={clsx(
                    'flex flex-1 items-center text-sm transition-all duration-200',
                    completed
                        ? 'text-surface-tonal-a50 line-through'
                        : 'text-black dark:text-white',
                )}
            >
                {title}
            </p>
            <Tooltip content="Delete task" side="bottom">
                <button
                    className="bg-danger-a30 text-danger-a0 absolute top-1/2 right-1 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm p-1 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
                    onClick={() => handleDeleteClick(id)}
                >
                    <FaTrash className="text-base md:text-sm" />
                </button>
            </Tooltip>
        </div>
    );
};

export default TodoItem;
