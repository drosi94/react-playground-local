import styles from './Post.module.css';

export interface PostProps {
  post: any;
}

const Post: React.FC<PostProps> = ({ post = {} }) => {
  return (
    <li data-testid={`post-${post.title}`} className={styles.post}>
      Title: {post.title}
    </li>
  );
};

export default Post;
