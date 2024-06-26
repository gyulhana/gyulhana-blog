import React from 'react';
import { RowBlock, StyledLink, T1 } from '@/styles/common.style';
import {
  HeaderContainer,
  HeaderFlexRowContainer,
  Image,
} from '@/styles/layout.style';
import { useNavigate } from 'react-router-dom';

const profiles: { title: string; link: string }[] = [
  {
    title: 'resume',
    link: 'https://www.rallit.com/resumes/417868@matearz/%EB%B0%95%EA%B7%9C%EB%9E%80',
  },
  { title: 'github', link: 'https://github.com/gyulhana' },
  {
    title: 'linkedIn',
    link: 'https://www.linkedin.com/in/%EA%B7%9C%EB%9E%80-%E2%80%8D%EB%B0%95-7737b81aa/',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const navigateHome = () => navigate('/');
  const imgUrl = new URL('/images/gyulhana.jpeg', import.meta.url).href;

  return (
    <HeaderContainer>
      <HeaderFlexRowContainer onClick={navigateHome}>
        <Image src={imgUrl} />
        <RowBlock width={24} />
        <T1>gyulhana.blog</T1>
      </HeaderFlexRowContainer>

      <HeaderFlexRowContainer position="right">
        {profiles.map(({ link, title }) => (
          <React.Fragment key={title}>
            <StyledLink href={link}>{title}</StyledLink>
            {title !== 'linkedIn' && <RowBlock width={24} />}
          </React.Fragment>
        ))}
      </HeaderFlexRowContainer>
    </HeaderContainer>
  );
};

export default Header;
