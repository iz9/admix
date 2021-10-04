import * as path from 'path'

export enum ComponentDomain {
  app = 0,
  uiLib = 1,
}

export const baseAppGeneratorPath = path.join(
  __dirname,
  '../src/app/components',
)
export const baseUILibGeneratorPath = path.join(
  __dirname,
  '../src/ui-lib/components',
)
export const getBaseGeneratorPath = (domain: ComponentDomain) => {
  switch (domain) {
    case ComponentDomain.app:
      return baseAppGeneratorPath
    case ComponentDomain.uiLib:
      return baseUILibGeneratorPath
    default:
      return baseAppGeneratorPath
  }
}
