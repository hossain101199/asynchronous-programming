const fetchData = (callback) => {
  // Simulate fetching data asynchronously
  setTimeout(() => {
    const data = "Some fetched data";
    callback(data);
  }, 1000);
};

const processData = (data) => {
  console.log("Processing data:", data);
};

// Using callback
fetchData(processData);
