/**
 * Component Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop'
import * as inquirer from 'inquirer'

import { pathExists } from '../utils'
import { baseGeneratorPath } from '../paths'

inquirer.registerPrompt('directory', require('inquirer-directory'))

export enum ComponentPromptNames {
  componentName = 'componentName',
  path = 'path',
  isPureStyledComponent = 'isPureStyledComponent',
}

type Answers = { [P in ComponentPromptNames]: string }

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: ComponentPromptNames.componentName,
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: ComponentPromptNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    } as any,
    {
      type: 'confirm',
      name: ComponentPromptNames.isPureStyledComponent,
      message: 'Is this pure styled component?',
    },
  ],
  actions: data => {
    const answers = data as Answers

    const componentPath = `${baseGeneratorPath}/${answers.path}/{{properCase ${ComponentPromptNames.componentName}}}`
    const actualComponentPath = `${baseGeneratorPath}/${answers.path}/${answers.componentName}`

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`)
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/__tests__/index.spec.tsx`,
        templateFile: './component/index.spec.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/__stories__/index.stories.tsx`,
        templateFile: './component/index.stories.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'prettify',
        data: { path: actualComponentPath },
      },
    ]

    return actions
  },
}
