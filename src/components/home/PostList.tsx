import PostCard from '@/components/posts/PostCard';
import { Spacer } from '@/styles/common.style';
import { PostListContainer } from '@/styles/posts.style';

type Props = {};

const PostList = (props: Props) => {
  return (
    <PostListContainer>
      📌 Pinned Posts
      <Spacer height={20} />
      <PostCard />
      <Spacer height={20} />
      <PostCard />
      <Spacer height={20} />
      <PostCard />
    </PostListContainer>
  );
};

export default PostList;
