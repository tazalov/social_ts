import { FC, memo } from 'react'

import { Links } from './links/Links'

import { C } from '../../../app/styles/Common.styled'
import { TitleBlock } from '../../../components'
import { Text } from '../../../components/text/Text'
import { ContactsT } from '../../../redux/profile-reducer'

type AboutPT = {
  about: string | null
  contacts: ContactsT
  lookingForAJob: boolean
}

export const About: FC<AboutPT> = memo(({ about, contacts, lookingForAJob }) => {
  return (
    <C.ShadowContainer style={{ height: 'min-content', minWidth: '300px' }}>
      <TitleBlock title={'Current profile info'} />
      <C.FlexWrapper $direction={'column'} $gap={'20px'} style={{ padding: '10px' }}>
        <Text title={'Looking job'} text={lookingForAJob ? 'YES' : 'NO'} />
        {about && <Text title={'About me'} text={about} />}
        <Links links={contacts} />
      </C.FlexWrapper>
    </C.ShadowContainer>
  )
})
