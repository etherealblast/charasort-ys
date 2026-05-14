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
      game: ["I", "II", "III", "IV", "V", "VI", "VIOnline", "VII", "VIII", "IX", "X"],
      NPC: true
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
    img: "flair.jpg",
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
  }
];
	
