function hideElement(selector) {
    const el = document.querySelector(selector);
    if (el) el.style.display = "none";
}

function hideGuideSection(name) {
    const sections = document.querySelectorAll('ytd-guide-section-renderer');
    sections.forEach(section => {
        const text = section.querySelector('yt-formatted-string');
        if (text && text.textContent.trim() === name) {
            section.style.display = 'none';
        }
    });
}

function hideGuideEntry(name) {
    const sections = document.querySelectorAll('ytd-guide-entry-renderer');
    sections.forEach(section => {
        const text = section.querySelector('yt-formatted-string');
        if (text && text.textContent.trim() === name) {
            section.style.display = 'none';
        }
    });
}

setInterval(() => {
    hideElement('#related');
    hideElement('#comments');
    hideElement('ytd-rich-grid-renderer');
    hideElement('ytd-notification-topbar-button-renderer');
    hideGuideSection('More from YouTube')
    hideGuideSection('Subscriptions');
    hideGuideSection('Explore');
    hideGuideEntry('Shorts');
    hideGuideEntry('Report history');
    hideGuideEntry('Help');
    hideGuideEntry('Send feedback');
    hideGuideEntry('Subscriptions');
}, 1);