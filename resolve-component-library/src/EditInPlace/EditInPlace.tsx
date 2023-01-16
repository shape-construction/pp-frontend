import React, { HTMLAttributes, isValidElement, useRef } from 'react';
import { PencilIcon } from '../Icons/outline';

type OmitProperties = 'onBlur';

type RefProperty = {
  ref: React.RefObject<HTMLElement>;
};

type OutputProps = HTMLAttributes<HTMLElement> & RefProperty;

export type EditInPlaceProps = Omit<HTMLAttributes<HTMLElement>, OmitProperties> & {
  /**
   * Descriptive label to the editableElement (very important
   * to give context to this unconventional input field)
   */
  label: string;

  /**
   * Callback to be triggered once the editableElement is blurred
   * Receives the current inputValue
   */
  onBlur: (inputValue: string) => void;

  /**
   * Maximum length of the input value.
   */
  maxLength?: number;

  /**
   *  Show the message underneath the input field
   *  with the current length of the input value
   */
  showLengthMessage?: boolean;
};

/**
 * Makes the only child editable via
 * [HTMLElement.contentEditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable)
 * attribute, preserves a11y and styles of original element.
 * The child passed has to be a leaf component with only text as its children
 * Since Enter is not allowed, this component should not be used
 * for text inputs containing multiple paragraphs.
 *
 * @param label descriptive label
 * @param onBlur callback to trigger once a component is blurred
 * @param children single editable element
 * @param maxLength maximum length of the input value, defaults to 250
 * @param contentEditable is the element editable or not
 * @param showLengthMessage show a message with the current length of the input value
 * @param props all other properties
 * @returns {JSX | null} editable element component
 */
export const EditInPlace = ({
  label,
  onBlur,
  children,
  maxLength = 250,
  contentEditable = true,
  showLengthMessage = false,
  ...props
}: EditInPlaceProps) => {
  const editableRef = useRef<HTMLElement>(null);
  const elementToEdit = React.Children.only(children);
  const [editMode, setEditMode] = React.useState(false);
  const [fieldContent, setFieldContent] = React.useState<string>(
    isValidElement(elementToEdit) ? elementToEdit.props.children : ''
  );
  const showMessage = () => {
    if (editMode) {
      if (fieldContent.length === 0) {
        return (
          <div
            role="tooltip"
            aria-label="required field"
            className="my-2 ml-1 select-none text-xs text-red-600"
          >
            This field is required
          </div>
        );
      } else {
        return (
          <div
            role="tooltip"
            aria-label="field length"
            className="my-2 ml-1 select-none text-xs text-gray-600"
          >
            {fieldContent.length} of {maxLength} character{maxLength > 1 ? 's' : ''}
          </div>
        );
      }
    }
    return null;
  };

  const outputProps: OutputProps = {
    'ref': editableRef,
    'suppressContentEditableWarning': true,
    contentEditable,
    'aria-label': label,
    'onKeyUp': ({ currentTarget }) => {
      const text = currentTarget?.textContent ?? '';
      if (text.length > maxLength) {
        currentTarget.textContent = fieldContent;
      } else {
        setFieldContent(text);
      }
    },
    'onKeyDown': (ev) => {
      const text = ev.currentTarget?.textContent ?? '';
      if (text.length > maxLength) {
        ev.currentTarget.textContent = fieldContent;
      } else if (ev.key === 'Enter') {
        if (text.length === 0 && fieldContent === '') {
          ev.preventDefault();
        } else {
          ev.currentTarget.blur();
        }
      } else {
        setFieldContent(text);
      }
    },
    'onFocus': () => {
      setEditMode(true);
    },
    'onBlur': ({ currentTarget }) => {
      const text = currentTarget?.textContent ?? '';
      if (text.length === 0) {
        currentTarget.focus();
      } else {
        setEditMode(false);
        setFieldContent(text);
        onBlur(fieldContent);
      }
    },
    ...props,
  };

  if (React.isValidElement(elementToEdit)) {
    // display the icon only if element is editable but not yet in the edit mode.
    const isIconVisible = contentEditable && !editMode;
    return (
      <div className="mb-1 mr-1">
        <div className="items-left mt-3 flex flex-row gap-2">
          {React.cloneElement(
            elementToEdit,
            outputProps,
            <div className="max-w-full">
              {
                // @ts-expect-error
                elementToEdit.props.children
              }
              {isIconVisible ? (
                <span
                  className="font-sm 3xl:mx-2 mx-1 inline-block cursor-pointer select-none rounded-full text-gray-400 hover:bg-gray-50 active:bg-gray-100 lg:mx-2 xl:mx-2 2xl:mx-2"
                  onClick={() => editableRef?.current?.focus()}
                  aria-hidden={true}
                  data-testid="edit-icon"
                >
                  <PencilIcon className="h-5 w-5 select-none align-middle " aria-hidden={true} />
                </span>
              ) : null}
            </div>
          )}
        </div>
        {showLengthMessage ? showMessage() : null}
      </div>
    );
  }
  return null;
};
