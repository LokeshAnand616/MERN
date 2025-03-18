import { notFound } from "next/navigation"
export const metadata={
    title:"Review"
}
export default function ReviewPage({params}){
    const {productId, reviewId} = params
    if({productId}>1000){
        notFound();
    }
    return(
        <h1>Review {reviewId} for product {productId}</h1>
    )
}