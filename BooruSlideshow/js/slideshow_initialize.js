let slideshowController = null;

document.addEventListener('DOMContentLoaded', function () {
    slideshowController = new SlideshowController({
        'warningMessage': document.getElementById('warning-message'),
        'infoMessage': document.getElementById('info-message'),
        'currentImage': document.getElementById('current-image'),
        'currentVideo': document.getElementById('current-video'),
        'currentVideoSourceWebm': document.getElementById('current-video-source-webm'),
        'loadingAnimation': document.getElementById('loading-animation'),
        'navigation': document.getElementById('navigation'),
        'currentSlideNumber': document.getElementById('current-slide-number'),
        'totalSlideNumber': document.getElementById('total-slide-number'),
        'thumbnailList': document.getElementById('thumbnail-list'),
        'searchTextBox': document.getElementById('search-text'),
        'searchButton': document.getElementById('search-button'),
        'firstNavButton': document.getElementById('first-button'),
        'previousNavButton': document.getElementById('previous-button'),
        'nextNavButton': document.getElementById('next-button'),
        'lastNavButton': document.getElementById('last-button'),
        'playButton': document.getElementById('play-button'),
        'pauseButton': document.getElementById('pause-button'),
        'sitesToSearch': document.getElementsByName('sites-to-search'),
        'secondsPerSlideTextBox': document.getElementById('seconds-per-slide'),
        'maxWidthTextBox': document.getElementById('max-width'),
        'maxHeightTextBox': document.getElementById('max-height'),
        'autoFitSlideCheckBox': document.getElementById('auto-fit-slide'),
        'includeImagesCheckBox': document.getElementById('include-images'),
        'includeGifsCheckBox': document.getElementById('include-gifs'),
        'includeWebmsCheckBox': document.getElementById('include-webms'),
        'includeExplicitCheckBox': document.getElementById('include-explicit'),
        'includeQuestionableCheckBox': document.getElementById('include-questionable'),
        'includeSafeCheckBox': document.getElementById('include-safe'),
        'hideBlacklist': document.getElementById('hide-blacklist'),
        'blacklistContainer': document.getElementById('blacklist-container'),
        'blacklist': document.getElementById('blacklist'),
        'derpibooruApiKey': document.getElementById('derpibooru-api-key'),
        'derpibooruApiKeyContainer': document.getElementById('derpibooru-api-key-container'),
        'e621LoginContainer': document.getElementById('e621-login-container'),
        'e621ApiKeyContainer': document.getElementById('e621-api-key-container'),
        'e621Login': document.getElementById('e621-login'),
        'e621ApiKey': document.getElementById('e621-api-key'),
        'gelbUserIdContainer': document.getElementById('gelb-userid-container'),
        'gelbApiKeyContainer': document.getElementById('gelb-api-key-container'),
        'gelbUserId': document.getElementById('gelb-userid'),
        'gelbApiKey': document.getElementById('gelb-api-key'),
        'storeHistoryCheckBox': document.getElementById('store-history'),
        'clearHistoryButton': document.getElementById('clear-history'),
        'searchHistory': document.getElementById('search-history'),
        'favoriteButton': document.getElementById('favorite-button'),
        'tags': document.getElementById('tags'),
        'slideWrapper': document.getElementById('slide-wrapper'),
        'includeDupesCheckBox': document.getElementById('include-dupes')
    });

    (async () => {
        let result = await slideshowController.initialize();
        slideshowController.searchTextChanged();
    })();
});