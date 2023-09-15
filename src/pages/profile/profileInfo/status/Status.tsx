import { ChangeEvent, Component } from 'react'
import { S } from '../ProfileInfo.styled'

interface StatusPT {
  status: string
}

interface OwnStateT {
  editMode: boolean
  status: string
}

export class Status extends Component<StatusPT, OwnStateT> {
  state = {
    status: this.props.status,
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
  }

  handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.target.value })
    console.log(this.state.status)
  }

  render() {
    return (
      <S.Status>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        ) : (
          <input
            type="text"
            value={this.props.status}
            onChange={this.handleOnChange}
            onBlur={this.deactivateEditMode}
            autoFocus
          />
        )}
      </S.Status>
    )
  }
}
