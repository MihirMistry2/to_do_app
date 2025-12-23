import React from 'react';
import clsx from 'clsx';
import toast, { type Renderable } from 'react-hot-toast';
import {
    FaCheck,
    FaXmark,
    FaInfo,
    FaTriangleExclamation,
    FaSun,
    FaMoon,
} from 'react-icons/fa6';

import type { ToastVariant } from '@/types';

const iconBase =
    'flex size-4.5 items-center justify-center rounded-full p-1 font-bold';

const icons: Record<ToastVariant, Renderable | undefined> = {
    success: React.createElement(FaCheck, {
        className: clsx(iconBase, 'bg-success-a30 text-success-a0'),
    }),
    error: React.createElement(FaXmark, {
        className: clsx(iconBase, 'bg-danger-a30 text-danger-a0'),
    }),
    info: React.createElement(FaInfo, {
        className: clsx(iconBase, 'bg-info-a30 text-info-a0'),
    }),
    warning: React.createElement(FaTriangleExclamation, {
        className: clsx(iconBase, 'bg-warning-a30 text-warning-a0'),
    }),
    light: React.createElement(FaSun, {
        className: clsx(iconBase, 'bg-surface-a20 text-yellow-400'),
    }),
    dark: React.createElement(FaMoon, {
        className: clsx(iconBase, 'bg-surface-a20 text-blue-500'),
    }),
    neutral: undefined,
};

const showToast = (message: string, variant: ToastVariant = 'neutral') => {
    toast(message, { icon: icons[variant] });
};

export default showToast;
