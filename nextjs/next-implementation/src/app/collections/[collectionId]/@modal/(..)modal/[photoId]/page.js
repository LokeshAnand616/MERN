"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PhotoModal() {
    const { collectionId, photoId } = useParams();
    const router = useRouter();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        fetch("/gallery.json")
            .then((res) => res.json())
            .then((data) => {
                const collection = data.find((col) => col.id === collectionId);
                if (collection) {
                    const foundPhoto = collection.images.find((img) => img.id === photoId);
                    setPhoto(foundPhoto);
                }
            });
    }, [collectionId, photoId]);

    if (!photo) return null;

    return (
        <div className="modal-overlay" onClick={() => router.back()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => router.back()} className="close-button">✖</button>
                <img src={photo.url} alt={photo.name} width="400" />
                <h2>{photo.name}</h2>
            </div>
        </div>
    );
}
