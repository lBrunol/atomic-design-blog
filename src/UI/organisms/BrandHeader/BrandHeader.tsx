import * as S from './Styles'
import Link from 'next/link'

type Props = {
  titleColor: string
}

const BrandHeader = ({ titleColor }: Props) => {
  return (
    <Link href="/">
      <a>
        <S.BrandContainer>
          <S.BrandAvatar>
            <S.BrandAvatarImage src="/avatar.jpg" />
          </S.BrandAvatar>
          <S.BrandTitle titleColor={titleColor}>Goku</S.BrandTitle>
        </S.BrandContainer>
      </a>
    </Link>
  )
}

export default BrandHeader
