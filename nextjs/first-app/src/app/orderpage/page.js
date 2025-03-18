'use client'
import { useRouter } from "next/navigation"
export default function OrderPage(){
    const router = useRouter();
    const handleClick=()=>{
        router.push("/orderplaced")
    }
    return(
        <>
            <button onClick={handleClick}>Place order</button>
        </>
    )
}