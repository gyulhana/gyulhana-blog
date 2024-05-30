import styled from '@emotion/styled';

export const color: Record<string, string> = {
  /* grey colors */
  white: '#FFFFFF',
  /* background */
  grey1: '#F6F6F9',
  /* divide line */
  grey2: '#F2F2F7',
  /* button border */
  grey3: '#E5E5EA',
  /* optional  */
  grey4: '#C7C7CC',
  /* disable */
  grey5: '#8E8E93',
  /* text */
  grey6: '#48484A',
  /* title or enable */
  grey7: '#1C1C1E',
  black: '#000000',

  /* status */
  error: '#F2433D',
  warning: '#FFCD4D',
  success: '#45D945',
  complete: '#4E4EC8',
};

export const T1 = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.color};
`;

export const Spacer = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
`;

export const RowBlock = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  height: 100%;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
