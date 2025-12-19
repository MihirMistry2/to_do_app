import type { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';
import type { IconType } from 'react-icons';

export interface AppLayoutProps {
    children: React.ReactNode;
}

export interface HeaderProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    setIsAddTodoOpen: Dispatch<SetStateAction<boolean>>;
}

export interface SearchInputProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType;
    iconClassName?: string;
    children?: React.ReactNode;
    className?: string;
}

export interface TodoAddProps {
    setIsAddTodoOpen: Dispatch<SetStateAction<boolean>>;
}
