import * as S from './Styles'
import Link from 'next/link'
import ToggleButton from 'UI/atoms/Buttons/ToggleButton/ToggleButton'

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
      <ToggleButton />
    </S.Nav>
  )
}

export default Navigation
