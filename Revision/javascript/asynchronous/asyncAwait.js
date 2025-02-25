async function fetchData () {
    const data =await (await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")).json();
    console.log(data);
}
// fetchData();

// arrow function
const fetchData1 = async()=>{
    try{
    const data = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    if(!data.ok){
        throw new Error("Error while fetching");
    }
    const getData = await data.json();
    console.log(getData)
}catch{
    console.error( error);
}
}
// fetchData1();

//Immediatly invoked functon
(async function(){
    try{
        const data = await fetch("https://mdn.github.io/learning-area/javasript/apis/fetching-data/can-store/products.json");
        if(!data.ok){
            throw new Error("Error while fetching");
        }
        const getData = await data.json();
        console.log(getData)
    }catch(error){
        console.error(error);
    } 
})();

//spread

