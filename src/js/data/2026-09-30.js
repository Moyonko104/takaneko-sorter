// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-09-30";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
      { name: "Takane no Nadeshiko", tooltip: "Current members", key: "takaneko" },
      { name: "Takaneko OG", tooltip: "Former members of Takane no Nadeshiko", key: "takaneko-og" },
      { name: "Karen na Ivory", tooltip: "Current members", key: "karen" },
      { name: "Karen na Ivory OG", tooltip: "Former members of Karen na Ivory", key: "karen-og" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Nao Kizuki",
    img: "kizuki_nao.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Su Suzumi",
    img: "suzumi_su.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Saara Hazuki",
    img: "hazuki_saara.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Erisa Higashiyama",
    img: "higashiyama_erisa.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Hina Hinahata",
    img: "hinahata_hina.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Momona Matsumoto",
    img: "matsumoto_momona.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Momoko Hashimoto",
    img: "hashimoto_momoko.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Himeri Momiyama",
    img: "momiyama_himeri.jpg",
    opts: {
      group: ["takaneko"]
    }
  },
  {
    name: "Riri Haruno",
    img: "haruno_riri.jpg",
    opts: {
      group: ["takaneko-og"]
    }
  },
  {
    name: "Mikuru Hoshitani",
    img: "hoshitani_mikuru.jpg",
    opts: {
      group: ["takaneko-og"]
    }
  },
  {
    name: "Rio Nagao",
    img: "nagao_rio.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Yuria Takazawa",
    img: "takazawa_yuria.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Nanasa Odagiri",
    img: "odagiri_nanasa.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Hinata Fukuda",
    img: "fukuda_hinata.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Rie Teramoto",
    img: "teramoto_rie.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Miharu Hazama",
    img: "hazama_miharu.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Remi Tsuchiya",
    img: "tsuchiya_remi.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Nao Ichinose",
    img: "ichinose_nao.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Cocoyu Kawai",
    img: "kawai_cocoyu.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Miku Tachibana",
    img: "tachibana_miku.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Yura Nishihara",
    img: "nishihara_yura.jpg",
    opts: {
      group: ["karen"]
    }
  },
  {
    name: "Nene Kosaka",
    img: "kosaka_nene.jpg",
    opts: {
      group: ["karen-og"]
    }
  },
  {
    name: "Mia Nakiri",
    img: "nakiri_mia.jpg",
    opts: {
      group: ["karen-og"]
    }
  },
  {
    name: "Akari Shibasaki",
    img: "shibasaki_akari.jpg",
    opts: {
      group: ["karen-og"]
    }
  }
];
