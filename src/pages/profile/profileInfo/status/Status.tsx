import { ChangeEvent, Component, KeyboardEvent } from 'react'
import { connect } from 'react-redux'
import { Input } from '../../../../components/input/Input'
import { updateStatusProfile } from '../../../../redux/profile/thunks'
import { AppStateT } from '../../../../redux/store'
import { S } from '../ProfileInfo.styled'

interface OwnStateT {
  editMode: boolean
  status: string
}

class Status extends Component<MapStatePT & MapDispatchPT, OwnStateT> {
  state = {
    status: this.props.status,
    editMode: false,
  }

  componentDidUpdate(prevProps: Readonly<MapStatePT & MapDispatchPT>) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  activateEditMode = () => {
    const { id, userId } = this.props
    if (id === userId) {
      this.setState({ editMode: true })
    }
  }

  deactivateEditMode = () => {
    this.setState({ status: this.props.status, editMode: false })
  }

  handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.target.value })
    console.log(this.state.status)
  }

  handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.updateStatusProfile(this.state.status)
      this.deactivateEditMode()
    }
  }

  render() {
    return (
      <S.Status>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
        ) : (
          <Input
            type="text"
            value={this.state.status}
            onChange={this.handleOnChange}
            onBlur={this.deactivateEditMode}
            onKeyDown={this.handleEnter}
            autoFocus
          />
        )}
      </S.Status>
    )
  }
}

interface MapStatePT {
  id?: number | null
  userId?: number | null
  status: string
}

const mapStateToProps = (state: AppStateT): MapStatePT => ({
  id: state.auth.id,
  userId: state.profile.profile?.userId,
  status: state.profile.status,
})

interface MapDispatchPT {
  updateStatusProfile: (status: string) => void
}

export default connect<MapStatePT, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  updateStatusProfile,
})(Status)
