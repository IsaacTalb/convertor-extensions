chrome.runtime.onInstalled.addListener(() => {
    console.log("File Converter extension installed!");
  });
  
  chrome.downloads.onChanged.addListener((downloadDelta) => {
    if (downloadDelta.state && downloadDelta.state.current === "complete") {
      console.log("Download complete!");
    }
  });
  