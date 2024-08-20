async function getSummary() {
    const inputText = document.getElementById("input_text").value;

    // Display the original text in the HTML
    document.querySelector(".show-all").innerHTML = `<h2>Original Text</h2><p>${inputText}</p>`;

    // Make a POST request to the summarization API endpoint
    const response = await fetch('YOUR_SUMMARIZATION_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
    });

    // Parse the response as JSON
    const data = await response.json();

    // Display the summarized text in the HTML
    document.querySelector(".show-summarized").innerHTML = `<h2>Summarized Text</h2><p>${data.summary}</p>`;
}
