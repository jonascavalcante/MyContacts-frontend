import styled, { css } from 'styled-components';

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

  display: flex;
  justify-content: center;
  place-items: center;
  gap: 8px;

  &+& {
    margin-top: 12px;
  }
`;
