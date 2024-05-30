import styled from '@emotion/styled';
import { FlexRowContainer } from '@/styles/common.style';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 6rem;
  border-top: 1px solid black;
`;

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

export const HeaderFlexRowContainer = styled(FlexRowContainer)<{
  position?: 'right';
}>`
  @media (max-width: 456px) {
    width: ${({ position }) => (position === 'right' ? 0 : 'auto')};
    height: ${({ position }) => (position === 'right' ? 0 : 'auto')};
  }
`;

export const LayoutContainer = styled.section`
  width: 100%;
  height: calc(100vh - 12rem);
  overflow: scroll;
`;
