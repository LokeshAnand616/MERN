import Link from "next/link";

export default function InterceptedPage(){
    return(
        <>
            <h1>This is an intercepted page</h1>
            <Link href={'/blogs'}>Blogs</Link>
        </>
    )
}