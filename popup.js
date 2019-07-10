chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.insertCSS(null, { file: 'simplypit.css' });
});