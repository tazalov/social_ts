import { FC, memo } from 'react'

import { C } from '../../../../app/styles/Common.styled'
import { Social } from '../../../../components'
import { SocialId } from '../../../../components/icon/Social'
import { ContactsT } from '../../../../redux/profile-reducer'

interface LinksPT {
  links: ContactsT
}

export const Links: FC<LinksPT> = memo(({ links }) => {
  const linksNames = Object.keys(links) as SocialId[]
  return (
    <C.FlexWrapper $gap={'10px'} $justify={'center'} $wrap={'wrap'} style={{ maxWidth: '200px', margin: '0 auto' }}>
      {linksNames.reduce((acc, el) => {
        if (links[el]) {
          acc.push(<Social key={el} iconId={el} link={links[el] ?? ''} />)
        }
        return acc
      }, [] as JSX.Element[])}
    </C.FlexWrapper>
  )
})
