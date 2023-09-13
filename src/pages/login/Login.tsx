import { FC } from 'react'

type LoginPT = {
  // add props type
}

export const Login: FC<LoginPT> = ({}) => {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button>login</button>
    </div>
  )
}
