import styled from 'styled-components'

export const PostItemLink = styled.a`
  &:not(last-child) {
    margin-bottom: 2.4rem;
  }
  color: var(--primary-color);
  display: block;
`
export const PostItemContainer = styled.article`
  box-shadow: 0 1px 3px var(--boxShadow);
  color: var(--primary-color);
  display: block;
  height: 100%;
  min-height: 15rem;
  position: relative;
  will-change: border-color;
  border-radius: 2px;
  padding: 1.6rem;

  &:before,
  &:after {
    content: '';
    bottom: 0px;
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    transition: transform 0.25s ease 0s;
  }

  &:before {
    transform: scaleY(0);
  }

  &:after {
    transform: scaleX(0);
  }

  &:hover {
    &:before {
      transform: scaleY(1);
    }
    &:after {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 2.4rem;
  }
`
export const PostItemDate = styled.time`
  &:not(last-child) {
    margin-bottom: 0.4rem;
  }
  color: var(--secondaryColor);
  display: block;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`
export const PostItemTitle = styled.h1`
  &:not(:first-child) {
    margin-top: 1.6rem;
  }
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
  color: var(--primary-color);
  font-size: 2.6rem;
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.3em;
`
export const PostItemSubtitle = styled.h2`
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  color: var(--secondaryColor);
  font-size: 2rem;
  letter-spacing: -0.04px;
  line-height: 1.3em;
  font-weight: 400;
`
