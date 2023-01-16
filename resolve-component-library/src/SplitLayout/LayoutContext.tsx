import { createContext } from 'react';

export interface LayoutContextProps {
  expandedPanel?: number;
  setExpandedPanel: (panelIndex?: number) => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
  setExpandedPanel: () => {},
});
