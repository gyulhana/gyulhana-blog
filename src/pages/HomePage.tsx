import MainText from '@/components/home/MainText';
import PostList from '@/components/home/PostList';
import { GridContainer } from '@/styles/home.style';

const HomePage = () => {
  return (
    <GridContainer>
      <MainText />
      <PostList />
    </GridContainer>
  );
};

export default HomePage;
