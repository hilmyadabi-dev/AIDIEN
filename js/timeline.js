
class AksaraTimeline {
  constructor(trackId, data) {
    this.track = document.getElementById(trackId);
    if (!this.track) return;

    this.timelineData = data || (typeof AKSARA_TIMELINE !== 'undefined' ? AKSARA_TIMELINE : []);
    this.isDown = false;
    this.startX = 0;
    this.scrollLeft = 0;

    this.render();
    this.bindEvents();
  }

  render() {
    this.track.innerHTML = '';

    this.timelineData.forEach((era, idx) => {
      const card = document.createElement('article');
      card.className = 'timeline-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${era.title}, rentang waktu ${era.dateRange}`);

      card.innerHTML = `
        <span class="timeline-era-pill">${era.dateRange}</span>
        <h3 class="timeline-era-title">${era.title}</h3>
        
        <img src="${era.image}" alt="${era.title}" class="timeline-era-img" loading="lazy">
        
        <p class="timeline-philosophy">${era.summary}</p>
        
        <div style="margin-top: auto; padding-top: 1rem; border-top: 1px dashed rgba(182, 110, 65, 0.3);">
          <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent-gold); margin-bottom: 0.35rem;">
            Nilai Filosofis & Pusaka
          </div>
          <p style="font-size: 0.82rem; font-style: italic; opacity: 0.9; margin-bottom: 0.75rem;">
            "${era.philosophy}"
          </p>
          <div class="timeline-relevance-tag">
            <strong>Artefak Kunci:</strong> ${era.artifacts}
          </div>
        </div>
      `;

      this.track.appendChild(card);
    });
  }

  bindEvents() {
    // Mouse drag scrolling
    this.track.addEventListener('mousedown', (e) => {
      this.isDown = true;
      this.track.classList.add('dragging');
      this.startX = e.pageX - this.track.offsetLeft;
      this.scrollLeft = this.track.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      this.isDown = false;
      this.track.classList.remove('dragging');
    });

    this.track.addEventListener('mousemove', (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.track.offsetLeft;
      const walk = (x - this.startX) * 1.8;
      this.track.scrollLeft = this.scrollLeft - walk;
    });

    // Optional navigation buttons if present
    const prevBtn = document.getElementById('timeline-prev-btn');
    const nextBtn = document.getElementById('timeline-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.track.scrollBy({ left: -380, behavior: 'smooth' });
        if (window.aksaraSound) window.aksaraSound.playChime(594);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.track.scrollBy({ left: 380, behavior: 'smooth' });
        if (window.aksaraSound) window.aksaraSound.playChime(660);
      });
    }
  }
}

window.initAksaraTimeline = function (trackId) {
  return new AksaraTimeline(trackId);
};
