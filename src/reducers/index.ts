import { combineReducers } from 'redux'
import * as fromNotes from './notes'

export interface State {
  notes: fromNotes.State
}

export const initialState: State = {
  notes: fromNotes.initialState
}

export const reducer = combineReducers<State>({
  notes: fromNotes.reducer
})