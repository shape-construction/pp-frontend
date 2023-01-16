# Pair Programming Challenge: Creating a Tab Component
Field is an issue tracking application for the construction industry. Inside the app users can set up construction projects, raise, discuss and resolve issues on site.

A key part of our navigation uses tabs to navigate between different screens. This challenge is to create a component that allows us to reuse our tabs in different places. We will be creating a component inside our component library (see below) that accepts an array of screens and a default screen. The component will render the tabs and allow the user to click on each one rendering the correct component for each.

We would also like to incorporate tests into our solution.

## Acceptance Criteria
We’ll create a new component, called `SpecialTabs`, that Shape engineers could use to create a tab interface. It should:

- Allow users to navigate different screens
- Accept the following props:
  - screens - an array made up of objects which will contain a
    - label: a string to be shown in the tab
    - component: a react component that will be rendered when the tab is active
  - defaultTabIndex - the tab that is active by default
- Has unit tests. We use `jest` and `react-testing-library`
- Closely matches the design below. You can use Tailwind to achieve that.

A working example is shown below:

https://user-images.githubusercontent.com/5408699/212675845-81a5d52f-8b24-4eb3-a2d6-99e6c1a47339.mov

## Getting started with Resolve Component Library

The Resolve Component library is stored in this repo, under `resolve-component-library` folder. You can find out more details in [README](./resolve-component-library/README.md) on how to setup the development environment.

## Important tools to consider

### Storybook

Storybook is a tool that allows us to create and manage UI components that we can then share across many applications. It has the added bonus of allowing us to build our components in isolation. Read more here: [Storybook: UI component explorer for frontend developers](https://storybook.js.org/).

### About Tailwind

Tailwind is "a utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup". We use it in our projects. Read more here: [Tailwind](https://tailwindcss.com/).
