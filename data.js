/* ============================================================
   DATA LIBRARY — Speech to Content by Kniaconnect
   Semua statis, tanpa AI, tanpa biaya. Edit file ini kapan aja
   buat nambah/ubah hook, template, atau kombinasi ide — nggak
   perlu sentuh index.html sama sekali.
   ============================================================ */

const FORMATS = ["Reels","TikTok","YouTube","Carousel","Story"];
const CAT_COLORS = ['#98453e','#c9776a','#6d2520','#d6a29a','#8a5a48','#b56357','#5c3a34','#e0a99f'];

const HOOKS_60 = [
  {name:"Relatable",desc:"Bikin audiens langsung bilang 'ini aku banget'.",items:["Aku buang 2 tahun buat belajar ini","Andai ada yang kasih tau aku dari dulu","Nggak ada yang ngingetin aku soal ini","Kalau mulai dari awal lagi, ini yang bakal aku lakuin","Akhirnya aku nemuin jawabannya","Ini yang butuh waktu lama banget buat aku pelajarin","Aku juga dulu struggle sama ini","Satu keputusan yang ubah masa depan aku","Ini yang bikin aku lebih disiplin","Kalau kamu lagi ngerasa lost, baca ini","Aku belajar ini dengan cara yang susah","Ini yang bikin aku tetep fokus"]},
  {name:"Curiosity Gap",desc:"Buka celah info yang bikin penasaran.",items:["Nggak ada yang ngomongin ini...","Internet bohongin kamu soal...","Kedengerannya kayak ga mungkin, tapi ini beneran works","Ini alasan kenapa orang stuck di situ-situ aja","Ini bagian yang nggak pernah ditunjukin orang","Kebanyakan creator ngelewatin ini","Nggak ada yang nyangka hasilnya bakal gini","Strategi ini underrated banget","Kamu mungkin lagi ngabaikan ini","Ini alasan kenapa kamu ngerasa nggak termotivasi"]},
  {name:"Urgency",desc:"Maksa perhatian saat ini juga.",items:["Baca ini dulu sebelum mulai","Jangan lakuin kesalahan pemula ini","Ini tanda buat kamu mulai","Kamu perlu denger ini hari ini","Mulai dari ini dulu"]},
  {name:"Value Promise",desc:"Janji hemat waktu / hasil jelas.",items:["Ini yang langsung ubah mindset aku","Satu kebiasaan ini yang ubah semuanya","Biar aku hemat waktu kamu","Perubahan kecil. Hasil gede.","Kamu cuma butuh 10 menit buat ini","Ini bisa benerin konsistensi kamu","Simpen ini buat nanti","Ini bakal bikin hidup kamu lebih gampang","Ini cara yang lebih smart buat ngelakuinnya","Ini cara simplify semuanya","Ini game changer yang sebenernya","Ini yang hemat waktu aku berjam-jam tiap minggu","Satu mindset shift ini yang paling penting"]},
  {name:"Contrarian / Myth-Busting",desc:"Bongkar mitos, ambil sisi berlawanan.",items:["Kamu bikin ini makin susah dari yang sebenarnya","Kamu ga butuh motivasi, tapi kamu butuh ini","Berhenti niru orang lain","Kebiasaan ini yang ngerusak progress kamu","Lakuin ini daripada overthinking","Ini lebih penting daripada bakat"]},
  {name:"Social Proof",desc:"Kredibilitas & hasil nyata.",items:["Trik ini works tiap kali dicoba","Aku coba sendiri dan buktiin ini","Ini yang beneran works","Aku sendiri nggak nyangka ini bisa works","Aku berhenti ngelakuin ini dan langsung improve","Ini yang bikin aku lebih produktif dalam semalam"]},
  {name:"Motivational",desc:"Dorongan semangat buat mulai aksi.",items:["Kamu lebih deket dari yang kamu kira","Kebanyakan orang nyerah terlalu cepat","Coba ini dulu sebelum nyerah","Diri kamu di masa depan bakal berterima kasih","Bagian tersusah itu cuma di awal mulainya"]},
  {name:"Reassurance",desc:"Rasa tenang, validasi belum sempurna.",items:["Kamu nggak perlu sempurna","Ini works walaupun kamu lagi males"]}
];

const VIRAL_TEMPLATES = [
  {type:"The Admission",tpl:"Aku salah soal [X]. Ini yang baru aku sadar."},
  {type:"The Insight",tpl:"Ini yang aku pelajarin soal [X] — ternyata nggak banyak yang tau."},
  {type:"The Warning",tpl:"Stop anggap remeh [X]. Ini akibatnya kalau kamu terusin."},
  {type:"The Exposé",tpl:"Nggak ada yang cerita soal sisi gelap [X]. Sampai sekarang."},
  {type:"The Result",tpl:"Ini yang kejadian pas aku coba [X]."},
  {type:"The Prediction",tpl:"[X] bakal berubah total. Ini alasan aku yakin banget."},
  {type:"The Challenge",tpl:"Kebanyakan orang nggak paham soal [X]. Kamu gimana?"},
  {type:"The Reframe",tpl:"Yang orang kira soal [X] itu salah. Faktanya beda jauh."},
  {type:"The Gap",tpl:"Bedanya orang yang paham [X] sama yang nggak cuma satu hal ini."},
  {type:"The Confession",tpl:"Aku belum pernah cerita ini ke siapa-siapa soal [X]."}
];

const AXIS_TOPIC = ["Kesalahan umum","Kisah tersembunyi","Rahasia industri","Bedah tren","Di balik layar","Prediksi masa depan","Studi kasus nyata","Keyakinan umum"];
const AXIS_ANGLE = ["Sudut pandang berlawanan","Pengakuan pribadi","Ahli vs pemula","Mitos vs fakta","Data / riset mengejutkan","Dulu vs sekarang","Devil's advocate","Plot twist 'ternyata...'"];
const AXIS_FORMAT = ["List bernomor","Before / after","Tutorial step-by-step","Opini berani","Alur cerita 3 babak","Ajak polling / debat","Reaksi ke topik hangat","Panduan lengkap"];

const CHECKLIST = [
  {key:"emotion",label:"Bikin orang ngerasa sesuatu — kaget, kesel, seneng, takjub?"},
  {key:"identity",label:"Nunjukkin sesuatu tentang siapa yang nge-share ini?"},
  {key:"utility",label:"Kasih keuntungan yang orang pengen bagiin ke orang lain?"},
  {key:"novelty",label:"Ada hal yang beneran belum pernah mereka liat?"},
  {key:"tension",label:"Ada konflik, kontras, atau twist yang beda dari dugaan?"}
];
