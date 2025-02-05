import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { useState } from "react";
import { selectAllUsers } from "../users/userSlice"; 

function PostAdd() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers); 

  const disable = [title, content, userId].every(Boolean) && requestStatus === "idle";

  function handleSave(e) {
    e.preventDefault();

    if (disable) {
      try {
        setRequestStatus("pending");
        dispatch(addPost({ title, content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save post", err);
      } finally {
        setRequestStatus("idle");
      }
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
              {user.user}
            </option>
          ))}
        </select>

        <button disabled={!disable} type="submit">Save</button>
      </form>
    </>
  );
}

export default PostAdd;
