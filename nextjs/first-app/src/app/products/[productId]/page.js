export const generateMetadata = async({params})=>{
    const id = await params.productId;
    return{
        title:`Product${id}`
    }
}

export default async function ProductDetails({params}){
    const productId= await params.productId
    return(
        <>
            <h1>Details of product {productId} </h1>
        </>
    )
}