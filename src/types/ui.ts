import type {
    ButtonHTMLAttributes,
    Dispatch,
    ReactNode,
    SetStateAction,
} from 'react';
import type { IconType } from 'react-icons';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType;
    iconClassName?: string;
}

export interface SearchInputProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export interface EmptyStateProps {
    icon: IconType;
    title: string;
    description: string;
}

export interface TooltipProps {
    content: string;
    children: ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    delay?: number;
    offset?: number;
}
