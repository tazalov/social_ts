import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, FC, memo, useCallback, useState } from 'react'

import { Links } from './links/Links'
import { ProfileEditForm } from './profileEditForm/ProfileEditForm'
import { S } from './ProfileInfo.styled'
import Status from './status/Status'

import noAvatar from '../../../app/assets/images/anynft.webp'
import { C } from '../../../app/styles/Common.styled'
import { Avatar, ButtonB, Input, Modal } from '../../../components'
import { ProfileT } from '../../../redux/profile-reducer'

interface ProfileInfoPT {
  profile: ProfileT
  isOwner: boolean
  updatePhoto: (photo: File) => void
  updateProfile: (profile: Omit<ProfileT, 'photos'>) => void
}

export const ProfileInfo: FC<ProfileInfoPT> = memo(({ profile, isOwner, updatePhoto, updateProfile }) => {
  const { fullName, lookingForAJob, lookingForAJobDescription, photos, contacts } = profile
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const handleOnChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      updatePhoto(e.target.files[0])
    }
  }

  return (
    <C.FlexWrapper $align={'center'} $justify={'space-between'}>
      <S.ProfileInfo $align={'center'}>
        <Avatar img={photos.large || noAvatar} w={150} h={150} pos_styles={S.AvatarPos} />
        <S.Info $direction={'column'} $align={'flex-start'} $gap={'10px'}>
          <S.Name $align={'center'} $gap={'5px'}>
            <p>{fullName}</p>
            <span>{lookingForAJobDescription || 'developer'}</span>
          </S.Name>
          <Status />
          <S.Looking>
            Looking for a job: <span>{lookingForAJob ? 'YES' : 'NO'}</span>
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
            <ButtonB title={'edit'} callback={onShowModal} />
          </C.FlexWrapper>
        )}
        <Links links={contacts} />
      </S.Buttons>
      <Modal isOpen={isAuthModal} onClose={onCloseModal}>
        <ProfileEditForm profile={profile} updateProfile={updateProfile} error={''} />
      </Modal>
    </C.FlexWrapper>
  )
})
