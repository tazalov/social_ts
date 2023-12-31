import { ChangeEvent, Component, KeyboardEvent } from 'react'
import { connect } from 'react-redux'

import { Input } from '../../../../components'
import { updateStatusProfile } from '../../../../redux/profile-reducer'
import { RootStateT } from '../../../../redux/store'
import { getShortString } from '../../../../utils/string/getShortString'
import { S } from '../ProfileInfo.styled'

interface OwnStateT {
  editMode: boolean
  status: string
}

class Deprecated_Status extends Component<MapStatePT & MapDispatchPT, OwnStateT> {
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
    const { status } = this.props
    const newStatus = status ? getShortString(status, 15) : 'No status'
    return (
      <S.Status>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{newStatus}</span>
        ) : (
          <Input
            id='deprecated_status_profile'
            type='text'
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

const mapStateToProps = (state: RootStateT): MapStatePT => ({
  id: state.app.id,
  userId: state.profile.profile?.userId,
  status: state.profile.status,
})

interface MapDispatchPT {
  updateStatusProfile: (status: string) => void
}

export default connect<MapStatePT, MapDispatchPT, unknown, RootStateT>(mapStateToProps, {
  updateStatusProfile,
})(Deprecated_Status)
