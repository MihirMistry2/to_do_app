import { useState, useEffect } from 'react';

const App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <>
            <div className="bg-surface-tonal-a10 flex h-dvh w-full items-center justify-center text-sm sm:h-screen sm:p-4">
                <section className="border-surface-tonal-a30 bg-surface-tonal-a0 flex h-full w-full flex-col space-y-6 overflow-hidden p-6 shadow-lg sm:mx-auto sm:h-[70vh] sm:max-w-xl sm:rounded-lg sm:border md:h-[75vh] md:w-[80%] lg:w-[60%] xl:w-[40%]">
                    <header className="flex gap-4">
                        <div>
                            <button
                                type="button"
                                onClick={() => setDarkMode(!darkMode)}
                                className="md bg-surface-a20 dark:bg-surface-a20 flex h-10 w-10 items-center justify-center rounded-full transition duration-200 ease-out outline-none active:scale-[0.97] md:h-8 md:w-8"
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </header>
                </section>
            </div>
        </>
    );
};

export default App;
