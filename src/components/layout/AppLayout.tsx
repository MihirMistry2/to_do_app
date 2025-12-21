import type { AppLayoutProps } from '@/types';

const AppLayout: React.FC<AppLayoutProps> = ({
    children,
}): React.ReactElement => {
    return (
        <div className="bg-surface-tonal-a10 flex h-dvh w-full items-center justify-center text-sm sm:h-screen sm:p-4">
            <section className="border-surface-tonal-a30 bg-surface-tonal-a0 flex h-full w-full flex-col space-y-6 overflow-hidden p-6 shadow-lg sm:mx-auto sm:h-[70vh] sm:max-w-xl sm:rounded-lg sm:border md:h-[75vh] md:w-[80%] lg:w-[60%] xl:w-[40%]">
                {children}
            </section>
        </div>
    );
};

export default AppLayout;
