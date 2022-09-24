import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  padding: 0 16px;

  font-size: 16px;
  font-weight: bold;

  border:none;
  outline: none;
  border-radius: 4px;

  color: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.colors.primary.main};
  transition: background 0.2 ease-in;

  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCC;
    cursor: not-allowed;
  }

  ${({ theme, danger }) => (
    danger && css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `
  )}
`;
