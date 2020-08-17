import styled from 'styled-components'

export const ToggleButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(45, 45, 45);
  cursor: pointer;
  display: inline-flex;
  height: 2.4rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 2px;
  padding-right: 3px;
  position: relative;
  width: 4.8rem;
  border-radius: 2.4rem;

  &:before {
    content: '🌜';
    font-size: 18px;
    margin-top: 0.5px;
  }

  &:after {
    content: '🌞';
    font-size: 18px;
    margin-top: 0.5px;
  }
`
export const ToggleButtonCircle = styled.div`
  transform: ${(props) =>
    props.theme === 'light'
      ? 'translateX(0px)'
      : 'translateX(calc((4.8rem - 100%) - 4px))'};
  background-color: rgb(241, 241, 241);
  height: 22px;
  position: absolute;
  top: 1px;
  width: 22px;
  z-index: 5;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(24, 120, 136);
  border-image: initial;
  border-radius: 50%;
  transition: transform 0.25s ease 0s;
`
