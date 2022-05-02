chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		// Load JS file into the current active tab.
		file: 'run.js'
	});
});
