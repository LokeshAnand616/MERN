export default function Documents({params}){
    const {slug} = params
    if(slug?.length === 2){
        return(
            <h1>viewing {slug[0]} and concept {slug[1]}</h1>
        );
    }else if(slug?.length===1){
    return(
        <>
            <h1>viewing {slug[0]}</h1>
        </>
    )
}
return<h1>viewing docs</h1>
}