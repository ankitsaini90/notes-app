import Note from '../models/Note'

function getRandomInt( min: number, max: number ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
 }
         
let nextId = getRandomInt(100, 10000)

export enum ActionTypes {
  ADD_NOTE = '[notes] ADD_NOTE',
  DELETE_NOTE = '[notes] DELETE_NOTE',
  COLOR_SELECT = '[notes] COLOR_SELECT'
}

export interface AddNoteAction { type: ActionTypes.ADD_NOTE, payload: { note: Note } }
export interface DeleteNoteAction { type: ActionTypes.DELETE_NOTE, payload: { noteId: number } }
export interface ColorSelectAction { type: ActionTypes.COLOR_SELECT, payload: { noteId: number, color: string } }

export function addNote(text: string): AddNoteAction {

  return {
    type: ActionTypes.ADD_NOTE,
    payload: {
      note: {
        id: nextId++,
        text,
        date: new Date(),
        color: ''
      }
    }
  }
}

export function deleteNote(noteId: number): DeleteNoteAction {
  return { type: ActionTypes.DELETE_NOTE, payload: { noteId } } 
}

export function colorSelect(noteId: number, color: string): ColorSelectAction {
  return { type: ActionTypes.COLOR_SELECT, payload: { noteId, color } }
}

export type Action = AddNoteAction | DeleteNoteAction | ColorSelectAction