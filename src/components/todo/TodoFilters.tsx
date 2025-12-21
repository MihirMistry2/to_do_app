import clsx from 'clsx';

import { FILTERS, FILTER_INDEX } from '@/constants';

import type { TodoFiltersProps } from '@/types';

const TodoFilters: React.FC<TodoFiltersProps> = ({
    activeFilter,
    setActiveFilter,
}): React.ReactElement => {
    return (
        <section className="border-surface-tonal-a30 relative flex h-10 w-full items-center rounded-full border sm:h-9 md:h-8">
            <div
                className="bg-surface-tonal-a10 absolute top-0 left-0 h-full rounded-full transition-transform duration-300 ease-in-out"
                style={{
                    width: `calc(100% / ${FILTERS.length})`,
                    transform: `translateX(${FILTER_INDEX[activeFilter] * 100}%)`,
                }}
            />
            {FILTERS.map(filter => (
                <button
                    key={filter}
                    className={clsx(
                        'relative z-10 h-10 w-1/3 cursor-pointer rounded-full text-sm text-black capitalize transition-colors duration-300 sm:h-9 md:h-8 dark:text-white',
                        activeFilter === filter
                            ? 'font-semibold'
                            : 'opacity-70',
                    )}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </section>
    );
};

export default TodoFilters;
