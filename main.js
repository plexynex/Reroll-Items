/* ================================================================
 *  main.js
 *  Berisi: Render engine + Init + Copy + Toast + Modal Info + Submit Form
 *  HARUS di-load SETELAH config.js dan configData.js
 * ================================================================ */

(function () {
  "use strict";

  /* ---------- Cek dependency ---------- */
  function checkDependencies() {
    const missing = [];
    if (typeof window.ICONS === "undefined") missing.push("ICONS (config.js)");
    if (typeof window.PLACEHOLDER === "undefined") missing.push("PLACEHOLDER (config.js)");
    if (typeof window.INFO_CONFIG === "undefined") missing.push("INFO_CONFIG (config.js)");
    if (typeof window.REROLL_DATA === "undefined") missing.push("REROLL_DATA (configData.js)");
    if (missing.length > 0) {
      console.error("[main.js] File berikut belum di-load dengan benar:", missing);
      console.error("[main.js] Pastikan urutan script di index.html: config.js → configData.js → main.js");
      return false;
    }
    return true;
  }

  /* ---------- Reference ---------- */
  const ICONS = window.ICONS || {};
  const PLACEHOLDER = window.PLACEHOLDER || {};
  const INFO_CONFIG = window.INFO_CONFIG || { title: "Info", columns: [] };
  const REROLL_DATA = window.REROLL_DATA || {};

  /* ---------- Constants ---------- */
  const TIER_LABEL = { common: "Common", uncommon: "Uncommon", epic: "Epic", legend: "Legend", unknown: "???" };
  const GENDER_LABELS = { male: "Male", female: "Female" };
  const GENDER_ICONS = {
    male: '<svg viewBox="0 0 24 24"><circle cx="10" cy="14" r="5"/><path d="M19 5l-5.4 5.4"/><path d="M14 5h5v5"/></svg>',
    female: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M12 14v7"/><path d="M9 18h6"/></svg>'
  };
  const COPY_ICON = '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

  /* ---------- Helpers ---------- */
  function rgbPreview(rgbStr) {
    const p = rgbStr.split(".").map(n => parseInt(n, 10));
    if (p.length !== 3 || p.some(n => isNaN(n))) return "#000";
    return `rgb(${p[0]},${p[1]},${p[2]})`;
  }

  function resolveImage(item, section, slot) {
    if (item && item.image) return item.image;
    if (section && section.placeholder) {
      const ph = section.placeholder;
      if (typeof ph === "string") return PLACEHOLDER[ph] || "";
      if (typeof ph === "object" && slot && ph[slot]) return PLACEHOLDER[ph[slot]] || "";
    }
    return "";
  }

  function copyBtn(value, mini = false) {
    const safe = String(value).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return `<button class="copy-btn${mini ? ' mini' : ''}" data-copy="${safe}">${COPY_ICON}${mini ? '' : 'Salin'}</button>`;
  }

  /* ---------- Render: grouped card ---------- */
  function renderGroupedCard(section) {
    const tierOrder = ["common", "uncommon", "epic", "legend", "unknown"];
    return tierOrder.filter(t => section.tiers[t]).map(tier => {
      const names = (section.tiers[tier].names || []).map(n =>
        n === "" ? `<span class="chip muted">(kosong)</span>` : `<span class="chip">${n}</span>`
      ).join("");
      return `
        <div class="grouped-card" data-rarity="${tier}">
          <div class="grouped-card-header">
            <span class="grouped-card-title">${TIER_LABEL[tier]}</span>
            <span class="rarity-badge ${tier}">${TIER_LABEL[tier]}</span>
          </div>
          <div class="grouped-card-list">${names}</div>
        </div>`;
    }).join("");
  }

  /* ---------- Render: color card ---------- */
  function renderColorCard(section) {
    const tierOrder = ["common", "uncommon", "epic", "legend", "unknown"];
    let html = "";

    tierOrder.forEach(tier => {
      const tierData = section.tiers[tier];
      if (!tierData) return;

      let values = [];
      if (Array.isArray(tierData.values)) {
        values = tierData.values;
      } else if (tierData.value) {
        values = [{ value: tierData.value, label: tierData.label || "" }];
      }

      values.forEach((v) => {
        const labelAttr = v.label ? ` title="${v.label}"` : "";
        const labelHtml = v.label ? `<div class="color-label">${v.label}</div>` : "";
        html += `
          <article class="card" data-rarity="${tier}"${labelAttr}>
            <div class="swatch-wrapper">
              <span class="rarity-badge float ${tier}">${TIER_LABEL[tier]}</span>
              <div class="swatch-circle" style="background:${rgbPreview(v.value)};"></div>
              ${labelHtml}
            </div>
            <div class="card-content">
              <div class="id-row no-border">
                <span class="id-text">${v.value}</span>
                ${copyBtn(v.value)}
              </div>
            </div>
          </article>`;
      });
    });

    return html;
  }

  /* ---------- Render: item card ---------- */
  function renderItemCard(section) {
    return section.items.map(it => {
      const img = resolveImage(it, section);
      return `
        <article class="card" data-rarity="${it.rarity}">
          <div class="image-wrapper">
            <span class="rarity-badge float ${it.rarity}">${TIER_LABEL[it.rarity]}</span>
            <img src="${img}" alt="${section.title} ${it.id}" loading="lazy">
          </div>
          <div class="card-content">
            <div class="id-row">
              <span class="id-text">${it.id}</span>
              ${copyBtn(it.id)}
            </div>
          </div>
        </article>`;
    }).join("");
  }

  /* ---------- Render: uniform card ---------- */
  function renderUniformCard(section) {
    return section.items.map(it => {
      const shirtImg = resolveImage(it.shirt, section, "shirt");
      const pantsImg = resolveImage(it.pants, section, "pants");
      return `
        <article class="card" data-rarity="${it.rarity}">
          <div class="image-wrapper dual">
            <span class="rarity-badge float ${it.rarity}">${TIER_LABEL[it.rarity]}</span>
            <div class="img-cell">
              <span class="slot-badge mini">Shirt</span>
              <img src="${shirtImg}" alt="Shirt ${it.name}" loading="lazy">
            </div>
            <div class="img-cell">
              <span class="slot-badge mini">Pants</span>
              <img src="${pantsImg}" alt="Pants ${it.name}" loading="lazy">
            </div>
            <span class="set-name-badge">${it.name}</span>
          </div>
          <div class="card-content">
            <div class="id-list">
              <div class="id-item">
                <div class="id-item-head"><span class="dot"></span>Shirt</div>
                <div class="id-item-body">
                  <span class="id-text">${it.shirt.id}</span>
                  ${copyBtn(it.shirt.id, true)}
                </div>
              </div>
              <div class="id-item">
                <div class="id-item-head"><span class="dot"></span>Pants</div>
                <div class="id-item-body">
                  <span class="id-text">${it.pants.id}</span>
                  ${copyBtn(it.pants.id, true)}
                </div>
              </div>
            </div>
          </div>
        </article>`;
    }).join("");
  }

  /* ---------- Render: section ---------- */
  function renderSection(section) {
    let gridContent, countLabel, gridClass = "grid-container";

    if (section.type === "grouped") {
      gridContent = renderGroupedCard(section);
      gridClass += " wide";
      const totalNames = Object.values(section.tiers).reduce((sum, t) => sum + (t.names ? t.names.length : 0), 0);
      countLabel = `${totalNames} items`;
    } else if (section.type === "color") {
      gridContent = renderColorCard(section);
      const total = Object.values(section.tiers).reduce((sum, t) => {
        if (Array.isArray(t.values)) return sum + t.values.length;
        if (t.value) return sum + 1;
        return sum;
      }, 0);
      countLabel = `${total} items`;
    } else if (section.type === "uniform") {
      gridContent = renderUniformCard(section);
      gridClass += " wide";
      countLabel = `${section.items.length} set`;
    } else {
      gridContent = renderItemCard(section);
      countLabel = `${section.items.length} items`;
    }

    return `
      <section class="category-section">
        <div class="category-header">
          <div class="category-title-wrap">
            <span class="category-icon">${ICONS[section.icon] || ""}</span>
            <div class="category-text">
              <span class="category-title">${section.title}</span>
              <span class="category-subtitle">${section.subtitle}</span>
            </div>
          </div>
          <span class="category-count">${countLabel}</span>
        </div>
        <div class="${gridClass}">${gridContent}</div>
      </section>`;
  }

  /* ---------- Render: panel ---------- */
  function renderPanel(genderKey, sections, isActive) {
    const groups = [];
    const groupMap = {};
    sections.forEach(s => {
      if (!groupMap[s.group]) { groupMap[s.group] = []; groups.push(s.group); }
      groupMap[s.group].push(s);
    });

    const html = groups.map(groupName => {
      const items = groupMap[groupName].map(renderSection).join("");
      return `
        <div class="group-block">
          <div class="group-label">
            <span class="group-label-text">${groupName}</span>
            <span class="group-label-line"></span>
          </div>
          ${items}
        </div>`;
    }).join("");

    return `<div class="view-panel${isActive ? " active" : ""}" id="panel-${genderKey}" data-gender="${genderKey}">${html}</div>`;
  }

  /* ---------- Info modal ---------- */
  function renderInfoModal() {
    const grid = document.getElementById("infoGrid");
    const title = document.getElementById("modalTitle");
    if (!grid || !title) return;
    title.textContent = INFO_CONFIG.title || "Info";

    grid.innerHTML = INFO_CONFIG.columns.map(col => {
      const isNew = String(col.new || "").toLowerCase() === "yes";
      const gender = col.key || "";
      const badge = isNew ? `<span class="info-new-badge">New</span>` : "";
      return `
        <div class="info-column ${isNew ? 'is-new' : ''}" data-gender="${gender}">
          <div class="info-column-header">
            <span class="info-column-icon">${col.icon || ""}</span>
            <span class="info-column-title">${col.title || col.key}</span>
            ${badge}
          </div>
          <div class="info-column-text">${(col.text || "").replace(/</g, "&lt;")}</div>
        </div>`;
    }).join("");
  }

  function updateInfoButtonState() {
    const btn = document.getElementById("infoBtn");
    if (!btn) return;
    const hasNew = INFO_CONFIG.columns.some(c => String(c.new || "").toLowerCase() === "yes");
    btn.classList.toggle("has-new", hasNew);
  }

  function openInfoModal() {
    renderInfoModal();
    const modal = document.getElementById("infoModal");
    if (!modal) return;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeInfoModal() {
    const modal = document.getElementById("infoModal");
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  /* ---------- Copy + Toast ---------- */
  function copyId(buttonElement, idText) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(idText)
        .then(() => { showToast(`"${idText}" disalin`); animateButton(buttonElement); })
        .catch(() => fallbackCopy(idText, buttonElement));
    } else {
      fallbackCopy(idText, buttonElement);
    }
  }

  function fallbackCopy(text, buttonElement) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      const ok = document.execCommand("copy");
      if (ok) { showToast(`"${text}" disalin`); animateButton(buttonElement); }
      else showToast("Gagal menyalin", true);
    } catch (err) { showToast("Gagal menyalin", true); }
    document.body.removeChild(textarea);
  }

  function animateButton(btn) {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<svg viewBox="0 0 24 24" style="stroke: currentColor;"><polyline points="20 6 9 17 4 12"/></svg>`;
    btn.classList.add("copied");
    setTimeout(() => { btn.innerHTML = originalHTML; btn.classList.remove("copied"); }, 1600);
  }

  let toastTimer = null;
  function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toastText");
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.toggle("error", isError);
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  /* ---------- Theme ---------- */
  function setPageTheme(genderKey) {
    document.documentElement.setAttribute("data-gender", genderKey);
  }

  /* ================================================================
   *  SUBMIT FORM (Rekomendasi Aksesoris)
   * ================================================================ */

  // ⚠️ Webhook Discord (publik)
  const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1560223429670735932/Iv4UW_jrzD3jDMDzlb2C6Q5FX_C5IPv7pHZwheUhg2osPgWnefstxhiDw-qzFsN0Ma5-";

  // Rate limit sederhana: 1x kirim per 60 detik
  let lastSubmitTime = 0;
  const SUBMIT_COOLDOWN = 60000;

  // Warna embed Discord per rarity
  const RARITY_COLOR = {
    common:   0x94a3b8,
    uncommon: 0x4ade80,
    epic:     0xc084fc,
    legend:   0xfbbf24,
    unknown:  0xf87171
  };

  // Label kategori yang enak dibaca
  const CATEGORY_LABEL = {
    hair:     "Hair",
    faceType: "Face Type",
    headAcc:  "Head Accessory",
    faceAcc:  "Face Accessory",
    neckAcc:  "Neck Accessory",
    armAcc:   "Arm Accessory",
    waistAcc: "Waist Accessory",
    backAcc:  "Back Accessory",
    uniform:  "Uniform (Shirt + Pants)"
  };

  // Helper: bungkus link dengan code block agar bisa di-copy
  function linkCodeBlock(url) {
    return "```" + url + "```";
  }

  function initSubmitForm() {
    const btn = document.getElementById("submitBtn");
    const modal = document.getElementById("submitModal");
    const closeBtn = document.getElementById("submitModalClose");
    const cancelBtn = document.getElementById("submitCancel");
    const form = document.getElementById("submitForm");
    const sendBtn = document.getElementById("submitSend");

    if (!btn || !modal || !form) {
      console.warn("[submit] Elemen form tidak ditemukan.");
      return;
    }

    const categorySelect = document.getElementById("submitCategory");
    const genderSelect   = document.getElementById("submitGender");
    const modeItem       = document.getElementById("modeItem");
    const modeUniform    = document.getElementById("modeUniform");

    // === Sinkronisasi gender dari tab aktif ===
    function syncGenderFromActiveTab() {
      const activeBtn = document.querySelector(".gender-btn.active");
      if (!activeBtn || !genderSelect) return;
      const currentGender = activeBtn.dataset.target; // "male" | "female"
      if (currentGender && genderSelect.value !== currentGender) {
        genderSelect.value = currentGender;
      }
    }

    function updateFormMode() {
      const isUniform = categorySelect.value === "uniform";
      modeItem.style.display = isUniform ? "none" : "";
      modeUniform.style.display = isUniform ? "" : "none";

      const itemFields = ["submitId", "submitLink"];
      const uniformFields = ["submitUniformName", "submitShirtId", "submitShirtLink", "submitPantsId", "submitPantsLink"];

      itemFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.required = !isUniform;
      });
      uniformFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.required = isUniform;
      });
    }

    categorySelect.addEventListener("change", updateFormMode);
    updateFormMode();

    const openModal = () => {
      syncGenderFromActiveTab();   // ← sinkron sebelum buka
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modal.classList.remove("show");
      document.body.style.overflow = "";
      form.reset();
      updateFormMode();
    };

    btn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    cancelBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
        const sisa = Math.ceil((SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000);
        showToast(`Tunggu ${sisa} detik sebelum kirim lagi`, true);
        return;
      }

      const gender = form.gender.value.trim();
      const category = form.category.value.trim();
      const rarity = form.rarity.value.trim();
      const note = form.note.value.trim();
      const isUniform = category === "uniform";

      let embeds = [];

      if (isUniform) {
        const uniformName = form.uniformName.value.trim();
        const shirtId = form.shirtId.value.trim();
        const shirtLink = form.shirtLink.value.trim();
        const pantsId = form.pantsId.value.trim();
        const pantsLink = form.pantsLink.value.trim();

        if (!uniformName || !shirtId || !shirtLink || !pantsId || !pantsLink) {
          showToast("Lengkapi semua field uniform", true);
          return;
        }
        if (!/^[0-9]+$/.test(shirtId) || !/^[0-9]+$/.test(pantsId)) {
          showToast("Shirt ID & Pants ID harus angka", true);
          return;
        }
        if (!/^https:\/\//i.test(shirtLink) || !/^https:\/\//i.test(pantsLink)) {
          showToast("Link harus diawali https://", true);
          return;
        }

        // ===== Embed 1: INFO =====
        embeds.push({
          title: "> Rekomendasi Uniform Baru",
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Gender",   value: gender,   inline: true },
            { name: "Kategori", value: CATEGORY_LABEL[category] || category, inline: true },
            { name: "Rarity",   value: TIER_LABEL[rarity] || rarity, inline: true },
            { name: "Set Name", value: uniformName, inline: false },
            { name: "Shirt ID", value: `\`${shirtId}\``, inline: true },
            { name: "Pants ID", value: `\`${pantsId}\``, inline: true }
          ],
          timestamp: new Date().toISOString(),
          footer: { text: `Rarity: ${TIER_LABEL[rarity] || rarity}` }
        });

        // ===== Embed 2: SHIRT PREVIEW =====
        embeds.push({
          title: "👕 Shirt Preview",
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Link", value: shirtLink, inline: false },
            { name: "Copy", value: linkCodeBlock(shirtLink), inline: false }
          ],
          image: { url: shirtLink },
          footer: { text: `Shirt ID: ${shirtId}` }
        });

        // ===== Embed 3: PANTS PREVIEW =====
        embeds.push({
          title: "👖 Pants Preview",
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Link", value: pantsLink, inline: false },
            { name: "Copy", value: linkCodeBlock(pantsLink), inline: false }
          ],
          image: { url: pantsLink },
          footer: { text: `Pants ID: ${pantsId}` }
        });

      } else {
        const assetId = form.assetId.value.trim();
        const link = form.link.value.trim();

        if (!assetId || !link) {
          showToast("Lengkapi Asset ID & Link", true);
          return;
        }
        if (!/^[0-9]+$/.test(assetId)) {
          showToast("Asset ID harus berupa angka", true);
          return;
        }
        if (!/^https:\/\//i.test(link)) {
          showToast("Link harus diawali https://", true);
          return;
        }

        embeds.push({
          title: "> Rekomendasi Aksesoris Baru",
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Gender",   value: gender,   inline: true },
            { name: "Kategori", value: CATEGORY_LABEL[category] || category, inline: true },
            { name: "Rarity",   value: TIER_LABEL[rarity] || rarity, inline: true },
            { name: "Asset ID", value: `\`${assetId}\``, inline: false },
            { name: "Preview", value: link, inline: false },
            { name: "Preview (Copy)", value: linkCodeBlock(link), inline: false }
          ],
          image: { url: link },
          timestamp: new Date().toISOString(),
          footer: { text: `Rarity: ${TIER_LABEL[rarity] || rarity}` }
        });
      }

      // Catatan ditambahkan ke embed pertama
      if (note) {
        embeds[0].fields.push({ name: "Catatan", value: note.slice(0, 300), inline: false });
      }

      const payload = { embeds };

      sendBtn.classList.add("is-loading");
      sendBtn.disabled = true;
      cancelBtn.disabled = true;

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      try {
        const res = await fetch(DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        if (res.status === 204 || res.ok) {
          lastSubmitTime = Date.now();
          showToast("✅ Rekomendasi terkirim, terima kasih!");
          setTimeout(closeModal, 800);
        } else {
          const errText = await res.text().catch(() => "");
          console.error("Discord error:", res.status, errText);
          showToast("Gagal mengirim. Coba lagi nanti.", true);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        if (err.name === "AbortError") {
          showToast("Timeout. Cek koneksi internet kamu.", true);
        } else {
          showToast("Gagal koneksi. Cek internet kamu.", true);
        }
      } finally {
        clearTimeout(timeout);
        sendBtn.classList.remove("is-loading");
        sendBtn.disabled = false;
        cancelBtn.disabled = false;
      }
    });
  }

  /* ---------- Init ---------- */
  function init() {
    if (!checkDependencies()) return;

    const genders = Object.keys(REROLL_DATA);
    if (genders.length === 0) {
      console.warn("[main.js] REROLL_DATA kosong.");
      return;
    }

    // Gender buttons
    const btnContainer = document.getElementById("genderButtons");
    if (btnContainer) {
      btnContainer.innerHTML = genders.map((g, i) => `
        <button class="gender-btn${i === 0 ? " active" : ""}" data-target="${g}" role="tab" aria-selected="${i === 0}">
          ${GENDER_ICONS[g] || ""}${GENDER_LABELS[g] || g}
        </button>
      `).join("");
    }

    // Panels
    const panelsContainer = document.getElementById("panelsContainer");
    if (panelsContainer) {
      panelsContainer.innerHTML = genders.map((g, i) => renderPanel(g, REROLL_DATA[g], i === 0)).join("");
    }

    // Initial theme
    setPageTheme(genders[0]);

    // Gender switch events
    document.querySelectorAll(".gender-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        document.querySelectorAll(".gender-btn").forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        document.querySelectorAll(".view-panel").forEach(p => {
          p.classList.toggle("active", p.dataset.gender === target);
        });
        setPageTheme(target);

        // ← Sinkron gender di form submit saat tab berubah
        const genderSelect = document.getElementById("submitGender");
        if (genderSelect) genderSelect.value = target;
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); btn.click(); }
      });
    });

    // Delegated copy
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-copy]");
      if (btn) copyId(btn, btn.dataset.copy);
    });

    // Info modal
    const infoBtn = document.getElementById("infoBtn");
    const modalClose = document.getElementById("modalClose");
    const infoModal = document.getElementById("infoModal");

    if (infoBtn) infoBtn.addEventListener("click", openInfoModal);
    if (modalClose) modalClose.addEventListener("click", closeInfoModal);
    if (infoModal) {
      infoModal.addEventListener("click", (e) => {
        if (e.target === infoModal) closeInfoModal();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && infoModal && infoModal.classList.contains("show")) {
        closeInfoModal();
      }
    });

    updateInfoButtonState();
    initSubmitForm();
  }

  /* ---------- Bootstrap ---------- */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();