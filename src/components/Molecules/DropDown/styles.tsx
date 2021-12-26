import styled, { css } from 'styled-components'
import type { Direction } from '../../../types'

export const StyledDropDown = styled.div<{
  scrollDirection?: Direction;
  scrolledToTop?: boolean;
}>`
  max-width: 240px;
  margin-top: 38px;
  margin-bottom: 38px;
  display: block;

  position: sticky;
  top: 156px;
  z-index: 49;
  padding: 8px 0px;
  background-color: var(--gray-99);
  transition: var(--transition);
  width: 100%;

  @media (max-width: 960px) {
    top: 135px;
    margin: 38px auto;
    padding: 0;
  }

  @media (max-width: 480px) {
    top: 112px;
  }

  @media (prefers-reduced-motion: no-preference) {
     ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === 'up' &&
      !scrolledToTop &&
      css`
        padding: 0;
        margin: 38px auto;
        box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
      `

     ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === 'down' &&
      !scrolledToTop &&
      css`
        padding: 0;
        margin: 38px auto;
        box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
      `
  }

  > button {
    border: 1px solid var(--gray-84);
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`

export const StyledDropDownWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 1440px;
  margin: auto;
`

export const StyledDropDownMenu = styled.ul<{
  positionTopMenu?: string;
  positionLeftMenu?: string;
  scrollDirection?: Direction;
  scrolledToTop?: boolean;
}>`
  position: absolute;
  z-index: 99;
  top: ${({ positionTopMenu }) => positionTopMenu ?? 0};
  left: ${({ positionLeftMenu }) => positionLeftMenu ?? 0};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5px;
  max-width: 240px;
  width: 100%;

  @media (max-width: 960px) {
    position: fixed;
    left: calc(50% - 124px);
    top: 266px;
  }

  @media (max-width: 480px) {
    position: fixed;
    top: 236px;
  }

  @media (prefers-reduced-motion: no-preference) {
     ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        left: calc(50% - 124px);
        top: 194px;
        position: fixed;
        @media (max-width: 960px) {
          top: 172px;
        }

        @media (max-width: 480px) {
          top: 150px;
        }
      `

     ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        left: calc(50% - 124px);
        top: 194px;
        position: fixed;
        @media (max-width: 960px) {
          top: 172px;
        }

        @media (max-width: 480px) {
          top: 150px;
        }
      `
  }
`

export const StyledDropDownItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

export const StyledDropDownBtn = styled.button`
  padding: 5px 10px;
  width: 100%;
  transition: var(--transition);

  &:hover {
    background-color: var(--whiteSmoke);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background-color: transparent;
    }
  }
`