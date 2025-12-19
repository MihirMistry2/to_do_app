import { useState } from 'react';

import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/Header';
import TodoAdd from '@/components/todo/TodoAdd';

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
                {isAddTodoOpen && (
                    <TodoAdd setIsAddTodoOpen={setIsAddTodoOpen} />
                )}
            </AppLayout>
        </>
    );
};

export default App;
