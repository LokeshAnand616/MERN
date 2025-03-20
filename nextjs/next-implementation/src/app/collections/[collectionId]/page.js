"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CollectionPage() {
    const { collectionId } = useParams();
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        fetch("/gallery.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((col) => col.id.toString() === collectionId);  // Ensure ID is a string
                setCollection(found);
            })
            .catch((err) => console.error("Error loading JSON:", err));
    }, [collectionId]);

    if (!collection) return <h1>Collection Not Found</h1>;

    return (
        <div>
            <h1>{collection.collection}</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                {collection.images.map((img) => (
                    <Link
                        key={img.id}
                        href={`/collections/${collectionId}/photo/${img.id}`}
                        scroll={false} // Prevents page reload when using intercepted routes
                    >
                        <img src={img.url} alt={img.name} width="150" style={{ cursor: "pointer" }} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
