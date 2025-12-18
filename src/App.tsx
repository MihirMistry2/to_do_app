import { useState } from 'react';

import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/Header';

const App = () => {
    const [Search, setSearch] = useState<string>('');

    return (
        <>
            <AppLayout>
                <Header search={Search} setSearch={setSearch} />
            </AppLayout>
        </>
    );
};

export default App;
