import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, FC, memo } from 'react'

import { Links } from './links/Links'
import { S } from './ProfileInfo.styled'
import Status from './status/Status'

import noAvatar from '../../../app/assets/images/anynft.webp'
import { C } from '../../../app/styles/Common.styled'
import { Avatar, Input } from '../../../components'
import { ButtonB } from '../../../components'
import { ContactsT } from '../../../redux/profile-reducer'

interface ProfileInfoPT {
  avatar: string | null
  name: string
  isLookingJob: boolean
  jobDesc: string | null
  contacts: ContactsT
  isOwner: boolean
  updatePhoto: (photo: File) => void
}

export const ProfileInfo: FC<ProfileInfoPT> = memo(
  ({ avatar, name, isLookingJob, jobDesc, contacts, isOwner, updatePhoto }) => {
    const handleOnChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        updatePhoto(e.target.files[0])
      }
    }
    return (
      <C.FlexWrapper $align={'center'} $justify={'space-between'}>
        <S.ProfileInfo $align={'center'}>
          <Avatar img={avatar || noAvatar} w={150} h={150} pos_styles={S.AvatarPos} />
          <S.Info $direction={'column'} $align={'flex-start'} $gap={'10px'}>
            <S.Name $align={'center'} $gap={'5px'}>
              <p>{name}</p>
              <span>{jobDesc || 'developer'}</span>
            </S.Name>
            <Status />
            <S.Looking>
              Looking for a job: <span>{isLookingJob ? 'YES' : 'NO'}</span>
            </S.Looking>
          </S.Info>
        </S.ProfileInfo>
        <S.Buttons $direction={'column'} $justify={'center'} $align={'flex-end'} $gap={'10px'}>
          {isOwner && (
            <C.FlexWrapper $align={'center'} $gap={'5px'} $justify={'center'}>
              <S.EditPhoto htmlFor={'edit_photo_profile'}>
                <FontAwesomeIcon icon={faCamera} />
              </S.EditPhoto>
              <Input
                id={'edit_photo_profile'}
                type={'file'}
                accept='image/png, image/gif, image/jpeg'
                style={{ display: 'none' }}
                onChange={handleOnChangeFile}
              />
              <ButtonB title={'edit'} callback={() => console.log(1)} />
            </C.FlexWrapper>
          )}
          <Links links={contacts} />
        </S.Buttons>
      </C.FlexWrapper>
    )
  },
)
