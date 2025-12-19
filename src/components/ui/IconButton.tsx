import type { IconButtonProps } from '@/types/index';

const IconButton: React.FC<IconButtonProps> = ({
    icon: Icon,
    iconClassName,
    children,
    className,
    ...props
}) => {
    return (
        <button type="button" className={className} {...props}>
            <Icon className={iconClassName} aria-hidden />
            {children}
        </button>
    );
};

export default IconButton;
