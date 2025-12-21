import type { Dispatch, SetStateAction } from 'react';

export interface AppLayoutProps {
    children: React.ReactNode;
}

export interface HeaderProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    setIsAddTodoOpen: Dispatch<SetStateAction<boolean>>;
}
