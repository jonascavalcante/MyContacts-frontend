import styled from 'styled-components';

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

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCC;
    cursor: not-allowed;
  }
`;
