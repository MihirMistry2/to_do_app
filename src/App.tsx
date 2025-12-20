import { useState } from 'react';

import type { Filter } from '@/types/filter';

import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

import { Filter as FILTER } from '@/constants';

const App = () => {
    const [search, setSearch] = useState('');
    const [isAddTodoOpen, setIsAddTodoOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState<Filter>(FILTER.All);

    return (
        <AppLayout>
            <Header
                search={search}
                setSearch={setSearch}
                setIsAddTodoOpen={setIsAddTodoOpen}
            />
            <Main
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                isAddTodoOpen={isAddTodoOpen}
                setIsAddTodoOpen={setIsAddTodoOpen}
            />
        </AppLayout>
    );
};

export default App;
