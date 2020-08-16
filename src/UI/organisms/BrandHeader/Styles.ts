import styled, { css } from 'styled-components'

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;

  > :not(last-child) {
    margin-right: 1.6rem;
  }
`

export const BrandAvatar = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`
export const BrandAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  object-fit: cover;
  object-position: center center;
  transition: opacity 500ms ease 0s;
  position: absolute;
`
export const BrandTitle = styled.h1`
  ${({ titleColor }: BrandTitleProps) => css`
    font-size: 1.7rem;
    letter-spacing: 0.025rem;
    color: ${titleColor === 'white'
      ? 'rgba(255, 255, 255, 0.9);'
      : titleColor === 'black'
      ? 'rgba(15,15,15,0.95);'
      : 'var(--primary-color)'};
    display: inline-block;

    @media (min-width: 450px) {
      font-size: 2.1rem;
    }
  `}
`
type BrandTitleProps = {
  titleColor: string
}
