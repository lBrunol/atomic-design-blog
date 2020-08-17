import * as S from './Styles'
import PostItem from 'UI/organisms/PostItem/PostItem'

const PostList = () => {
  return (
    <S.PostListContainer>
      <h1>Últimas do blog</h1>
      <PostItem />
      <PostItem />
    </S.PostListContainer>
  )
}

export default PostList
