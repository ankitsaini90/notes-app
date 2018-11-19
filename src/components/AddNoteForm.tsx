import * as React from 'react'
import { FormEvent } from 'react';
import './AddNoteForm.css';

interface Props {
  handleSubmit: (value: string) => void
}
interface State {
  value: string
}

export default class AddNoteForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { value: '' } // Value is empty by default
    this._updateValue = this._updateValue.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _updateValue(value: string) {
    this.setState({ value })
  }

  _handleSubmit(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })

  }

  render() {
    const { value } = this.state
    const { _updateValue, _handleSubmit } = this
    return (
      <form onSubmit={_handleSubmit}>
        <textarea className="notes" value={value} onChange={e => _updateValue(e.target.value)} />
        <button className="addNote" type="submit">Add note !</button>
      </form>
    )
  }
}