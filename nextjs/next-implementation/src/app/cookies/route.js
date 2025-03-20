import {headers} from "next/headers";
export async function GET(req) {
    return new Response("<h1>hello world!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        },
    });
}
