# convertor-extensions

#### What did we use??

###### 1. manifest.json (Chrome extension config)
We’ll set up permissions for file access and add icons for the extension.

###### 2. popup.html (UI for the extension)
This is the frontend that users interact with. The HTML is simple and modern with a file input and buttons to trigger conversions.

###### 3. popup.js (Frontend logic)
This JavaScript handles file upload, conversion type selection, and communicates with the backend for the actual file conversion.

###### 4. background.js (Background service worker)
The background script will handle events, such as downloads, that require Chrome extension background execution.

###### 5. styles.css (Basic styling)
This ensures the popup UI looks clean and modern.

###### 6. Backend Service (Go & Check this repo out: https://github.com/IsaacTalb/CE-convertor-api)
