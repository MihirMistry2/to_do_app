export interface AppLayoutProps {
    children: React.ReactNode;
}

export interface HeaderProps {
    search: string;
    setSearch: (search: string) => void;
}

export interface SearchInputProps {
    search: string;
    setSearch: (search: string) => void;
}
