import { FC } from 'react'
import { Social } from '../../../../components/icon/Social'
import { ContactsT } from '../../../../redux/profile/reducer/types'
import { C } from '../../../../styles/Common.styled'

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
