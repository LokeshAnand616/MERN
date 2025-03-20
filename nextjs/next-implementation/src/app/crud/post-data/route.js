let collection = [
    { id: "1", name: "Lokesh" }
];

export async function POST(req) {
    try {
        const newData = await req.json();
        console.log("Received data:", newData);

        // Validate request body
        if (!newData.id || !newData.name) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Add new data to collection
        collection.push(newData);

        return new Response(JSON.stringify({ message: "Data added successfully", data: newData }), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Error in POST request:", error);
        return new Response(JSON.stringify({ error: "Invalid request" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
