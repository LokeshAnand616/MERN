import { collection } from "@/app/crud/get-data/route";

export async function DELETE(req, { params }) {
    try {
        const { id } = params; // Get dynamic ID from route
        const index = collection.findIndex(item => item.id.toString() === id); // Find index

        if (index === -1) {
            return Response.json({ error: "Item not found" }, { status: 404 });
        }
        collection.splice(index, 1); // Remove the item from array

        return Response.json({ message: "Item deleted successfully", id }, { status: 200 });
    } catch (error) {
        console.error("Error in DELETE request:", error);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
