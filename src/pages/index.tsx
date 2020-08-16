import Header from '../UI/molecules/Header/Header'
import Introduction from 'UI/molecules/Introduction/Introduction'
import * as G from '../styles/grid'
import * as U from '../styles/util'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <G.Container>
        <U.MainSection>
          <Introduction></Introduction>
        </U.MainSection>
      </G.Container>
    </div>
  )
}
