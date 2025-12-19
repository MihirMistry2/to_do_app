import { FaPlus } from 'react-icons/fa6';

import ToggleTheme from '@/components/ui/ToggleTheme';
import SearchInput from '@/components/ui/SearchInput';
import IconButton from '@/components/ui/IconButton';

import type { HeaderProps } from '@/types/todo';

const Header: React.FC<HeaderProps> = ({
    search,
    setSearch,
    setIsAddTodoOpen,
}): React.ReactElement => {
    const handleAddTodoClick = () => {
        setIsAddTodoOpen(true);
    };

    return (
        <header className="flex gap-4">
            <ToggleTheme />
            <SearchInput search={search} setSearch={setSearch} />
            <IconButton
                aria-label="Add todo"
                className="bg-primary-a20 active:bg-primary-a30 flex h-10 min-w-10 items-center justify-center rounded-md text-white transition duration-200 ease-out outline-none active:scale-[0.97] md:h-8 md:w-auto md:min-w-8 md:gap-2 md:px-4 dark:text-black"
                iconClassName="min-w-4 text-base md:text-sm"
                icon={FaPlus}
                onClick={handleAddTodoClick}
            >
                <span className="hidden font-semibold capitalize md:inline-block">
                    add
                </span>
            </IconButton>
        </header>
    );
};

export default Header;
