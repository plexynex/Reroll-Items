/* ================================================================
 *  configData.js
 *  Berisi: REROLL_DATA
 *  HARUS di-load SETELAH config.js (karena pakai PLACEHOLDER)
 * ================================================================ */

/* Pastikan PLACEHOLDER sudah ada */
if (typeof window.PLACEHOLDER === "undefined") {
  console.error("[configData.js] PLACEHOLDER belum terdefinisi. Load config.js terlebih dahulu.");
}

const PH = window.PLACEHOLDER || {};

window.REROLL_DATA = {
  male: [
    /* ===== IDENTITY ===== */
    {
      group: "Identity", type: "grouped", id: "lastName",
      title: "Last Name", subtitle: "Nama Belakang", icon: "lastName",
      tiers: {
        common:   { names: ["", "Johnson", "Williams"] },
        uncommon: { names: ["Brown", "Jones", "Garcia"] },
        epic:     { names: ["Miller", "Davis"] },
        legend:   { names: ["Rodriguez", "Martinez"] },
        unknown:  { names: ["Void"] }
      }
    },
    {
      group: "Identity", type: "grouped", id: "role",
      title: "Role", subtitle: "Jurusan / Role", icon: "role",
      tiers: {
        common:   { names: ["", "TPM", "TSM", "TBSM", "TITL", "Bisnis Digital", "Manajemen Perkantoran", "Akuntansi"] },
        uncommon: { names: ["DKV", "TBSM", "TEI", "FARMASI", "Animasi", "Desain Produk", "Teknik Pengelasan"] },
        epic:     { names: ["MEKATRONIKA", "TATA BOGA", "MULTIMEDIA", "Teknik Otomasi Industri", "Teknik Instrumentasi Industri"] },
        legend:   { names: ["PENERBANGAN", "CYBER SECURITY", "Teknik Pesawat Udara", "Teknik Kendaraan Ringan Otomotif", "Teknik Elektronika Daya", "Teknik Rekayasa Perangkat Lunak"] },
        unknown:  { names: ["TEKNOLOGI NANO", "Teknik Kedirgantaraan", "Rekayasa Kecerdasan Artifisial", "Robotika", "Teknologi Pangan", "Bioteknologi"] }
      }
    },

    /* ===== APPEARANCE ===== */
    {
      group: "Appearance", type: "grouped", id: "height",
      title: "Height", subtitle: "Tinggi Badan (cm)", icon: "height",
      tiers: {
        common:   { names: ["130 – 140", "140 – 150"] },
        uncommon: { names: ["150 – 160", "120 – 130"] },
        epic:     { names: ["160 – 170", "110 – 120"] },
        legend:   { names: ["170 – 185", "100 – 110"] },
        unknown:  { names: ["90 – 100", "185 – 220"] }
      }
    },
    {
      group: "Appearance", type: "color", id: "skinColor",
      title: "Skin Color", subtitle: "Warna Kulit (RGB)", icon: "skinColor",
      tiers: {
        common:   { value: "255.204.153" },
        uncommon: { value: "124.78.50" },
        epic:     { value: "120.80.200" },
        legend:   { value: "255.215.0" },
        unknown:  { value: "0.0.0" }
      }
    },
    {
      group: "Appearance", type: "item", id: "hair",
      title: "Hair", subtitle: "Model Rambut", icon: "hair",
      placeholder: "hair",
      items: [
        { rarity: "common",   id: "98528599025378",  image: PH.hair },
        { rarity: "uncommon", id: "135506916870785", image: PH.hair },
        { rarity: "epic",     id: "110619246329276", image: PH.hair },
        { rarity: "unknown",  id: "12",              image: PH.hair }
      ]
    },
    {
      group: "Appearance", type: "color", id: "hairColor",
      title: "Hair Color", subtitle: "Warna Rambut (RGB)", icon: "hairColor",
      tiers: {
        common:   { value: "85.56.102" },
        uncommon: { value: "200.120.80" },
        epic:     { value: "150.80.200" },
        legend:   { value: "255.215.0" },
        unknown:  { value: "255.0.0" }
      }
    },
    {
      group: "Appearance", type: "item", id: "faceType",
      title: "Face Type", subtitle: "Tipe Wajah", icon: "faceType",
      placeholder: "faceType",
      items: [
        { rarity: "common",  id: "110496664617589", image: PH.faceType },
        { rarity: "epic",    id: "188976304927401", image: PH.faceType },
        { rarity: "legend",  id: "186755253423235", image: PH.faceType },
        { rarity: "unknown", id: "273360413038359", image: PH.faceType }
      ]
    },
    {
      group: "Appearance", type: "uniform", id: "uniform",
      title: "Uniform", subtitle: "Shirt + Pants (Satu Set)", icon: "uniform",
      placeholder: { shirt: "shirt", pants: "pants" },
      items: [
        {
          rarity: "common",
          name: "Recruit Set",
          shirt: { id: "16810410386", image: PH.shirt },
          pants: { id: "8854324984",  image: PH.pants }
        }
      ]
    },

    /* ===== ACCESSORIES ===== */
    {
      group: "Accessories", type: "item", id: "headAcc",
      title: "Head Aksesoris", subtitle: "Aksesoris Kepala", icon: "head",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "12092086350", image: PH.accessory },
        { rarity: "uncommon", id: "6001",        image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "faceAcc",
      title: "Face Aksesoris", subtitle: "Aksesoris Wajah", icon: "face",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "17165131496", image: PH.accessory },
        { rarity: "uncommon", id: "1201",        image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "neckAcc",
      title: "Neck Aksesoris", subtitle: "Aksesoris Leher", icon: "neck",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "138149169311809", image: PH.accessory },
        { rarity: "uncommon", id: "2201",            image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "armAcc",
      title: "Arm Aksesoris", subtitle: "Aksesoris Lengan", icon: "arm",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "79870665394807", image: PH.accessory },
        { rarity: "uncommon", id: "3201",           image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "waistAcc",
      title: "Waist Aksesoris", subtitle: "Aksesoris Pinggang", icon: "waist",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "106356059591579", image: PH.accessory },
        { rarity: "uncommon", id: "5201",            image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "backAcc",
      title: "Back Aksesoris", subtitle: "Aksesoris Punggung", icon: "back",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "103486592724790", image: PH.accessory },
        { rarity: "uncommon", id: "4201",            image: PH.accessory }
      ]
    }
  ],

  female: [
    /* ===== IDENTITY ===== */
    {
      group: "Identity", type: "grouped", id: "lastName",
      title: "Last Name", subtitle: "Nama Belakang", icon: "lastName",
      tiers: {
        common:   { names: ["Smith", "son", "Williams"] },
        uncommon: { names: ["Taylor", "Anderson", "Thomas"] },
        epic:     { names: ["Jackson", "White"] },
        legend:   { names: ["Harris", "Martin"] },
        unknown:  { names: ["Nyx"] }
      }
    },
    {
      group: "Identity", type: "grouped", id: "role",
      title: "Role", subtitle: "Jurusan / Role", icon: "role",
      tiers: {
        common:   { names: ["", "TPM", "TSM", "TBSM", "TITL", "Bisnis Digital", "Manajemen Perkantoran", "Akuntansi"] },
        uncommon: { names: ["DKV", "TBSM", "TEI", "FARMASI", "Animasi", "Desain Produk", "Teknik Pengelasan"] },
        epic:     { names: ["MEKATRONIKA", "TATA BOGA", "MULTIMEDIA", "Teknik Otomasi Industri", "Teknik Instrumentasi Industri"] },
        legend:   { names: ["PENERBANGAN", "CYBER SECURITY", "Teknik Pesawat Udara", "Teknik Kendaraan Ringan Otomotif", "Teknik Elektronika Daya", "Teknik Rekayasa Perangkat Lunak"] },
        unknown:  { names: ["TEKNOLOGI NANO", "Teknik Kedirgantaraan", "Rekayasa Kecerdasan Artifisial", "Robotika", "Teknologi Pangan", "Bioteknologi"] }
      }
    },

    /* ===== APPEARANCE ===== */
    {
      group: "Appearance", type: "grouped", id: "height",
      title: "Height", subtitle: "Tinggi Badan (cm)", icon: "height",
      tiers: {
        common:   { names: ["130 – 140", "140 – 150"] },
        uncommon: { names: ["150 – 160", "120 – 130"] },
        epic:     { names: ["160 – 170", "110 – 120"] },
        legend:   { names: ["170 – 185", "100 – 110"] },
        unknown:  { names: ["90 – 100", "185 – 220"] }
      }
    },
    {
      group: "Appearance", type: "color", id: "skinColor",
      title: "Skin Color", subtitle: "Warna Kulit (RGB)", icon: "skinColor",
      tiers: {
        common:   { value: "255.204.153" },
        uncommon: { value: "124.78.50" },
        epic:     { value: "120.80.200" },
        legend:   { value: "255.215.0" },
        unknown:  { value: "0.255.255" }
      }
    },
    {
      group: "Appearance", type: "item", id: "hair",
      title: "Hair", subtitle: "Model Rambut", icon: "hair",
      placeholder: "hair",
      items: [
        { rarity: "common",   id: "0",              image: PH.hair },
        { rarity: "uncommon", id: "15219402962",    image: PH.hair },
        { rarity: "epic",     id: "128817841068722",image: PH.hair },
        { rarity: "unknown",  id: "25",             image: PH.hair }
      ]
    },
    {
      group: "Appearance", type: "color", id: "hairColor",
      title: "Hair Color", subtitle: "Warna Rambut (RGB)", icon: "hairColor",
      tiers: {
        common:   { value: "85.56.102" },
        uncommon: { value: "200.120.80" },
        epic:     { value: "150.80.200" },
        legend:   { value: "255.215.0" },
        unknown:  { value: "255.0.0" }
      }
    },
    {
      group: "Appearance", type: "item", id: "faceType",
      title: "Face Type", subtitle: "Tipe Wajah", icon: "faceType",
      placeholder: "faceType",
      items: [
        { rarity: "common",  id: "157757222154606", image: "https://tr.rbxcdn.com/180DAY-06ac539eca677ade575ef1e9284a0a60/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",    id: "258523744380054", image: "https://tr.rbxcdn.com/180DAY-06ac539eca677ade575ef1e9284a0a60/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",  id: "132921897850212", image: "https://tr.rbxcdn.com/180DAY-06ac539eca677ade575ef1e9284a0a60/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown", id: "273360413038359", image: "https://tr.rbxcdn.com/180DAY-06ac539eca677ade575ef1e9284a0a60/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown", id: "273360413038369", image: "https://tr.rbxcdn.com/180DAY-06ac539eca677ade575ef1e9284a0a60/420/420/HairAccessory/Webp/noFilter" }
      ]
    },
    {
      group: "Appearance", type: "uniform", id: "uniform",
      title: "Uniform", subtitle: "Shirt + Pants (Satu Set)", icon: "uniform",
      placeholder: { shirt: "shirt", pants: "pants" },
      items: [
        {
          rarity: "common",
          name: "Scout Set",
          shirt: { id: "1006", image: PH.shirt },
          pants: { id: "2006", image: PH.pants }
        }
      ]
    },

    /* ===== ACCESSORIES ===== */
    {
      group: "Accessories", type: "item", id: "headAcc",
      title: "Head Aksesoris", subtitle: "Aksesoris Kepala", icon: "head",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "12092086350", image: PH.accessory },
        { rarity: "uncommon", id: "6002",        image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "faceAcc",
      title: "Face Aksesoris", subtitle: "Aksesoris Wajah", icon: "face",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "17165131496", image: PH.accessory },
        { rarity: "uncommon", id: "1202",        image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "neckAcc",
      title: "Neck Aksesoris", subtitle: "Aksesoris Leher", icon: "neck",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "138149169311809", image: PH.accessory },
        { rarity: "uncommon", id: "2202",            image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "armAcc",
      title: "Arm Aksesoris", subtitle: "Aksesoris Lengan", icon: "arm",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "79870665394807", image: PH.accessory },
        { rarity: "uncommon", id: "3202",           image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "waistAcc",
      title: "Waist Aksesoris", subtitle: "Aksesoris Pinggang", icon: "waist",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "5103", image: PH.accessory },
        { rarity: "uncommon", id: "5202", image: PH.accessory }
      ]
    },
    {
      group: "Accessories", type: "item", id: "backAcc",
      title: "Back Aksesoris", subtitle: "Aksesoris Punggung", icon: "back",
      placeholder: "accessory",
      items: [
        { rarity: "common",   id: "103486592724790", image: PH.accessory },
        { rarity: "uncommon", id: "4202",            image: PH.accessory }
      ]
    }
  ]
};