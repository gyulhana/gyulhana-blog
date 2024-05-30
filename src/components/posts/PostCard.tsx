import { CardContainer, CardImage, TextArea } from '@/styles/posts.style';

type Props = {};

const PostCard = (props: Props) => {
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
