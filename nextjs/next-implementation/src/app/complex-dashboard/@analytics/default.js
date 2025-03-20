import Link from "next/link"
export default function Analytics(){
    return(
        <>
            <h1>Analytics page</h1>
            <Link href={'/complex-dashboard/inside-route'}>Click Me</Link>
        </>
    )
}