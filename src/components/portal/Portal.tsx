import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

/*
* Братец или сестричка, порталы это такая штука, которая переместит наш компонент в любое место ДОМ-дерева
* children - то, что будем перемещать
* element - то место, куда будем перемещать
? Это нужно для всяких модалок и прочих блоков, чтобы другие блоки не перекрывали их никаким способом
? То есть в коде мы можем определить компонент внутри где-то глубоко,
? но обернув его в <Portal> и передав аттрибут element - Реакт переместит его физически туда
*/

interface PortalPT {
  children?: ReactNode
  element: Element
}

export const Portal: FC<PortalPT> = ({ children, element }) => {
  return createPortal(children, element)
}
