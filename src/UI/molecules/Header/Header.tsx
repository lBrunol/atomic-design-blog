import * as S from './Styles'
import BrandHeader from 'UI/organisms/BrandHeader/BrandHeader'
import Navigation from 'UI/organisms/Navigation/Navigation'

const Header = () => (
  <>
    <S.Header>
      <S.HeaderContainer>
        <BrandHeader titleColor="white" />
        <Navigation />
      </S.HeaderContainer>
    </S.Header>
  </>
)

export default Header
