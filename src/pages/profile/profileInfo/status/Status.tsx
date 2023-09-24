import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { Input } from '../../../../components'
import { updateStatusProfile } from '../../../../redux/profile-reducer'
import { RootStateT } from '../../../../redux/store'
import { getShortString } from '../../../../utils/string/getShortString'
import { S } from '../ProfileInfo.styled'

type StatusPT = MapStatePT & MapDispatchPT

const Status: FC<StatusPT> = ({ id, userId, status, updateStatusProfile }) => {
  const [editMode, setEditMode] = useState(false)
  const [currentStatus, setCurrentStatus] = useState('')

  useEffect(() => {
    setCurrentStatus(status)
  }, [status])

  const activateEditMode = () => {
    if (id === userId) setEditMode(true)
  }

  const deactivateEditMode = () => {
    setCurrentStatus(status)
    setEditMode(false)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setCurrentStatus(e.currentTarget.value)

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateStatusProfile(currentStatus)
      deactivateEditMode()
    }
  }

  const newStatus = status ? getShortString(status, 15) : 'No status'

  return (
    <S.Status>
      {!editMode ? (
        <span role='status-span' onDoubleClick={activateEditMode}>
          {newStatus}
        </span>
      ) : (
        <Input
          role='status-input'
          type='text'
          value={currentStatus}
          onChange={handleOnChange}
          onBlur={deactivateEditMode}
          onKeyDown={handleEnter}
          autoFocus
        />
      )}
    </S.Status>
  )
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
})(Status)
