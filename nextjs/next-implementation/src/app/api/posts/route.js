export const dynamic = "force-static"; // Default is cached

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 }, // Revalidate every 10s
    });
    const data = await res.json();
    return Response.json(data);
}
