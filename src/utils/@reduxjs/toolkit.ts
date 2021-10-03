import { RootStateKeyType } from 'utils/types/injector-typings'
import {
  createSlice as createSliceOriginal,
  SliceCaseReducers,
  CreateSliceOptions,
  Slice,
} from '@reduxjs/toolkit'

/* Wrap createSlice with stricter Name options */

export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends RootStateKeyType,
  /*eslint-disable*/>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
): Slice<State, CaseReducers, Name> => {
  /*eslint-enable*/
  return createSliceOriginal(options)
}
