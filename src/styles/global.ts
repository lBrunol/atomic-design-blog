import { createGlobalStyle, css } from 'styled-components'
import * as variables from './variables'
import { ThemeType, ThemeDefault } from './theme'

const GlobalStyles = createGlobalStyle`
  ${({ theme }: Props) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', cursive;
    }
    html {
      font-size: 10px;
    }
    body {
      font-family: 'Roboto';
      font-size: 2rem;
      background-color: ${variables.siteBackground[theme.type]};
      will-change: background-color;
      transition: background-color 0.25s ease 0s;
    }
    a {
      text-decoration: none;
    }
    ul,
    li {
      list-style: none;
    }
    h1 {
      color: ${variables.titleColor[theme.type]};
    }
  `}
`
GlobalStyles.defaultProps = {
  theme: ThemeDefault
}

type Props = {
  theme: ThemeType
}

export default GlobalStyles
