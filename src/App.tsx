import { useState } from 'react';

import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/Header';

const App = () => {
    const [search, setSearch] = useState('');
    const [isAddTodoOpen, setIsAddTodoOpen] = useState(false);

    return (
        <>
            <AppLayout>
                <Header
                    search={search}
                    setSearch={setSearch}
                    setIsAddTodoOpen={setIsAddTodoOpen}
                />
            </AppLayout>
        </>
    );
};

export default App;
