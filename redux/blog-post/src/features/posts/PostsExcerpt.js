import PostAuthor from "../posts/postAuthor";
import TimePeriod from "./timePeriod";

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimePeriod time={post.date} />
            </p>
        </article>
    )
}
export default PostsExcerpt