
class AksaraSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.loopTimer = null;
    this.slendroFreqs = [440, 495, 558, 660, 742, 880];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Plays a single resonant bronze chime
  playChime(freq = 558, volume = 0.25) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft bronze harmonic bell simulation
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 2.2, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      // Acoustic decay envelope
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.85);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  // Toggles continuous serene ambient soundscape
  toggleAmbient(buttonEl) {
    this.init();
    if (this.isPlaying) {
      this.stopAmbient(buttonEl);
    } else {
      this.startAmbient(buttonEl);
    }
  }

  startAmbient(buttonEl) {
    this.isPlaying = true;
    if (buttonEl) buttonEl.classList.add('playing');

    const scheduleNext = () => {
      if (!this.isPlaying) return;
      // Pick random pentatonic note
      const randomNote = this.slendroFreqs[Math.floor(Math.random() * this.slendroFreqs.length)];
      this.playChime(randomNote, 0.12);
      const delay = 2200 + Math.random() * 2600;
      this.loopTimer = setTimeout(scheduleNext, delay);
    };

    scheduleNext();
  }

  stopAmbient(buttonEl) {
    this.isPlaying = false;
    if (buttonEl) buttonEl.classList.remove('playing');
    if (this.loopTimer) clearTimeout(this.loopTimer);
  }
}

window.aksaraSound = new AksaraSoundscape();

/* --------------------------------------------------------------------------
   2. MAIN APPLICATION CONTROLLER
   -------------------------------------------------------------------------- */
class AksaraApp {
  constructor() {
    this.modalEl = document.getElementById('aksara-modal');
    this.modalBackdrop = document.getElementById('aksara-modal-backdrop');
    this.init();
  }

  init() {
    this.setupHeaderScroll();
    this.setupMobileMenu();
    this.setupSoundButton();
    this.setupRevealObserver();
    this.setupModal();
    this.setupPreservationPledge();
    this.setupFilterButtons();
  }

