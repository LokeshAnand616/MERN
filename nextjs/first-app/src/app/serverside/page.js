export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
  
    return {
      props: { user },
    };
  }
  
  export default function SSRPage({ user }) {
    return (
      <div>
        <h1>Server-Side Rendered Page</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    );
  }
  