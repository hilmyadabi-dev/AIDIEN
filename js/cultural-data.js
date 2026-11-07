

const AKSARA_CULTURES = [
  {
    id: "batik-megamendung",
    name: "Batik Megamendung",
    category: "wastra",
    categoryLabel: "Seni Kriya & Wastra",
    region: "jawa",
    regionLabel: "Cirebon, Jawa Barat",
    image: "assets/images/batik-megamendung.jpg",
    shortDesc: "Motif awan berlapis khas Cirebon dengan gradasi warna yang melambangkan ketenangan jiwa dan keluhuran budi pekerti.",
    unescoStatus: "Warisan Budaya Takbenda UNESCO (2009)",
    history: "Batik Megamendung berakar dari masa keemasan Kesultanan Cirebon pada abad ke-16, ketika Sunan Gunung Jati memperistri Putri Ong Tien dari Tiongkok. Pernikahan ini memicu pertukaran budaya yang sangat harmonis: motif awan khas Daois Tiongkok yang melambangkan keabadian diolah kembali oleh para pembatik keraton Cirebon dengan sentuhan nilai tasawuf Islam dan kearifan Jawa pesisiran.",
    philosophy: "Megamendung tersusun atas gradasi tujuh lapis warna yang merepresentasikan tujuh tingkatan langit dalam kosmologi spiritual. Awan pembawa hujan bermakna pembawa kesuburan, kehidupan, dan berkah. Bentuk garis lengkungnya mengajarkan manusia untuk senantiasa menahan amarah, bersikap teduh, berjiwa lapang, dan menjadi penyejuk di tengah dinamika masyarakat.",
    traditionalCraft: "Dikerjakan dengan teknik batik tulis menggunakan canting tembaga berujung halus dan malam alami di atas kain mori primisima. Pewarnaan dilakukan dengan teknik celup bertingkat (gradasi) yang membutuhkan keahlian tinggi agar batas antar-warna tetap lembut tanpa gradasi yang terputus.",
    tags: ["Batik", "Cirebon", "UNESCO", "Akulturasi", "Kriya Tekstil"]
  },
  {
    id: "tari-saman",
    name: "Tari Saman",
    category: "pertunjukan",
    categoryLabel: "Tari & Pertunjukan",
    region: "sumatera",
    regionLabel: "Gayo, Aceh",
    image: "assets/images/tari-saman.jpg",
    shortDesc: "Tarian seribu tangan suku Gayo yang mengandalkan keharmonisan gerak, tepukan dada, dan lantunan syair penuh makna.",
    unescoStatus: "Warisan Budaya Mendesak UNESCO (2011)",
    history: "Diciptakan dan dikembangkan oleh ulama besar Syekh Saman pada abad ke-14 Masehi di Dataran Tinggi Gayo. Tarian ini awalnya dimainkan untuk merayakan hari-hari besar Islam dan menyebarkan pesan moralitas, keagamaan, serta mempererat tali persaudaraan antar-desa yang sebelumnya berselisih.",
    philosophy: "Tari Saman ditarikan tanpa iringan alat musik melodis, hanya dipandu oleh nyanyian sang penuntun (Syekh) serta paduan tepukan tangan ke dada, paha, dan lantai. Sinkronisasi mutlak dalam kecepatan tinggi ini melambangkan kesatuan tekad, kebersamaan kolektif, kerendahan hati, dan ketertundukan manusia di hadapan Sang Khalik.",
    traditionalCraft: "Para penari mengenakan busana adat Gayo berupa baju kantong berhiaskan sulaman kerawang bermotif 'pucuk rebung' dan 'tali puter plenting', dilengkapi dengan tengkuluk (penutup kepala) yang mencerminkan keteguhan karakter pria Gayo.",
    tags: ["Tari Tradisional", "Gayo", "Aceh", "UNESCO", "Seni Vokal"]
  },
  {
    id: "wayang-kulit",
    name: "Wayang Kulit Purwa",
    category: "pertunjukan",
    categoryLabel: "Tari & Pertunjukan",
    region: "jawa",
    regionLabel: "Jawa Tengah & DI Yogyakarta",
    image: "assets/images/wayang-kulit.jpg",
    shortDesc: "Seni pertunjukan bayangan kulit kerbau purba yang membedah filsafat kehidupan manusia melalui lakon epos dan punakawan.",
    unescoStatus: "Karya Agung Budaya Lisan UNESCO (2003)",
    history: "Keberadaan wayang telah tercatat dalam Prasasti Balitung bertarikh 907 Masehi pada masa Kerajaan Mataram Kuno. Pada abad ke-15, Walisongo (khususnya Sunan Kalijaga) menyempurnakan bentuk wayang dari relief batu menjadi figur kulit stilistik berlubang halus, sekaligus memperkenalkan tokoh Semar, Petruk, Gareng, dan Bagong sebagai simbol rakyat jelata yang arif.",
    philosophy: "Kelir (layar putih) melambangkan alam semesta tempat manusia berikhtiar. Blencong (lampu minyak) melambangkan cahaya ilahi sumber kehidupan. Bayangan wayang adalah perlambang jasad jasmani yang fana, sedangkan dalang adalah representasi Sang Penata Kehidupan yang menggerakkan takdir.",
    traditionalCraft: "Dibuat dari kulit kerbau muda yang diproses tatah sungging (diukir dengan puluhan jenis pahat baja mini) dan diwarnai dengan pigmen alami serta prada emas 24 karat. Gagang wayang (cempurit) dipahat dari tanduk kerbau bule yang melengkung indah.",
    tags: ["Wayang", "Jawa", "UNESCO", "Sastra Lisan", "Filsafat"]
  },
  {
    id: "rumah-gadang",
    name: "Rumah Gadang",
    category: "arsitektur",
    categoryLabel: "Arsitektur Vernakular",
    region: "sumatera",
    regionLabel: "Minangkabau, Sumatera Barat",
    image: "assets/images/rumah-gadang.jpg",
    shortDesc: "Arsitektur tahan gempa matrilineal dengan atap gonjong bertingkat yang menjulang menyerupai tanduk kerbau pemenang.",
    unescoStatus: "Cagar Budaya Nasional & Pusat Adat Minang",
    history: "Rumah Gadang telah berevolusi selama berabad-abad dalam masyarakat Minangkabau yang menganut falsafah 'Adat Basandi Syarak, Syarak Basandi Kitabullah'. Rumah ini dimiliki secara komunal oleh kaum ibu dan diwariskan dari garis keturunan perempuan, menjadikannya simbol kekuatan kaum perempuan Minang.",
    philosophy: "Atap gonjong yang meliuk ke angkasa mengingatkan manusia pada Sang Pencipta, sekaligus mengenang kemenangan kerbau kecil Minang dalam perselisihan wilayah purba. Falsafah 'Alam Takambang Jadi Guru' tercermin dalam ukiran dinding bermotif pakis, bunga teratai, dan daun sirih yang mengajarkan keharmonisan dengan alam raya.",
    traditionalCraft: "Dibangun tanpa menggunakan paku besi satu pun. Semua sambungan menggunakan teknik pasak kayu dan purus elastis. Tiang-tiang utama tidak ditanam ke dalam tanah melainkan diletakkan di atas batu pipih datar (*sandi*), sehingga struktur rumah dapat meredam gelombang gempa tektonik secara fleksibel.",
    tags: ["Arsitektur", "Minangkabau", "Sumatera", "Matrilineal", "Tahan Gempa"]
  },
  {
    id: "tari-legong",
    name: "Tari Legong Keraton",
    category: "pertunjukan",
    categoryLabel: "Tari & Pertunjukan",
    region: "bali-nusa",
    regionLabel: "Gianyar & Denpasar, Bali",
    image: "assets/images/tari-legong.jpg",
    shortDesc: "Puncak keanggunan seni tari klasik keraton Bali dengan gerak mata seledet yang tajam dan lentik jemari penuh ekspresi.",
    unescoStatus: "Warisan Budaya Takbenda UNESCO (2015)",
    history: "Lahir pada akhir abad ke-18 di Puri Sukawati, Gianyar. Berdasarkan babad lisan, Pangeran Arya Wirabuana bermeditasi dan bermimpi melihat bidadari surga turun menari dengan gerakan yang sangat lembut diiringi alunan gamelan. Seketika bangun, beliau memerintahkan dalang dan penabuh keraton untuk merekonstruksi tarian surgawi tersebut.",
    philosophy: "Legong berasal dari kata 'Leg' (kelenturan gerak) dan 'Gong' (gamelan pengiring). Tarian ini mengekspresikan pemujaan terhadap keindahan surgawi, keselarasan mikro dan makrokosmos, serta kemampuan mengendalikan hawa nafsu duniawi melalui disiplin tubuh yang sangat presisi.",
    traditionalCraft: "Penari mengenakan mahkota gelungan yang terbuat dari kulit sapi berukir prada emas yang disematkan puluhan kuntum bunga kamboja (jepun) segar. Kain yang digunakan adalah tenun sutra prada khas Bali dengan warna merah tua, kuning keemasan, dan ungu.",
    tags: ["Tari Legong", "Bali", "UNESCO", "Seni Klasik", "Keraton"]
  },
  {
    id: "tongkonan-toraja",
    name: "Tongkonan Toraja",
    category: "arsitektur",
    categoryLabel: "Arsitektur Vernakular",
    region: "sulawesi",
    regionLabel: "Tana Toraja, Sulawesi Selatan",
    image: "assets/images/tongkonan-toraja.jpg",
    shortDesc: "Rumah adat perahu leluhur dengan deretan tanduk kerbau pada tiang utama sebagai lambang kehormatan dan persaudaraan marga.",
    unescoStatus: "Tentative List Warisan Dunia UNESCO",
    history: "Menurut mitologi masyarakat Toraja, Tongkonan pertama kali dibangun di surga oleh Puang Matua (Sang Pencipta) dengan bertiangkan empat tiang utama. Leluhur Toraja kemudian mereplika bangunan perahu yang mereka gunakan saat berlayar mengarungi samudra sebelum menetap di pegunungan Sulawesi.",
    philosophy: "Tongkonan bukan sekadar tempat bernaung, melainkan rahim spiritual marga (*pa'rapuan*). Tiang utama (*tulak somba*) yang dipasangi susunan tanduk kerbau melambangkan status kedermawanan dan banyaknya upacara adat Rambu Solo' yang telah diselenggarakan keluarga besar. Orientasi atap selalu menghadap utara, arah angin kehidupan.",
    traditionalCraft: "Atap disusun dari ribuan bilah bambu betung pilihan yang dilengkungkan tanpa perekat modern. Dinding kayu jati berukir pahatan ragam hias pa'ssura dengan empat warna sakral alami: hitam (arang), merah (tanah liat), kuning (kunyit/batu oker), dan putih (kapur sirih).",
    tags: ["Tongkonan", "Toraja", "Sulawesi", "Arsitektur Kayu", "Kosmologi"]
  },
  {
    id: "sasando-rote",
    name: "Sasando Rote",
    category: "musik",
    categoryLabel: "Instrumen Musik",
    region: "bali-nusa",
    regionLabel: "Pulau Rote, Nusa Tenggara Timur",
    image: "assets/images/sasando-rote.jpg",
    galleryImage: "assets/images/sasando-rote-gallery.jpg",
    shortDesc: "Alat musik petik dawai berdinding lontar yang menghasilkan resonansi nada magis pengiring syair tutur masyarakat Rote.",
    unescoStatus: "Warisan Budaya Takbenda Nasional",
    history: "Tercatat dalam cerita rakyat Sangguana pada abad ke-7 Masehi. Tokoh Sangguana terdampar di Pulau Ndana dan diuji oleh raja setempat untuk menciptakan instrumen yang belum pernah ada di dunia. Terinspirasi oleh sarang laba-laba yang berdengung saat ditiup angin laut, ia merakit bambu dan daun lontar menjadi Sasando.",
    philosophy: "Masyarakat Rote memiliki keterikatan hidup yang tak terpisahkan dengan pohon lontar (Borassus flabellifer). Sasando merupakan bukti kepiawaian nenek moyang dalam mengolah anugerah alam menjadi mahakarya akustik yang mengiringi daur hidup manusia dari kelahiran hingga pemakaman.",
    traditionalCraft: "Resonator utama dibuat dari daun lontar tua yang dijemur dan dilipat menyerupai kipas melingkar setengah bola (*haik*). Bagian tabung terbuat dari bambu hutan kering tempat menancapkan pasak kayu dan senar tembaga/baja yang dapat disetem dalam tangga nada pentatonik maupun diatonik.",
    tags: ["Sasando", "Rote", "NTT", "Alat Musik", "Lontar"]
  },
  {
    id: "noken-papua",
    name: "Noken Tradisional",
    category: "wastra",
    categoryLabel: "Seni Kriya & Wastra",
    region: "papua",
    regionLabel: "Dataran Tinggi Papua",
    image: "assets/images/noken-papua.jpg",
    galleryImage: "assets/images/noken-tradisional-gallery.jpg",
    shortDesc: "Tas rajut serat kayu hutan yang digantung di kepala, lambang ketulusan rahim ibu dan kearifan ekologis suku Papua.",
    unescoStatus: "Warisan Budaya Mendesak UNESCO (2012)",
    history: "Tradisi membuat Noken telah diwariskan lebih dari 250 kelompok suku di tanah Papua sejak ribuan tahun silam. Noken memegang peran penting dalam struktur sosial: seorang perempuan muda Papua belum dianggap siap menikah sebelum mahir merajut Noken sendiri.",
    philosophy: "Dikenakan dengan cara menyangkutkan talinya pada dahi dan kantong menjuntai di punggung. Posisi ini melambangkan rahim ibu yang menggendong kehidupan dengan penuh kasih sayang, kejujuran, dan ketabahan. Noken juga difungsikan sebagai mediator perdamaian antar-suku dan kotak suara dalam pemilu adat.",
    traditionalCraft: "Dianyam dari serat kulit pohon manduam atau melinjo yang dipukul-pukul, direndam air sungai, dikeringkan, lalu dipilin menjadi benang yang sangat kuat. Noken anggrek menggunakan serat batang anggrek hutan berwarna kuning keemasan alami tanpa pewarna kimia.",
    tags: ["Noken", "Papua", "UNESCO", "Anyaman", "Ekologi"]
  },
  {
    id: "candi-borobudur",
    name: "Candi Borobudur",
    category: "arsitektur",
    categoryLabel: "Arsitektur Vernakular & Monumen",
    region: "jawa",
    regionLabel: "Magelang, Jawa Tengah",
    image: "assets/images/candi-borobudur.jpg",
    shortDesc: "Monumen stupa mandala Buddha terbesar di dunia peninggalan Dinasti Syailendra yang sarat relief falsafah pencerahan.",
    unescoStatus: "Situs Warisan Dunia UNESCO (1991)",
    history: "Dibangun pada rentang tahun 780–840 Masehi oleh Dinasti Syailendra di bawah arahan arsitek legendaris Gunadharma. Terkubur selama berabad-abad di bawah lapisan abu vulkanik Gunung Merapi dan rimba belantara sebelum ditemukan kembali dan direstorasi secara kolosal.",
    philosophy: "Tata ruang candi berbentuk stupa mandala tiga tingkat: Kamadhatu (alam hasrat rendah manusia), Rupadhatu (alam wujud tempat manusia mulai meninggalkan hawa nafsu), dan Arupadhatu (tiga teras melingkar tak berdinding menuju stupa induk, lambang kesunyataan nirwana mutlak).",
    traditionalCraft: "Disusun dari sekitar 2 juta bongkahan batu andesit vulkanik seberat total ribuan ton tanpa menggunakan semen atau perekat mortar. Setiap batu dipahat dengan sistem kuncian interlock ekor burung (dovetail joints) yang sangat presisi.",
    tags: ["Borobudur", "Jawa Tengah", "UNESCO", "Batu Andesit", "Arsitektur"]
  },
  {
    id: "gamelan-jawa",
    name: "Gamelan Ageng",
    category: "musik",
    categoryLabel: "Instrumen Musik",
    region: "jawa",
    regionLabel: "Surakarta & Yogyakarta",
    image: "assets/images/gamelan-jawa.jpg",
    galleryImage: "assets/images/gamelan-ageng-gallery.jpg",
    shortDesc: "Ansambel orkestra perunggu adiluhung yang mengedepankan keselarasan kolektif tanpa ada satu pun instrumen yang mendominasi.",
    unescoStatus: "Warisan Budaya Takbenda UNESCO (2021)",
    history: "Relief ansambel gamelan telah diabadikan di dinding Candi Borobudur dan Prambanan sejak abad ke-8. Gamelan berkembang mencapai bentuk orkestra paripurna (Gamelan Ageng) pada masa Kesultanan Mataram Islam dan keraton penerusnya di Surakarta dan Yogyakarta.",
    philosophy: "Filosofi 'Guyub Rukun' dan 'Tepo Seliro'. Tidak ada instrumen yang berlaku sebagai solois egois; gong ageng yang bersuara paling dalam dan jarang justru menjadi pengunci kosmik dan penyelaras seluruh melodi. Menuntun jiwa pendengarnya menuju keheningan batin (*eling lan waspada*).",
    traditionalCraft: "Ditempa oleh pandai besi khusus (*empu besalen*) menggunakan paduan perunggu mulia (10 bagian tembaga dan 3 bagian timah murni). Rancakan (dudukan kayu) diukir dari kayu jati tua berpelitur prada emas dengan motif lung-lungan flora.",
    tags: ["Gamelan", "Jawa", "UNESCO", "Orkestra Tradisional", "Perunggu"]
  },
  {
    id: "tenun-sumba",
    name: "Tenun Ikat Sumba",
    category: "wastra",
    categoryLabel: "Seni Kriya & Wastra",
    region: "bali-nusa",
    regionLabel: "Sumba Timur, Nusa Tenggara Timur",
    image: "assets/images/tenun-sumba.jpg",
    galleryImage: "assets/images/tenun-ikat-sumba-gallery.png",
    shortDesc: "Wastra sakral bernilai ritual tinggi dengan motif kuda kambera dan tengkorak andung yang ditenun selama berbulan-bulan.",
    unescoStatus: "Warisan Budaya Takbenda Nasional",
    history: "Tradisi tenun ikat Sumba berkaitan erat dengan kepercayaan animisme purba Marapu. Kain tenun (*hinggi* untuk laki-laki, *lau* untuk perempuan) sejak dahulu digunakan sebagai sarana komunikasi dengan arwah leluhur, pembungkus jenazah para raja, serta simbol perdamaian antar-kampung adat.",
    philosophy: "Motif kuda (*njara*) melambangkan keberanian, ketangkasan, dan kendaraan bagi roh leluhur menuju surga Parai Marapu. Motif rusa melambangkan kebijaksanaan, dan motif udang melambangkan kehidupan abadi karena kemampuan berganti kulit.",
    traditionalCraft: "Proses pembuatan membutuhkan waktu antara 6 bulan hingga 3 tahun. Benang kapas dipintal secara manual dan diikat menggunakan tali gewang sebelum dicelup ke dalam pewarna herbal alami: akar pohon mengkudu untuk warna merah marun (*kombu*) dan daun nila untuk warna biru pekat (*wora*).",
    tags: ["Tenun Ikat", "Sumba", "NTT", "Marapu", "Pewarna Alami"]
  }
];

