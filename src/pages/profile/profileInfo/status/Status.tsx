import { ChangeEvent, Component } from 'react'
import { connect } from 'react-redux'
import { AppStateT } from '../../../../redux/store'
import { S } from '../ProfileInfo.styled'

interface OwnStateT {
  editMode: boolean
  status: string
}

class Status extends Component<{ status: string }, OwnStateT> {
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

const mapStateToProps = (state: AppStateT) => ({
  status: state.profile.status,
})

export default connect<{ status: string }, {}, unknown, AppStateT>(mapStateToProps)(Status)
