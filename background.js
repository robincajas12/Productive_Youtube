// background.js
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    const watchString = "watch";
    console.log("URL cambiada a:", details.url);
    const pathUrl = details.url;

    if (pathUrl.includes("shorts")) {
        const splitedUrl = pathUrl.split("shorts");
        console.log('Cambiando');

        // Use chrome.tabs to update the URL
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const activeTab = tabs[0];
            
            // Modify the URL using chrome.tabs.update
            chrome.tabs.update(activeTab.id, { url: splitedUrl[0] + watchString + splitedUrl[1] });
        });
    }
});
