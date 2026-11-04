/* ================================================================
 *  main.js
 *  Berisi: Render engine + Init + Copy + Toast + Modal Info 
 *          + Submit Form + Tutorial Modal + Validasi Link Preview
 *          + Group Navigation + Category Navigation + Scroll Spy
 *          + Gender Accent (emoji + hex) + Search Engine
 *          + Scroll to Top Button
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
  function renderSection(section, genderKey) {
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

    const sectionId = `section-${genderKey}-${section.id}`;

    return `
      <section class="category-section" id="${sectionId}" data-section-id="${section.id}" data-gender="${genderKey}" data-group="${section.group}">
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
      const items = groupMap[groupName].map(sec => renderSection(sec, genderKey)).join("");
      const groupId = `group-${genderKey}-${groupName.toLowerCase().replace(/\s+/g, "-")}`;
      return `
        <div class="group-block" id="${groupId}" data-group="${groupName}" data-gender="${genderKey}">
          <div class="group-label">
            <span class="group-label-text">${groupName}</span>
            <span class="group-label-line"></span>
          </div>
          ${items}
        </div>`;
    }).join("");

    return `<div class="view-panel${isActive ? " active" : ""}" id="panel-${genderKey}" data-gender="${genderKey}">${html}</div>`;
  }

  /* ---------- Render: group navigation (Level 1) ---------- */
  function renderGroupNav(genderKey, sections) {
    const nav = document.getElementById("groupNav");
    if (!nav) return;

    const groups = [];
    const groupMap = {};
    sections.forEach(s => {
      if (!groupMap[s.group]) { groupMap[s.group] = []; groups.push(s.group); }
      groupMap[s.group].push(s);
    });

    const countPerGroup = {};
    groups.forEach(g => {
      let total = 0;
      groupMap[g].forEach(sec => {
        if (sec.type === "grouped") {
          total += Object.values(sec.tiers).reduce((sum, t) => sum + (t.names ? t.names.length : 0), 0);
        } else if (sec.type === "color") {
          total += Object.values(sec.tiers).reduce((sum, t) => {
            if (Array.isArray(t.values)) return sum + t.values.length;
            if (t.value) return sum + 1;
            return sum;
          }, 0);
        } else if (sec.items) {
          total += sec.items.length;
        }
      });
      countPerGroup[g] = total;
    });

    nav.innerHTML = `
      <span class="group-nav-label">Lompat ke</span>
      ${groups.map((g, i) => {
        const groupId = `group-${genderKey}-${g.toLowerCase().replace(/\s+/g, "-")}`;
        return `
          <button class="group-nav-btn${i === 0 ? " active" : ""}" data-group-target="${groupId}" data-group-name="${g}">
            ${g}
            <span class="nav-count">${countPerGroup[g]}</span>
          </button>`;
      }).join("")}
    `;

    renderCategoryNav(genderKey, sections, groups[0]);

    nav.querySelectorAll(".group-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.groupTarget;
        const groupName = btn.dataset.groupName;
        const target = document.getElementById(targetId);
        if (!target) return;

        nav.querySelectorAll(".group-nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        renderCategoryNav(genderKey, sections, groupName);

        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ---------- Render: category navigation (Level 2) ---------- */
  function renderCategoryNav(genderKey, sections, activeGroup) {
    const nav = document.getElementById("categoryNav");
    if (!nav) return;

    const filtered = sections.filter(s => s.group === activeGroup);

    if (filtered.length === 0) {
      nav.innerHTML = "";
      return;
    }

    function countItems(sec) {
      if (sec.type === "grouped") {
        return Object.values(sec.tiers).reduce((sum, t) => sum + (t.names ? t.names.length : 0), 0);
      }
      if (sec.type === "color") {
        return Object.values(sec.tiers).reduce((sum, t) => {
          if (Array.isArray(t.values)) return sum + t.values.length;
          if (t.value) return sum + 1;
          return sum;
        }, 0);
      }
      if (sec.items) return sec.items.length;
      return 0;
    }

    nav.innerHTML = filtered.map((sec, i) => {
      const sectionId = `section-${genderKey}-${sec.id}`;
      return `
        <button class="category-nav-btn${i === 0 ? " active" : ""}" data-cat-target="${sectionId}">
          ${sec.title}
          <span class="cat-count">${countItems(sec)}</span>
        </button>`;
    }).join("");

    nav.querySelectorAll(".category-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.catTarget;
        const target = document.getElementById(targetId);
        if (!target) return;

        nav.querySelectorAll(".category-nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
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
   *  VALIDASI LINK PREVIEW
   * ================================================================ */

  const BLOCKED_DOMAINS = [
    "roblox.com/catalog",
    "web.roblox.com/catalog",
    "roblox.com/games",
    "roblox.com/users",
    "roblox.com/library",
    "roblox.com/bundles",
    "roblox.com/marketplace"
  ];

  const ALLOWED_EXTENSIONS = /\.(png|jpg|jpeg|gif|webp|svg|avif)(\?.*)?$/i;

  const ROBLOX_CDN_PATHS = [
    "/HairAccessory/",
    "/DynamicHeadCostume/",
    "/Shirt/",
    "/Pants/",
    "/Hat/",
    "/Face/",
    "/Neck/",
    "/Front/",
    "/Back/",
    "/Waist/",
    "/Webp/noFilter",
    "/Png/noFilter",
    "/Asset/"
  ];

  function validatePreviewLink(url) {
    if (!url || typeof url !== "string") {
      return { valid: false, reason: "Link kosong" };
    }

    if (!/^https:\/\//i.test(url)) {
      return { valid: false, reason: "Link harus diawali https://" };
    }

    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      return { valid: false, reason: "Format URL tidak valid" };
    }

    const fullUrl = parsed.href.toLowerCase();
    const hostname = parsed.hostname.toLowerCase();

    for (const blocked of BLOCKED_DOMAINS) {
      if (fullUrl.includes(blocked)) {
        return {
          valid: false,
          reason: "Ini link halaman katalog, bukan link gambar. Drag gambar ke tab URL untuk dapatkan link preview."
        };
      }
    }

    const hasImageExtension = ALLOWED_EXTENSIONS.test(parsed.pathname);

    const isRobloxCdnImage =
      (hostname.endsWith("rbxcdn.com") || hostname.endsWith("roblox.com")) &&
      ROBLOX_CDN_PATHS.some(p => parsed.pathname.includes(p));

    if (!hasImageExtension && !isRobloxCdnImage) {
      return {
        valid: false,
        reason: "Link bukan direct image. Harus berakhiran .png/.jpg/.webp, atau URL CDN Roblox (tr.rbxcdn.com)."
      };
    }

    return { valid: true };
  }

  /* ================================================================
   *  SUBMIT FORM + TUTORIAL MODAL
   * ================================================================ */

  const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1560223429670735932/Iv4UW_jrzD3jDMDzlb2C6Q5FX_C5IPv7pHZwheUhg2osPgWnefstxhiDw-qzFsN0Ma5-";

  let lastSubmitTime = 0;
  const SUBMIT_COOLDOWN = 60000;

  const RARITY_COLOR = {
    common:   0x94a3b8,
    uncommon: 0x4ade80,
    epic:     0xc084fc,
    legend:   0xfbbf24,
    unknown:  0xf87171
  };

  /* ---------- GENDER ACCENT (emoji + hex, tampil di field) ---------- */
  const GENDER_EMOJI = {
    male:   "🔵",
    female: "🩷"
  };

  const GENDER_HEX = {
    male:   "#2ec7ff",
    female: "#ff6ec7"
  };

  function buildGenderField(gender) {
    const g = (gender || "").toLowerCase();
    const emoji = GENDER_EMOJI[g] || "⚪";
    const hex = GENDER_HEX[g] || "#ffffff";
    const label = g ? g.toUpperCase() : "UNKNOWN";
    return `${emoji} ${label} · \`${hex}\``;
  }

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

  function linkCodeBlock(url) {
    return "```" + url + "```";
  }

  // Bungkus ID dengan triple backtick (click-to-copy di semua Discord)
  function idCodeBlock(id) {
    return "```" + id + "```";
  }

  /* ---------- Helper: Formatted DateTime ---------- */
  function padNumber(n, width) {
    return String(n).padStart(width, "0");
  }

  function getFormattedDateTime() {
    const now = new Date();
    const dd = padNumber(now.getDate(), 2);
    const mm = padNumber(now.getMonth() + 1, 2);
    const yyyy = now.getFullYear();
    const hh = padNumber(now.getHours(), 2);
    const mn = padNumber(now.getMinutes(), 2);
    const ss = padNumber(now.getSeconds(), 2);
    return `${dd}/${mm}/${yyyy} ${hh}:${mn}:${ss}`;
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

    function syncGenderFromActiveTab() {
      const activeBtn = document.querySelector(".gender-btn.active");
      if (!activeBtn || !genderSelect) return;
      const currentGender = activeBtn.dataset.target;
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

    // === Live preview gambar saat user paste link ===
    function setupPreviewListener(inputId, boxId) {
      const input = document.getElementById(inputId);
      const box = document.getElementById(boxId);
      if (!input || !box) return;

      let debounceTimer = null;

      function buildErrorHTML(title, reason) {
        return `
          <div class="link-preview-error">
            <strong>[!] ${title}</strong><br>
            ${reason}<br>
            <span class="link-preview-hint">Klik Tutorial untuk panduan.</span>
            <br>
            <button type="button" class="link-preview-help" data-open-tutorial>
              [?] Buka Tutorial
            </button>
          </div>`;
      }

      input.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const url = input.value.trim();

          box.classList.remove("has-image", "is-error");
          box.innerHTML = "";

          if (!url) {
            box.innerHTML = `<div class="link-preview-empty">Preview gambar akan muncul di sini</div>`;
            return;
          }

          const check = validatePreviewLink(url);
          if (!check.valid) {
            box.classList.add("is-error");
            box.innerHTML = buildErrorHTML("Link tidak valid", check.reason);
            return;
          }

          const img = new Image();
          img.onload = () => {
            box.classList.add("has-image");
            box.innerHTML = "";
            box.appendChild(img);
          };
          img.onerror = () => {
            box.classList.add("is-error");
            box.innerHTML = buildErrorHTML(
              "Gambar tidak bisa dimuat",
              "Link mungkin bukan gambar langsung atau diblokir server."
            );
          };
          img.src = url;
        }, 400);
      });
    }

    setupPreviewListener("submitLink", "previewItem");
    setupPreviewListener("submitShirtLink", "previewShirt");
    setupPreviewListener("submitPantsLink", "previewPants");

    const openModal = () => {
      syncGenderFromActiveTab();
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modal.classList.remove("show");
      document.body.style.overflow = "";
      form.reset();
      updateFormMode();
      ["previewItem", "previewShirt", "previewPants"].forEach(id => {
        const box = document.getElementById(id);
        if (box) {
          box.classList.remove("has-image", "is-error");
          box.innerHTML = `<div class="link-preview-empty">Preview gambar akan muncul di sini</div>`;
        }
      });
    };

    btn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    cancelBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // ============================================================
    // TUTORIAL MODAL
    // ============================================================
    const tutorialBtn = document.getElementById("tutorialBtn");
    const tutorialModal = document.getElementById("tutorialModal");
    const tutorialClose = document.getElementById("tutorialModalClose");

    const openTutorial = () => {
      if (!tutorialModal) return;
      tutorialModal.classList.add("show");
      document.body.style.overflow = "hidden";
    };

    const closeTutorial = () => {
      if (!tutorialModal) return;
      tutorialModal.classList.remove("show");
      const submitOpen = document.getElementById("submitModal")?.classList.contains("show");
      document.body.style.overflow = submitOpen ? "hidden" : "";
    };

    if (tutorialBtn) tutorialBtn.addEventListener("click", openTutorial);
    if (tutorialClose) tutorialClose.addEventListener("click", closeTutorial);
    if (tutorialModal) {
      tutorialModal.addEventListener("click", (e) => {
        if (e.target === tutorialModal) closeTutorial();
      });
    }

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-open-tutorial]");
      if (trigger) {
        e.preventDefault();
        openTutorial();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (tutorialModal && tutorialModal.classList.contains("show")) {
          closeTutorial();
        }
      }
    });

    // ============================================================
    // SUBMIT HANDLER
    // ============================================================
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

      const dateTimeNow = getFormattedDateTime();

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

        const shirtCheck = validatePreviewLink(shirtLink);
        if (!shirtCheck.valid) {
          showToast("Shirt: " + shirtCheck.reason + " Klik Tutorial untuk panduan.", true);
          return;
        }

        const pantsCheck = validatePreviewLink(pantsLink);
        if (!pantsCheck.valid) {
          showToast("Pants: " + pantsCheck.reason + " Klik Tutorial untuk panduan.", true);
          return;
        }

        // Embed 1: Info
        embeds.push({
          title: "[+] Rekomendasi Uniform Baru",
          description: `Dikirim: ${dateTimeNow}`,
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Gender",   value: buildGenderField(gender), inline: true },
            { name: "Kategori", value: CATEGORY_LABEL[category] || category, inline: true },
            { name: "Rarity",   value: TIER_LABEL[rarity] || rarity, inline: true },
            { name: "Set Name", value: uniformName, inline: false },
            { name: "Shirt ID (klik untuk copy)", value: idCodeBlock(shirtId), inline: false },
            { name: "Pants ID (klik untuk copy)", value: idCodeBlock(pantsId), inline: false }
          ],
          timestamp: new Date().toISOString(),
          footer: { text: `Rarity: ${TIER_LABEL[rarity] || rarity}` }
        });

        // Embed 2: Shirt
        embeds.push({
          title: "[S] Shirt Preview",
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Shirt ID (klik untuk copy)", value: idCodeBlock(shirtId), inline: false },
            { name: "Preview (Copy)", value: linkCodeBlock(shirtLink), inline: false }
          ],
          image: { url: shirtLink },
          footer: { text: `${GENDER_EMOJI[gender] || ""} ${gender.toUpperCase()} · Shirt ID: ${shirtId}` }
        });

        // Embed 3: Pants
        embeds.push({
          title: "[P] Pants Preview",
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Pants ID (klik untuk copy)", value: idCodeBlock(pantsId), inline: false },
            { name: "Preview (Copy)", value: linkCodeBlock(pantsLink), inline: false }
          ],
          image: { url: pantsLink },
          footer: { text: `${GENDER_EMOJI[gender] || ""} ${gender.toUpperCase()} · Pants ID: ${pantsId}` }
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

        const linkCheck = validatePreviewLink(link);
        if (!linkCheck.valid) {
          showToast(linkCheck.reason + " Klik Tutorial untuk panduan.", true);
          return;
        }

        embeds.push({
          title: "[+] Rekomendasi Aksesoris Baru",
          description: `Dikirim: ${dateTimeNow}`,
          color: RARITY_COLOR[rarity] || 0x2ec7ff,
          fields: [
            { name: "Gender",   value: buildGenderField(gender), inline: true },
            { name: "Kategori", value: CATEGORY_LABEL[category] || category, inline: true },
            { name: "Rarity",   value: TIER_LABEL[rarity] || rarity, inline: true },
            { name: "Asset ID (klik untuk copy)", value: idCodeBlock(assetId), inline: false },
            { name: "Preview (Copy)", value: linkCodeBlock(link), inline: false }
          ],
          image: { url: link },
          timestamp: new Date().toISOString(),
          footer: { text: `Rarity: ${TIER_LABEL[rarity] || rarity}` }
        });
      }

      if (note) {
        embeds[0].fields.push({ name: "Catatan", value: note.slice(0, 300), inline: false });
      }

      const payload = { embeds };

      console.log(`[Submit] ${dateTimeNow}`, { gender, category, rarity });

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
          showToast("[OK] Rekomendasi terkirim, terima kasih!");
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

  /* ============================================================
   * SEARCH ENGINE
   * ============================================================ */

  // Helper: cek apakah 1 card cocok
  function cardMatchesQuery(cardEl, query) {
    if (!query) return true;
    const q = query.toLowerCase().trim();
    const text = (cardEl.textContent || "").toLowerCase();
    return text.includes(q);
  }

  // Highlight text dalam elemen
  function highlightText(el, query) {
    if (!query || !el) return;
    const q = query.trim();
    if (!q) return;

    if (!el.dataset.originalHtml) {
      el.dataset.originalHtml = el.innerHTML;
    }
    let html = el.dataset.originalHtml;

    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");

    html = html.replace(/>([^<]+)</g, (match, content) => {
      return ">" + content.replace(regex, '<mark class="search-hl">$1</mark>') + "<";
    });

    el.innerHTML = html;
  }

  function resetHighlight(el) {
    if (el && el.dataset.originalHtml) {
      el.innerHTML = el.dataset.originalHtml;
      delete el.dataset.originalHtml;
    }
  }

  // Filter & highlight semua section & card
  function applySearch(query) {
    const activePanel = document.querySelector(".view-panel.active");
    if (!activePanel) return { total: 0, sections: 0 };

    const sections = activePanel.querySelectorAll(".category-section");
    let totalMatches = 0;
    let sectionMatches = 0;

    sections.forEach(sectionEl => {
      sectionEl.querySelectorAll("[data-original-html]").forEach(el => resetHighlight(el));

      const sectionTitle = sectionEl.querySelector(".category-title")?.textContent || "";
      const sectionSubtitle = sectionEl.querySelector(".category-subtitle")?.textContent || "";
      const sectionText = (sectionTitle + " " + sectionSubtitle).toLowerCase();
      const sectionTitleMatch = query && sectionText.includes(query.toLowerCase());

      const cards = sectionEl.querySelectorAll(".card, .grouped-card");
      let visibleCards = 0;

      cards.forEach(card => {
        card.querySelectorAll("[data-original-html]").forEach(el => resetHighlight(el));

        const matches = cardMatchesQuery(card, query);

        if (matches) {
          card.classList.remove("search-hidden");
          visibleCards++;

          card.querySelectorAll(".chip, .id-text, .set-name-badge, .color-label, .accessory-name").forEach(el => {
            highlightText(el, query);
          });
        } else {
          card.classList.add("search-hidden");
        }
      });

      const sectionVisible = visibleCards > 0 || sectionTitleMatch;

      if (sectionVisible) {
        sectionEl.classList.remove("search-hidden");
        sectionMatches++;
        totalMatches += visibleCards;
      } else {
        sectionEl.classList.add("search-hidden");
      }
    });

    return { total: totalMatches, sections: sectionMatches };
  }

  // Setup search bar events
  function setupSearch() {
    const input = document.getElementById("searchInput");
    const clearBtn = document.getElementById("searchClear");
    const info = document.getElementById("searchInfo");
    const count = document.getElementById("searchCount");

    if (!input) return;

    let searchTimer = null;

    input.addEventListener("input", () => {
      const query = input.value.trim();

      clearBtn.hidden = query.length === 0;

      if (query.length === 0) {
        info.hidden = true;
      }

      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        if (query.length === 0) {
          applySearch("");
          info.hidden = true;
          return;
        }

        const result = applySearch(query);
        info.hidden = false;
        count.textContent = `${result.total} hasil · ${result.sections} kategori`;
      }, 200);
    });

    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearBtn.hidden = true;
      info.hidden = true;
      applySearch("");
      input.focus();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        input.value = "";
        clearBtn.hidden = true;
        info.hidden = true;
        applySearch("");
      }
    });
  }

  /* ---------- Scroll Spy (Level 1 + Level 2) ---------- */
  let scrollSpyObserver = null;

  function setupScrollSpy() {
    const groupNav = document.getElementById("groupNav");
    const catNav = document.getElementById("categoryNav");
    if (!groupNav) return;

    if (scrollSpyObserver) {
      scrollSpyObserver.disconnect();
      scrollSpyObserver = null;
    }

    const activePanel = document.querySelector(".view-panel.active");
    if (!activePanel) return;

    const genderKey = activePanel.dataset.gender;
    const sections = REROLL_DATA[genderKey] || [];

    const groupBlocks = activePanel.querySelectorAll(".group-block");
    const sectionBlocks = activePanel.querySelectorAll(".category-section");

    scrollSpyObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

      if (visible.length === 0) return;

      const topEntry = visible[0];
      const target = topEntry.target;

      if (target.classList.contains("group-block")) {
        const groupId = target.id;
        groupNav.querySelectorAll(".group-nav-btn").forEach(b => {
          b.classList.toggle("active", b.dataset.groupTarget === groupId);
        });

        const groupName = target.dataset.group;
        if (catNav && groupName) {
          const currentlyActive = catNav.querySelector(".category-nav-btn.active");
          const currentGroupRendered = currentlyActive
            ? document.getElementById(currentlyActive.dataset.catTarget)?.dataset.group
            : null;

          if (currentGroupRendered !== groupName) {
            renderCategoryNav(genderKey, sections, groupName);
          }
        }
      } else if (target.classList.contains("category-section")) {
        const sectionId = target.id;
        if (catNav) {
          catNav.querySelectorAll(".category-nav-btn").forEach(b => {
            b.classList.toggle("active", b.dataset.catTarget === sectionId);
          });
        }
      }
    }, {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    });

    groupBlocks.forEach(block => scrollSpyObserver.observe(block));
    sectionBlocks.forEach(block => scrollSpyObserver.observe(block));
  }

  /* ============================================================
   * SCROLL TO TOP BUTTON
   * ============================================================ */
  function setupScrollTopButton() {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;

    const SHOW_THRESHOLD = 400;
    let ticking = false;

    function updateVisibility() {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const shouldShow = scrollY > SHOW_THRESHOLD;

      if (shouldShow) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    }, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });

    updateVisibility();
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

    // Group navigation
    renderGroupNav(genders[0], REROLL_DATA[genders[0]]);

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

        const genderSelect = document.getElementById("submitGender");
        if (genderSelect) genderSelect.value = target;

        if (REROLL_DATA[target]) {
          renderGroupNav(target, REROLL_DATA[target]);
        }

        setupScrollSpy();

        // Reset search saat ganti gender
        const searchInput = document.getElementById("searchInput");
        if (searchInput && searchInput.value) {
          searchInput.value = "";
          const clearBtn = document.getElementById("searchClear");
          const info = document.getElementById("searchInfo");
          if (clearBtn) clearBtn.hidden = true;
          if (info) info.hidden = true;
          applySearch("");
        }
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
    setupScrollSpy();
    setupSearch();
    setupScrollTopButton();
  }

  /* ---------- Bootstrap ---------- */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();