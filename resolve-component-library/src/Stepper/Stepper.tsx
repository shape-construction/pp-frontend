import React, { useMemo } from 'react';
import { Steps } from './Steps';
import { Step } from './Step';

export interface StepperProps {
  /**
   * Number of steps to be rendered
   */
  steps: number;
  /**
   * Current step
   */
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const getVariant = (step: number) => {
    const currentIndex = currentStep - 1;
    if (step === currentIndex) return 'current';

    return step > currentIndex ? 'incomplete' : 'complete';
  };

  const label = (step: number) => `Step ${step}`;

  const mapSteps = useMemo(() => [...Array(steps)], [steps]);

  return (
    <Steps>
      {mapSteps.map((_: null, step: number) => (
        <Step variant={getVariant(step)} key={label(step)} />
      ))}
    </Steps>
  );
};
