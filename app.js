const tabs = document.querySelectorAll('.tab');
const filters = document.querySelectorAll('.filter');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const videoItems = [...document.querySelectorAll('.video-item')];
const videoList = document.querySelector('#video-list');
const emptyState = document.querySelector('#empty-state');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
  });
});

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
  });
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const keyword = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  videoItems.forEach((item) => {
    const matched = !keyword || item.dataset.title.toLowerCase().includes(keyword);
    item.hidden = !matched;
    if (matched) visibleCount += 1;
  });

  videoList.hidden = visibleCount === 0;
  emptyState.hidden = visibleCount !== 0;
});
