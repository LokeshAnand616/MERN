const promise1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
const promise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
const promise3 = new Promise((_, reject) => setTimeout(() => {
    reject("Custom Rejected Error")
}, 3000));

Promise.race([promise1, promise2, promise3])
  .then(data => {return data.json()})
  .then(res=>console.log(res))
  .catch(error => console.error("Both APIs failed:", error));