document.getElementById('profilePicture').addEventListener('click', function() {
    // When the image is clicked, trigger the file input dialog
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    // When a file is selected, handle it here
    const fileInput = this;
    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];

        // Check if the selected file is an image (you can add more checks if needed)
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Set the source of the image to the selected file
                document.getElementById('profilePicture').src = e.target.result;
            };

            // Read the selected image file as a data URL
            reader.readAsDataURL(file);
        } else {
            // Handle the case where the selected file is not an image
            alert('Please select an image file.');
        }
    }
});
