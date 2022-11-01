import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const containerVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
`,
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
`,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
`,
};

export const Container = styled.div`
  width: fit-content;
  padding: 16px 32px;
  border-radius: 4px;

  color: #FFF;
  ${({ type }) => containerVariants[type] || containerVariants.default}; /* background-color */
  box-shadow: 0 20px 20px -16px rgba(0, 0, 0, 0.25);

  &:focus {
    background-color: purple;
    outline: transparent;
  }

  display: flex;
  justify-content: center;
  place-items: center;
  gap: 8px;

  cursor: pointer;

  animation: ${messageIn} 0.2s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${messageOut} 0.2s;
  `}

  &+& {
    margin-top: 12px;
  }
`;
