"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error}){
    useEffect(() => {
        console.log(error);
    }, [error]);
    
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-red-500 text-white p-4 rounded">
                <h1 className="text-lg font-bold">Error</h1>
                <p>{error.message}</p>
            </div>
        </div>
    );
}