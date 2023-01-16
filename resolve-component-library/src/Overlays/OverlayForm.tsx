import React, { MouseEventHandler } from 'react';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import classNames from 'classnames';
import Button from '../Button';
export interface OverlayFormProps extends FormikConfig<FormikValues> {
  /**
   * Instructs the upper state to update open prop to false
   */
  closeOverlay: () => void;
  /**
   * Call To Action of the confirm button
   * @default "Save"
   */
  confirmCTA?: string;
  /**
   * Classnames to be applied in form element
   * @default false
   */
  formClassNames: string;
  /**
   * Called when confirm button is clicked
   */
  onConfirm?: MouseEventHandler;
  /**
   * Whether the content should be padded or not
   */
  noPadding?: boolean;
  /**
   * A custom footer that replaces the default if passed
   */
  footer?: React.ReactNode;
}

const OverlayForm: React.FC<OverlayFormProps> = React.forwardRef(
  (
    {
      children,
      closeOverlay,
      confirmCTA = 'Save',
      formClassNames,
      noPadding,
      footer,
      ...formProps
    },
    ref
  ) => (
    <Formik {...formProps}>
      {({ isSubmitting }) => (
        <Form className={formClassNames} ref={ref as React.Ref<any>}>
          <div
            className={classNames('mb-20 flex h-full flex-col gap-y-3 overflow-y-auto', {
              'px-4 py-6': !noPadding,
            })}
            data-testid="field-wrapper"
          >
            {children}
          </div>
          <footer className="fixed bottom-0 flex w-full items-center justify-end gap-3 border-t bg-white px-4 pt-3 pb-6 sm:pb-3">
            {footer || (
              <>
                <Button color="secondary" variant="outlined" size="md" onClick={closeOverlay}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="md"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {confirmCTA}
                </Button>
              </>
            )}
          </footer>
        </Form>
      )}
    </Formik>
  )
);

OverlayForm.displayName = 'OverlayForm';

export default OverlayForm;
