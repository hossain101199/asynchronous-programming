const fetchData = async () => {
  return new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const data = "Some fetched data";
      resolve(data);
    }, 1000);
  });
};

const processData = async () => {
  try {
    const data = await fetchData();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Using async-await
processData();
