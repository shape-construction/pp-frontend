import type { TransitionClasses } from '@headlessui/react';

export type Transition =
  | 'bottom-to-top'
  | 'top-to-bottom'
  | 'left-to-right'
  | 'right-to-left'
  | 'fade'
  | 'none';

export type Configurations = Record<Transition, TransitionClasses>;

export const transitions: Configurations = {
  'fade': {
    enter: 'ease-out duration-150',
    enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
    leave: 'ease-in duration-150',
    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
    leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
  },
  'bottom-to-top': {
    enter: 'transition ease-in-out duration-150 transform',
    enterFrom: 'translate-y-full',
    enterTo: '-translate-y-auto',
    leave: 'transition ease-in-out duration-150 transform',
    leaveFrom: '-translate-y-auto',
    leaveTo: 'translate-y-full',
  },
  'top-to-bottom': {
    enter: 'transition ease-in-out duration-150 transform',
    enterFrom: '-translate-y-full',
    enterTo: 'translate-y-0',
    leave: 'transition ease-in-out duration-150 transform',
    leaveFrom: 'translate-y-0',
    leaveTo: '-translate-y-full',
  },
  'left-to-right': {
    enter: 'transition ease-in-out duration-150 transform',
    enterFrom: '-translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transition ease-in-out duration-150 transform',
    leaveFrom: 'translate-x-0',
    leaveTo: '-translate-x-full',
  },
  'right-to-left': {
    enter: 'transition ease-in-out duration-150 transform',
    enterFrom: 'translate-x-full',
    enterTo: '-translate-x-auto',
    leave: 'transition ease-in-out duration-150 transform',
    leaveFrom: '-translate-x-auto',
    leaveTo: 'translate-x-full',
  },
  'none': {},
};
