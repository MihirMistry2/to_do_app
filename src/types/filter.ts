import { Filter as FILTER } from '@/constants';

export type Filter = (typeof FILTER)[keyof typeof FILTER];

export interface TodoFiltersProps {
    activeFilter: Filter;
    setActiveFilter: (filter: Filter) => void;
}