const AKSARA_REGIONS = {
  sumatera: {
    name: "Kepulauan Sumatera",
    title: "Swarnadwipa — Pulau Emas Kebijaksanaan",
    philosophy: "Pusat peradaban maritim Sriwijaya dan kebudayaan adat Minang yang menjunjung tinggi falsafah 'Alam Takambang Jadi Guru' serta semangat religiusitas Samudra Pasai.",
    cultures: ["rumah-gadang", "tari-saman"]
  },
  jawa: {
    name: "Pulau Jawa",
    title: "Jawadwipa — Poros Tradisi Adiluhung",
    philosophy: "Titik temu kosmologi keraton, peradaban candi andesit megah, serta kehalusan budi pekerti yang terefleksikan dalam gradasi Megamendung, Wayang Purwa, dan alunan Gamelan Ageng.",
    cultures: ["batik-megamendung", "wayang-kulit", "candi-borobudur", "gamelan-jawa"]
  },
  "bali-nusa": {
    name: "Bali & Nusa Tenggara",
    title: "Kepulauan Sunda Kecil — Harmoni Manusia, Alam & Sang Pencipta",
    philosophy: "Menjiwai ajaran Tri Hita Karana di Bali serta keterikatan masyarakat NTT dengan pohon lontar Sasando dan tenun ikat Marapu yang menghormati siklus kehidupan.",
    cultures: ["tari-legong", "sasando-rote", "tenun-sumba"]
  },
  kalimantan: {
    name: "Pulau Kalimantan",
    title: "Borneo — Warisan Rimba & Kearifan Rumah Betang",
    philosophy: "Falsafah hidup komunal masyarakat Dayak yang hidup berdampingan dengan hutan tropis tua melalui hukum adat yang menjaga kelestarian flora, fauna, dan sungai.",
    cultures: []
  },
  sulawesi: {
    name: "Pulau Sulawesi",
    title: "Celebes — Penjaga Perahu Leluhur & Pelaut Tangguh",
    philosophy: "Keteguhan tatanan marga Toraja dalam Tongkonan serta kehebatan tradisi bahari Bugis-Makassar dalam mengarungi samudra dengan perahu layar Phinisi.",
    cultures: ["tongkonan-toraja"]
  },
  maluku: {
    name: "Kepulauan Maluku",
    title: "Jazirah Rempah — Jiwa Persaudaraan Pela Gandong",
    philosophy: "Tradisi toleransi persaudaraan sejati lintas agama dan pulau (Pela Gandong), diwarnai oleh semangat Tari Cakalele dan kekayaan tenun Tanimbar.",
    cultures: []
  },
  papua: {
    name: "Tanah Papua",
    title: "Bumi Cendrawasih — Rahim Kasih Ibu & Rimba Suci",
    philosophy: "Keagungan Noken sebagai simbol rahim kehidupan, dipadukan dengan keterampilan seni ukir kayu spiritual suku Asmat yang menghormati arwah nenek moyang.",
    cultures: ["noken-papua"]
  }
};

