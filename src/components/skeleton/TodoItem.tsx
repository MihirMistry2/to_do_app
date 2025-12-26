const TodoItem: React.FC = (): React.ReactElement => {
    return (
        <div className="border-surface-tonal-a30 flex w-full gap-4 border-b px-1 py-2 last:border-b-0">
            <div className="bg-surface-tonal-a20 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm sm:h-7 sm:w-7 md:h-6 md:w-6">
                <div className="border-surface-tonal-a30 checked:border-primary-a40 checked:bg-primary-a40 absolute h-5 w-5 appearance-none rounded-sm border-2 sm:h-4 sm:w-4"></div>
            </div>
            <div className="flex flex-1 items-center">
                <div className="bg-surface-tonal-a20 h-5 w-3/4 rounded-sm" />
            </div>
            <div className="bg-surface-tonal-a20 h-8 w-8 rounded-sm opacity-60 sm:h-7 sm:w-7 md:h-6 md:w-6" />
        </div>
    );
};

export default TodoItem;
