document.getElementById('convertBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput').files[0];
    const conversionType = document.getElementById('conversionType').value;
    const statusEl = document.getElementById('status');
  
    if (!fileInput) {
      statusEl.textContent = 'Please select a file!';
      return;
    }
  
    // Show the user the conversion is in progress
    statusEl.textContent = 'Converting...';
  
    // Prepare file data for backend
    const formData = new FormData();
    formData.append('file', fileInput);
    formData.append('conversionType', conversionType);
  
    try {
      // Call the backend API for conversion
      const response = await fetch('https://duckcloud-converter-api.com/convert', {
        method: 'POST',
        body: formData
      });
      const blob = await response.blob();
  
      // Trigger download of the converted file
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `converted.${conversionType.split('to')[1]}`; // e.g., pdf, word
      a.click();
      URL.revokeObjectURL(downloadUrl);
      statusEl.textContent = 'Conversion successful!';
    } catch (error) {
      console.error('Conversion failed:', error);
      statusEl.textContent = 'Conversion failed. Please try again.';
    }
  });
  