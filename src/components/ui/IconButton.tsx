import clsx from 'clsx';

import type { IconButtonProps } from '@/types';

const IconButton: React.FC<IconButtonProps> = ({
    icon: Icon,
    iconClassName,
    children,
    className,
    ...props
}) => {
    return (
        <button
            type="button"
            className={clsx('cursor-pointer', className)}
            {...props}
        >
            <Icon className={iconClassName} aria-hidden />
            {children}
        </button>
    );
};

export default IconButton;
