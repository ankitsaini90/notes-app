import { connect } from 'react-redux'
import { State } from '../reducers'
import { getNotes } from '../selectors/notes'
import { deleteNote, colorSelect } from '../actions/notes'
import NotesList from '../components/NotesList'

const mapStateToProps = (state: State) => ({
  notes: getNotes(state)
})

const mapDispatchToProps = {
  onNoteClicked: deleteNote,
  onColorSelect: colorSelect
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(NotesList)