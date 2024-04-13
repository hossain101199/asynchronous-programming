const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const data = "Some fetched data";
      resolve(data);
    }, 1000);
  });
};

// Using Promise
fetchData()
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
