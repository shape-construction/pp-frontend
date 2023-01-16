import { ReactNode } from 'react';

export interface InputBaseProps {
  /**
   * Indicates to the browser if it should suggest content to the input
   */
  autoComplete?: string;
  /**
   * Adds an additional section for rendering an element on the top right corner
   */
  cornerAdornment?: ReactNode;
  /**
   * A descriptive piece of text for the input field
   */
  description?: string;
  /**
   * Determines if this element is disabled, not allowing input
   */
  disabled?: boolean;
  /**
   * Text message to be displayed on the error area, and setting the input with error layout
   */
  error?: string;
  /**
   * Set input full width
   */
  fullWidth?: boolean;
  /**
   * If the field was touched
   */
  touched?: boolean;
  /**
   * The id of the element.
   */
  id?: string;
  /**
   * The label content related to the element.
   */
  label?: ReactNode;
  /**
   * Name attribute of the element.
   */
  name: string;
  /**
   * Callback fired when the input is blurred.
   */
  onBlur?: React.FocusEventHandler;
  /**
   * Callback fired when the value is changed.
   */
  onChange?: React.ChangeEventHandler;
  /**
   * Callback fired when the input is focused.
   */
  onFocus?: React.FocusEventHandler;
  /**
   * Determines if this element is required or not, if required is true
   */
  required?: boolean;
  /**
   * The value of the input element.
   */
  value?: string;
  /**
   * Text that displays when the field is empty
   */
  placeholder?: string;
}
