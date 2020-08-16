import TextLink from 'UI/atoms/Links/TextLink/TextLink'

const Introduction = () => {
  return (
    <article>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        velit erat, aliquet at velit sit amet, tempor pharetra lorem. Proin
        molestie, ante vel mattis venenatis, lorem mi cursus neque, sed
        condimentum leo felis ac eros
      </p>
      <p>
        Cras semper odio leo, sed sollicitudin lectus scelerisque at. Vestibulum
        sit amet turpis in nunc finibus cursus. Mauris vulputate, urna in
        aliquam maximus, <TextLink href="https://google.com">purus </TextLink>
        sapien feugiat purus, laoreet ultrices sem lacus quis lectus
      </p>
      <p>
        Cras semper odio leo, sed sollicitudin lectus scelerisque at. Vestibulum
      </p>
    </article>
  )
}

export default Introduction
