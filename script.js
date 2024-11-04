document.getElementById('fetch-btn').addEventListener('click', fetchBaconIpsum);

function fetchBaconIpsum() {
    const baconDataDiv = document.getElementById('bacon-data');
    baconDataDiv.innerHTML = '<p>Loading...</p>'; // Show loading message

    // Fetch data from Bacon Ipsum API
    fetch('https://baconipsum.com/api/?type=all')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Convert response to JSON
        })
        .then(data => {
            baconDataDiv.innerHTML = ''; // Clear the loading message
            data.forEach(sentence => {
                const paragraph = document.createElement('p'); // Create a paragraph for each sentence
                paragraph.textContent = sentence;
                baconDataDiv.appendChild(paragraph); // Add the paragraph to the page
            });
        })
        .catch(error => {
            baconDataDiv.innerHTML = `<p>Error: ${error.message}</p>`; // Handle errors
        });
}