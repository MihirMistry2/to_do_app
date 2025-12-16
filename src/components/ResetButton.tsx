import type React from 'react';

interface ResetButtonProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ResetButton: React.FC<ResetButtonProps> = ({
    setCount,
}): React.ReactElement => {
    const handleResetClick = () => {
        setCount(0);
    };

    return (
        <button
            className="w-fit cursor-pointer rounded-md bg-amber-400 p-2 font-bold text-black"
            onClick={handleResetClick}
        >
            Reset
        </button>
    );
};

export default ResetButton;
