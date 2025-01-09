// Simulate an asynchronous operation using a Promise
let fetchData = new Promise((resolve, reject) => {
    let success = true;  // Change this to false to simulate failure
  
    // Simulate a network request or async task
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");  // Resolve with data
      } else {
        reject("Failed to fetch data.");  // Reject with an error message
      }
    }, 2000);  // Simulate a delay of 2 seconds
  });
  
  // Handling the promise
  fetchData
    .then((result) => {
      console.log(result);  // Logs the result if the promise is resolved (success)
      return "Next step in process";  // Returning another value for the next `.then()` in the chain
    })
    .then((message) => {
      console.log(message);  // Logs the next message if the previous promise was successful
    })
    .catch((error) => {
      console.log(error);  // Logs the error if the promise is rejected (failure)
    });
  