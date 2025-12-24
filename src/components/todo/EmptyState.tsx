import type { EmptyStateProps } from '@/types';

const EmptyState: React.FC<EmptyStateProps> = ({
    icon: Icon,
    title,
    description,
}): React.ReactElement => {
    return (
        <section className="border-surface-tonal-a30 bg-surface-tonal-a10 flex h-[calc(100%-52px)] flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed">
            <Icon className="text-surface-tonal-a30 size-6! text-base" />
            <div className="text-sm font-semibold text-black dark:text-white">
                {title}
            </div>
            <div className="text-surface-tonal-a50 text-sm font-medium">
                {description}
            </div>
        </section>
    );
};

export default EmptyState;
