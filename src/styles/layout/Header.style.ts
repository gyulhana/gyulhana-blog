import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const FlexRowContainer = styled.div<{ position?: 'right' }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  @media (max-width: 456px) {
    width: ${({ position }) => (position === 'right' ? 0 : 'auto')};
    height: ${({ position }) => (position === 'right' ? 0 : 'auto')};
  }
`;
