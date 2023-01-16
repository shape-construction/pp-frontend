export const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'white'] as const;
export type LinkColor = typeof colors[number];

export const underlines = ['none', 'solid'] as const;
export type LinkUnderline = typeof underlines[number];
