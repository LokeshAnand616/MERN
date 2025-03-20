export const collection = [
    { id: 1, name: "Lokesh" }
];

export function GET(req) {
    const searchParams= req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredName = query? collection.filter((name)=>name.name.includes(query)):undefined ;
    return  Response.json(filteredName, { status: 200 });
}
