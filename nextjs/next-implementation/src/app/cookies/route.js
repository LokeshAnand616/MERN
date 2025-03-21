import {headers,cookies} from "next/headers";
export async function GET(req) {
    const cookie  = await req.cookies.get('theme');
    const cookieStore = await cookies();
    cookieStore.set('name','lokesh');
    console.log(await cookieStore.get('name'));
    console.log(cookie);
    return new Response("<h1>hello world!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        },
    });
}
