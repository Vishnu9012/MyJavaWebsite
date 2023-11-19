document.getElementById('search').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('#content li');

    listItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// // clipboard copy code
// function copyToClipboard() {
//     // Get the input field and its value
//     const copyText = document.getElementById("copyText");
    
//     // Select the text in the input field
//     copyText.select();
    
//     // Copy the selected text to the clipboard

    
//     // Deselect the input field
//     copyText.blur();
    
//     // Update the button text
//     const copyButton = document.getElementById("copyButton");
//     copyButton.textContent = "Copied!";
    
//     // Reset the button text after a brief delay
//     setTimeout(function() {
//         copyButton.textContent = "Copy";
//     }, 1500);
// }

// // Add a click event listener to the copy button
// do//
