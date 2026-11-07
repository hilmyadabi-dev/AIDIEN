/**
 * AKSARA — Interactive Nusantara Map Engine
 * Native SVG regional exploration, interactive feedback, and culture linkage
 */

class AksaraMap {
  constructor(mapSvgId, detailPanelId) {
    this.mapSvg = document.getElementById(mapSvgId);
    this.detailPanel = document.getElementById(detailPanelId);
    this.activeRegion = 'jawa'; // Default active region

    if (!this.mapSvg) return;

    this.init();
  }

  init() {
    this.bindSvgRegions();
    this.updateDetailPanel(this.activeRegion);
  }

  bindSvgRegions() {
    const regionGroups = this.mapSvg.querySelectorAll('.map-region-group');

    regionGroups.forEach(group => {
      const regionId = group.dataset.region;

      // Click / Tap
      group.addEventListener('click', () => {
        this.selectRegion(regionId);
      });

      // Keyboard support
      group.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.selectRegion(regionId);
        }
      });

      // Hover acoustic feedback
      group.addEventListener('mouseenter', () => {
        if (window.aksaraSound) {
          window.aksaraSound.playChime(528, 0.08);
        }
      });
    });
  }

  selectRegion(regionId) {
    if (!regionId || !AKSARA_REGIONS[regionId]) return;

    this.activeRegion = regionId;

    // Update SVG active classes
    const regionGroups = this.mapSvg.querySelectorAll('.map-region-group');
    regionGroups.forEach(g => {
      if (g.dataset.region === regionId) {
        g.classList.add('active');
        g.setAttribute('aria-pressed', 'true');
      } else {
        g.classList.remove('active');
        g.setAttribute('aria-pressed', 'false');
      }
    });

    // Audio cue
    if (window.aksaraSound) {
      window.aksaraSound.playChime(792, 0.15);
    }

    this.updateDetailPanel(regionId);
  }

  updateDetailPanel(regionId) {
    if (!this.detailPanel) return;

    const regionData = AKSARA_REGIONS[regionId];
    if (!regionData) return;

    // Find cultures linked to this region
    const linkedCultures = AKSARA_CULTURES.filter(c => c.region === regionId);

    let culturesHtml = '';
    if (linkedCultures.length > 0) {
      culturesHtml = linkedCultures.map(c => `
        <div class="region-culture-item" data-id="${c.id}" role="button" tabindex="0" aria-label="Lihat detail ${c.name}">
          <img src="${c.image}" alt="${c.name}" class="region-culture-thumb" loading="lazy">
          <div class="region-culture-info">
            <h4 class="region-culture-name">${c.name}</h4>
            <span class="region-culture-type">${c.categoryLabel}</span>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      `).join('');
    } else {
      culturesHtml = `
        <div style="padding: 1.5rem; background: rgba(232, 195, 158, 0.2); border-radius: 8px; color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
          Koleksi budaya untuk kawasan ini sedang dalam tahap kurasi arsip digital aksara lanjutan (Mandau Dayak, Tari Cakalele, dll).
        </div>
      `;
    }

    this.detailPanel.innerHTML = `
      <span class="region-detail-badge">Wilayah Kebudayaan</span>
      <h3 class="region-detail-title">${regionData.name}</h3>
      <p style="font-family: var(--font-heading); font-size: 1.15rem; font-style: italic; color: var(--accent-secondary); margin-bottom: 0.85rem;">
        ${regionData.title}
      </p>
      <p class="region-detail-philosophy">
        ${regionData.philosophy}
      </p>
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-muted);">
          Warisan Unggulan (${linkedCultures.length})
        </span>
      </div>

      <div class="region-cultures-list">
        ${culturesHtml}
      </div>
    `;

    // Attach click listeners to culture items in detail panel
    const items = this.detailPanel.querySelectorAll('.region-culture-item');
    items.forEach(el => {
      const cultureId = el.dataset.id;
      const openAction = () => {
        if (window.aksaraApp && window.aksaraApp.openModal) {
          window.aksaraApp.openModal(cultureId);
        }
      };

      el.addEventListener('click', openAction);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openAction();
        }
      });
    });
  }
}

window.initAksaraMap = function(mapSvgId, detailPanelId) {
  return new AksaraMap(mapSvgId, detailPanelId);
};
