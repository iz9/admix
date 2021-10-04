/**
 * Component Generator config (plop)
 *
 */

import { Actions, PlopGeneratorConfig } from 'node-plop'

import { pathExists } from '../utils'
import { ComponentDomain, getBaseGeneratorPath } from '../paths'

enum ComponentPromptNames {
  componentDomain = 'componentDomain',
  componentName = 'componentName',
  path = 'path',
}

type Answers = {
  [ComponentPromptNames.componentName]: string
  [ComponentPromptNames.path]: string
  [ComponentPromptNames.componentDomain]: ComponentDomain
}

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a component',
  prompts: [
    {
      type: 'list',
      name: ComponentPromptNames.componentDomain,
      message: 'Select component domain',
      choices: [
        { name: 'App Component', value: ComponentDomain.app },
        { name: 'UI-LIB Component', value: ComponentDomain.uiLib },
      ],
    },
    {
      type: 'input',
      name: ComponentPromptNames.componentName,
      message: 'What should it be called?',
    },
  ],
  actions: data => {
    const answers = data as Answers

    const componentPath = `${getBaseGeneratorPath(
      answers.componentDomain,
    )}/{{properCase ${ComponentPromptNames.componentName}}}`
    const actualComponentPath = `${getBaseGeneratorPath(
      answers.componentDomain,
    )}/${answers.componentName}`

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
