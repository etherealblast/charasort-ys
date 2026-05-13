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
      { name: "Ys III / Oath in Felghana", key: "III" },
      { name: "Ys IV Mask of the Sun / Dawn of Ys / Memories of Celceta", key: "IV" },
      { name: "Ys V: Lost Kefin, Kingdom of Sand", key: "V" },
      { name: "Ys VI: The Ark of Napishtim / Ys VI Online", key: "VI" },
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
    name: "Adol Christin",
    img: "adol.jpg",
    opts: {
      game: ["Origin"]
    }
  },
  {
    name: "Reah",
    img: "reah.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Feena",
    img: "feena.jpg",
    opts: {
      game: ["Origin"],
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
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Dalles",
    img: "dalles.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Darm",
    img: "darm.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  {
    name: "Cain Fact",
    img: "cain.jpg",
    opts: {
      game: ["Origin"],
      NPC: true
    }
  },
  // Ys I
];
	
