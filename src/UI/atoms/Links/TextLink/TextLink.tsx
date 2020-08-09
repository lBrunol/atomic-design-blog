import * as S from './Styles'

type Props = {
  href: string
  children?: string
}

const TextLink = ({ children, href }: Props) => (
  <S.A href={href}>{children}</S.A>
)

export default TextLink
