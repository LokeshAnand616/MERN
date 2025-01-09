// Simulate an asynchronous operation (like fetching data from a server)
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000); // Simulates a 2-second delay
    });
  }
  
  // Using async/await (modern approach)
  async function fetchAndProcessDataAsync() {
    console.log("Fetching data using async/await...");
    
    // Wait for the data to be fetched
    const data = await fetchData();
    console.log(data);  // Output after 2 seconds: Data fetched successfully!
    
    console.log("Processing data...");
  }
  
  // Using Promise with .then() (older approach)
  function fetchAndProcessDataPromise() {
    console.log("Fetching data using Promise...");
    
    // Handle the resolved promise with .then()
    fetchData().then((data) => {
      console.log(data);  // Output after 2 seconds: Data fetched successfully!
      
      console.log("Processing data...");
    }).catch((error) => {
      console.log("Error:", error);
    });
  }
  
  // Call the functions
  fetchAndProcessDataAsync(); // Using async/await
  fetchAndProcessDataPromise(); // Using Promise .then()
  