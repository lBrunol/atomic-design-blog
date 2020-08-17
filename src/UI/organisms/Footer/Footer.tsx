import * as S from './Styles'
import IconLink from 'UI/atoms/Links/IconLink/IconLink'

import GitSvg from '../../../images/git.svg'
import YoutubeSvg from '../../../images/youtube.svg'
import TwitterSvg from '../../../images/twitter.svg'
import LinkedinSvg from '../../../images/linkedin.svg'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <IconLink href="https://github.com" rel="" target="_blank" title="">
          <GitSvg></GitSvg>
        </IconLink>
        <IconLink href="https://github.com" rel="" target="_blank" title="">
          <YoutubeSvg></YoutubeSvg>
        </IconLink>
        <IconLink href="https://github.com" rel="" target="_blank" title="">
          <LinkedinSvg></LinkedinSvg>
        </IconLink>
        <IconLink href="https://github.com" rel="" target="_blank" title="">
          <TwitterSvg></TwitterSvg>
        </IconLink>
      </S.FooterContainer>
    </S.Footer>
  )
}

export default Footer
