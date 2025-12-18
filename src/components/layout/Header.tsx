import ToggleTheme from '@/components/ui/ToggleTheme';
import SearchInput from '@/components/ui/SearchInput';

import type { HeaderProps } from '@/types/todo';

const Header: React.FC<HeaderProps> = ({
    search,
    setSearch,
}): React.ReactElement => {
    return (
        <header className="flex gap-4">
            <ToggleTheme />
            <SearchInput search={search} setSearch={setSearch} />
        </header>
    );
};

export default Header;
