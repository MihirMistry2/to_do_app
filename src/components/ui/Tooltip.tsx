import * as RadixTooltip from '@radix-ui/react-tooltip';

import type { TooltipProps } from '@/types';

const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    side = 'top',
    delay = 600,
    offset = 6,
}): React.ReactElement => {
    return (
        <RadixTooltip.Provider delayDuration={delay}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        side={side}
                        sideOffset={offset}
                        className="bg-surface-tonal-a20 rounded-md px-2 py-1 text-[10px] font-semibold text-black dark:text-white"
                    >
                        {content}
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};

export default Tooltip;
