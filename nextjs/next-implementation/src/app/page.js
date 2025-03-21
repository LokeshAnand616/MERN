"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

// Font Optimization
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

// Dynamic Import for Heavy Component
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
    ssr: false, // Load only on client-side
    loading: () => <p>Loading...</p>,
});

export default function Home() {
    const [data, setData] = useState([]);

    // Fetch API Data (Uses ISR Caching)
    useEffect(() => {
        fetch("/api/data")
            .then((res) => res.json())
            .then((fetchedData) => setData(fetchedData));
    }, []);

    // Memoization for expensive computations
    const processedData = useMemo(() => data.slice(0, 5), [data]);

    return (
        <div className={inter.className}>
            <h1>Next.js Performance Optimizations</h1>

            {/* Image Optimization */}
            <Image src="/next.svg" alt="Next.js Logo" width={150} height={100} priority />

            {/* Dynamically Loaded Component */}
            <HeavyComponent />

            {/* Optimized Data Fetching */}
            <h2> Cached API Data (Updated every 10s)</h2>
            <pre>{JSON.stringify(processedData, null, 2)}</pre>
        </div>
    );
}


// "use client";
// import { useState, useEffect } from "react";
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function Home() {
//     const [ssrData, setSSRData] = useState(null);
    
//     // Static Fetch (ISR - Cached with 10s revalidation)
//     useEffect(() => {
//         fetch("/api/posts") 
//             .then((res) => res.json())
//             .then((data) => setSSRData(data));
//     }, []);

//     // Real-time Fetch (No Cache)
//     const [liveData, setLiveData] = useState(null);
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" })
//             .then((res) => res.json())
//             .then((data) => setLiveData(data));
//     }, []);

//     // Client-Side Caching (SWR auto-refresh every 5s)
//     const { data: swrData, error } = useSWR("/api/posts", fetcher, { refreshInterval: 5000 });

//     return (
//         <div>
//             <h1>🚀 Next.js Caching Strategies</h1>

//             {/* ISR - Cached with Revalidation */}
//             <h2>📌 ISR (Cached, refreshes every 10s)</h2>
//             <pre>{JSON.stringify(ssrData, null, 2)}</pre>

//             {/* No Cache - Live Data */}
//             <h2>🔥 No Cache (Real-time Fetch)</h2>
//             <pre>{JSON.stringify(liveData, null, 2)}</pre>

//             {/* Client-side SWR */}
//             <h2>🔄 Client-Side SWR (Auto-refresh every 5s)</h2>
//             {error && <p>Error loading data</p>}
//             <pre>{JSON.stringify(swrData, null, 2)}</pre>
//         </div>
//     );
// }

