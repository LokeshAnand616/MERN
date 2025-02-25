const urls = [
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  ];
  
  const promise1 = fetch(urls[0]);
  const promise2 = fetch(urls[1]);
  const promise3 = Promise.reject("Custom Rejected Error"); // Simulated rejection
  
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
      results.forEach(res => {
        if (res.status === "rejected") console.error("Rejected Reason:", res.reason);
      });
  
      return Promise.all(
        results
          .filter(res => res.status === "fulfilled")
          .map(res => res.value.json()) // Directly calling .json()
      );
    })
    .then(data => console.log("Fetched Data:", data))
    .catch(err => console.error("Unexpected Error:", err))
    .finally(() => console.log("Completed"));
  