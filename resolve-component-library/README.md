# Resolve Component Library

Shape's design system with components that are shared across the Shape platform.

### Tech

- [Node.js](https://nodejs.org/) - Node.js is an open-source, cross-platform, JavaScript runtime
- [ReactJS](https://reactjs.org/) - HTML enhanced for web apps!]
- [MaterialUI](https://material-ui.com/) - React components for faster and easier web development.
- [Storybook](https://storybook.js.org/) - UI components in isolation
- [Typescript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types to the language.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes that can be composed to build any design.
- [Tailwind UI](https://tailwindui.com/) - Library of components based on Tailwind CSS.

### Installation

Install the dependencies and devDependencies and start storybook.

```sh
npm install
npm run storybook
```

## Development

Sometimes you need to work on application code and in this project at the same time and for that it's possible to use [npm-link](https://docs.npmjs.com/cli/link.html) to create a symlink in the global folder for this project.

### Quick Start

```sh
npm run link  # create links with target packages
npm run dev   # run typescript in watch mode
```

### Slow Start

```sh
cd ~/path/to/resolve-component-library                  # go into the library directory
npm run link                                            # creates global link from library
cd ~/path/to/other-project                              # go into some other project directory
npm link @shape-construction/resolve-component-library  # link the package
```

Now, any changes to `~/path/to/resolve-component-library` will be reflected in `~/path/to/other-project/node_modules/resolve-component-library`.

### Generators

To ease our work, we use [plop](https://github.com/plopjs/plop) to generate boilerplate. Currently, we support the following:

- `component`: creates basic structure for a top level component.

Run the following:

```sh
npm run generate:component
```

#### :warning: React hooks duplication :warning:

When linking the library, in order for React Hooks to work, the react and react-dom versions must be the same versions on the project
