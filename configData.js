/* ================================================================
 *  configData.js
 *  Berisi: REROLL_DATA
 *  HARUS di-load SETELAH config.js (karena pakai PLACEHOLDER)
 * ================================================================ */

if (typeof window.PLACEHOLDER === "undefined") {
  console.error("[configData.js] PLACEHOLDER belum terdefinisi. Load config.js terlebih dahulu.");
}

const PH = window.PLACEHOLDER || {};

/* ================================================================
 *  SHARED DATA
 *  Data yang sama untuk male & female.
 *  Edit di sini → otomatis berubah di kedua gender.
 * ================================================================ */
const SHARED = {

/* ---------- LAST NAME ---------- */
lastName: {
  group: "Identity", type: "grouped", id: "lastName",
  title: "Last Name", subtitle: "Nama Belakang", icon: "lastName",
  tiers: {
    common: {
      names: [
        // ========== NARUTO ==========
        "Uchiha", "Hyuga", "Uzumaki", "Hatake", "Senju",
        "Nara", "Yamanaka", "Akimichi", "Inuzuka", "Aburame",
        "Sarutobi", "Namikaze", "Kaguya", "Otsutsuki", "Hozuki",
        "Terumi", "Karatachi", "Yuki", "Sabaku", "Kazekage",
        "Haruno", "Umino", "Mitarashi", "Shiranui", "Morino",
        "Shimura", "Kohaku", "Rin", "Obito", "Madara",
        "Izuna", "Tobirama", "Hashirama", "Mito", "Kushina",
        "Minato", "Jiraiya", "Tsunade", "Orochimaru", "Kakashi",
        "Gai", "Asuma", "Kurenai", "Anko", "Shikamaru",
        "Choji", "Ino", "Kiba", "Shino", "Hinata",
        "Neji", "Rock", "Tenten", "Sai", "Yamato",
        "Hagoromo", "Hamura", "Danzo", "Fugaku", "Mikoto",

        // ========== BLEACH ==========
        "Kurosaki", "Kuchiki", "Abarai", "Hitsugaya", "Zaraki",
        "Kyoraku", "Ukitake", "Aizen", "Ichimaru", "Tosen",
        "Urahara", "Yoruichi", "Shihouin", "Ishida", "Sado",
        "Inoue", "Asano", "Kojima", "Hirako", "Hinamori",
        "Kira", "Matsumoto", "Hisagi", "Yumichika", "Ikkaku",
        "Renji", "Byakuya", "Rukia", "Kaien", "Gin",
        "Kaname", "Sosuke", "Genryusai", "Chojiro", "Sasakibe",
        "Yhwach", "Haschwalth", "Bazz", "Askin", "Gerard",

        // ========== JUJUTSU KAISEN ==========
        "Gojo", "Zenin", "Itadori", "Fushiguro", "Kugisaki",
        "Nanami", "Inumaki", "Okkotsu", "Maki", "Toge",
        "Yuta", "Sukuna", "Geto", "Toji", "Megumi",
        "Nobara", "Yuji", "Satoru", "Suguru", "Rika",
        "Panda", "Masamichi", "Kiyotaka", "Atsuya", "Kento",
        "Naobito", "Naoya", "Mai", "Momo", "Noritoshi",
        "Choso", "Mahito", "Jogo", "Hanami", "Uraume",

        // ========== DEMON SLAYER ==========
        "Kamado", "Agatsuma", "Rengoku", "Tomioka", "Kocho",
        "Kanroji", "Iguro", "Himejima", "Tokito", "Shinazugawa",
        "Uzui", "Ubuyashiki", "Hashibira", "Tanjuro", "Nezuko",
        "Zenitsu", "Inosuke", "Kanao", "Genya", "Sanemi",
        "Giyu", "Shinobu", "Kyojuro", "Tengen", "Muichiro",
        "Mitsuri", "Obanai", "Gyomei", "Kie", "Rokuta",
        "Muzan", "Kokushibo", "Akaza", "Doma", "Gyokko",

        // ========== MY HERO ACADEMIA ==========
        "Midoriya", "Bakugo", "Todoroki", "Uraraka", "Iida",
        "Asui", "Kirishima", "Kaminari", "Jiro", "Sero",
        "Tokoyami", "Shouji", "Hagakure", "Aoyama", "Ojiro",
        "Aizawa", "Yamada", "Kayama", "Yagi",
        "Toga", "Dabi", "Shigaraki", "Kurogiri", "Twice",
        "Endeavor", "Hawks", "Best", "Jeanist", "Edgeshot",
        "AllMight", "AllForOne", "Overhaul", "Stain", "Nomu",

        // ========== ATTACK ON TITAN ==========
        "Ackerman", "Yeager", "Arlert", "Leonhart", "Kirschstein",
        "Braus", "Springer", "Zoe", "Smith", "Magnolia",
        "Reiss", "Fritz", "Tybur", "Grice", "Kruger",
        "Levi", "Eren", "Mikasa", "Armin", "Annie",
        "Sasha", "Connie", "Hange", "Erwin", "Historia",
        "Ymir", "Frieda", "Grisha", "Carla", "Zeke",

        // ========== FULLMETAL ALCHEMIST ==========
        "Elric", "Mustang", "Hawkeye", "Armstrong", "Hughes",
        "Rockbell", "Bradley", "Hohenheim", "Scar", "Ling",
        "Greed", "Envy", "Wrath", "Pride", "Sloth",
        "Edward", "Alphonse", "Winry", "Roy", "Riza",
        "Alex", "Maes", "King", "Van", "Izumi",
        "Truth", "Father", "LanFan", "May", "Olivier",

        // ========== HUNTER X HUNTER ==========
        "Freecss", "Zoldyck", "Kurta", "Paladiknight", "Morow",
        "Killua", "Gon", "Kurapika", "Leorio", "Hisoka",
        "Chrollo", "Illumi", "Milluki", "Kalluto", "Alluka",
        "Silva", "Kikyo", "Zeno", "Maha", "Canary",
        "Meruem", "Netero", "AdultGon", "Komugi", "Pitou",

        // ========== ONE PIECE ==========
        "Monkey", "Roronoa", "Vinsmoke", "Nami", "Nico",
        "Franky", "Brook", "Jinbe", "Portgas", "Marshall",
        "Gol", "Silvers", "Kozuki", "Charlotte", "Donquixote",
        "Luffy", "Zoro", "Sanji", "Robin", "Ace",
        "Sabo", "Shanks", "Buggy", "Mihawk", "Crocodile",
        "Kaido", "Bigmom", "Teach", "Law", "Kid",
        "Killer", "Hawkins", "Apoo", "Drake", "Urouge",
        "Bonney", "Bege", "Jewelry", "Capone", "Basil",
        "Whitebeard", "Roger", "Rayleigh", "Garp", "Sengoku",

        // ========== DRAGON BALL ==========
        "Son", "Brief", "Vegeta", "Piccolo", "Krillin",
        "Bulma", "ChiChi", "Trunks", "Gohan", "Goten",
        "Frieza", "Cell", "Majin", "Beerus", "Whis",
        "Goku", "Android", "Raditz", "Nappa",
        "Zarbon", "Dodoria", "Champa", "Vados", "Zeno",
        "Grand", "Supreme", "Boros", "Hit", "Jiren",

        // ========== DEATH NOTE ==========
        "Yagami", "Lawliet", "Near", "Mello", "Mikami",
        "Amane", "Raye", "Penber", "Ide", "Matsuda",
        "Light", "L", "Misa", "Teru", "Nate",
        "Mihael", "Quillsh", "Ryuuk", "Rem", "Shinigami",

        // ========== SWORD ART ONLINE ==========
        "Kirigaya", "Yuuki", "Asuna", "Sinon", "Leafa",
        "Kirito", "Eugeo", "Alice", "Klein", "Agil",
        "Suguha", "Kazuto", "Asada", "Rika", "Andrew",
        "Heathcliff", "Kayaba", "Suguha", "Yui", "Silica",

        // ========== RE:ZERO ==========
        "Natsuki", "Emilia", "Ram", "Rem", "Beatrice",
        "Roswaal", "Puck", "Otto", "Garfiel", "Frederica",
        "Subaru", "Satella", "Echidna", "Minerva", "Daphne",
        "Reinhard", "Felt", "Crusch", "Anastasia", "Julius",

        // ========== TOKYO GHOUL ==========
        "Kaneki", "Kirishima", "Tsukiyama", "Nishio", "Yoshimura",
        "Amon", "Mado", "Aogiri", "Rize", "Hide",
        "Touka", "Ken", "Shuu", "Nishiki", "Koutarou",
        "Eto", "Arima", "Akira", "Hinami", "Ayato",

        // ========== CHAINSAW MAN ==========
        "Denji", "Makima", "Aki", "Power", "Pochita",
        "Himeno", "Kobeni", "Reze", "Quanxi", "Yoshida",
        "Asa", "Yoru", "Nayuta", "Fami", "Falling",
        "Chainsaw", "Angel", "Beam", "Violence", "Future",

        // ========== SPY X FAMILY ==========
        "Forger", "Anya", "Yor", "Loid", "Bond",
        "Becky", "Damian", "Franky", "Sylvia", "Handler",
        "Yuri", "Fiona", "Millie", "Sharon", "Dominic",

        // ========== ONE PUNCH MAN ==========
        "Saitama", "Genos", "Garou", "Tatsumaki", "Fubuki",
        "Bang", "Bomb", "Metal", "Atomic",
        "Child", "Emperor", "Zombieman", "Drive", "Watchdog",
        "God", "Boros", "Sonic", "Mumen", "King",

        // ========== MOB PSYCHO 100 ==========
        "Kageyama", "Reigen", "Dimple", "Teruki", "Ritsu",
        "Mob", "Shigeo", "Arataka", "Ekubo", "Hanazawa",
        "Sho", "Suzuki", "Touichirou", "Serizawa", "Hatori",

        // ========== EVANGELION ==========
        "Ikari", "Ayanami", "Soryu", "Katsuragi", "Akagi",
        "Shinji", "Rei", "Asuka", "Misato", "Ritsuko",
        "Gendo", "Yui", "Kaworu", "Kensuke",
        "Lilith", "Adam", "Toji", "Hikari", "Maya",

        // ========== CODE GEASS ==========
        "Lamperouge", "Britannia", "Kururugi", "Stadtfeld", "Milly",
        "Lelouch", "Suzaku", "Kallen", "Nunnally", "Cecile",
        "Charles", "Marianne", "Schneizel", "Cornelia", "Euphemia",

        // ========== STEINS GATE ==========
        "Okabe", "Makise", "Shiina", "Hashida", "Kiryu",
        "Rintaro", "Kurisu", "Mayuri", "Daru", "Moeka",
        "Hououin", "Suzuha", "Faris", "Luka", "Braun",

        // ========== FATE SERIES ==========
        "Emiya", "Tohsaka", "Matou", "Einzbern", "Kotomine",
        "Shirou", "Rin", "Sakura", "Illya", "Kirei",
        "Saber", "Archer", "Lancer", "Rider", "Caster",
        "Gilgamesh", "Berserker", "Assassin", "Avenger", "Ruler",

        // ========== GINTAMA ==========
        "Sakata", "Shimura", "Kagura", "Hijikata", "Okita",
        "Gintoki", "Shinpachi", "Tae", "Toshiro", "Sogo",
        "Utsuro", "Shouyou", "Katsura", "Takasugi", "Kondo",

        // ========== FAIRY TAIL ==========
        "Dragneel", "Heartfilia", "Scarlet", "Fullbuster", "Marvell",
        "Natsu", "Lucy", "Erza", "Gray", "Wendy",
        "Makarov", "Laxus", "Mirajane", "Gajeel", "Levy",
        "Zeref", "Acnologia", "Mavis", "Ivan", "Jellal",

        // ========== BLACK CLOVER ==========
        "Asta", "Yuno", "Noelle", "Yami", "Luck",
        "Nacht", "Vanessa", "Finral", "Magna", "Charmy",
        "Licht", "Julius", "William", "Fuegoleon", "Mereoleona",

        // ========== SEVEN DEADLY SINS ==========
        "Liones", "Ban", "Escanor", "Diane",
        "Meliodas", "Elizabeth", "Hawk", "Merlin", "Gowther",
        "SupremeDeity", "DemonKing", "King", "Derieri", "Monspeet",

        // ========== OVERLORD ==========
        "Ainz", "Albedo", "Shalltear", "Demiurge", "Cocytus",
        "Momonga", "Nabe", "Sebas", "Pandora", "Aura",
        "Rubedo", "Mare", "Entoma", "Evileye", "Brain",

        // ========== KONOSUBA ==========
        "Satou", "Aqua", "Megumin", "Darkness", "Wiz",
        "Kazuma", "Yunyun", "Eris", "Chris", "Vanir",

        // ========== LOG HORIZON ==========
        "Shiroe", "Akatsuki", "Naotsugu", "Nyanta", "Minori",
        "Tohya", "Isuzu", "Rundelhaus", "Tetora", "Marielle",
        "Kanami", "Roe2", "Henrietta", "Rieze", "Krusty",

        // ========== NO GAME NO LIFE ==========
        "Sora", "Shiro", "Stephanie", "Jibril", "Izuna",
        "Dola", "Chlammy", "Fiel", "Miko", "Tet",

        // ========== DANMACHI ==========
        "Bell", "Ais", "Hestia", "Lili", "Welf",
        "Ryuu", "Syr", "Eina", "Freya", "Hermes",
        "Ottar", "Finn", "Riveria", "Gareth", "Bete",

        // ========== TENSURA ==========
        "Rimuru", "Shion", "Shuna", "Benimaru", "Diablo",
        "Milim", "Veldora", "Gobta", "Ranga", "Souei",
        "Guy", "Testarossa", "Ultima", "Carrera", "Zegion",

        // ========== KOREA ==========
        "Sung", "Baek", "Hwang", "Cha", "Yoo",
        "Kang", "Lee", "Park", "Kim", "Choi",
        "Jung", "Yoon", "Jang", "Lim", "Han",
        "Oh", "Seo", "Shin", "Kwon", "Ahn",
        "Song", "Hong", "Jeon", "Ko", "Moon",
        "Son", "Yang", "Bae", "Nam", "Noh",
        "Ha", "Heo", "Sim", "Ryu", "Woo",
        "Pyo", "Ma", "Gu", "Jin", "Solo",
        "Chwe", "Hyeon", "Byeon", "Do", "Eo",
        "Gang", "Gyeon", "Hwangbo", "Jeong", "Jwa",
        "Ki", "Kyeon", "Man", "Myeong", "Namgung",
        "O", "Ok", "On", "Paek", "Pang",
        "Pyeon", "Sa", "Seok", "Seon", "Seong",
        "So", "Suk", "Tak", "Wi",
        "Won", "Yeom", "Yeon", "Yook", "Yun",

        // ========== CHINA ==========
        "Lan", "Wei", "Jin", "Nie", "Jiang",
        "Xiao", "Wen", "Liu", "Chen", "Zhao",
        "Wang", "Li", "Zhang", "Yang", "Huang",
        "Wu", "Zhou", "Xu", "Sun",
        "Zhu", "Hu", "Guo", "He", "Gao",
        "Lin", "Luo", "Zheng", "Liang", "Xie",
        "Tang", "Cao", "Feng", "Deng",
        "Peng", "Cai", "Pan", "Tian", "Mo",
        "Dong", "Du", "Fang", "Fu", "Gong",
        "Gu", "Guan", "Hao", "Hou",
        "Jia", "Jian", "Kong", "Lei", "Lu",
        "Lyu", "Meng", "Miao", "Ning", "Ou",
        "Qian", "Qin", "Qiu", "Ren", "Shao",
        "Shen", "Shi", "Su", "Tan",
        "Wan", "Xia", "Xiang", "Xiong", "Yan",
        "Yao", "Ye", "Yin", "Yu", "Yuan",
        "Zeng", "Zhan", "Zhong", "Zou", "Zuo",

        // ========== INDONESIA ==========
        "Wijaya", "Santoso", "Halim", "Kusuma", "Pratama",
        "Saputra", "Nugroho", "Setiawan", "Hidayat", "Ramadhan",
        "Firmansyah", "Gunawan", "Susanto", "Wibowo", "Hartono",
        "Utomo", "Siregar", "Nasution", "Simanjuntak", "Sitorus",
        "Maulana", "Rahman", "Hakim", "Putra", "Dewi",
        "Lestari", "Anggraini", "Purnama", "Wahyuni", "Safitri",
        "Kurniawan", "Iskandar", "Suryana", "Permana", "Setiadi",
        "Hadisaputra", "Yulianto", "Prasetyo", "Wardana", "Prabowo",
        "Suharto", "Susilo", "Bambang", "Agus", "Joko",
        "Rizky", "Andi", "Budi", "Dedi", "Eko",
        "Aditya", "Agung", "Aji", "Alam", "Anwar",
        "Arif", "Arya", "Bagus", "Bakti", "Cahyo",
        "Darma", "Dwi", "Eka", "Fajar", "Gita",
        "Hadi", "Haris", "Indra", "Jaya", "Kartika",
        "Krisna", "Mega", "Nanda", "Oktavia", "Panca",
        "Qori", "Rina", "Sari", "Taufik", "Umar",
        "Vina", "Wati", "Yanti", "Abdi", "Bimo",
        "Candra", "Dian", "Ahmad", "Ali", "Amin",

        // ========== FILIPINA ==========
        "Santos", "Reyes", "Cruz", "Bautista", "Garcia",
        "Mendoza", "Torres", "Flores", "Ramos", "Gonzales",
        "Aquino", "Castillo", "Villanueva", "DelaCruz", "Rosales",
        "Mercado", "Domingo", "Navarro", "Salazar", "Fernandez",
        "Rivera", "Aguilar", "Marquez", "Pascual", "Alvarez",
        "Buenaventura", "Magbanua", "Dimaculangan", "Macapagal", "Magsaysay",
        "Abad", "Acosta", "Alonzo", "Ang", "Antonio",
        "Bacani", "Bernardo", "Buena", "Castro", "Cordero",
        "Dalisay", "Dizon", "Enriquez", "Estrada", "Gatchalian",
        "Ignacio", "Javier", "Lacson", "Lagman", "Macaraeg",
        "Maglaya", "Manalo", "Nolasco", "Ocampo", "Panganiban",
        "Quizon", "Recto", "Salonga", "Tolentino", "Uy",
        "Valdez", "Velasco", "Zamora", "Zulueta",

        // ========== VIETNAM ==========
        "Nguyen", "Tran", "Le", "Pham", "Hoang",
        "Huynh", "Phan", "Vu", "Dang", "Bui",
        "Do", "Ho", "Ngo", "Duong", "Ly",
        "Truong", "Dinh", "Dao", "Thai", "Ton",
        "Luong", "Mai", "Lam", "Cao", "Ta",
        "An", "Bach", "Bang", "Binh", "Cam",
        "Chau", "Chi", "Cuong", "Dat", "Dien",
        "Duc", "Giang", "Hai", "Hanh", "Hieu",
        "Hoa", "Hung", "Khanh", "Khoa", "Kien",
        "Linh", "Long", "Minh", "Nam", "Ngoc",
        "Nhan", "Phuc", "Quan", "Quang", "Quoc",
        "Tam", "Thanh", "Thao", "Thien", "Thu",
        "Tien", "Toan", "Tri", "Trung", "Tu",
        "Tuan", "Van", "Viet", "Vinh",

        // ========== THAILAND ==========
        "Chai", "Srisai", "Sukhum", "Rattana", "Wongsa",
        "Thongchai", "Siriporn", "Kittisak", "Anan", "Pornthip",
        "Somsak", "Prasert", "Nattapong", "Wichai", "Suriya",
        "Kanya", "Malee", "Pimchan", "Ratchanee", "Sirinya",
        "Anong", "Boonmee", "Chaiyaporn", "Decha", "Ekachai",
        "Jintana", "Lalita", "Mali", "Niran", "Ubon",
        "Ying", "Boon", "Fa", "Kiet", "Lek",
        "Mee", "Ploy", "Som", "Tuk", "Wan",

        // ========== MALAYSIA/SINGAPURA ==========
        "Tan", "Lim", "Ng", "Ong", "Teo",
        "Goh", "Chua", "Koh", "Sim", "Yeo",
        "Wong", "Chan", "Loh", "Tay",
        "Neo", "Seah", "Toh", "Yap",
        "Abdul", "Ahmad", "Ali", "Amin", "Aziz",
        "Bakar", "Che", "Daud", "Hamid", "Hassan",
        "Ibrahim", "Ismail", "Jaafar", "Kassim", "Latif",
        "Mahmud", "Musa", "Omar", "Rahim",
        "Rahman", "Razak", "Saleh", "Salleh",
        "Yusof", "Zainal", "Zakaria", "Zulkifli", "Osman",

        // ========== JEPANG ==========
        "Tanaka", "Sato", "Suzuki", "Takahashi", "Watanabe",
        "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato",
        "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Matsumoto",
        "Kimura", "Hayashi", "Shimizu", "Saito", "Abe",
        "Ikeda", "Hashimoto", "Ishikawa", "Ogawa", "Goto",
        "Okada", "Hasegawa", "Murakami", "Kondo", "Ishii",
        "Sakamoto", "Endo", "Aoki", "Fujii", "Nishimura",
        "Fukuda", "Ota", "Miura", "Fujiwara", "Okamoto",
        "Matsuda", "Nakagawa", "Nakano", "Harada", "Ono",
        "Taniguchi", "Takeuchi", "Ueda", "Maeda", "Morita",
        "Arai", "Chiba", "Fujita", "Hara", "Hirano",
        "Honda", "Hoshino", "Ichikawa", "Imai", "Inoue",
        "Ishida", "Iwasaki", "Kanda", "Kawaguchi", "Kawasaki",
        "Kitamura", "Kojima", "Komatsu", "Kubo", "Kuroda",
        "Maruyama", "Masuda", "Matsui", "Minami", "Miyazaki",
        "Mori", "Murata", "Nagai", "Nakajima", "Nakayama",
        "Nishida", "Noguchi", "Nomura", "Ohara", "Oshima",
        "Sakai", "Sano", "Shibata", "Shimada", "Sugiyama",
        "Takagi", "Takayama", "Tsuchiya", "Uchida", "Ueno",
        "Wada", "Yamashita", "Yamazaki", "Yano", "Yoshikawa",
        "Yoshimura",

        // ========== BARAT ==========
        "Smith", "Brown", "Jones", "Williams", "Miller",
        "Davis", "Wilson", "Moore", "Taylor", "Anderson",
        "Thomas", "Jackson", "White", "Harris", "Martin",
        "Thompson", "Garcia", "Martinez", "Robinson", "Clark",
        "Rodriguez", "Lewis", "Walker", "Hall",
        "Allen", "Young", "King", "Wright", "Scott",
        "Green", "Baker", "Adams", "Nelson", "Hill",
        "Campbell", "Mitchell", "Roberts", "Carter", "Phillips",
        "Evans", "Turner", "Parker", "Collins",
        "Edwards", "Stewart", "Morris",
        "Johnson", "Rossi", "Romano", "Ferrari", "Esposito",
        "Bianchi", "Ricci", "Marino", "Greco", "Bruno",
        "Gallo", "Conti", "DeLuca", "Costa", "Giordano",
        "Mancini", "Diaz", "Lopez", "Hernandez", "Gonzalez",
        "Perez", "Sanchez", "Ramirez", "Gomez",

        // ========== UNKNOWN/MYTHIC ==========
        "Void", "Nyx", "Primordial", "Eternal",
        "Infinity", "Absolute", "Chaos", "Genesis",
        "Ragnarok", "Oblivion", "Apocalypse", "Nirvana",
        "Elysium", "Tartarus", "Olympus", "Asgard",
        "Valhalla", "Hades", "Zeus", "Odin",
        "Kronos", "Gaia", "Uranus", "Chronos",
        "Ananke", "Phanes", "Erebus",
        "Shin", "Kami", "Yami", "Hikari",
        "Kaze", "Mizu", "Hi", "Tsuchi",
        "Uchuu", "Jikan", "Kuukan", "Inochi"
      ]
    }
  }
},

  /* ---------- ROLE (grouped) ---------- */
  role: {
    group: "Identity", type: "grouped", id: "role",
    title: "Role", subtitle: "Jurusan / Role", icon: "role",
    tiers: {
      common: {
  names: [
    // ===== SMA / SMK - Umum & Paling Dikenal =====
    "IPA",
    "IPS",
    "Bahasa",
    "Agama",
    "Umum",
    "Teknik Komputer dan Jaringan",
    "Rekayasa Perangkat Lunak",
    "Multimedia",
    "Akuntansi",
    "Administrasi Perkantoran",
    "Bisnis Daring dan Pemasaran",
    "Perhotelan",
    "Tata Boga",
    "Tata Busana",
    "Teknik Kendaraan Ringan Otomotif",
    "Teknik Sepeda Motor",
    "Teknik Instalasi Tenaga Listrik",
    "Teknik Pemesinan",
    "Teknik Pengelasan",
    "Teknik Elektronika Industri",
    "Teknik Mekatronika",
    "Teknik Pendingin dan Tata Udara",
    "Desain Komunikasi Visual",
    "Animasi",
    "Farmasi",
    "Keperawatan",
    "Teknologi Laboratorium Medik",
    "Agribisnis Tanaman Pangan dan Hortikultura",
    "Agribisnis Ternak",
    "Usaha Perjalanan Wisata",
    "Perbankan",
    "Manajemen Logistik",

    // ===== SMK - Teknologi dan Rekayasa =====
    "Teknik Ototronik",
    "Teknik Alat Berat",
    "Teknik Fabrikasi Logam",
    "Teknik Pengecoran Logam",
    "Teknik Mekanik Industri",
    "Teknik Perancangan dan Gambar Mesin",
    "Teknik Otomasi Industri",
    "Teknik Elektronika Daya",
    "Teknik Audio Video",
    "Teknik Pembangkit Tenaga Listrik",
    "Teknik Jaringan Tenaga Listrik",
    "Teknik Konstruksi dan Properti",
    "Teknik Konstruksi Baja",
    "Teknik Konstruksi Kayu",
    "Teknik Konstruksi Batu dan Beton",
    "Teknik Gambar Bangunan",
    "Teknik Survey dan Pemetaan",
    "Geomatika",
    "Teknik Perkapalan",
    "Teknik Mesin Kapal",
    "Nautika Kapal Niaga",
    "Teknika Kapal Niaga",
    "Nautika Kapal Penangkap Ikan",
    "Teknika Kapal Penangkap Ikan",
    "Teknik Geologi Pertambangan",
    "Teknik Pertambangan",
    "Teknik Perminyakan",
    "Teknik Kimia Industri",
    "Teknik Industri",
    "Teknik Pengolahan Minyak dan Gas",
    "Teknik Pemeliharaan Mekanik Industri",
    "Teknik Suitsing",

    // ===== SMK - Teknologi Informasi dan Komunikasi =====
    "Teknik Broadcasting",
    "Sistem Informasi Jaringan dan Aplikasi",
    "Pengembangan Perangkat Lunak dan Gim",
    "Teknik Jaringan Komputer dan Telekomunikasi",
    "Teknik Jaringan Akses Telekomunikasi",
    "Teknik Transmisi Telekomunikasi",
    "Teknologi Grafika",
    "Desain Produk",
    "Seni Animasi",
    "Fotografi",
    "Periklanan",

    // ===== SMK - Bisnis dan Manajemen =====
    "Akuntansi dan Keuangan Lembaga",
    "Otomatisasi dan Tata Kelola Perkantoran",
    "Perbankan dan Keuangan Mikro",
    "Perbankan Syariah",
    "Bisnis Internasional",
    "Administrasi Transaksi",
    "Retail",
    "Keuangan",
    "Ekonomi Bisnis",
    "Pemasaran",

    // ===== SMK - Pariwisata =====
    "Akomodasi Perhotelan",
    "Tata Kecantikan Kulit dan Rambut",
    "Tata Rias",
    "Spa dan Beauty Therapy",
    "Patiseri",
    "Kuliner",
    "Perjalanan Wisata",
    "Pemanduan Wisata",
    "Event Management",
    "Rekreasi dan Event",

    // ===== SMK - Agribisnis dan Agriteknologi =====
    "Agribisnis Tanaman Perkebunan",
    "Agribisnis Perikanan Air Tawar",
    "Agribisnis Perikanan Air Payau dan Laut",
    "Agribisnis Ternak Ruminansia",
    "Agribisnis Ternak Unggas",
    "Agribisnis Aneka Ternak",
    "Agribisnis Pengolahan Hasil Pertanian",
    "Agribisnis Pengolahan Hasil Perikanan",
    "Teknologi Pengolahan Hasil Pertanian",
    "Teknologi Produksi Benih",
    "Penyuluhan Pertanian",
    "Kehutanan",
    "Kesehatan Hewan",
    "Budidaya Perikanan",
    "Teknologi Hasil Perikanan",

    // ===== SMK - Kesehatan dan Pekerjaan Sosial =====
    "Asisten Keperawatan",
    "Caregiver",
    "Farmasi Klinis dan Komunitas",
    "Analis Kesehatan",
    "Keperawatan Gigi",
    "Kimia Analisis",
    "Kimia Industri",
    "Pekerjaan Sosial",
    "Layanan Sosial",

    // ===== SMK - Seni dan Ekonomi Kreatif =====
    "Seni Lukis",
    "Seni Patung",
    "Seni Grafis",
    "Desain Interior",
    "Kriya Kayu",
    "Kriya Logam",
    "Kriya Tekstil",
    "Kriya Keramik",
    "Seni Karawitan",
    "Seni Tari",
    "Seni Musik",
    "Seni Teater",
    "Seni Pedalangan",
    "Film dan Animasi",

    // ===== SMA - Peminatan / Mapel Lanjut =====
    "Matematika Lanjut",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Sosiologi",
    "Geografi",
    "Sejarah",
    "Informatika",
    "Bahasa Jepang",
    "Bahasa Jerman",
    "Bahasa Korea",
    "Bahasa Arab",
    "Bahasa Mandarin",
    "Bahasa Prancis",
    "Seni Budaya",
    "PJOK",
    "PPKn",
    "Prakarya dan Kewirausahaan",

    // ===== MA (Madrasah Aliyah) =====
    "MIA (Matematika dan Ilmu Alam)",
    "IIS (Ilmu-Ilmu Sosial)",
    "Keagamaan",
    "Ilmu Kesehatan",
    "Ilmu Teknik",
    "Ilmu Ekonomi"
  ]
},
      uncommon: {
  names: [
    // ===== Guru SMA / Umum =====
    "Guru IPA",
    "Guru IPS",
    "Guru Bahasa",
    "Guru Agama",
    "Guru Umum",
    "Guru Matematika",
    "Guru Bahasa Indonesia",
    "Guru Bahasa Inggris",
    "Guru Fisika",
    "Guru Kimia",
    "Guru Biologi",
    "Guru Ekonomi",
    "Guru Sosiologi",
    "Guru Geografi",
    "Guru Sejarah",
    "Guru PPKn",
    "Guru PJOK",
    "Guru Seni Budaya",
    "Guru Informatika",
    "Guru Bahasa Jepang",
    "Guru Bahasa Jerman",
    "Guru Bahasa Korea",
    "Guru Bahasa Arab",
    "Guru Bahasa Mandarin",
    "Guru Bahasa Prancis",
    "Guru Prakarya dan Kewirausahaan",
    "Guru Bimbingan Konseling",

    // ===== Guru SMK - Teknologi dan Rekayasa =====
    "Guru Teknik Kendaraan Ringan Otomotif",
    "Guru Teknik Bisnis Sepeda Motor",
    "Guru Teknik Ototronik",
    "Guru Teknik Alat Berat",
    "Guru Teknik Pemesinan",
    "Guru Teknik Pengelasan",
    "Guru Teknik Fabrikasi Logam",
    "Guru Teknik Pengecoran Logam",
    "Guru Teknik Mekanik Industri",
    "Guru Teknik Perancangan dan Gambar Mesin",
    "Guru Teknik Otomasi Industri",
    "Guru Teknik Elektronika Industri",
    "Guru Teknik Elektronika Daya",
    "Guru Teknik Audio Video",
    "Guru Teknik Mekatronika",
    "Guru Teknik Instalasi Tenaga Listrik",
    "Guru Teknik Pembangkit Tenaga Listrik",
    "Guru Teknik Jaringan Tenaga Listrik",
    "Guru Teknik Pendingin dan Tata Udara",
    "Guru Teknik Konstruksi dan Properti",
    "Guru Teknik Konstruksi Baja",
    "Guru Teknik Konstruksi Kayu",
    "Guru Teknik Konstruksi Batu dan Beton",
    "Guru Teknik Gambar Bangunan",
    "Guru Teknik Survey dan Pemetaan",
    "Guru Geomatika",
    "Guru Teknik Perkapalan",
    "Guru Teknik Mesin Kapal",
    "Guru Nautika Kapal Niaga",
    "Guru Teknika Kapal Niaga",
    "Guru Nautika Kapal Penangkap Ikan",
    "Guru Teknika Kapal Penangkap Ikan",
    "Guru Teknik Geologi Pertambangan",
    "Guru Teknik Pertambangan",
    "Guru Teknik Perminyakan",
    "Guru Teknik Kimia Industri",
    "Guru Teknik Industri",
    "Guru Teknik Pengolahan Minyak dan Gas",
    "Guru Teknik Pemeliharaan Mekanik Industri",
    "Guru Teknik Suitsing",

    // ===== Guru SMK - Teknologi Informasi dan Komunikasi =====
    "Guru Teknik Komputer dan Jaringan",
    "Guru Rekayasa Perangkat Lunak",
    "Guru Multimedia",
    "Guru Animasi",
    "Guru Desain Komunikasi Visual",
    "Guru Teknik Broadcasting",
    "Guru Sistem Informasi Jaringan dan Aplikasi",
    "Guru Pengembangan Perangkat Lunak dan Gim",
    "Guru Teknik Jaringan Komputer dan Telekomunikasi",
    "Guru Teknik Jaringan Akses Telekomunikasi",
    "Guru Teknik Transmisi Telekomunikasi",
    "Guru Teknologi Grafika",
    "Guru Desain Produk",
    "Guru Seni Animasi",
    "Guru Fotografi",
    "Guru Periklanan",

    // ===== Guru SMK - Bisnis dan Manajemen =====
    "Guru Akuntansi dan Keuangan Lembaga",
    "Guru Otomatisasi dan Tata Kelola Perkantoran",
    "Guru Bisnis Daring dan Pemasaran",
    "Guru Perbankan dan Keuangan Mikro",
    "Guru Perbankan Syariah",
    "Guru Manajemen Logistik",
    "Guru Bisnis Internasional",
    "Guru Administrasi Transaksi",
    "Guru Retail",
    "Guru Keuangan",
    "Guru Ekonomi Bisnis",
    "Guru Pemasaran",

    // ===== Guru SMK - Pariwisata =====
    "Guru Perhotelan",
    "Guru Akomodasi Perhotelan",
    "Guru Usaha Perjalanan Wisata",
    "Guru Tata Boga",
    "Guru Tata Busana",
    "Guru Tata Kecantikan Kulit dan Rambut",
    "Guru Tata Rias",
    "Guru Spa dan Beauty Therapy",
    "Guru Patiseri",
    "Guru Kuliner",
    "Guru Perjalanan Wisata",
    "Guru Pemanduan Wisata",
    "Guru Event Management",
    "Guru Rekreasi dan Event",

    // ===== Guru SMK - Agribisnis dan Agriteknologi =====
    "Guru Agribisnis Tanaman Pangan dan Hortikultura",
    "Guru Agribisnis Tanaman Perkebunan",
    "Guru Agribisnis Perikanan Air Tawar",
    "Guru Agribisnis Perikanan Air Payau dan Laut",
    "Guru Agribisnis Ternak Ruminansia",
    "Guru Agribisnis Ternak Unggas",
    "Guru Agribisnis Aneka Ternak",
    "Guru Agribisnis Pengolahan Hasil Pertanian",
    "Guru Agribisnis Pengolahan Hasil Perikanan",
    "Guru Teknologi Pengolahan Hasil Pertanian",
    "Guru Teknologi Produksi Benih",
    "Guru Penyuluhan Pertanian",
    "Guru Kehutanan",
    "Guru Kesehatan Hewan",
    "Guru Budidaya Perikanan",
    "Guru Teknologi Hasil Perikanan",

    // ===== Guru SMK - Kesehatan dan Pekerjaan Sosial =====
    "Guru Asisten Keperawatan",
    "Guru Caregiver",
    "Guru Farmasi Klinis dan Komunitas",
    "Guru Farmasi",
    "Guru Teknologi Laboratorium Medik",
    "Guru Analis Kesehatan",
    "Guru Keperawatan Gigi",
    "Guru Kimia Analisis",
    "Guru Kimia Industri",
    "Guru Pekerjaan Sosial",
    "Guru Layanan Sosial",

    // ===== Guru SMK - Seni dan Ekonomi Kreatif =====
    "Guru Seni Lukis",
    "Guru Seni Patung",
    "Guru Seni Grafis",
    "Guru Desain Interior",
    "Guru Kriya Kayu",
    "Guru Kriya Logam",
    "Guru Kriya Tekstil",
    "Guru Kriya Keramik",
    "Guru Seni Karawitan",
    "Guru Seni Tari",
    "Guru Seni Musik",
    "Guru Seni Teater",
    "Guru Seni Pedalangan",
    "Guru Film dan Animasi",

    // ===== Guru MA (Madrasah Aliyah) =====
    "Guru MIA (Matematika dan Ilmu Alam)",
    "Guru IIS (Ilmu-Ilmu Sosial)",
    "Guru Keagamaan",
    "Guru Ilmu Kesehatan",
    "Guru Ilmu Teknik",
    "Guru Ilmu Ekonomi",
  ]
},
epic: {
  names: [
    // ===== Keamanan & Ketertiban =====
    "Security",
    "Satpam",
    "Petugas Keamanan",
    "Penjaga Sekolah",
    "Petugas Piket",
    "Petugas Upacara",
    "Petugas Parkir",
    "Penjaga Gerbang",
    "Petugas Patroli",
    "Petugas CCTV",

    // ===== Kebersihan & Lingkungan =====
    "Petugas Kebersihan",
    "Cleaning Service",
    "Tukang Sapu",
    "Petugas Sampah",
    "Petugas Taman",
    "Petugas Kebun",
    "Petugas Toilet",
    "Petugas Sanitasi",
    "Petugas Lingkungan",

    // ===== Kantin & Makanan =====
    "Penjaga Kantin",
    "Penjual Kantin",
    "Pemilik Kantin",
    "Petugas Kantin",
    "Koki Kantin",
    "Asisten Dapur",
    "Petugas Koperasi Sekolah",
    "Penjual Koperasi",
    "Petugas Minuman",
    "Petugas Makanan Ringan",
    "Petugas Katering Sekolah",
    "Penjual Bakso Keliling",
    "Penjual Mie Ayam",
    "Penjual Gorengan",

    // ===== Administrasi & Tata Usaha =====
    "Tata Usaha",
    "Staf TU",
    "Kepala Tata Usaha",
    "Administrasi Sekolah",
    "Staf Administrasi",
    "Operator Sekolah",
    "Operator Dapodik",
    "Staf Dapodik",
    "Petugas Arsip",
    "Petugas Surat Menyurat",
    "Petugas Penerimaan Siswa",
    "Petugas Pendaftaran",
    "Petugas Perpustakaan",
    "Pustakawan",
    "Asisten Pustakawan",
    "Petugas Kearsipan",

    // ===== Keuangan =====
    "Bendahara Sekolah",
    "Kasir Sekolah",
    "Petugas Pembayaran",
    "Staf Keuangan",
    "Petugas SPP",
    "Petugas Koperasi Keuangan",

    // ===== Kesehatan =====
    "Petugas UKS",
    "Perawat Sekolah",
    "Dokter Sekolah",
    "Petugas Kesehatan",
    "Petugas PMR",
    "Petugas P3K",
    "Konselor Sekolah",
    "Psikolog Sekolah",

    // ===== Teknis & Pemeliharaan =====
    "Teknisi Sekolah",
    "Tukang Listrik",
    "Tukang Air",
    "Tukang Bangunan",
    "Tukang Kayu",
    "Tukang Cat",
    "Tukang Las",
    "Petugas Pemeliharaan",
    "Petugas Perbaikan",
    "Petugas AC",
    "Petugas Komputer",
    "Petugas Jaringan",
    "Petugas IT",
    "Operator Sound System",
    "Petugas Multimedia",
    "Petugas Laboratorium",
    "Laboran",
    "Asisten Laboran",
    "Petugas Bengkel",
    "Petugas Peralatan",

    // ===== Transportasi & Logistik =====
    "Sopir Sekolah",
    "Sopir Bus Sekolah",
    "Pengemudi Antar Jemput",
    "Petugas Antar Jemput",
    "Kurir Sekolah",
    "Petugas Logistik",
    "Petugas Gudang",
    "Petugas Inventaris",

    // ===== Layanan Siswa =====
    "Petugas Bimbingan Konseling",
    "Petugas OSIS",
    "Pembina OSIS",
    "Petugas Ekstrakurikuler",
    "Pelatih Pramuka",
    "Pelatih PMR",
    "Pelatih Paskibra",
    "Pelatih Olahraga",
    "Pelatih Seni",
    "Pelatih Musik",
    "Pelatih Tari",
    "Pelatih Karate",
    "Pelatih Silat",
    "Pelatih Basket",
    "Pelatih Voli",
    "Pelatih Futsal",
    "Pelatih Badminton",
    "Pelatih Renang",
    "Pelatih Catur",
    "Pelatih Robotik",
    "Pelatih Koding",

    // ===== Keagamaan =====
    "Petugas Rohis",
    "Pembina Rohis",
    "Imam Sekolah",
    "Petugas Ibadah",
    "Petugas Keagamaan",
    "Penyuluh Agama",

    // ===== Pimpinan & Manajemen =====
    "Kepala Program Keahlian",
    "Kepala Bengkel",
    "Kepala Laboratorium",
    "Kepala Perpustakaan",
    "Kepala Tata Usaha",
    "Kepala Koperasi",
    "Kepala Kantin",
    "Koordinator Sekolah",
    "Pengawas Sekolah",
    "Komite Sekolah",
    "Yayasan Sekolah",

    // ===== Petugas Khusus =====
    "Petugas Fotokopi",
    "Petugas Percetakan",
    "Petugas ATK",
    "Petugas Seragam",
    "Petugas Buku",
    "Petugas Alat Tulis",
    "Petugas Perlengkapan",
    "Petugas Kebersihan Kelas",
    "Petugas Upacara",
    "Petugas Bendera",
    "Petugas Piket Kelas",
    "Petugas Piket Sekolah",
    "Petugas Jaga Malam",
    "Petugas Pos Keamanan",
    "Petugas Informasi",
    "Petugas Resepsionis",
    "Petugas Tamu",
    "Petugas Telepon",
    "Petugas Surat",
    "Petugas Pengumuman",

    // ===== Profesi Umum di Lingkungan Sekolah =====
    "Petugas Kebersihan Sekolah",
    "Petugas Keamanan Sekolah",
    "Petugas Kantin Sekolah",
    "Petugas Perpustakaan Sekolah",
    "Petugas UKS Sekolah",
    "Petugas Koperasi Sekolah",
    "Petugas Parkir Sekolah",
    "Petugas Tata Usaha Sekolah",
    "Petugas Bendahara Sekolah",
    "Petugas Laboratorium Sekolah",
    "Petugas Bengkel Sekolah",
    "Petugas IT Sekolah",
    "Petugas Multimedia Sekolah",
    "Petugas Sound System Sekolah",
    "Petugas Fotografi Sekolah",
    "Petugas Dokumentasi Sekolah",
    "Petugas Kebun Sekolah",
    "Petugas Taman Sekolah",
    "Petugas Sampah Sekolah",
    "Petugas Toilet Sekolah",
    "Petugas Sanitasi Sekolah",
    "Petugas Listrik Sekolah",
    "Petugas Air Sekolah",
    "Petugas Bangunan Sekolah",
    "Petugas Pemeliharaan Sekolah",
    "Petugas Perbaikan Sekolah",
    "Petugas AC Sekolah",
    "Petugas Komputer Sekolah",
    "Petugas Jaringan Sekolah",
    "Petugas Sopir Sekolah",
    "Petugas Kurir Sekolah",
    "Petugas Logistik Sekolah",
    "Petugas Gudang Sekolah",
    "Petugas Inventaris Sekolah"
  ]
},
      legend:   { names: ["Wakil Kepala Sekolah"] },
      unknown:  { names: ["Kepala Sekolah"] }
    }
  },

  /* ---------- HEIGHT (grouped) ---------- */
  height: {
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

  /* ---------- SKIN COLOR (color, multi-value) ---------- */
  skinColor: {
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

  /* ---------- HAIR COLOR (color, multi-value) ---------- */
  hairColor: {
    group: "Appearance", type: "color", id: "hairColor",
    title: "Hair Color", subtitle: "Warna Rambut (RGB)", icon: "hairColor",
    tiers: {
      common: {
        values: [
          { value: "0.0.0"     }, { value: "2.2.2"     }, { value: "4.3.3"     },
          { value: "5.4.4"     }, { value: "7.5.4"     }, { value: "8.6.5"     },
          { value: "9.7.6"     }, { value: "10.8.10"   }, { value: "9.9.12"    },
          { value: "8.12.10"   }, { value: "11.9.7"    }, { value: "12.10.14"  },
          { value: "11.11.8"   }, { value: "15.8.11"   }, { value: "10.11.15"  },
          { value: "15.11.16"  }, { value: "16.13.8"   }, { value: "15.16.15"  },
          { value: "13.15.19"  }, { value: "16.14.18"  }, { value: "9.13.17"   },
          { value: "16.9.13"   }, { value: "13.16.9"   }, { value: "15.9.17"   },
          { value: "10.16.16"  }, { value: "16.10.10"  }
        ]
      },
      uncommon: {
        values: [
          { value: "28.20.15"  }, { value: "30.19.17"  }, { value: "32.23.17"  },
          { value: "32.28.22"  }, { value: "34.25.28"  }, { value: "28.34.31"  },
          { value: "28.32.42"  }, { value: "36.24.26"  }, { value: "36.38.43"  },
          { value: "38.26.19"  }, { value: "38.32.38"  }, { value: "36.30.42"  },
          { value: "40.28.21"  }, { value: "40.38.28"  }, { value: "44.32.23"  },
          { value: "46.25.25"  }, { value: "28.42.44"  }, { value: "42.28.44"  },
          { value: "44.42.28"  }, { value: "32.42.28"  }, { value: "44.28.32"  },
          { value: "28.38.42"  }, { value: "42.34.28"  }, { value: "38.42.44"  }
        ]
      },
      epic: {
        values: [
          { value: "50.32.54"   }, { value: "52.24.29"   }, { value: "52.58.72"   },
          { value: "55.35.68"   }, { value: "55.60.40"   }, { value: "58.20.24"   },
          { value: "58.45.72"   }, { value: "60.40.28"   }, { value: "60.45.60"   },
          { value: "63.30.38"   }, { value: "63.54.30"   }, { value: "68.40.52"   },
          { value: "68.48.38"   }, { value: "50.66.68"   }, { value: "64.46.68"   },
          { value: "68.64.46"   }, { value: "52.64.46"   }, { value: "68.46.52"   },
          { value: "50.58.64"   }, { value: "64.54.46"   }, { value: "58.64.68"   },
          { value: "50.68.58"   }, { value: "68.46.46"   }
        ]
      },
      unknown: {
        values: [
          { value: "255.0.0"    }, { value: "255.80.180" }, { value: "0.255.200"  },
          { value: "255.215.0"  }, { value: "255.150.50" }, { value: "180.100.255"},
          { value: "100.255.100"}, { value: "255.255.255"}, { value: "0.150.255"  },
          { value: "255.0.255"  }, { value: "255.255.0"  }, { value: "0.255.255"  }
        ]
      }
    }
  }

}; /* end SHARED */


/* ================================================================
 *  REROLL DATA
 *  Male & Female reference SHARED untuk:
 *    - lastName
 *    - role
 *    - height
 *    - skinColor
 *    - hairColor
 * ================================================================ */
window.REROLL_DATA = {

  male: [
    /* ===== IDENTITY ===== */
    SHARED.lastName,   /* ← shared */
    SHARED.role,       /* ← shared */

    /* ===== APPEARANCE ===== */
    SHARED.height,      /* ← shared */
    SHARED.skinColor,   /* ← shared */
    {
      group: "Appearance", type: "item", id: "hair",
      title: "Hair", subtitle: "Model Rambut", icon: "hair",
      placeholder: "hair",
      items: [
        { rarity: "common",   id: "15563758601",      image: "https://tr.rbxcdn.com/180DAY-b68bc0b38d16708254f4dc73fe1ae021/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "89621163621787",   image: "https://tr.rbxcdn.com/180DAY-903ed2d49ba90891aad46c65af9bb3a9/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "107271393538671",  image: "https://tr.rbxcdn.com/180DAY-64ae0a0b3c3c86dbc6237bb321b0d29d/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "16570602756",      image: "https://tr.rbxcdn.com/180DAY-37dac367cbdbbc4c2d19d43415af4aba/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "105101736126764",  image: "https://tr.rbxcdn.com/180DAY-2b38795681f5b821f9fe16c04912d1e6/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "76105119216006",   image: "https://tr.rbxcdn.com/180DAY-7042cb2d551d1c5ffee71d4ecbb13d39/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "114499831108202",  image: "https://tr.rbxcdn.com/180DAY-8f173ad50498bf89984ca175db4ad8f3/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",   id: "135506916870785",  image: "https://tr.rbxcdn.com/180DAY-2cdaf572adc6b9296fac49099680cb45/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "epic",     id: "13433250227",      image: "https://tr.rbxcdn.com/180DAY-4cf12a193413c791dc81d1944cc1a678/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",     id: "93604871172898",   image: "https://tr.rbxcdn.com/180DAY-715ce17432db06ff5afd2928c29adbfb/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",     id: "137845197037280",  image: "https://tr.rbxcdn.com/180DAY-5a55a7a7f454c87e922d3f6beeefa5cf/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",     id: "13935245386",      image: "https://tr.rbxcdn.com/180DAY-61345cb12320ca0e44d7ff9ffa9e404e/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",     id: "81925899554541",   image: "https://tr.rbxcdn.com/180DAY-03f67b5e86364d8e8defde592e2940fa/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",     id: "75270474148686",   image: "https://tr.rbxcdn.com/180DAY-e0989480bce7fd166f84142209ac1cfd/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "legend",   id: "116773763268018",  image: "https://tr.rbxcdn.com/180DAY-3058f61a895766f551713f791f08a5a9/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",   id: "97042702952729",   image: "https://tr.rbxcdn.com/180DAY-a8838aa3c1b07ecbb554b213151b45c2/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",   id: "122489049429835",  image: "https://tr.rbxcdn.com/180DAY-602a69490f11084a8f75df2f2e836309/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",   id: "89956792470838",   image: "https://tr.rbxcdn.com/180DAY-548be7ecf39d1ae31b27be14fdff9e8c/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "unknown",  id: "107130020643137",  image: "https://tr.rbxcdn.com/180DAY-ecc4b8916cd6ac096faedffb1c125afd/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown",  id: "120448962369730",  image: "https://tr.rbxcdn.com/180DAY-c908148f0cf3bcb487510486a2fcf11b/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown",  id: "110776323179739",  image: "https://tr.rbxcdn.com/180DAY-1184fb78704dce069df60a74387fe5ea/420/420/HairAccessory/Webp/noFilter" }
      ]
    },
    SHARED.hairColor,   /* ← shared */
    {
      group: "Appearance", type: "item", id: "faceType",
      title: "Face Type", subtitle: "Tipe Wajah", icon: "faceType",
      placeholder: "faceType",
      items: [
        { rarity: "common",  id: "11583760760100",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-5B83C43DD130A097A20C1F6C57137362-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "256851429792313",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-8E00D9245E8E744C25A8C8C1BC2CA928-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "22725999359559",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F37AC947AC601872861D3666D114D30B-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "44020313085826",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-10A0373E801D15CEE0F985388E692BC7-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "95784339890657",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-150598BA9DB28260F125B9648C296724-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "161241879657544",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-38FEC40A80C2118C575176638113F013-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "53224926960513",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F95790BE952B578BF732CD054505A6EF-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "268965847271848",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F327962A4DD82E743EE7FE3B17DBA206-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "185212294670299",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-185697E546568F915D619D55AE987730-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "265754584674801",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-19ED28E3C43E156E3386C79105F13E92-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "common",  id: "112514393458701",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-169723185E27C3D24DCD665713AA559E-Png/420/420/DynamicHeadCostume/Webp/noFilter" },

        { rarity: "uncommon", id: "252076912784258",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-2DD389D5EB783EA38129BB646A0BAB94-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "130870535373154",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-6644804CDF6F047B300C8F10B5551350-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "51375453653771",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-6EC939909A31160C9CBAECB8401C35A4-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "57473199482519",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-25498302B3A4AE06D3C0FED0FDBA5E71-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "42126527656696",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-D7A1B847FE7FB7E97B0B9B7722135697-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "272802185373502",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-EDDF454F52DBFCD9488D58CB90ECAFB5-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "109048364396406",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-EA349816283237C5839CD0C2F3B1ECC7-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "656605033099",      image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-9903E5BDEE2D29030CE433DF7364BC64-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "138559000258933",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-50DC3A61B838C200EEDB597179E3EA87-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "180754292842746",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-67B03A107B6EE0CA955A0E1B90E3B212-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "111801399183993",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-B92BFE0D196157C132D43AC65B15E780-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "166992521532318",   image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-64550B2E8695AD2D71F04353A05A27DD-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "uncommon", id: "37142964334427",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-273D1AB5FCBE4803CD83F71C687FC0CC-Png/420/420/DynamicHeadCostume/Webp/noFilter" },

        { rarity: "epic",    id: "81849591245674",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-2CB66B859FA0790EE2E715E913CF7267-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "27642975705960",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-6E2E8FD9F9B8865AE321C1270348117F-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "67601148648881",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-AEFE5E1497BBF81D4224E315A9EB3F29-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "274925626722860",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-3B64EA3E0D890D90AE540FD70B0773D0-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "118566448176438",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-08A81160927F2D84A88AC87B2CC06315-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "178619723024675",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-B20B1D6FEDB0B5CA21ED733FD58C4397-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "epic",    id: "133986397440473",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-A8C5C03AE10FEAF7285014C745BEDB0B-Png/420/420/DynamicHeadCostume/Webp/noFilter" },

        { rarity: "legend",  id: "197838314204572",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-90D401A8BA03FA7789ED32498545B400-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "legend",  id: "186755253423235",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-E372C959BC0AD86530CA6C53FA185C43-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "legend",  id: "109998699381967",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-F56576B0BF2237BB2E35E13292161D85-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "legend",  id: "61333727917164",     image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-0AEF7AF207A131CBB0001B6814722B70-Png/420/420/DynamicHeadCostume/Webp/noFilter" },

        { rarity: "unknown", id: "151823904142846",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-86A2669651457BC3C0B389C31ECDE9F9-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "unknown", id: "246537082958947",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-8F892B9B2159170056FE05B5F08F0F4B-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "unknown", id: "159093635943509",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-36EB199674C373005E70C70A05500EFE-Png/420/420/DynamicHeadCostume/Webp/noFilter" },
        { rarity: "unknown", id: "202798311707123",    image: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-3B2AADF8CE77998B7E4E3C5789359AE7-Png/420/420/DynamicHeadCostume/Webp/noFilter" }
      ]
    },
{
  group: "Appearance", type: "uniform", id: "uniform",
  title: "Uniform", subtitle: "Shirt + Pants (Satu Set)", icon: "uniform",
  placeholder: { shirt: "shirt", pants: "pants" },
  items: [
    { rarity: "common", name: "Scout Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "uncommon", name: "Ranger Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "epic", name: "Phantom Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "legend", name: "Titan Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "unknown", name: "Mystery Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } }
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
    SHARED.lastName,   /* ← shared */
    SHARED.role,       /* ← shared */

    /* ===== APPEARANCE ===== */
    SHARED.height,      /* ← shared */
    SHARED.skinColor,   /* ← shared */
    {
      group: "Appearance", type: "item", id: "hair",
      title: "Hair", subtitle: "Model Rambut", icon: "hair",
      placeholder: "hair",
      items: [
        { rarity: "common",  id: "87784309291727",   image: "https://tr.rbxcdn.com/180DAY-ef14ebca6cb6a00506e4b064105f8b6d/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",  id: "135382873245833",  image: "https://tr.rbxcdn.com/180DAY-4acf97654ee952482ef2b6d20ee60722/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",  id: "97649363988041",   image: "https://tr.rbxcdn.com/180DAY-9a51e905bb71638e190f83b1529e4be4/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",  id: "104776877071943",  image: "https://tr.rbxcdn.com/180DAY-2f2c3ab2fd5df29ee1eb89f95381f0b4/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",  id: "112554809329810",  image: "https://tr.rbxcdn.com/180DAY-37ddfca48d297c688271cceefae7b5a6/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",  id: "95425888449823",   image: "https://tr.rbxcdn.com/180DAY-64bb109f6716f7b44ef0dca606075cc8/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "common",  id: "98501800045993",   image: "https://tr.rbxcdn.com/180DAY-8f081c56e08ea89087a4cb1710dd98a9/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "epic",    id: "114611379142505",  image: "https://tr.rbxcdn.com/180DAY-969481a0a992364fba185f9247dd48e3/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",    id: "140614902520941",  image: "https://tr.rbxcdn.com/180DAY-2a926d1c48a1fe514d531fd576fd8cca/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",    id: "84326145159482",   image: "https://tr.rbxcdn.com/180DAY-167316fd6c0ef910193080420120b87b/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",    id: "120761274498723",  image: "https://tr.rbxcdn.com/180DAY-b83773c4cfa7f82723558a6d58286206/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",    id: "94225724558831",   image: "https://tr.rbxcdn.com/180DAY-c2746ec2bf858e53dcc7825fce3ce1b4/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "epic",    id: "17332551736",      image: "https://tr.rbxcdn.com/180DAY-83ae00c5765a9eaca7a46e020e7a6367/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "legend",  id: "94135626453568",   image: "https://tr.rbxcdn.com/180DAY-89b679ca0ce32e621f58e3af9ce01f61/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",  id: "135994124276740",  image: "https://tr.rbxcdn.com/180DAY-4559011b24fe4c06b44d17a2551d5c57/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",  id: "17106647465",      image: "https://tr.rbxcdn.com/180DAY-eace72d77c0f859c05f0eab4442321b0/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "legend",  id: "88118574638792",   image: "https://tr.rbxcdn.com/180DAY-86ea15bc085a704b404898a8c6858d30/420/420/HairAccessory/Webp/noFilter" },

        { rarity: "unknown", id: "131080731142073",  image: "https://tr.rbxcdn.com/180DAY-c7813d0fd201ea2efb14fd41747442af/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown", id: "96548342486704",   image: "https://tr.rbxcdn.com/180DAY-70807d7dda248ec3ad9a90fc80d50e52/420/420/HairAccessory/Webp/noFilter" },
        { rarity: "unknown", id: "82697008499457",   image: "https://tr.rbxcdn.com/180DAY-dc78ef7c55597549d5b928e25e295416/420/420/HairAccessory/Webp/noFilter" }
      ]
    },
    SHARED.hairColor,   /* ← shared */
{
  group: "Appearance", type: "item", id: "faceType",
  title: "Face Type", subtitle: "Tipe Wajah", icon: "faceType",
  placeholder: "faceType",
  items: [
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },
    { rarity: "common",  id: "", image: "" },

    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },
    { rarity: "uncommon", id: "", image: "" },

    { rarity: "epic",    id: "", image: "" },
    { rarity: "epic",    id: "", image: "" },
    { rarity: "epic",    id: "", image: "" },
    { rarity: "epic",    id: "", image: "" },
    { rarity: "epic",    id: "", image: "" },
    { rarity: "epic",    id: "", image: "" },
    { rarity: "epic",    id: "", image: "" },

    { rarity: "legend",  id: "", image: "" },
    { rarity: "legend",  id: "", image: "" },
    { rarity: "legend",  id: "", image: "" },
    { rarity: "legend",  id: "", image: "" },

    { rarity: "unknown", id: "", image: "" },
    { rarity: "unknown", id: "", image: "" },
    { rarity: "unknown", id: "", image: "" },
    { rarity: "unknown", id: "", image: "" }
  ]
},
{
  group: "Appearance", type: "uniform", id: "uniform",
  title: "Uniform", subtitle: "Shirt + Pants (Satu Set)", icon: "uniform",
  placeholder: { shirt: "shirt", pants: "pants" },
  items: [
    { rarity: "common", name: "Scout Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "uncommon", name: "Ranger Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "epic", name: "Phantom Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "legend", name: "Titan Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } },

    { rarity: "unknown", name: "Mystery Set",
      shirt: { id: "", image: "" },
      pants: { id: "", image: "" } }
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