  setupHeaderScroll() {
    const header = document.querySelector('.aksara-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  setupMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle-btn');
    const nav = document.getElementById('header-nav');

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on navigation click
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  setupSoundButton() {
    const soundBtn = document.getElementById('soundscape-btn');
    if (!soundBtn) return;

    soundBtn.addEventListener('click', () => {
      window.aksaraSound.toggleAmbient(soundBtn);
    });
  }

  setupRevealObserver() {
    const reveals = document.querySelectorAll('.reveal-init');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  setupModal() {
    if (!this.modalBackdrop) return;

    // Close button
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Click backdrop to close
    this.modalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.modalBackdrop) {
        this.closeModal();
      }
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalBackdrop.classList.contains('open')) {
        this.closeModal();
      }
    });

    // Tab buttons inside modal
    const tabBtns = document.querySelectorAll('.modal-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const panels = document.querySelectorAll('.modal-tab-panel');
        panels.forEach(p => {
          if (p.id === `tab-panel-${targetTab}`) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    });
  }

  openModal(cultureId) {
    if (!this.modalBackdrop || !AKSARA_CULTURES) return;

    const item = AKSARA_CULTURES.find(c => c.id === cultureId);
    if (!item) return;

    // Populate modal contents
    const titleEl = document.getElementById('modal-title');
    const originEl = document.getElementById('modal-origin');
    const badgeEl = document.getElementById('modal-badge');
    const imgEl = document.getElementById('modal-hero-img');
    const historyEl = document.getElementById('modal-history-text');
    const philEl = document.getElementById('modal-phil-text');
    const craftEl = document.getElementById('modal-craft-text');
    const unescoEl = document.getElementById('modal-unesco-text');

    if (titleEl) titleEl.textContent = item.name;
    if (originEl) originEl.textContent = `${item.regionLabel} • ${item.categoryLabel}`;
    if (badgeEl) badgeEl.textContent = item.unescoStatus;
    if (imgEl) {
      imgEl.src = item.image;
      imgEl.alt = item.name;
    }
    if (historyEl) historyEl.textContent = item.history;
    if (philEl) philEl.textContent = item.philosophy;
    if (craftEl) craftEl.textContent = item.traditionalCraft;
    if (unescoEl) unescoEl.textContent = item.unescoStatus;

    // Reset to first tab
    const firstTab = document.querySelector('.modal-tab-btn[data-tab="history"]');
    if (firstTab) firstTab.click();

    // Open modal
    this.modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (window.aksaraSound) {
      window.aksaraSound.playChime(742, 0.2);
    }
  }

  closeModal() {
    if (!this.modalBackdrop) return;
    this.modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;

        if (window.aksaraGallery) {
          window.aksaraGallery.filter(cat);
        }

        if (window.aksaraSound) {
          window.aksaraSound.playChime(558, 0.15);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. INTERACTIVE PRESERVATION PLEDGE & CERTIFICATE GENERATOR
     Renders an official high-res Certificate of Cultural Guardianship
     (Piagam Penjaga Pusaka Nusantara) on HTML5 Canvas.
     ------------------------------------------------------------------------ */
  setupPreservationPledge() {
    const form = document.getElementById('pledge-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('pledge-name');
      const guardianName = nameInput ? nameInput.value.trim() : 'Sahabat Pusaka';
      if (!guardianName) return;

      this.generateCertificate(guardianName);
    });
  }

  generateCertificate(guardianName) {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // 1. Warm Parchment Background
    ctx.fillStyle = '#F5E5C0';
    ctx.fillRect(0, 0, 1200, 800);

    // 2. Multi-layered Terracotta & Gold Borders (Megamendung style)
    ctx.strokeStyle = '#B66E41';
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, 1140, 740);

    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 3;
    ctx.strokeRect(48, 48, 1104, 704);

    ctx.strokeStyle = '#442F23';
    ctx.lineWidth = 1;
    ctx.strokeRect(56, 56, 1088, 688);

    // 3. Ornate Corner Motifs
    const drawCorner = (x, y, flipX, flipY) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(flipX, flipY);
      ctx.strokeStyle = '#D36228';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, 40);
      ctx.quadraticCurveTo(0, 0, 40, 0);
      ctx.moveTo(0, 25);
      ctx.quadraticCurveTo(0, 0, 25, 0);
      ctx.stroke();
      ctx.restore();
    };

    drawCorner(70, 70, 1, 1);
    drawCorner(1130, 70, -1, 1);
    drawCorner(70, 730, 1, -1);
    drawCorner(1130, 730, -1, -1);

    // 4. Header Titles
    ctx.textAlign = 'center';
    ctx.fillStyle = '#D36228';
    ctx.font = 'bold 16px "DM Sans", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('TECHTOPIA VOL. 2 • PLATFORM AKSARA NUSANTARA', 600, 130);

    ctx.fillStyle = '#442F23';
    ctx.font = 'bold 46px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('PIAGAM PENJAGA PUSAKA', 600, 190);

    ctx.fillStyle = '#7A5B47';
    ctx.font = 'italic 20px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('Dengan khidmat dan penuh kesadaran dianugerahkan kepada:', 600, 240);

    // 5. Guardian Name (Highlighted in Calligraphic Style)
    ctx.fillStyle = '#442F23';
    ctx.font = 'bold 52px "Cormorant Garamond", Georgia, serif';
    ctx.fillText(guardianName.toUpperCase(), 600, 315);

    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(350, 335);
    ctx.lineTo(850, 335);
    ctx.stroke();

    // 6. Pledge Text
    ctx.fillStyle = '#442F23';
    ctx.font = '19px "DM Sans", sans-serif';
    ctx.fillText('Sebagai Warga Pelindung & Penerus Warisan Luhur Budaya Seni Nusantara', 600, 385);

    ctx.fillStyle = '#7A5B47';
    ctx.font = '16px "DM Sans", sans-serif';
    const text1 = 'Berikrar untuk senantiasa menghormati, mempelajari, melestarikan, dan meneruskan';
    const text2 = 'falsafah luhur leluhur ke ranah masa depan dalam harmoni Bhinneka Tunggal Ika.';
    ctx.fillText(text1, 600, 425);
    ctx.fillText(text2, 600, 455);

    // 7. Wax Seal of AKSARA (Gold & Crimson)
    ctx.save();
    ctx.translate(600, 560);
    // Outer wax glow
    ctx.fillStyle = '#D36228';
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#B66E41';
    ctx.beginPath();
    ctx.arc(0, 0, 44, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#DAA520';
    ctx.font = 'bold 22px "Cormorant Garamond", serif';
    ctx.fillText('AKSARA', 0, -4);
    ctx.font = 'bold 10px "DM Sans", sans-serif';
    ctx.fillText('PUSAKA 2026', 0, 15);
    ctx.restore();

    // 8. Serial & Date
    const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const serial = 'AKS-' + Math.floor(100000 + Math.random() * 900000);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#7A5B47';
    ctx.font = '13px "DM Sans", sans-serif';
    ctx.fillText(`Nomor Registrasi: ${serial}`, 85, 710);

    ctx.textAlign = 'right';
    ctx.fillText(`Diterbitkan pada: ${today}`, 1115, 710);

    // 9. Instant Download Action
    const link = document.createElement('a');
    link.download = `Piagam_Penjaga_Pusaka_${guardianName.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    if (window.aksaraSound) {
      window.aksaraSound.playChime(880, 0.3);
    }

    // Success feedback message
    const msgEl = document.getElementById('pledge-success-msg');
    if (msgEl) {
      msgEl.style.display = 'block';
      msgEl.textContent = `Selamat, ${guardianName}! Piagam resmi Penjaga Pusaka telah diunduh ke perangkat Anda.`;
    }
  }
}

// Bootstrap once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.aksaraApp = new AksaraApp();
});
