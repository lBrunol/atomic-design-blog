import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  > :not(last-child) {
    margin-right: 0.8rem;
  }

  a {
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    display: inline-flex;
    font-size: 1.7rem;
    font-weight: 600;
    height: 4.8rem;
    letter-spacing: 0.05rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    will-change: color;
    text-decoration: none;
    transition: color 0.25s ease 0s;

    &:focus,
    &:hover,
    &:active {
      color: rgb(161, 236, 247);
      border-color: rgb(161, 236, 247);
    }

    @media (min-width: 768px) {
      padding-bottom: 0.1rem;
      will-change: border-color;
      border-bottom: 2px solid transparent;
      transition: border-color 0.25s ease 0s;
    }
  }
`
