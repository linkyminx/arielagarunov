// ============================================
// Logos & Letters — Search & Filter Logic
// ============================================

(function () {
  const searchInput  = document.getElementById('search');
  const tagButtons   = document.querySelectorAll('.tag-btn');
  const essayCards   = document.querySelectorAll('.essay-card');
  const noResults    = document.getElementById('noResults');
  const grid         = document.getElementById('essaysGrid');

  if (!searchInput) return; // not on the index page

  let activeTag = 'all';
  let searchQuery = '';

  // ---- Filter essays ----
  function filterEssays() {
    let visible = 0;

    essayCards.forEach(card => {
      const title    = card.querySelector('.essay-title')?.textContent.toLowerCase() ?? '';
      const excerpt  = card.querySelector('.essay-excerpt')?.textContent.toLowerCase() ?? '';
      const tags     = (card.dataset.tags ?? '').toLowerCase();

      const matchesSearch = searchQuery === '' ||
        title.includes(searchQuery) ||
        excerpt.includes(searchQuery) ||
        tags.includes(searchQuery);

      const matchesTag = activeTag === 'all' || tags.includes(activeTag);

      if (matchesSearch && matchesTag) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  // ---- Search input ----
  searchInput.addEventListener('input', function () {
    searchQuery = this.value.trim().toLowerCase();
    filterEssays();
  });

  // ---- Tag buttons ----
  tagButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      tagButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeTag = this.dataset.tag;
      filterEssays();
    });
  });

})();
