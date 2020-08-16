import * as S from './Styles'
import Link from 'next/link'

const Navigation = () => {
  return (
    <S.Nav>
      <Link href="/">
        <a>hi</a>
      </Link>
      <Link href="/">
        <a>blog</a>
      </Link>
      <Link href="/">
        <a>lab</a>
      </Link>
    </S.Nav>
  )
}

export default Navigation
