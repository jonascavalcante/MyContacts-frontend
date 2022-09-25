import styled from 'styled-components';

export default styled.select`
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
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    border-color: ${({ theme }) => theme.colors.gray[200]};
    background-color: ${({ theme }) => theme.colors.gray[100]};
    opacity: 1;
  }
`;
