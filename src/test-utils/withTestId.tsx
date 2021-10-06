import React from 'react'

interface WithTestID {
  testId: string
}

export function withTestId<P>(Component: React.ComponentType<P>) {
  const WithTestId: React.FC<P & WithTestID> = props => {
    const { testId, ...rest } = props
    return <Component data-testid={testId} {...(rest as P)} />
  }
  return WithTestId
}
