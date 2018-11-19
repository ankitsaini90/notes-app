import * as React from 'react'
import Note from '../models/Note'
import * as moment from 'moment'
import './NoteListStyles.css'

interface Props {
  notes: Note[],
  onNoteClicked: (noteId: number) => void
  onColorSelect: (noteId: number, color: string) => void
}

interface State { 
    search: string
}

const DATE_FORMAT = 'DD/MM/YYYY HH:mm';
const COLORS = ['red', 'blue', 'green'];
const NO_COLOR = '';

export default class AddNoteForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        search : ''
    }
  }
  
   _updateValue(search: string) {
    this.setState({ search })
  }
  
  _renderFilterContainer() {
    return (
        <div>
            <span>Filter by marker</span>
            {
                COLORS.map(color => {
                    return (<span key={color} className="color" style={{backgroundColor : color}} onClick={e => this._updateValue(color)}></span>)
                })
            }
            <span className="delete" onClick={e => this._updateValue(NO_COLOR)}>X</span>
        </div>
    )
  }
  
  _getNotes(notes: Note[]) {
    return (this.state.search && notes.filter((note) => {return note.color === this.state.search }) ) || notes
  }

  render() {
    const { notes, onNoteClicked, onColorSelect } = this.props
    const filteredNotes = this._getNotes(notes)
    
    return (
        <div>
          <ul className="list">
            {filteredNotes.length > 0 && this._renderFilterContainer()}
        
            {
              filteredNotes.map(note => (
                <li key={note.id}>
                    <div className="item">
                        <span className="color" style={{backgroundColor : note.color}}></span>
                        <span style={{width: '70%'}}>{note.text}</span>
                        <span>Mark : </span>
                        {
                            COLORS.map(color => {
                                return (<span key={color} className="color" style={{backgroundColor : color}} onClick={() => onColorSelect(note.id, color)}></span>)
                            })
                        }
                        <span>{moment(note.date).format(DATE_FORMAT)}</span>
                        <span className="delete" onClick={() => onNoteClicked(note.id)}>X</span>
                    </div>
                </li>)
              )
            }
          </ul>
        </div>
    )
  }
}