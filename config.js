/* ================================================================
 *  config.js
 *  Berisi: ICONS, PLACEHOLDER, INFO_CONFIG
 *  HARUS di-load PERTAMA sebelum configData.js
 * ================================================================ */

/* ---------- ICON SVG ---------- */
window.ICONS = {
  lastName: '<svg viewBox="0 0 24 24"><path d="M4 6h16"/><path d="M4 12h10"/><path d="M4 18h13"/></svg>',
  role: '<svg viewBox="0 0 24 24"><path d="M12 3l3 6 6 1-4.5 4.5L18 21l-6-3-6 3 1.5-6.5L3 10l6-1z"/></svg>',
  height: '<svg viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M8 6l4-3 4 3"/><path d="M8 18l4 3 4-3"/></svg>',
  skinColor: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>',
  hair: '<svg viewBox="0 0 24 24"><path d="M4 20c0-6 3-10 8-10s8 4 8 10"/><path d="M8 8c0-3 2-5 4-5s4 2 4 5"/></svg>',
  hairColor: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/></svg>',
  faceType: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M9 15c1 1 5 1 6 0"/></svg>',
  uniform: '<svg viewBox="0 0 24 24"><path d="M6 4h12l2 5-3 1v10H7V10L4 9z"/></svg>',
  head: '<svg viewBox="0 0 24 24"><path d="M4 15h16"/><path d="M6 15V9a6 6 0 0 1 12 0v6"/></svg>',
  face: '<svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="6" rx="3"/><circle cx="8" cy="12" r="1.5"/><circle cx="16" cy="12" r="1.5"/></svg>',
  neck: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M12 11v9"/><path d="M9 18h6"/></svg>',
  arm: '<svg viewBox="0 0 24 24"><path d="M6 20V8a4 4 0 0 1 8 0v12"/><path d="M4 8h12"/></svg>',
  waist: '<svg viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="4" rx="2"/><rect x="10" y="8" width="4" height="8" rx="1"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M8 6h8l2 12H6z"/><path d="M12 6v12"/></svg>'
};

/* ---------- PLACEHOLDER GAMBAR (default fallback) ---------- */
window.PLACEHOLDER = {
  hair:     "https://tr.rbxcdn.com/180DAY-06ac539eca677ade575ef1e9284a0a60/420/420/HairAccessory/Webp/noFilter",
  faceType: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-47D19402F5B1252E83EFE407A1258A0A-Png/420/420/DynamicHeadCostume/Webp/noFilter",
  shirt:    "https://tr.rbxcdn.com/180DAY-3fcb9bf770d8d64b3a2ab6ed1213f8c0/420/420/Shirt/Webp/noFilter",
  pants:    "https://tr.rbxcdn.com/180DAY-548d1973a051f1b357d6df96963b6f4f/420/420/Pants/Webp/noFilter",
  accessory:"https://tr.rbxcdn.com/180DAY-64532153db44c1783a8055d65f8ad1f9/420/420/FaceAccessory/Webp/noFilter"
};

/* ---------- INFO MODAL ---------- */
window.INFO_CONFIG = {
  title: "Info Update",
  columns: [
    {
      key: "male",
      title: "Male",
      icon: '<svg viewBox="0 0 24 24"><circle cx="10" cy="14" r="5"/><path d="M19 5l-5.4 5.4"/><path d="M14 5h5v5"/></svg>',
      new: "no",
      text: `Update terbaru untuk Male:
• Menambahkan beberapa item baru di slot Hair dan Head Accessory.
• Menyesuaikan rarity beberapa item agar lebih seimbang.
• Memperbaiki bug pada preview Face Type.
• Menambahkan variasi warna untuk Skin Color tier Legend.
Silakan cek kembali daftar item di atas untuk melihat perubahan.`
    },
    {
      key: "female",
      title: "Female",
      icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M12 14v7"/><path d="M9 18h6"/></svg>',
      new: "no",
      text: `Update terbaru untuk Female:
• Menambahkan set Uniform baru dengan rarity Epic.
• Memperbarui gambar preview untuk beberapa Hair Accessory.
• Menambahkan item Face Type tier Legend.
• Menyesuaikan warna Skin Color agar lebih natural.
Perubahan berlaku otomatis setelah halaman di-refresh.`
    }
  ]
};