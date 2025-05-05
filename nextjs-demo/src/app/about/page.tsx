"use client";
import { useRouter } from 'next/navigation';

export default function About(){
   const router = useRouter();
    return (
        <div>
           <h1>About Us</h1>
           <button 
             onClick={() => router.push('/')}
             className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
           >
                Go home</button>
        </div>
                
        );
}