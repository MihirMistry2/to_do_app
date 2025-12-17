export const FILTERS = ['all', 'completed', 'pending'] as const;

export type FilterType = (typeof FILTERS)[number];
