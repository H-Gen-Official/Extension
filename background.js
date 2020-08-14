chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://dv1ph.h-gen.xyz/" + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://dv1.phprcdn.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other", "media"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://cvph.h-gen.xyz/" + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://cv.phprcdn.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other", "media"]
    },
    ["blocking"]
);
