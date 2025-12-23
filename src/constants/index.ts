export const Filter = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
} as const;

export type FilterType = (typeof Filter)[keyof typeof Filter];

export const FILTERS = Object.values(Filter);

export const FILTER_INDEX = Object.values(Filter).reduce(
    (acc, filter, index) => {
        acc[filter] = index;
        return acc;
    },
    {} as Record<string, number>,
);

export const EMPTY_STATE_CONTENT: Record<
    FilterType,
    {
        title: string;
        description: string;
    }
> = {
    all: {
        title: 'no tasks yet',
        description: 'add your first task to get started',
    },
    completed: {
        title: 'no completed tasks',
        description: 'complete a task to see it here',
    },
    pending: {
        title: 'no pending tasks',
        description: 'you are all caught up 🎉',
    },
};

export const TOAST_MESSAGES = {
    TODO_ADDED: 'Todo added successfully',
    TODO_DELETED: 'Todo deleted successfully',
    TODO_COMPLETED: 'Great job! Task completed',
    TODO_PENDING: 'No worries — task marked as pending',
    LIGHT_MODE_ENABLED: 'Light mode enabled',
    DARK_MODE_ENABLED: 'Dark mode enabled',
} as const;
