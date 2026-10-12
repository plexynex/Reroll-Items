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
    common: {
      values: [
        { value: "255.239.219", label: "" }, // Porcelain - Pucat / Sangat Cerah
        { value: "255.224.196", label: "" }, // Ivory - Gading
        { value: "250.218.186", label: "" }, // Alabaster - Porselen
        { value: "241.194.125", label: "" }, // Fair - Cerah
        { value: "247.203.151", label: "" }, // Peach - Persik
        { value: "255.204.153", label: "" }, // Light - Terang
        { value: "235.190.144", label: "" }, // Beige - Krem
        { value: "224.172.105", label: "" }, // Medium - Sedang
        { value: "222.184.135", label: "" }, // Honey - Madu
        { value: "213.161.116", label: "" }, // Sand - Pasir
        { value: "198.134.66",  label: "" }, // Olive - Zaitun
        { value: "196.142.90",  label: "" }, // Tan - Sawo Matang
        { value: "184.129.91",  label: "" }, // Caramel - Karamel
        { value: "168.112.74",  label: "" }, // Bronze - Perunggu
        { value: "141.85.36",   label: "" }, // Brown - Coklat
        { value: "130.84.54",   label: "" }, // Chestnut - Coklat Kemerah
        { value: "101.67.33",   label: "" }, // Dark Brown - Coklat Tua
        { value: "78.53.32",    label: "" }, // Cocoa - Kakao
        { value: "61.40.23",    label: "" }, // Ebony - Gelap
        { value: "43.29.18",    label: "" }, // Deep - Sangat Gelap
        { value: "31.21.14",    label: "" }, // Espresso - Paling Gelap
        { value: "22.15.10",    label: "" }  // Obsidian - Hitam Pekat
      ]
    }
  }
},
    {
      group: "Appearance", type: "item", id: "hair",
      title: "Hair", subtitle: "Model Rambut", icon: "hair",
      placeholder: "hair",
      items: [
        { rarity: "common",   id: "15563758601",  image: "https://tr.rbxcdn.com/180DAY-b68bc0b38d16708254f4dc73fe1ae021/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "89621163621787",  image: "https://tr.rbxcdn.com/180DAY-903ed2d49ba90891aad46c65af9bb3a9/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "107271393538671",  image: "https://tr.rbxcdn.com/180DAY-64ae0a0b3c3c86dbc6237bb321b0d29d/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "16570602756",  image: "https://tr.rbxcdn.com/180DAY-37dac367cbdbbc4c2d19d43415af4aba/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "105101736126764",  image: "https://tr.rbxcdn.com/180DAY-2b38795681f5b821f9fe16c04912d1e6/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "76105119216006",  image: "https://tr.rbxcdn.com/180DAY-7042cb2d551d1c5ffee71d4ecbb13d39/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "114499831108202",  image: "https://tr.rbxcdn.com/180DAY-8f173ad50498bf89984ca175db4ad8f3/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "135506916870785",  image: "https://tr.rbxcdn.com/180DAY-2cdaf572adc6b9296fac49099680cb45/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "epic", id: "13433250227", image: "https://tr.rbxcdn.com/180DAY-4cf12a193413c791dc81d1944cc1a678/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic", id: "93604871172898", image: "https://tr.rbxcdn.com/180DAY-715ce17432db06ff5afd2928c29adbfb/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic", id: "137845197037280", image: "https://tr.rbxcdn.com/180DAY-5a55a7a7f454c87e922d3f6beeefa5cf/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic", id: "13935245386", image: "https://tr.rbxcdn.com/180DAY-61345cb12320ca0e44d7ff9ffa9e404e/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic", id: "81925899554541", image: "https://tr.rbxcdn.com/180DAY-03f67b5e86364d8e8defde592e2940fa/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic", id: "75270474148686", image: "https://tr.rbxcdn.com/180DAY-e0989480bce7fd166f84142209ac1cfd/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "legend",  id: "116773763268018", image: "https://tr.rbxcdn.com/180DAY-3058f61a895766f551713f791f08a5a9/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",  id: "97042702952729", image: "https://tr.rbxcdn.com/180DAY-a8838aa3c1b07ecbb554b213151b45c2/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",  id: "122489049429835", image: "https://tr.rbxcdn.com/180DAY-602a69490f11084a8f75df2f2e836309/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",  id: "89956792470838", image: "https://tr.rbxcdn.com/180DAY-548be7ecf39d1ae31b27be14fdff9e8c/420/420/HairAccessory/Webp/noFilter" },
        
        { rarity: "unknown",  id: "107130020643137", image: "https://tr.rbxcdn.com/180DAY-ecc4b8916cd6ac096faedffb1c125afd/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown",  id: "120448962369730", image: "https://tr.rbxcdn.com/180DAY-c908148f0cf3bcb487510486a2fcf11b/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown",  id: "110776323179739", image: "https://tr.rbxcdn.com/180DAY-1184fb78704dce069df60a74387fe5ea/420/420/HairAccessory/Webp/noFilter" },
      ]
    },
  {
  group: "Appearance", type: "color", id: "hairColor",
  title: "Hair Color", subtitle: "Warna Rambut (RGB)", icon: "hairColor",
  tiers: {
    common: {
      values: [
        // ZONA: 0 – 16 (Hitam Total)
        { value: "0.0.0"     }, // Hitam Murni
        { value: "2.2.2"     }, // Hitam Sangat Legam
        { value: "4.3.3"     }, // Hitam Legam
        { value: "5.4.4"     }, // Hitam Pekat
        { value: "7.5.4"     }, // Hitam Pekat Kecoklatan
        { value: "8.6.5"     }, // Hitam Kecoklatan
        { value: "9.7.6"     }, // Hitam Coklat
        { value: "10.8.10"   }, // Hitam Keunguan
        { value: "9.9.12"    }, // Hitam Kebiruan
        { value: "8.12.10"   }, // Hitam Kehijauan
        { value: "11.9.7"    }, // Hitam Netral
        { value: "12.10.14"  }, // Hitam Plum
        { value: "11.11.8"   }, // Hitam Zaitun
        { value: "15.8.11"   }, // Hitam Marun
        { value: "10.11.15"  }, // Hitam Navy
        { value: "15.11.16"  }, // Hitam Ungu Tua
        { value: "16.13.8"   }, // Hitam Karamel Gelap
        { value: "15.16.15"  }, // Hitam Hijau Abu
        { value: "13.15.19"  }, // Hitam Abu Kebiruan
        { value: "16.14.18"  }, // Hitam Keunguan Terang
        { value: "9.13.17"   }, // Hitam Cyan Tua
        { value: "16.9.13"   }, // Hitam Magenta Tua
        { value: "13.16.9"   }, // Hitam Olive Tua
        { value: "15.9.17"   }, // Hitam Violet Tua
        { value: "10.16.16"  }, // Hitam Teal Tua
        { value: "16.10.10"  }, // Hitam Crimson Tua
      ]
    },
    uncommon: {
      values: [
        // ZONA: 28 – 46 (Gelap / Coklat Sangat Tua)
        { value: "28.20.15"  }, // Coklat Sangat Tua
        { value: "30.19.17"  }, // Coklat Kemerahan Tua
        { value: "32.23.17"  }, // Coklat Hangat Tua
        { value: "32.28.22"  }, // Coklat Zaitun Tua
        { value: "34.25.28"  }, // Ungu Marun Tua
        { value: "28.34.31"  }, // Hijau Abu Tua
        { value: "28.32.42"  }, // Biru Kelabu Tua
        { value: "36.24.26"  }, // Coklat Keunguan Tua
        { value: "36.38.43"  }, // Biru Abu Tua
        { value: "38.26.19"  }, // Coklat Sedang Tua
        { value: "38.32.38"  }, // Mauve Tua
        { value: "36.30.42"  }, // Ungu Abu Tua
        { value: "40.28.21"  }, // Coklat Madu Tua
        { value: "40.38.28"  }, // Khaki Tua
        { value: "44.32.23"  }, // Coklat Hangat Tua
        { value: "46.25.25"  }, // Merah Bata Tua
        { value: "28.42.44"  }, // Teal Tua
        { value: "42.28.44"  }, // Violet Tua
        { value: "44.42.28"  }, // Olive Tua
        { value: "32.42.28"  }, // Hijau Lumut Tua
        { value: "44.28.32"  }, // Magenta Tua
        { value: "28.38.42"  }, // Biru Petrol Tua
        { value: "42.34.28"  }, // Coklat Tanah Tua
        { value: "38.42.44"  }, // Abu Steel Tua
      ]
    },
    epic: {
      values: [
        // ZONA: 58 – 92 (Sedang Gelap / Warna Mulai Terlihat)
        { value: "58.38.63"   }, // Plum Gelap
        { value: "63.28.34"   }, // Merah Marun Gelap
        { value: "63.74.96"   }, // Biru Periwinkle Gelap
        { value: "68.44.90"   }, // Ungu Lavender Gelap
        { value: "68.78.50"   }, // Hijau Pisang Gelap
        { value: "73.23.28"   }, // Merah Anggur Gelap
        { value: "73.56.96"   }, // Ungu Lavender Sedang
        { value: "78.50.34"   }, // Coklat Karamel Gelap
        { value: "78.56.78"   }, // Ungu Mauve Sedang
        { value: "84.38.50"   }, // Merah Rose Gelap
        { value: "84.68.38"   }, // Coklat Keemasan Gelap
        { value: "90.50.68"   }, // Pink Marun Sedang
        { value: "92.62.50"   }, // Oranye Gelap
        { value: "58.88.90"   }, // Teal Sedang
        { value: "86.58.90"   }, // Violet Sedang
        { value: "90.86.58"   }, // Olive Sedang
        { value: "66.86.58"   }, // Hijau Lumut Sedang
        { value: "90.58.66"   }, // Magenta Sedang
        { value: "58.78.86"   }, // Biru Petrol Sedang
        { value: "86.70.58"   }, // Coklat Tanah Sedang
        { value: "78.86.90"   }, // Abu Steel Sedang
        { value: "58.90.78"   }, // Hijau Mint Sedang
        { value: "90.58.58"   }, // Merah Coral Sedang
      ]
    },
    unknown: {
      values: [
        // ZONA: 200 – 255 (Sangat Cerah / Neon)
        { value: "255.0.0"    }, // Merah Menyala
        { value: "255.80.180" }, // Pink Neon
        { value: "0.255.200"  }, // Cyan Neon
        { value: "255.215.0"  }, // Emas
        { value: "255.150.50" }, // Oranye Cerah
        { value: "180.100.255"}, // Ungu Neon
        { value: "100.255.100"}, // Hijau Neon
        { value: "255.255.255"}, // Putih Murni
        { value: "0.150.255"  }, // Biru Neon
        { value: "255.0.255"  }, // Magenta Neon
        { value: "255.255.0"  }, // Kuning Neon
        { value: "0.255.255"  }, // Aqua Neon
      ]
    }
  }
},
    {
      group: "Appearance", type: "item", id: "faceType",
      title: "Face Type", subtitle: "Tipe Wajah", icon: "faceType",
      placeholder: "faceType",
      items: [
        { rarity: "common",  id: "11583760760100", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-5B83C43DD130A097A20C1F6C57137362-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "256851429792313", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-8E00D9245E8E744C25A8C8C1BC2CA928-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "22725999359559", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F37AC947AC601872861D3666D114D30B-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "44020313085826", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-10A0373E801D15CEE0F985388E692BC7-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "95784339890657", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-150598BA9DB28260F125B9648C296724-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "161241879657544", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-38FEC40A80C2118C575176638113F013-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "53224926960513", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F95790BE952B578BF732CD054505A6EF-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "268965847271848", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F327962A4DD82E743EE7FE3B17DBA206-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "185212294670299", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-185697E546568F915D619D55AE987730-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "", image: "" },
        { rarity: "common",  id: "265754584674801", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-19ED28E3C43E156E3386C79105F13E92-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "112514393458701", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-169723185E27C3D24DCD665713AA559E-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        
        { rarity: "uncommon",    id: "252076912784258", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-2DD389D5EB783EA38129BB646A0BAB94-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "130870535373154", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-6644804CDF6F047B300C8F10B5551350-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "51375453653771", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-6EC939909A31160C9CBAECB8401C35A4-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "57473199482519", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-25498302B3A4AE06D3C0FED0FDBA5E71-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "42126527656696", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-D7A1B847FE7FB7E97B0B9B7722135697-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "272802185373502", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-EDDF454F52DBFCD9488D58CB90ECAFB5-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "109048364396406", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-EA349816283237C5839CD0C2F3B1ECC7-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "656605033099", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-9903E5BDEE2D29030CE433DF7364BC64-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "57473199482519", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-25498302B3A4AE06D3C0FED0FDBA5E71-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "138559000258933", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-50DC3A61B838C200EEDB597179E3EA87-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "180754292842746", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-67B03A107B6EE0CA955A0E1B90E3B212-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "111801399183993", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-B92BFE0D196157C132D43AC65B15E780-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "166992521532318", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-64550B2E8695AD2D71F04353A05A27DD-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "37142964334427", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-273D1AB5FCBE4803CD83F71C687FC0CC-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon",    id: "", image: "" },
        { rarity: "uncommon",    id: "", image: "" },
        
        { rarity: "epic",    id: "81849591245674", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-2CB66B859FA0790EE2E715E913CF7267-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "27642975705960", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-6E2E8FD9F9B8865AE321C1270348117F-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "67601148648881", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-AEFE5E1497BBF81D4224E315A9EB3F29-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "274925626722860", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-3B64EA3E0D890D90AE540FD70B0773D0-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "118566448176438", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-08A81160927F2D84A88AC87B2CC06315-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "178619723024675", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-B20B1D6FEDB0B5CA21ED733FD58C4397-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "", image: "" },
        { rarity: "epic",    id: "133986397440473", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-A8C5C03AE10FEAF7285014C745BEDB0B-Png/420/420/DynamicHeadCostume/Webp/noFilter" },

        { rarity: "legend",  id: "197838314204572", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-90D401A8BA03FA7789ED32498545B400-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "legend",  id: "186755253423235", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-E372C959BC0AD86530CA6C53FA185C43-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "legend",  id: "109998699381967", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F56576B0BF2237BB2E35E13292161D85-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "legend",  id: "61333727917164", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-0AEF7AF207A131CBB0001B6814722B70-Png/420/420/DynamicHeadCostume/Webp/noFilter" },

        { rarity: "unknown", id: "151823904142846", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-86A2669651457BC3C0B389C31ECDE9F9-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "unknown", id: "246537082958947", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-8F892B9B2159170056FE05B5F08F0F4B-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "unknown", id: "159093635943509", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-36EB199674C373005E70C70A05500EFE-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "unknown", id: "202798311707123", image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-3B2AADF8CE77998B7E4E3C5789359AE7-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
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
        },
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
    common: {
      values: [
        { value: "255.239.219", label: "" }, // Porcelain - Pucat / Sangat Cerah
        { value: "255.224.196", label: "" }, // Ivory - Gading
        { value: "250.218.186", label: "" }, // Alabaster - Porselen
        { value: "241.194.125", label: "" }, // Fair - Cerah
        { value: "247.203.151", label: "" }, // Peach - Persik
        { value: "255.204.153", label: "" }, // Light - Terang
        { value: "235.190.144", label: "" }, // Beige - Krem
        { value: "224.172.105", label: "" }, // Medium - Sedang
        { value: "222.184.135", label: "" }, // Honey - Madu
        { value: "213.161.116", label: "" }, // Sand - Pasir
        { value: "198.134.66",  label: "" }, // Olive - Zaitun
        { value: "196.142.90",  label: "" }, // Tan - Sawo Matang
        { value: "184.129.91",  label: "" }, // Caramel - Karamel
        { value: "168.112.74",  label: "" }, // Bronze - Perunggu
        { value: "141.85.36",   label: "" }, // Brown - Coklat
        { value: "130.84.54",   label: "" }, // Chestnut - Coklat Kemerah
        { value: "101.67.33",   label: "" }, // Dark Brown - Coklat Tua
        { value: "78.53.32",    label: "" }, // Cocoa - Kakao
        { value: "61.40.23",    label: "" }, // Ebony - Gelap
        { value: "43.29.18",    label: "" }, // Deep - Sangat Gelap
        { value: "31.21.14",    label: "" }, // Espresso - Paling Gelap
        { value: "22.15.10",    label: "" }  // Obsidian - Hitam Pekat
      ]
    }
  }
},
    {
      group: "Appearance", type: "item", id: "hair",
      title: "Hair", subtitle: "Model Rambut", icon: "hair",
      placeholder: "hair",
      items: [
        { rarity: "common", id: "87784309291727", image: "https://tr.rbxcdn.com/180DAY-ef14ebca6cb6a00506e4b064105f8b6d/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common", id: "", image: "" },
        { rarity: "common", id: "135382873245833", image: "https://tr.rbxcdn.com/180DAY-4acf97654ee952482ef2b6d20ee60722/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common", id: "97649363988041", image: "https://tr.rbxcdn.com/180DAY-9a51e905bb71638e190f83b1529e4be4/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common", id: "104776877071943", image: "https://tr.rbxcdn.com/180DAY-2f2c3ab2fd5df29ee1eb89f95381f0b4/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common", id: "112554809329810", image: "https://tr.rbxcdn.com/180DAY-37ddfca48d297c688271cceefae7b5a6/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common", id: "95425888449823", image: "https://tr.rbxcdn.com/180DAY-64bb109f6716f7b44ef0dca606075cc8/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common", id: "98501800045993", image: "https://tr.rbxcdn.com/180DAY-8f081c56e08ea89087a4cb1710dd98a9/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "epic",   id: "114611379142505", image: "https://tr.rbxcdn.com/180DAY-969481a0a992364fba185f9247dd48e3/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",   id: "140614902520941", image: "https://tr.rbxcdn.com/180DAY-2a926d1c48a1fe514d531fd576fd8cca/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",   id: "84326145159482", image: "https://tr.rbxcdn.com/180DAY-167316fd6c0ef910193080420120b87b/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",   id: "120761274498723", image: "https://tr.rbxcdn.com/180DAY-b83773c4cfa7f82723558a6d58286206/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",   id: "94225724558831", image: "https://tr.rbxcdn.com/180DAY-c2746ec2bf858e53dcc7825fce3ce1b4/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",   id: "17332551736", image: "https://tr.rbxcdn.com/180DAY-83ae00c5765a9eaca7a46e020e7a6367/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "legend", id: "94135626453568", image: "https://tr.rbxcdn.com/180DAY-89b679ca0ce32e621f58e3af9ce01f61/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend", id: "135994124276740", image: "https://tr.rbxcdn.com/180DAY-4559011b24fe4c06b44d17a2551d5c57/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend", id: "17106647465", image: "https://tr.rbxcdn.com/180DAY-eace72d77c0f859c05f0eab4442321b0/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend", id: "88118574638792", image: "https://tr.rbxcdn.com/180DAY-86ea15bc085a704b404898a8c6858d30/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "unknown",id: "131080731142073", image: "https://tr.rbxcdn.com/180DAY-c7813d0fd201ea2efb14fd41747442af/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown",id: "96548342486704", image: "https://tr.rbxcdn.com/180DAY-70807d7dda248ec3ad9a90fc80d50e52/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown",id: "82697008499457", image: "https://tr.rbxcdn.com/180DAY-dc78ef7c55597549d5b928e25e295416/420/420/HairAccessory/Webp/noFilter" },
      ]
    },
{
  group: "Appearance", type: "color", id: "hairColor",
  title: "Hair Color", subtitle: "Warna Rambut (RGB)", icon: "hairColor",
  tiers: {
    common: {
      values: [
        // ZONA: 0 – 16 (Hitam Total)
        { value: "0.0.0"     }, // Hitam Murni
        { value: "2.2.2"     }, // Hitam Sangat Legam
        { value: "4.3.3"     }, // Hitam Legam
        { value: "5.4.4"     }, // Hitam Pekat
        { value: "7.5.4"     }, // Hitam Pekat Kecoklatan
        { value: "8.6.5"     }, // Hitam Kecoklatan
        { value: "9.7.6"     }, // Hitam Coklat
        { value: "10.8.10"   }, // Hitam Keunguan
        { value: "9.9.12"    }, // Hitam Kebiruan
        { value: "8.12.10"   }, // Hitam Kehijauan
        { value: "11.9.7"    }, // Hitam Netral
        { value: "12.10.14"  }, // Hitam Plum
        { value: "11.11.8"   }, // Hitam Zaitun
        { value: "15.8.11"   }, // Hitam Marun
        { value: "10.11.15"  }, // Hitam Navy
        { value: "15.11.16"  }, // Hitam Ungu Tua
        { value: "16.13.8"   }, // Hitam Karamel Gelap
        { value: "15.16.15"  }, // Hitam Hijau Abu
        { value: "13.15.19"  }, // Hitam Abu Kebiruan
        { value: "16.14.18"  }, // Hitam Keunguan Terang
        { value: "9.13.17"   }, // Hitam Cyan Tua
        { value: "16.9.13"   }, // Hitam Magenta Tua
        { value: "13.16.9"   }, // Hitam Olive Tua
        { value: "15.9.17"   }, // Hitam Violet Tua
        { value: "10.16.16"  }, // Hitam Teal Tua
        { value: "16.10.10"  }, // Hitam Crimson Tua
      ]
    },
    uncommon: {
      values: [
        // ZONA: 28 – 46 (Gelap / Coklat Sangat Tua)
        { value: "28.20.15"  }, // Coklat Sangat Tua
        { value: "30.19.17"  }, // Coklat Kemerahan Tua
        { value: "32.23.17"  }, // Coklat Hangat Tua
        { value: "32.28.22"  }, // Coklat Zaitun Tua
        { value: "34.25.28"  }, // Ungu Marun Tua
        { value: "28.34.31"  }, // Hijau Abu Tua
        { value: "28.32.42"  }, // Biru Kelabu Tua
        { value: "36.24.26"  }, // Coklat Keunguan Tua
        { value: "36.38.43"  }, // Biru Abu Tua
        { value: "38.26.19"  }, // Coklat Sedang Tua
        { value: "38.32.38"  }, // Mauve Tua
        { value: "36.30.42"  }, // Ungu Abu Tua
        { value: "40.28.21"  }, // Coklat Madu Tua
        { value: "40.38.28"  }, // Khaki Tua
        { value: "44.32.23"  }, // Coklat Hangat Tua
        { value: "46.25.25"  }, // Merah Bata Tua
        { value: "28.42.44"  }, // Teal Tua
        { value: "42.28.44"  }, // Violet Tua
        { value: "44.42.28"  }, // Olive Tua
        { value: "32.42.28"  }, // Hijau Lumut Tua
        { value: "44.28.32"  }, // Magenta Tua
        { value: "28.38.42"  }, // Biru Petrol Tua
        { value: "42.34.28"  }, // Coklat Tanah Tua
        { value: "38.42.44"  }, // Abu Steel Tua
      ]
    },
    epic: {
      values: [
        // ZONA: 58 – 92 (Sedang Gelap / Warna Mulai Terlihat)
        { value: "58.38.63"   }, // Plum Gelap
        { value: "63.28.34"   }, // Merah Marun Gelap
        { value: "63.74.96"   }, // Biru Periwinkle Gelap
        { value: "68.44.90"   }, // Ungu Lavender Gelap
        { value: "68.78.50"   }, // Hijau Pisang Gelap
        { value: "73.23.28"   }, // Merah Anggur Gelap
        { value: "73.56.96"   }, // Ungu Lavender Sedang
        { value: "78.50.34"   }, // Coklat Karamel Gelap
        { value: "78.56.78"   }, // Ungu Mauve Sedang
        { value: "84.38.50"   }, // Merah Rose Gelap
        { value: "84.68.38"   }, // Coklat Keemasan Gelap
        { value: "90.50.68"   }, // Pink Marun Sedang
        { value: "92.62.50"   }, // Oranye Gelap
        { value: "58.88.90"   }, // Teal Sedang
        { value: "86.58.90"   }, // Violet Sedang
        { value: "90.86.58"   }, // Olive Sedang
        { value: "66.86.58"   }, // Hijau Lumut Sedang
        { value: "90.58.66"   }, // Magenta Sedang
        { value: "58.78.86"   }, // Biru Petrol Sedang
        { value: "86.70.58"   }, // Coklat Tanah Sedang
        { value: "78.86.90"   }, // Abu Steel Sedang
        { value: "58.90.78"   }, // Hijau Mint Sedang
        { value: "90.58.58"   }, // Merah Coral Sedang
      ]
    },
    unknown: {
      values: [
        // ZONA: 200 – 255 (Sangat Cerah / Neon)
        { value: "255.0.0"    }, // Merah Menyala
        { value: "255.80.180" }, // Pink Neon
        { value: "0.255.200"  }, // Cyan Neon
        { value: "255.215.0"  }, // Emas
        { value: "255.150.50" }, // Oranye Cerah
        { value: "180.100.255"}, // Ungu Neon
        { value: "100.255.100"}, // Hijau Neon
        { value: "255.255.255"}, // Putih Murni
        { value: "0.150.255"  }, // Biru Neon
        { value: "255.0.255"  }, // Magenta Neon
        { value: "255.255.0"  }, // Kuning Neon
        { value: "0.255.255"  }, // Aqua Neon
      ]
    }
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