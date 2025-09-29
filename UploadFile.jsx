import React, { useState } from "react";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const handleChange = (event) => {
    console.log("event.target", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };
  const handleClick = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
      const formData = new FormData();
      formData.append("file", selectedFile);
      // Example: fetch('/upload', { method: 'POST', body: formData })
      //   .then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
}
