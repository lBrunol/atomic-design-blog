import styled from 'styled-components'

export const A = styled.a`
  color: var(--highlightColor);
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  padding-bottom: 0.1rem;
  will-change: border-color;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s ease 0s;

  &:hover,
  &:focus,
  &:active {
    border-color: var(--highlightColor);
  }
`
