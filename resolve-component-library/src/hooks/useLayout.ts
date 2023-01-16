import { useContext } from 'react';
import { LayoutContext } from '../SplitLayout/LayoutContext';

export const useLayout = () => useContext(LayoutContext);
