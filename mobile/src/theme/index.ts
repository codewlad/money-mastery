import { extendTheme } from 'native-base';

export const THEME = extendTheme(
    {
        colors: {
            black: '#000000',
            amber: {
                400: '#FBBF24',
            },
            gray: {
                1000: '#0A0A0A',
                900: '#18181B',
                500: '#71717A',
            },
            white: '#FFFFFF',
            red: {
                900: '#6A0000'
            },
            green: {
                900: '#006200',
            },
            transparent: {
                black: {
                    95: 'rgba(0,0,0,0.7)',
                }
            },
        },
        fonts: {
            heading: 'Roboto_700Bold',
            body: 'Roboto_400Regular',
        },
        fontSizes: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
            32: 32,
        },
        sizes: {
            13: 52,
            14: 56,
            15: 60,
            18: 72,
            25: 100,
            29: 116,
            33: 132,
            35: 140,
            37: 148,
        },
    }
)