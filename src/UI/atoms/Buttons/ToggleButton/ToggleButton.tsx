import * as S from './Styles'
import { useState } from 'react'

const ToggleButton = () => {
  const [theme, setTheme] = useState('light')
  return (
    <S.ToggleButton
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      <S.ToggleButtonCircle theme={theme}></S.ToggleButtonCircle>
    </S.ToggleButton>
  )
}

export default ToggleButton
