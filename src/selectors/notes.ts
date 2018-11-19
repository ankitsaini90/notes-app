import { State } from '../reducers'
import { createSelector } from 'reselect'

const getNotesState = ((state: State) => state.notes)

export const getNotes = createSelector([getNotesState], s => s.notes)