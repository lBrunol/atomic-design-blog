import TextLink from '../UI/atoms/Links/TextLink/TextLink'
import * as S from '../styles/util'
import IconLink from 'UI/atoms/Links/IconLink/IconLink'
import BrandHeader from 'UI/organisms/BrandHeader/BrandHeader'

import GitSvg from '../images/git.svg'
import YoutubeSvg from '../images/youtube.svg'
import TwitterSvg from '../images/twitter.svg'
import LinkedinSvg from '../images/linkedin.svg'

export default function UI() {
  return (
    <>
      <section>
        <article>
          <h1>Atoms</h1>
          <S.spaceBlock>
            <TextLink href="https://google.com.br">TextLink</TextLink>
          </S.spaceBlock>
          <S.spaceBlock>
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
          </S.spaceBlock>
          <hr />
        </article>
      </section>
      <section>
        <article>
          <h1>Molecules</h1>
          <S.spaceBlock />
          <hr />
        </article>
      </section>
      <section>
        <article>
          <h1>Organisms</h1>
          <S.spaceBlock>
            <BrandHeader />
          </S.spaceBlock>
        </article>
      </section>
    </>
  )
}
