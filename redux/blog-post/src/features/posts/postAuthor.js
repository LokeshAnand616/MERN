import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === parseInt(userId));

    return <span>by {author ? author.user : 'Unknown author'}</span>
}
export default PostAuthor