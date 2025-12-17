/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    a0: 'var(--color-primary-a0)',
                    a10: 'var(--color-primary-a10)',
                    a20: 'var(--color-primary-a20)',
                    a30: 'var(--color-primary-a30)',
                    a40: 'var(--color-primary-a40)',
                    a50: 'var(--color-primary-a50)',
                },
                surface: {
                    a0: 'var(--color-surface-a0)',
                    a03: 'var(--color-surface-a03)',
                    a05: 'var(--color-surface-a05)',
                    a07: 'var(--color-surface-a07)',
                    a10: 'var(--color-surface-a10)',
                    a20: 'var(--color-surface-a20)',
                    a30: 'var(--color-surface-a30)',
                    a40: 'var(--color-surface-a40)',
                    a50: 'var(--color-surface-a50)',
                },
                'surface-tonal': {
                    a0: 'var(--color-surface-tonal-a0)',
                    a03: 'var(--color-surface-tonal-a03)',
                    a05: 'var(--color-surface-tonal-a05)',
                    a07: 'var(--color-surface-tonal-a07)',
                    a10: 'var(--color-surface-tonal-a10)',
                    a20: 'var(--color-surface-tonal-a20)',
                    a30: 'var(--color-surface-tonal-a30)',
                    a40: 'var(--color-surface-tonal-a40)',
                    a50: 'var(--color-surface-tonal-a50)',
                },
                success: {
                    a0: 'var(--color-success-a0)',
                    a10: 'var(--color-success-a10)',
                    a20: 'var(--color-success-a20)',
                    a30: 'var(--color-success-a30)',
                    a50: 'var(--color-success-a50)',
                },
                danger: {
                    a0: 'var(--color-danger-a0)',
                    a10: 'var(--color-danger-a10)',
                    a20: 'var(--color-danger-a20)',
                    a30: 'var(--color-danger-a30)',
                    a50: 'var(--color-danger-a50)',
                },
                base: {
                    dark: 'var(--color-dark-a0)',
                    light: 'var(--color-light-a0)',
                },
            },
            fontSize: {
                fluid: 'clamp(0.75rem, 0.9rem - 0.125vw, 0.875rem)',
            },
        },
    },
    plugins: [],
};
