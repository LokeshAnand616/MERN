export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await res.json();
  
    return {
      props: { posts },
    };
  }
  
  export default function SSGPage({ posts }) {
    return (
      <div>
        <h1>Static Site Generated Page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}><strong>{post.title}</strong></li>
          ))}
        </ul>
      </div>
    );
  }
  