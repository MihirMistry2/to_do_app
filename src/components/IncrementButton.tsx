import type React from 'react';

interface IncrementButtonProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({
    count,
    setCount,
}): React.ReactElement => {
    const handleIncrementClick = () => {
        setCount(prev => prev + 1);
    };

    return (
        <button
            className="w-fit cursor-pointer rounded-md bg-blue-400 p-2 font-bold text-black"
            onClick={handleIncrementClick}
        >
            Click me {count}
        </button>
    );
};

export default IncrementButton;
