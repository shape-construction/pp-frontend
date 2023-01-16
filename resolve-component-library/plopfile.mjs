export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name'
    }],
    actions: [{
      type: 'add',
      path: 'src/{{name}}/{{name}}.tsx',
      templateFile: 'plop-templates/component/component.hbs'
    }, {
      type: 'add',
      path: 'src/{{name}}/{{name}}.spec.tsx',
      templateFile: 'plop-templates/component/spec.hbs'
    }, {
      type: 'add',
      path: 'src/{{name}}/{{name}}.stories.tsx',
      templateFile: 'plop-templates/component/stories.hbs'
    }, {
      type: 'add',
      path: 'src/{{name}}/index.ts',
      templateFile: 'plop-templates/component/index.hbs'
    }, {
      type: 'append',
      path: 'src/index.ts',
      template: "export { default as {{name}} } from './{{name}}';"
    }]
  })
}
