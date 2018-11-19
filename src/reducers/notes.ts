import Note from '../models/Note'
import { ActionTypes, Action } from '../actions/notes'
import { defaultNotes } from './../notes'

export interface State {
  notes: Note[]
}

// Define our initialState
export const initialState: State = {
  notes: defaultNotes  // We have default notes at the start of the app
}

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.ADD_NOTE: {
      const note = action.payload.note

      return {
        ...state,
        notes: [...state.notes, note] // Add note to notes array
      }
    }

    case ActionTypes.DELETE_NOTE: {
      const { noteId } = action.payload
      
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== noteId)
      }
    }
    
    case ActionTypes.COLOR_SELECT: {
      const { noteId, color } = action.payload
      
      return {
        ...state,
        notes: state.notes.map(note => note.id === noteId ? {...note, color: color} : note)
      }
    }

    default:
      return state
  }
}