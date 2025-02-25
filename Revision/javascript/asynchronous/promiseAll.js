const promise1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// const promise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// const promise3 = new Promise((_, reject) => reject("Custom Rejected Error"));

Promise.all([promise1])
  .then((response)=> (response.map((res)=>res.json())))
  .then((data) => console.log(typeof data))
  .catch((err) => console.error("Error:", err)) // Handles any failure
  .finally(() => console.log("Completed"));
