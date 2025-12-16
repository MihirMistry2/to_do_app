import { useState } from 'react';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    const handleIncrementClick = () => {
        setCount(prev => prev + 1);
    };
    const handleResetClick = () => {
        setCount(0);
    };

    return (
        <>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl text-blue-400">Hello World</h1>
                <div className="flex gap-2">
                    <button className="w-fit cursor-pointer rounded-md bg-blue-400 p-2 font-bold text-black" onClick={handleIncrementClick}>
                        Click me {count}
                    </button>
                    <button className="w-fit cursor-pointer rounded-md bg-amber-400 p-2 font-bold text-black" onClick={handleResetClick}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;
