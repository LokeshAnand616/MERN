'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CollectionsPage() {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch("/gallery.json")
            .then((res) => res.json())
            .then(setCollections);
    }, []);

    return (
        <div>
            <h1>Photo Collections</h1>
            {collections.map((collection) => (
                <div key={collection.id}>
                    <Link href={`/collections/${collection.id}`}>
                        <h2>{collection.collection}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
