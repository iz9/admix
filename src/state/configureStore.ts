import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import type {
  AnyAction,
  Dispatch,
  EmptyObject,
  EnhancedStore,
  Middleware,
  StoreEnhancer,
} from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'
import { client } from '../api/axios'
import axiosMiddlewareFactory from 'redux-axios-middleware'

import { createReducer } from './reducers'

export function configureAppStore(): EnhancedStore<
  EmptyObject,
  AnyAction,
  /*eslint-disable*/
  Middleware<Record<string, unknown>, any, Dispatch<AnyAction>>[]> {
  /*eslint-enable*/
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const axiosMiddleware = axiosMiddlewareFactory(client)
  const { run: runSaga } = sagaMiddleware

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, axiosMiddleware]

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[]

  return configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    //  || process.env.PUBLIC_URL.length > 0,
    enhancers,
  })
}