const AKSARA_TIMELINE = [
  {
    eraId: "pra-aksara",
    title: "Era Pra-Aksara & Tradisi Megalitikum",
    dateRange: "Sebelum Abad ke-4 Masehi",
    image: "assets/images/tongkonan-toraja.jpg",
    summary: "Awal mula kesadaran spiritual nenek moyang nusantara. Seni cadas Leang-Leang Maros, dolmen batu kubur, tradisi megalitikum di Toraja dan Nias, serta perajutan noken purba di rimba Papua.",
    philosophy: "Penghormatan terhadap kekuatan alam dan roh leluhur (*animisme & dinamisme*). Manusia memandang dirinya sebagai bagian tak terpisahkan dari kosmos.",
    artifacts: "Noken Papua, Arsitektur Vernakular Tongkonan, Lukisan Tangan Karst Maros"
  },
  {
    eraId: "klasik-hindu-buddha",
    title: "Era Klasik Kemaharajaan Hindu-Buddha",
    dateRange: "Abad ke-4 – Abad ke-15 Masehi",
    image: "assets/images/candi-borobudur.jpg",
    summary: "Zaman keemasan peradaban maritim Sriwijaya dan kejayaan Majapahit. Pembangunan mahakarya arsitektur Candi Borobudur dan Prambanan, serta permulaan naskah sastra kakawin Jawa Kuno.",
    philosophy: "Konsep kosmis Cakravartin dan Tri Hita Karana. Harmoni mikrokosmos dan makrokosmos yang tertata dalam relief mandala batu andesit.",
    artifacts: "Candi Borobudur, Ansambel Gamelan Purba, Naskah Kakawin Sutasoma (Bhinneka Tunggal Ika)"
  },
  {
    eraId: "kesultanan-islam",
    title: "Era Kesultanan Islam Pesisiran",
    dateRange: "Abad ke-13 – Abad ke-18 Masehi",
    image: "assets/images/batik-megamendung.jpg",
    summary: "Era akulturasi damai melalui perdagangan dan dakwah Walisongo. Lahirnya motif Batik Megamendung di Cirebon, penyempurnaan Wayang Kulit Purwa, dan Tari Saman di tanah Serambi Mekkah.",
    philosophy: "Tasawuf kultural: nilai-nilai ilahi ditanamkan secara santun melalui seni wayang, tembang macapat, dan ragam hias wastra tanpa menghancurkan kearifan lokal yang sudah ada.",
    artifacts: "Batik Megamendung Cirebon, Wayang Kulit Purwa, Tari Saman Gayo"
  },
  {
    eraId: "kolonial-akulturasi",
    title: "Era Perlawanan & Akulturasi Silang",
    dateRange: "Abad ke-16 – Awal Abad ke-20 Masehi",
    image: "assets/images/rumah-gadang.jpg",
    summary: "Dinamika perjumpaan dengan pengaruh Eropa (Portugis, VOC, Hindia Belanda). Benturan kultural melahirkan musik Keroncong Tugu, arsitektur Indis, dan penguatan benteng adat seperti Rumah Gadang Minangkabau.",
    philosophy: "Seni sebagai simbol perlawanan batin dan pelindung kedaulatan identitas bangsa di tengah tekanan kolonial.",
    artifacts: "Arsitektur Rumah Gadang, Musik Sasando Rote, Tenun Ikat Sumba"
  },
  {
    eraId: "kemerdekaan-digital",
    title: "Era Kemerdekaan, Revitalisasi & Masa Depan",
    dateRange: "1945 – Era Kontemporer & Digital",
    image: "assets/images/hero.jpg",
    summary: "Konsolidasi Bhinneka Tunggal Ika sebagai identitas nasional. Gelombang pengakuan Warisan Budaya Takbenda Dunia oleh UNESCO dan inisiatif preservasi digital masa depan AKSARA.",
    philosophy: "Pusaka leluhur bukan sekadar fosil masa lalu di etalase museum, melainkan mata air inspirasi dan panduan etika bagi generasi muda dalam mengarungi era kecerdasan buatan.",
    artifacts: "Penetapan 12+ Warisan UNESCO, Digitalisasi Arsip Pusaka, Gerakan Pelestarian Generasi Z"
  }
];
