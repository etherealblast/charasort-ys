dataSetVersion = "2026-05-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "game",
    tooltip: "Check this to restrict characters from certain games.",
    checked: false,
    sub: [
      { name: "Ys: Origin", key: "Origin" },
      { name: "Ys I: Ancient Ys Vanished", key: "I" },
      { name: "Ys II: Ancient Ys Vanished – The Final Chapter", key: "II" },
      { name: "Ys: The Oath in Felghana", key: "III" },
      { name: "Ys: Memories of Celceta", key: "IV" },
      { name: "Ys V: Lost Kefin, Kingdom of Sand", key: "V" },
      { name: "Ys VI: The Ark of Napishtim", key: "VI" },
      { name: "Ys VI Online", key: "VIOnline" },
      { name: "Ys Seven", key: "VII" },
      { name: "Ys VIII: Lacrimosa of Dana", key: "VIII" },
      { name: "Ys IX: Monstrum Nox", key: "IX" },
      { name: "Ys X: Nordics / Proud Nordics", key: "X" },
      { name: "Ys Strategy", key: "Strategy" }
    ]
  },
  {
    name: "Disable NPC Characters",
    key: "NPC",
    tooltip: "Check this to disable NPC characters.",
    checked: false
  },
  {
    name: "Disable Non-Canon Entry Characters",
    key: "noncanon",
    tooltip: "Check this to disable characters from entries that are not from the current canon timeline.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  // Origin
  {
    name: "Yunica Tovah",
    img: "yunica.jpg",
    opts: {
      game: ["Origin"]
    }
  },
  {
    name: "Hugo Fact",
    img: "hugo.jpg",
    opts: {
      game: ["Origin"]
    }
  },
  {
    name: "Toal Fact",
    img: "toal.jpg",
    opts: {
      game: ["Origin"]
    }
  },
  {
    name: "Reah",
    img: "reah.jpg",
    opts: {
      game: ["Origin", "I", "II"],
      NPC: true
    }
  },
  {
    name: "Feena",
    img: "feena.jpg",
    opts: {
      game: ["Origin", "I", "II"],
      NPC: true
    }
  },
  {
    name: "Father Shion",
    img: "shion.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Eolia",
    img: "eolia.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Dino",
    img: "dino.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Galleon",
    img: "galleon.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Cecilia",
    img: "cecilia.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Ramona",
    img: "ramona.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Roy",
    img: "roy.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Cadena",
    img: "cadena.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Miuscha",
    img: "miuscha.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Rico Gemma",
    img: "rico.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Saul Tovah",
    img: "saul.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Epona",
    img: "epona.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Kishgal",
    img: "kishgal.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Zava",
    img: "zava.jpg",
    opts: {
      game: ["Origin", "II"],
      NPC: true
    }
  },
  {
    name: "Dalles",
    img: "dalles.jpg",
    opts: {
      game: ["Origin", "II"],
      NPC: true
    }
  },
  {
    name: "Darm",
    img: "darm.jpg",
    opts: {
      game: ["Origin", "II"],
      NPC: true
    }
  },
  {
    name: "Cain Fact",
    img: "cain.jpg",
    opts: {
      game: ["Origin", "II"],
      NPC: true
    }
  },
  // Ys I
  {
    name: "Adol Christin",
    img: "adol.jpg",
    opts: {
      game: ["I", "II", "III", "IV", "V", "VI", "VIOnline", "VII", "VIII", "IX", "X"]
    }
  },
  {
    name: "Dogi",
    img: "dogi.jpg",
    opts: {
      game: ["I", "II", "III", "IV", "V", "VI", "VIOnline", "VII", "VIII", "IX", "X"]
    }
  },
  {
    name: "Sara Tovah",
    img: "sara.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Jeba Tovah",
    img: "jeba.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Goban Tovah",
    img: "goban.jpg",
    opts: {
      game: ["I", "II"],
      NPC: true
    }
  },
  {
    name: "Luta Gemma",
    img: "luta.jpg",
    opts: {
      game: ["I", "II"],
      NPC: true
    }
  },
  {
    name: "Raba Gemma",
    img: "raba.jpg",
    opts: {
      game: ["I", "VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Slaff",
    img: "slaff.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Doctor Bludo",
    img: "drbludo.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Nurse Ayla",
    img: "ayla.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Rosetty",
    img: "rosetty.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Dios",
    img: "dios.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Pim",
    img: "pim.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Nurse Lisa",
    img: "lisa.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Mayor Robels",
    img: "robels.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Dark Fact",
    img: "darkfact.jpg",
    opts: {
      game: ["I"],
      NPC: true
    }
  },
  {
    name: "Jeanne",
    img: "jeanne.jpg",
    opts: {
      game: ["I", "II"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Misha",
    img: "misha.jpg",
    opts: {
      game: ["I", "II"],
      NPC: true,
      noncanon: true
    }
  },
  // Ys II
  {
    name: "Lilia",
    img: "lilia.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Tarf Hadal",
    img: "tarf.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Keith Fact",
    img: "keith.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Maria Mesa",
    img: "maria.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Gorto Dabbie",
    img: "gorto.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Sada",
    img: "sada.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Hadat",
    img: "hadat.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Flair Rall",
    img: "flair.jpg",
    opts: {
      game: ["II", "X"],
      NPC: true
    }
  },
  {
    name: "Guido",
    img: "guido.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Jade",
    img: "jade.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  {
    name: "Zalem",
    img: "zalem.jpg",
    opts: {
      game: ["II"],
      NPC: true
    }
  },
  // Ys: Oath in Felghana
  {
    name: "Elena Stoddart",
    img: "elena.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Mayor Edgar",
    img: "edgar.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Sister Nell",
    img: "nell.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Father Jean Pierre",
    img: "jeanpierre.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Gardner",
    img: "gardner.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Margo",
    img: "margo.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Joel",
    img: "joel.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Adonis",
    img: "adonis.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Cynthia",
    img: "cynthia.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Randolph",
    img: "randolph.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Antonio",
    img: "antonio.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Aida",
    img: "aida.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Anya",
    img: "anya.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Lochus",
    img: "lochus.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Harold",
    img: "harold.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Fiona (Felghana)",
    img: "fionaiii.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Hugo (Felghana)",
    img: "hugoiii.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Dewey",
    img: "dewey.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Ricardo",
    img: "ricardo.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Paul",
    img: "paul.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Chester Stoddart",
    img: "chester.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Count McGuire",
    img: "countmcguire.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Elizabetha",
    img: "elizabetha.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Alice",
    img: "alice.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Christof",
    img: "christof.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Andre",
    img: "andre.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Fran",
    img: "fran.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Bob",
    img: "bob.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Berhardt",
    img: "berhardt.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Bishop Nikolas Garland",
    img: "bishopnikolas.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  {
    name: "Galbalan",
    img: "galbalan.jpg",
    opts: {
      game: ["III"],
      NPC: true
    }
  },
  // Ys: Memories of Celceta
  {
    name: "Duren",
    img: "duren.jpg",
    opts: {
      game: ["IV"]
    }
  },
  {
    name: "Karna",
    img: "karna.jpg",
    opts: {
      game: ["IV"]
    }
  },
  {
    name: "Ozma",
    img: "ozma.jpg",
    opts: {
      game: ["IV"]
    }
  },
  {
    name: "Calilica",
    img: "calilica.jpg",
    opts: {
      game: ["IV"]
    }
  },
  {
    name: "Frieda",
    img: "frieda.jpg",
    opts: {
      game: ["IV"]
    }
  },
  {
    name: "Leeza",
    img: "leeza.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Eldeel",
    img: "eldeel.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Lefance",
    img: "lefance.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Remnos",
    img: "remnos.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Griselda",
    img: "griselda.jpg",
    opts: {
      game: ["IV", "VIII"],
      NPC: true
    }
  },
  {
    name: "Leo",
    img: "leo.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Sancho",
    img: "sancho.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Panza",
    img: "panza.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Asad",
    img: "asad.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Mayor Aaron",
    img: "mayoraaron.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Vanjo",
    img: "vanjo.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Nina",
    img: "nina.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Sol-Galba",
    img: "solgalba.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Gazock",
    img: "gazock.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Gadis",
    img: "gadis.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Bami",
    img: "bami.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  {
    name: "Gruda",
    img: "gruda.jpg",
    opts: {
      game: ["IV"],
      NPC: true
    }
  },
  // Ys V: Lost Kefin, Kingdom of Sand
  {
    name: "Dios (Ys V)",
    img: "diosv.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Nottis",
    img: "nottis.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Stoker",
    img: "stoker.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Foresta",
    img: "foresta.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Orwell",
    img: "orwell.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Willy",
    img: "willy.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Effey",
    img: "effey.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Neida",
    img: "neida.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Saravat",
    img: "saravat.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Lopora",
    img: "lopora.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Garam",
    img: "garam.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Mujaba",
    img: "mujaba.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "King Kefin",
    img: "kingkefin.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Duke Gateau",
    img: "dukegateau.jpg",
    opts: {
      game: ["V"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Aisha",
    img: "aisha.jpg",
    opts: {
      game: ["V"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Dorman",
    img: "dorman.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Baruq",
    img: "baruq.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Avis",
    img: "avis.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Karion",
    img: "karion.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Rizze",
    img: "rizze.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Jabir",
    img: "jabir.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Niena",
    img: "niena.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Stein",
    img: "stein.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Massea",
    img: "massea.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Alga",
    img: "alga.jpg",
    opts: {
      game: ["V"],
      NPC: true
    }
  },
  {
    name: "Terra",
    img: "terra.jpg",
    opts: {
      game: ["V", "VI"],
      NPC: true
    }
  },
  // Ys VI: The Ark of Napishtim
  {
    name: "Ryug",
    img: "ryug.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Marve",
    img: "marve.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Nahrya",
    img: "nahrya.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Seblo",
    img: "seblo.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Kevin",
    img: "kevin.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Baslam",
    img: "baslam.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Lloyd",
    img: "lloyd.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Xaxon",
    img: "xaxon.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Ur",
    img: "ur.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Leav",
    img: "leav.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Maple",
    img: "maple.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Rose",
    img: "rose.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Emilio",
    img: "emilio.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Croix",
    img: "croix.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Isaac",
    img: "isaac.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Tise",
    img: "tise.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Carmine",
    img: "carmine.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Auguste",
    img: "auguste.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Gazel",
    img: "gazel.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Sophia",
    img: "sophia.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Shea",
    img: "shea.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Sa'ud",
    img: "saud.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Anice",
    img: "anice.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Ladoc",
    img: "ladoc.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Jed",
    img: "jed.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Camara",
    img: "camara.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Mikhail",
    img: "mikhail.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Nguyen",
    img: "nguyen.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Nice",
    img: "nice.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Alma",
    img: "alma.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Geis",
    img: "geis.jpg",
    opts: {
      game: ["VI", "VIOnline", "VII"]
    }
  },
  {
    name: "Jue Brillante",
    img: "jue.jpg",
    opts: {
      game: ["VI", "VIOnline", "VII"],
      NPC: true
    }
  },
  {
    name: "Sera",
    img: "sera.jpg",
    opts: {
      game: ["VI", "VIOnline", "VII"],
      NPC: true
    }
  },
  {
    name: "Xisa",
    img: "xisa.jpg",
    opts: {
      game: ["VI", "VIOnline", "VII"],
      NPC: true
    }
  },
  {
    name: "Admiral Agares",
    img: "agares.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Ernst",
    img: "ernst.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Ark of Napishtim",
    img: "arkofnapishtim.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Crevia",
    img: "crevia.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Kiiro",
    img: "kiiro.jpg",
    opts: {
      game: ["VI"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Adventurer",
    img: "adventurer.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Angela",
    img: "angela.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Faust",
    img: "faust.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Branch",
    img: "branch.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Rola",
    img: "rola.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Lydia",
    img: "lydia.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Duff",
    img: "duff.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Sybil",
    img: "sybil.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Fiona",
    img: "fiona.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Craig",
    img: "craig.jpg",
    opts: {
      game: ["VIOnline"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Lolo",
    img: "lolo.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Mannan",
    img: "mannan.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Attli",
    img: "attli.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Olha",
    img: "olha.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Isha",
    img: "isha.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Ord",
    img: "ord.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Largo",
    img: "largo.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Milca",
    img: "milca.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Rakche",
    img: "rakche.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Toksa",
    img: "toksa.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Sola",
    img: "sola.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Silva",
    img: "silva.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Qval",
    img: "qval.jpg",
    opts: {
      game: ["VI", "VIOnline"],
      NPC: true
    }
  },
  {
    name: "Wenuca",
    img: "wenuca.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  {
    name: "Noi",
    img: "noi.jpg",
    opts: {
      game: ["VI"],
      NPC: true
    }
  },
  // Ys Seven
  {
    name: "Five Dragons of Altago",
    img: "dragons.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Mia",
    img: "mia.jpg",
    opts: {
      game: ["VII"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Scias",
    img: "scias.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Tia",
    img: "tia.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Rul-Ende",
    img: "rulende.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Maya",
    img: "maya.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Kiemarl Sari Edonas",
    img: "kiemarl.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Raud",
    img: "raud.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Fatima",
    img: "fatima.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Ciarius",
    img: "ciarius.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Dreisen",
    img: "dreisen.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Orbus",
    img: "orbus.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Doctor Daleyon",
    img: "doctordaleyon.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Zanzibar",
    img: "zanzibar.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Ursa",
    img: "ursa.jpg",
    opts: {
      game: ["VII"],
      NPC: true
    }
  },
  {
    name: "Aisha Sari Edonas",
    img: "aishavii.jpg",
    opts: {
      game: ["VII"]
    }
  },
  {
    name: "Elk",
    img: "elk.jpg",
    opts: {
      game: ["VII"]
    }
  },
  {
    name: "Cruxie",
    img: "cruxie.jpg",
    opts: {
      game: ["VII"]
    }
  },
  {
    name: "Mishera",
    img: "mishera.jpg",
    opts: {
      game: ["VII"]
    }
  },
  {
    name: "Mustafa",
    img: "mustafa.jpg",
    opts: {
      game: ["VII"]
    }
  },
  {
    name: "Sigroon",
    img: "sigroon.jpg",
    opts: {
      game: ["VII"]
    }
  },
  // Ys VIII: Lacrimosa of Dana
  {
    name: "Laxia von Roswell",
    img: "laxia.jpg",
    opts: {
      game: ["VIII"]
    }
  },
  {
    name: "Sahad Nautilus",
    img: "sahad.jpg",
    opts: {
      game: ["VIII"]
    }
  },
  {
    name: "Hummel Trabaldo",
    img: "hummel.jpg",
    opts: {
      game: ["VIII"]
    }
  },
  {
    name: "Ricotta Beldine",
    img: "ricotta.jpg",
    opts: {
      game: ["VIII"]
    }
  },
  {
    name: "Dana Iclucia",
    img: "dana.jpg",
    opts: {
      game: ["VIII"]
    }
  },
  {
    name: "Alison",
    img: "alison.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Ed",
    img: "ed.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Alison's Child",
    img: "alisonschild.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Kathleen",
    img: "kathleen.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Sister Nia",
    img: "sisternia.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Dina",
    img: "dina.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Euron",
    img: "euron.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Reja",
    img: "reja.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Miralda",
    img: "miralda.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Licht",
    img: "licht.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Quina",
    img: "quina.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Austin",
    img: "austin.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Silvia",
    img: "silvia.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Thanatos Beldine",
    img: "thanatos.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Katthew",
    img: "katthew.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Franz",
    img: "franz.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Sir Carlan",
    img: "sircarlan.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Captain Barbaros",
    img: "barbaros.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Kiergaard Weissman",
    img: "kiergaard.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Little Paro",
    img: "littleparo.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Shoebill",
    img: "shoebill.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Master Kong",
    img: "masterkong.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Olga",
    img: "olga.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Sarai",
    img: "sarai.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Rastell",
    img: "rastell.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Io",
    img: "io.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Hydra",
    img: "hydra.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Minos",
    img: "minos.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Nestor",
    img: "nestor.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Ura",
    img: "ura.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Earth Goddess Maia",
    img: "maia.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Avalodragil",
    img: "avalodragil.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Oceanus",
    img: "oceanus.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Theos de Endrogram",
    img: "theos.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  {
    name: "Origin of Life",
    img: "originoflife.jpg",
    opts: {
      game: ["VIII"],
      NPC: true
    }
  },
  // Ys IX: Monstrum Nox
  {
    name: "Krysha Pendleton",
    img: "krysha.jpg",
    opts: {
      game: ["IX"]
    }
  },
  {
    name: "Anemona",
    img: "anemona.jpg",
    opts: {
      game: ["IX"]
    }
  },
  {
    name: "Credo Aiblinger",
    img: "credo.jpg",
    opts: {
      game: ["IX"]
    }
  },
  {
    name: "Yufa Gamberg",
    img: "yufa.jpg",
    opts: {
      game: ["IX"]
    }
  },
  {
    name: "Jules Noah",
    img: "jules.jpg",
    opts: {
      game: ["IX"]
    }
  },
  {
    name: "Aprilis",
    img: "aprilis.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Parks",
    img: "parks.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Chante",
    img: "chante.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Tito",
    img: "tito.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Arche",
    img: "arche.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Silhouette",
    img: "silhouette.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Iris",
    img: "iris.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Lucien",
    img: "lucien.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Saradhi",
    img: "saradhi.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Margot Reyes",
    img: "margot.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Maxim",
    img: "maxim.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Xavier",
    img: "xavier.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Morbihan",
    img: "morbihan.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Carla Pendleton",
    img: "carla.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Belger",
    img: "belger.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Belger",
    img: "belger.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Ingrid Celda",
    img: "ingrid.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Marius",
    img: "marius.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Riche Pendleton",
    img: "riche.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Roderio Rijndael",
    img: "roderio.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Marc",
    img: "marc.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Eudes",
    img: "eudes.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Elle",
    img: "elle.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Felix",
    img: "felix.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Smirnov Noah",
    img: "smirnov.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Pamella Noah",
    img: "pamella.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Vallin",
    img: "vallin.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Gordo",
    img: "gordo.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Pak",
    img: "pak.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Toto",
    img: "toto.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Chatelard",
    img: "chatelard.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Zola Guesclin",
    img: "zola.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  {
    name: "Atra Nox Philius",
    img: "atra.jpg",
    opts: {
      game: ["IX"],
      NPC: true
    }
  },
  // Ys X: Nordics
  {
    name: "Karja Balta",
    img: "karja.jpg",
    opts: {
      game: ["X"]
    }
  },
  {
    name: "Grenn Berge",
    img: "grenn.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
{
    name: "Rosalind Rusveri",
    img: "rosalind.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Cruz Carpent",
    img: "cruz.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Mirabel Asrad",
    img: "mirabel.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Rafe Evelies",
    img: "rafe.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Ezer",
    img: "ezer.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Hugill",
    img: "hugill.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Lila Mistral",
    img: "lila.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Clement Berge",
    img: "clement.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Gulliver Isou",
    img: "gulliver.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Rene Rusveri",
    img: "rene.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Corinne Rusveri",
    img: "corinne.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Romes Carpent",
    img: "romes.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Joel Asrad",
    img: "joelx.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Momina Evelies",
    img: "momina.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Dawson Evelies",
    img: "dawson.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Lux",
    img: "lux.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Lux",
    img: "lux.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Sache",
    img: "sache.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Ashley",
    img: "ashley.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Father Cuthbert",
    img: "cuthbert.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Cohen",
    img: "cohen.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Milette",
    img: "milette.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Mandy",
    img: "mandy.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Guila",
    img: "guila.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Grimson Balta",
    img: "grimson.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Gunnar Krogh",
    img: "gunnar.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Phylleia",
    img: "phylleia.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Einar",
    img: "einar.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Rollo Norgungand",
    img: "rollo.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Ulvar",
    img: "ulvar.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Canute Gamley",
    img: "canute.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Astrid Zayren",
    img: "astrid.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Jörð Dorsen",
    img: "jord.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Lǫgr Valkios",
    img: "logr.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Óðr Colborn",
    img: "odr.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  {
    name: "Yule the Snowfrost Witch",
    img: "yule.jpg",
    opts: {
      game: ["X"],
      NPC: true
    }
  },
  // Ys Strategy
  {
    name: "Abel Renford",
    img: "abel.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Reonea",
    img: "reonea.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Sirius",
    img: "sirius.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Sieghart",
    img: "sieghart.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Lizel-karna",
    img: "lizelkarna.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Lynus",
    img: "lynus.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Wauren",
    img: "wauren.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Romun Emperor (Strategy)",
    img: "romunemperor.jpg",
    opts: {
      game: ["Strategy"],
      NPC: true,
      noncanon: true
    }
  },
  {
    name: "Batiste",
    img: "batiste.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Carla",
    img: "carlastrategy.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Ashley",
    img: "ashleystrategy.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Said",
    img: "said.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Tigres",
    img: "tigres.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Ladia",
    img: "ladia.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Ricardo (Strategy)",
    img: "ricardostrategy.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Lavinia",
    img: "lavinia.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Velnar",
    img: "velnar.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Cliff",
    img: "cliff.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Taurus",
    img: "taurus.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Salyc",
    img: "salyc.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Nepharsia",
    img: "nepharsia.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Ezal",
    img: "ezal.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Edelbard",
    img: "edelbard.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Alyes",
    img: "alyes.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Yuri",
    img: "yuri.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Tio",
    img: "tio.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Lydia (Strategy)",
    img: "lydiastrategy.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Juliana",
    img: "juliana.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Falbrav",
    img: "falbrav.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Subir",
    img: "subir.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Catharsis",
    img: "catharsis.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Zagi",
    img: "zagi.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Rimis",
    img: "rimis.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Lebar",
    img: "lebar.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Zem",
    img: "zem.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Filan",
    img: "filan.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Noad",
    img: "noad.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Geze",
    img: "geze.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Calis",
    img: "calis.jpg",
    opts: {
      game: ["Strategy"],
      noncanon: true
    }
  },
  {
    name: "Ildivise",
    img: "ildivise.jpg",
    opts: {
      game: ["Strategy"],
      NPC: true,
      noncanon: true
    }
  },
];
	
