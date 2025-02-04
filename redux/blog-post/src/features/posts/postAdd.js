import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { useState } from "react";
import { selectAllUsers } from "../users/userSlice";  // Ensure correct file name

function PostAdd() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers) || [];  // Ensure users is always an array

  console.log("Users from Redux:", users);

  function handleSave(e) {
    e.preventDefault();

    if (title && content && userId) {
      dispatch(addPost(title, content, userId));  // Correct order
      setTitle("");
      setContent("");
      setUserId("");  // Reset user selection
    }
  }

  return (
    <>
      <form onSubmit={handleSave}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor="postAuthor">Author</label>
        <select id="postAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Select Author</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.user}  {/* Changed from user.name to user.user */}
            </option>
          ))}
        </select>

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default PostAdd;
