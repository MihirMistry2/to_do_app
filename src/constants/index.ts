export const Filter = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
} as const;

export const FILTER_INDEX = Object.values(Filter).reduce(
    (acc, filter, index) => {
        acc[filter] = index;
        return acc;
    },
    {} as Record<string, number>,
);

export const FILTERS = Object.values(Filter);
