import TextLink from '../UI/atoms/Links/TextLink/TextLink'
import * as S from '../styles/util'

export default function UI() {
  return (
    <>
      <section>
        <article>
          <h1>Atoms</h1>
          <S.spaceBlock>
            <TextLink href="https://google.com.br">TextLink</TextLink>
          </S.spaceBlock>
          <hr />
        </article>
      </section>
      <section>
        <article>
          <h1>Molecules</h1>
          <hr />
        </article>
      </section>
      <section>
        <article>
          <h1>Organisms</h1>
          <hr />
        </article>
      </section>
    </>
  )
}
