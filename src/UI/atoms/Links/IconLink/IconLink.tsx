import { ReactNode } from 'react'
import * as S from './Styles'

type Props = {
  href: string
  title: string
  target: string
  rel: string
  children: string | ReactNode
}

const IconLink = ({ href, title, target, rel, children }: Props) => {
  return (
    <S.A href={href} title={title} target={target} rel={rel}>
      {children}
    </S.A>
  )
}

export default IconLink
