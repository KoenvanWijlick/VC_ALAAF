export type ThemeName = 'light' | 'dark' | 'contrast';

export interface DesignTokens {
  fonts: {
    sans: string;
    serif: string;
    mono: string;
  };
  colors: Record<string, string>;
  spacing: Record<'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl', string>;
  radii: Record<'xs' | 'sm' | 'md' | 'lg' | 'full', string>;
  shadows: Record<'sm' | 'md' | 'lg', string>;
  durations: Record<'fast' | 'normal' | 'slow', string>;
}

const shared: Omit<DesignTokens, 'colors'> = {
  fonts: {
    sans: "var(--font-sans)",
    serif: "var(--font-serif)",
    mono: "var(--font-mono)",
  },
  spacing: {
    '2xs': 'var(--space-2xs)',
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    '2xl': 'var(--space-2xl)',
    '3xl': 'var(--space-3xl)',
  },
  radii: {
    xs: 'var(--radius-xs)',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    full: 'var(--radius-full)',
  },
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },
  durations: {
    fast: 'var(--duration-fast)',
    normal: 'var(--duration-normal)',
    slow: 'var(--duration-slow)',
  },
};

const tokenMap: Record<ThemeName, DesignTokens> = {
  light: {
    ...shared,
    colors: {
      bg: 'var(--color-bg)',
      surface: 'var(--color-surface)',
      surfaceMuted: 'var(--color-surface-elevated)',
      text: 'var(--color-text)',
      textMuted: 'var(--color-text-muted)',
      primary: 'var(--color-primary)',
      primaryStrong: 'var(--color-primary-strong)',
      primaryMuted: 'var(--color-primary-muted)',
      border: 'var(--color-border)',
      accent: 'var(--color-accent)',
      success: 'var(--color-success)',
      danger: 'var(--color-danger)',
      warning: 'var(--color-warning)',
    },
  },
  dark: {
    ...shared,
    colors: {
      bg: 'var(--color-bg)',
      surface: 'var(--color-surface)',
      surfaceMuted: 'var(--color-surface-elevated)',
      text: 'var(--color-text)',
      textMuted: 'var(--color-text-muted)',
      primary: 'var(--color-primary)',
      primaryStrong: 'var(--color-primary-strong)',
      primaryMuted: 'var(--color-primary-muted)',
      border: 'var(--color-border)',
      accent: 'var(--color-accent)',
      success: 'var(--color-success)',
      danger: 'var(--color-danger)',
      warning: 'var(--color-warning)',
    },
  },
  contrast: {
    ...shared,
    colors: {
      bg: 'var(--color-bg)',
      surface: 'var(--color-surface)',
      surfaceMuted: 'var(--color-surface-elevated)',
      text: 'var(--color-text)',
      textMuted: 'var(--color-text-muted)',
      primary: 'var(--color-primary)',
      primaryStrong: 'var(--color-primary-strong)',
      primaryMuted: 'var(--color-primary-muted)',
      border: 'var(--color-border)',
      accent: 'var(--color-accent)',
      success: 'var(--color-success)',
      danger: 'var(--color-danger)',
      warning: 'var(--color-warning)',
    },
  },
};

export const getTokens = (theme: ThemeName = 'light'): DesignTokens => tokenMap[theme];

const order: ThemeName[] = ['light', 'dark', 'contrast'];

export const getNextTheme = (current: ThemeName = 'light'): ThemeName => {
  const idx = order.indexOf(current);
  return order[(idx + 1) % order.length];
};
