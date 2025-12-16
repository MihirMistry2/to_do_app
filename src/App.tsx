import { useState } from 'react';

import IncrementButton from '@components/IncrementButton';
import ResetButton from '@components/ResetButton';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl text-blue-400">Hello World</h1>
                <div className="flex gap-2">
                    <IncrementButton count={count} setCount={setCount} />
                    <ResetButton setCount={setCount} />
                </div>
            </div>
        </>
    );
};

export default App;
