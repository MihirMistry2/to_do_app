import { useState } from 'react';

import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/Header';

const App = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <AppLayout>
                <Header search={search} setSearch={setSearch} />
            </AppLayout>
        </>
    );
};

export default App;
