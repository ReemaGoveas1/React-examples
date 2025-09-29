import React from "react";

function FileDownloader({ fileUrl, fileName }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={handleDownload}>Download {fileName}</button>;
}

export default FileDownloader;
