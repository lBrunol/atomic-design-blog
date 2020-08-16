import * as S from './Styles'
import Link from 'next/link'

const BrandHeader = () => {
  return (
    <Link href="/">
      <a>
        <S.BrandContainer>
          <S.BrandAvatar>
            <S.BrandAvatarImage src="/avatar.jpg" />
          </S.BrandAvatar>
          <S.BrandTitle>Goku</S.BrandTitle>
        </S.BrandContainer>
      </a>
    </Link>
  )
}

export default BrandHeader
