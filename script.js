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

function saveMyNote() {
    // Get the values of the topic and note entered by the user
    const topic = document.getElementById("topicText").value;
    const note = document.getElementById("yourNote").value;
  
    if (topic.trim() !== "" && note.trim() !== "") {
      // Create a new div element to display the saved topic and note
      const noteDiv = document.createElement("div");
      noteDiv.classList.add("saved-note");
  
      // Set the content of the new div with the topic
      noteDiv.innerHTML = `<h3>${topic}</h3>`;
      
      // Create a textarea to display the associated note
      const noteTextArea = document.createElement("textarea");
      noteTextArea.classList.add("note-textarea");
      noteTextArea.value = note;
      noteDiv.appendChild(noteTextArea);
  
      // Append the new div to the "written-Notes" div
      document.getElementById("written-Notes").appendChild(noteDiv);
  
      // Clear the input fields for the next entry
      document.getElementById("topicText").value = "";
      document.getElementById("yourNote").value = "";
  
      // Save the note data to localStorage
      saveNoteToLocalStorage(topic, note);
    } else {
      alert("Please enter both a topic and a note before saving.");
    }
  }
  