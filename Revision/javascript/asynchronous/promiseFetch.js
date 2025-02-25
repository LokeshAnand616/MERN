const myData = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

myData.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})