// Simulated asynchronous function to fetch data from an API
function fetchDataFromAPI(itemId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: itemId, name: `Item ${itemId}` });
    }, 1000);
  });
}

// Using async function inside a loop
async function fetchMultipleItems() {
  const itemIds = [1, 2, 3];
  for (const itemId of itemIds) {
    try {
      const item = await fetchDataFromAPI(itemId);
      console.log('Item:', item);
    } catch (error) {
      console.error('Error fetching item:', itemId, error);
    }
  }
}

fetchMultipleItems();
