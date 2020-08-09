import Header from '../UI/molecules/Header/Header'

type Props = {
  title: string
}

export default function Home({ title = 'Blog' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <Header></Header>
    </div>
  )
}
