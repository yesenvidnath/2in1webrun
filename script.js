
const iframe1 = document.getElementById('website-iframe-1');
const iframe2 = document.getElementById('website-iframe-2');
const urlInput1 = document.getElementById('url-input-1');
const urlInput2 = document.getElementById('url-input-2');
const loadButton1 = document.getElementById('load-button-1');
const loadButton2 = document.getElementById('load-button-2');
const clearButton1 = document.getElementById('clear-button-1');
const clearButton2 = document.getElementById('clear-button-2');
const iconContainers = document.querySelectorAll('.icon');
const messageContainer = document.getElementById('message');

loadButton1.addEventListener('click', () => {
    const url1 = urlInput1.value;
    if (url1) {
        iframe1.src = url1;
        messageContainer.textContent = '';
    }
});

loadButton2.addEventListener('click', () => {
    const url2 = urlInput2.value;
    if (url2) {
        iframe2.src = url2;
        messageContainer.textContent = '';
    }
});

clearButton1.addEventListener('click', () => {
    iframe1.src = 'about:blank';
    urlInput1.value = '';
    messageContainer.textContent = '';
});

clearButton2.addEventListener('click', () => {
    iframe2.src = 'about:blank';
    urlInput2.value = '';
    messageContainer.textContent = '';
});

iconContainers.forEach((iconContainer) => {
    iconContainer.addEventListener('click', () => {
        const url = iconContainer.getAttribute('data-url');
        const iframe1Loaded = iframe1.contentWindow.location.href !== 'about:blank';
        const iframe2Loaded = iframe2.contentWindow.location.href !== 'about:blank';

        if (!iframe1Loaded) {
            iframe1.src = url;
            urlInput1.value = url;
            messageContainer.textContent = '';
        } else if (iframe2Loaded) {
            iframe2.src = url;
            urlInput2.value = url;
            messageContainer.textContent = '';
        } else if (!iframe2Loaded) {
            iframe2.src = url;
            urlInput2.value = url;
            messageContainer.textContent = '';
        } else if (iframe1Loaded) {
            iframe1.src = url;
            urlInput1.value = url;
            messageContainer.textContent = '';
        } else {
            messageContainer.textContent = "Both frames are in use. Clear at least one frame.";
        }
    });
});

