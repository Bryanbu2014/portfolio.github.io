// Global Configuration for Versioning
// Update these variables whenever you release a new version
const PORTFOLIO_VERSION = 'v2.1.3';
const PORTFOLIO_VERSION_DATE = 'June 01, 2026';

document.addEventListener('DOMContentLoaded', () => {
    // Update version tags
    const versionTags = document.querySelectorAll('.version-badge-tag');
    versionTags.forEach(tag => {
        tag.innerHTML = '<i class="fas fa-code-branch"></i>';
        tag.appendChild(document.createTextNode(PORTFOLIO_VERSION));
    });

    // Update version dates
    const versionDates = document.querySelectorAll('.version-badge-date');
    versionDates.forEach(date => {
        date.textContent = PORTFOLIO_VERSION_DATE;
    });
});
