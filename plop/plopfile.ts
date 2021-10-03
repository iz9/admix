import { NodePlopAPI } from 'node-plop'
import shell from 'shelljs'
import { componentGenerator } from './component'

interface PrettifyCustomActionData {
  path: string
}

export default function plop(plop: NodePlopAPI): void {
  plop.setGenerator('component', componentGenerator)

  plop.setActionType('prettify', (answers, config) => {
    const data = config?.data as PrettifyCustomActionData
    shell.exec(`npm run prettify ${data.path}`, { silent: true })
    return ''
  })
}
