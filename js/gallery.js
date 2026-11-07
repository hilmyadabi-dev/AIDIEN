

class AksaraFanGallery {
  constructor(containerId, data) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.allData = data || [];
    this.filteredData = [...this.allData];
    this.activeIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.dragOffset = 0;

    this.initDOM();
    this.bindEvents();
    this.render();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="fan-stage" id="fan-stage" role="region" aria-label="Galeri Interaktif Berbentuk Kipas"></div>
      
      <div class="fan-controls">
        <button class="fan-nav-btn" id="fan-prev-btn" aria-label="Koleksi Sebelumnya">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="fan-counter" id="fan-counter" aria-live="polite">01 / 11</div>
        <button class="fan-nav-btn" id="fan-next-btn" aria-label="Koleksi Selanjutnya">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    `;

    this.stage = document.getElementById('fan-stage');
    this.counterEl = document.getElementById('fan-counter');
    this.prevBtn = document.getElementById('fan-prev-btn');
    this.nextBtn = document.getElementById('fan-next-btn');
  }

  filter(category) {
    if (!category || category === 'all') {
      this.filteredData = [...this.allData];
    } else {
      this.filteredData = this.allData.filter(item => item.category === category);
    }
    this.activeIndex = 0;
    this.render();
  }

  render() {
    if (!this.stage) return;
    this.stage.innerHTML = '';

    if (this.filteredData.length === 0) {
      this.stage.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 1.1rem; padding: 3rem;">Tidak ada koleksi budaya untuk kategori ini.</div>`;
      this.counterEl.textContent = '00 / 00';
      return;
    }

    this.filteredData.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = `fan-card fan-card-transition ${index === this.activeIndex ? 'active' : ''}`;
      card.dataset.index = index;
      card.dataset.id = item.id;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${item.name}, asal ${item.regionLabel}`);

      card.innerHTML = `
        <img class="${item.galleryImage ? 'fan-card-image-contain' : ''}" src="${item.galleryImage || item.image}" alt="${item.name}" loading="lazy">
        <div class="fan-card-overlay">
          <span class="fan-card-badge">${item.categoryLabel}</span>
          <h3 class="fan-card-title">${item.name}</h3>
          <p class="fan-card-origin">${item.regionLabel}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        if (index === this.activeIndex) {

          if (window.aksaraApp && window.aksaraApp.openModal) {
            window.aksaraApp.openModal(item.id);
          }
        } else {
          this.setActiveIndex(index);
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (index === this.activeIndex) {
            if (window.aksaraApp && window.aksaraApp.openModal) {
              window.aksaraApp.openModal(item.id);
            }
          } else {
            this.setActiveIndex(index);
          }
        }
      });

      this.stage.appendChild(card);
    });

    this.updateCardPositions();
    this.updateCounter();
  }

  updateCardPositions() {
    const cards = this.stage.querySelectorAll('.fan-card');
    const total = this.filteredData.length;
    const isMobile = window.innerWidth <= 768;

    const angleStep = isMobile ? 5 : 10;
    const xSpacing = isMobile ? 26 : 75;
    const yCurve = isMobile ? 8 : 18;

    cards.forEach((card, i) => {
      const diff = i - this.activeIndex;
      const absDiff = Math.abs(diff);

      if (diff === 0) {
        card.classList.add('active');
        card.style.display = 'block';
        card.style.transform = `translate3d(0, -18px, 100px) rotate(0deg) scale(1.08)`;
        card.style.zIndex = '40';
        card.style.opacity = '1';
        card.style.filter = 'none';
      } else {
        card.classList.remove('active');

        // On mobile, hide cards further than 2 positions to keep stage compact and prevent horizontal overflow
        if (isMobile && absDiff > 2) {
          card.style.display = 'none';
          return;
        } else {
          card.style.display = 'block';
        }

        const rotate = diff * angleStep;
        const translateX = diff * xSpacing;
        const translateY = Math.pow(diff, 2) * yCurve * 0.45;
        const scale = Math.max(0.78, 1 - absDiff * 0.08);
        const zIndex = 30 - absDiff;
        const opacity = absDiff > 4 ? 0 : Math.max(0.25, 1 - absDiff * 0.2);

        card.style.transform = `translate3d(${translateX}px, ${translateY}px, ${-absDiff * 40}px) rotate(${rotate}deg) scale(${scale})`;
        card.style.zIndex = zIndex;
        card.style.opacity = opacity;
        card.style.filter = absDiff > 2 ? 'blur(1.5px) brightness(0.85)' : 'none';
      }
    });
  }

  setActiveIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = this.filteredData.length - 1;
    } else if (newIndex >= this.filteredData.length) {
      newIndex = 0;
    }

    this.activeIndex = newIndex;
    this.updateCardPositions();
    this.updateCounter();


    if (window.aksaraSound) {
      window.aksaraSound.playChime(660);
    }
  }

  updateCounter() {
    if (!this.counterEl) return;
    const current = (this.activeIndex + 1).toString().padStart(2, '0');
    const total = this.filteredData.length.toString().padStart(2, '0');
    this.counterEl.textContent = `${current} / ${total}`;
  }

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.setActiveIndex(this.activeIndex - 1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.setActiveIndex(this.activeIndex + 1));
    }

    // Touch & Mouse Drag Handlers
    const stage = this.stage || this.container;

    const onStart = (clientX) => {
      this.isDragging = true;
      this.startX = clientX;
      this.dragOffset = 0;
    };

    const onMove = (clientX) => {
      if (!this.isDragging) return;
      this.dragOffset = clientX - this.startX;
    };

    const onEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      if (this.dragOffset < -45) {
        this.setActiveIndex(this.activeIndex + 1);
      } else if (this.dragOffset > 45) {
        this.setActiveIndex(this.activeIndex - 1);
      }
      this.dragOffset = 0;
    };

    // Mouse
    stage.addEventListener('mousedown', (e) => onStart(e.clientX));
    window.addEventListener('mousemove', (e) => onMove(e.clientX));
    window.addEventListener('mouseup', () => onEnd());

    // Touch
    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) onStart(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) onMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => onEnd());

    // Keyboard Arrow navigation
    window.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        this.setActiveIndex(this.activeIndex - 1);
      } else if (e.key === 'ArrowRight') {
        this.setActiveIndex(this.activeIndex + 1);
      }
    });

    // Resize reflow
    window.addEventListener('resize', () => {
      this.updateCardPositions();
    });
  }
}

// Global initialization helper
window.initAksaraGallery = function (containerId) {
  if (typeof AKSARA_CULTURES !== 'undefined') {
    return new AksaraFanGallery(containerId, AKSARA_CULTURES);
  }
  return null;
};
