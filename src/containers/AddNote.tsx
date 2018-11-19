import { connect } from 'react-redux'
import { addNote } from '../actions/notes'
import AddNoteForm from '../components/AddNoteForm'

export default connect<any, any, any>(null, {
  handleSubmit: addNote
})(AddNoteForm)