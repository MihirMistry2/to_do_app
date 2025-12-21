import { type FilterType as Filter } from '@/constants';

export interface TodoFiltersProps {
    activeFilter: Filter;
    setActiveFilter: (filter: Filter) => void;
}
