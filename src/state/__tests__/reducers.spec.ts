import { createReducer } from '../reducers'
import { Reducer } from '@reduxjs/toolkit'
describe('reducer', () => {
  it('should inject reducers', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dummyReducer = (s = {}, a: unknown) => 'dummyResult'
    /*eslint-disable*/
    const reducer = createReducer({ test: dummyReducer } as any) as Reducer<
      any,
      any
    >
    /*eslint-enable*/
    const state = reducer({}, '')
    expect(state.test).toBe('dummyResult')
  })

  it('should return identity reducers when empty', () => {
    /*eslint-disable*/
    const reducer = createReducer() as Reducer<any, any>
    /*eslint-enable*/
    const state = { a: 1 }
    const newState = reducer(state, '')
    expect(newState).toBe(state)
  })
})
