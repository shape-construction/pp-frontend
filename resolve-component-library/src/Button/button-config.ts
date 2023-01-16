export const colors = ['primary', 'secondary', 'success', 'danger', 'warning'] as const;
export type ButtonColor = typeof colors[number];

export const variants = ['contained', 'outlined', 'text'] as const;
export type ButtonVariant = typeof variants[number];

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type ButtonSize = typeof sizes[number];

export const widths = ['fluid', 'full'] as const;
export type ButtonWidth = typeof widths[number];
