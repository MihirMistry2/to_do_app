import type { ButtonHTMLAttributes } from 'react';
import type { IconType } from 'react-icons';

export interface AppLayoutProps {
    children: React.ReactNode;
}

export interface HeaderProps {
    search: string;
    setSearch: (search: string) => void;
    setIsAddTodoOpen: (value: boolean) => void;
}

export interface SearchInputProps {
    search: string;
    setSearch: (search: string) => void;
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType;
    iconClassName?: string;
    children?: React.ReactNode;
    className?: string;
}
