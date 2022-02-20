import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;

  font-size: 16px;
  border: 2px solid #FFF;
  outline: none;
  border-radius: 4px;

  background-color: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: 0.2 ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
