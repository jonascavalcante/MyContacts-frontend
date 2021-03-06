import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;

  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;

  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    margin-right: 8px;
    font-size: 16px;

    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    background: transparent;
  }
`;
