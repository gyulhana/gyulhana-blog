import { CardContainer, CardImage, TextArea } from '@/styles/posts.style';

const PostCard = () => {
  return (
    <CardContainer>
      <CardImage />
      <TextArea>
        <div>title</div>
        <div>description</div>
      </TextArea>
    </CardContainer>
  );
};

export default PostCard;
