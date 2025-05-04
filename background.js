// Corrected 'ochrome' to 'chrome'
chrome.action.onClicked.addListener((tab) => {
    // Inject the content script into the active tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});