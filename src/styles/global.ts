import { createGlobalStyle, css } from 'styled-components'
import * as variables from './variables'
import { ThemeType, ThemeDefault } from './theme'

const GlobalStyles = createGlobalStyle`
  ${({ theme }: Props) => css`
    :root {
      --primary-color: ${variables.colors.primaryColor[theme.type]};
      --bg: ${variables.colors.bg[theme.type]};
      --bgSolid: ${variables.colors.bgSolid[theme.type]};
      --bgSecondary: ${variables.colors.bgSecondary[theme.type]};
      --borderColor: ${variables.colors.borderColor[theme.type]};
      --highlightColor: ${variables.colors.highlightColor[theme.type]};
      --secondaryColor: ${variables.colors.secondaryColor[theme.type]};
      --boxShadow: ${variables.colors.boxShadow[theme.type]};
    }
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
      background-color: var(--bg);
      will-change: background-color;
      transition: background-color 0.25s ease 0s;
      color: var(--primary-color);
      overflow-x: hidden;
      text-rendering: optimizelegibility;
    }
    a {
      text-decoration: none;
    }
    ul,
    li {
      list-style: none;
    }
    h1 {
      color: var(--primary-color);
    }
    p {
      &:not(last-child) {
        margin-bottom: 2.4rem;
      }
    }
    article {
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: -0.04px;
      line-height: 1.5em;

      &:not(last-child) {
        margin-bottom: 3.2rem;
      }
      &:not(first-child) {
        margin-top: 3.2rem;
      }
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
