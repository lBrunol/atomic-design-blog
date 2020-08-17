import Header from '../UI/molecules/Header/Header'
import Introduction from 'UI/molecules/Introduction/Introduction'
import * as G from '../styles/grid'
import * as U from '../styles/util'
import PostList from 'UI/molecules/PostList/PostList'
import Footer from 'UI/organisms/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <G.Container>
        <U.MainSection>
          <Introduction />
          <PostList />
        </U.MainSection>
        <Footer />
      </G.Container>
    </div>
  )
}
