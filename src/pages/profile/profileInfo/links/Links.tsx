import { FC } from 'react'

import { C } from '../../../../app/styles/Common.styled'
import { Social } from '../../../../components'
import { ContactsT } from '../../../../redux/profile-reducer'

interface LinksPT {
  links: ContactsT
}

export type ContactLinksT = keyof ContactsT

export const Links: FC<LinksPT> = ({ links }) => {
  const linksNames = Object.keys(links) as ContactLinksT[]
  return (
    <C.FlexWrapper $gap={'10px'} $justify={'flex-end'}>
      {linksNames.reduce((acc, el) => {
        if (links[el]) {
          acc.push(<Social key={el} iconId={el} link={links[el] ?? ''} />)
        }
        return acc
      }, [] as JSX.Element[])}
    </C.FlexWrapper>
  )
}
