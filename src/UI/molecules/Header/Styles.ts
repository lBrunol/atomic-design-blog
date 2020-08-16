import styled from 'styled-components'

export const Header = styled.header`
  background-color: rgba(15, 15, 15, 0.95);
  color: rgba(255, 255, 255, 0.9);
  display: block;
  left: 0px;
  position: fixed;
  right: 0px;
  text-transform: lowercase;
  top: 0px;
  width: 100%;
  will-change: background-color;
  z-index: 5;
  transition: background-color 0.3s ease 0s;
`

export const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  height: 4.8rem;
  justify-content: space-between;
  align-items: center;
  display: flex;

  @media (min-width: 768px) {
    height: 6.4rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`
