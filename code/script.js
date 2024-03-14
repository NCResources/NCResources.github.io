// Fetch the content of code.txt
fetch('code.txt')
    .then(response => response.text())
    .then(codeData => {
        // Update the content in index.html
        document.getElementById('content').innerText = codeData;
    })
    .catch(error => console.error('Error fetching code.txt:', error));
