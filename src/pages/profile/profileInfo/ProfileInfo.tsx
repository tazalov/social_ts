import { FC, memo } from 'react'
import noAvatar from '../../../app/assets/images/anynft.webp'
import { Avatar } from '../../../components'
import { ButtonB } from '../../../components'
import { C } from '../../../app/styles/Common.styled'
import { ContactsT } from '../../../redux/profile-reducer'
import { Links } from './links/Links'
import { S } from './ProfileInfo.styled'
import Status from './status/Status'

interface ProfileInfoPT {
  avatar: string | null
  name: string
  isLookingJob: boolean
  jobDesc: string | null
  contacts: ContactsT
}

export const ProfileInfo: FC<ProfileInfoPT> = memo(
  ({ avatar, name, isLookingJob, jobDesc, contacts }) => {
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
          <ButtonB title={'edit'} callback={() => console.log(1)} />
          <Links links={contacts} />
        </S.Buttons>
      </C.FlexWrapper>
    )
  },
)
