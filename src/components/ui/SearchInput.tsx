import { FaMagnifyingGlass } from 'react-icons/fa6';

import type { SearchInputProps } from '@/types/todo';

const SearchInput: React.FC<SearchInputProps> = ({
    search,
    setSearch,
}): React.ReactElement => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="relative w-full">
            <input
                className="border-surface-tonal-a10 bg-surface-tonal-a10 placeholder:text-surface-tonal-a50 focus:border-surface-tonal-a30 h-10 w-full rounded-full border pr-4 pl-10 text-black outline-none md:h-8 dark:text-white"
                type="search"
                name="search"
                id="search"
                placeholder="e.g. Buy groceries"
                value={search}
                onChange={handleSearchChange}
            />
            <FaMagnifyingGlass className="text-surface-a50 absolute top-1/2 left-3 -translate-y-1/2 text-base md:text-sm" />
        </div>
    );
};

export default SearchInput;
