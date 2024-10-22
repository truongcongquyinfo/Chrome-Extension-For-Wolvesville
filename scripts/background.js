chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("www.wolvesville.com")) {
    chrome.tabs.sendMessage(tabId, {
      type: "LOAD",
    });
  }
});
