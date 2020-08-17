import Link from 'next/link'
import * as S from './Styles'

const PostItem = () => {
  return (
    <Link href="/">
      <S.PostItemLink>
        <S.PostItemContainer>
          <S.PostItemDate>
            11 ago, 2020 <span> · Leitura de 6 min</span>
          </S.PostItemDate>
          <S.PostItemTitle>
            CSS Grid e Flexbox - Quando utilizar?
          </S.PostItemTitle>
          <S.PostItemSubtitle>
            Tem dúvidas sobre quando utilizar CSS Grid e quando utilizar
            Flexbox? Esse artigo (e vídeo!) pode te ajudar 😁
          </S.PostItemSubtitle>
        </S.PostItemContainer>
      </S.PostItemLink>
    </Link>
  )
}

export default PostItem
