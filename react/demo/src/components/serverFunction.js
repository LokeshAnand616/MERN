async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }
  
  export default async function Posts() {
    const posts = await getPosts(); // Server Function fetching data
  
    return (
      <div>
        <h1>Server Rendered Posts</h1>
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  