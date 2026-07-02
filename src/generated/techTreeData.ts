import type { TechBranch, TechNode } from "../types";

export const techTreeSource = {
  "sourceUrl": "https://sandraidersofsophie.com/database",
  "generatedAt": "2026-07-02T00:07:49.823Z"
} as const;

export const techBranches: TechBranch[] = [
  {
    "name": "Godlewski's Expedition",
    "slug": "godlewski",
    "color": "#5fb3ff",
    "summary": "構造、推進、エンジン、クルー、ユーティリティ系",
    "order": 1
  },
  {
    "name": "Kaiser's Friends",
    "slug": "kaiser",
    "color": "#ffb15f",
    "summary": "デッキ、貨物、砲塔、ストレージ系",
    "order": 2
  },
  {
    "name": "K.K. Landwehr",
    "slug": "landwehr",
    "color": "#78d389",
    "summary": "装甲、操舵、武装、アーティラリー系",
    "order": 3
  }
];

export const techNodes: TechNode[] = [
  {
    "id": "godlewski-t1-01-energy-rod",
    "name": "Energy Rod",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Utility",
    "crowns": 1500,
    "materials": [
      {
        "name": "Coral Chunk",
        "count": 150
      },
      {
        "name": "Weird Coal",
        "count": 15
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources#resource-20"
  },
  {
    "id": "godlewski-t1-02-crew-room",
    "name": "Crew Room",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Crew",
    "crowns": 700,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t1-03-stairs",
    "name": "Stairs",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Structure",
    "crowns": 600,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t1-04-motor-reactor",
    "name": "Motor-Reactor",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Propulsion",
    "crowns": 1000,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t1-05-small-chassis",
    "name": "Small Chassis",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Structure",
    "crowns": 900,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t1-06-medkit",
    "name": "MedKit",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Utility",
    "crowns": 1500,
    "materials": [
      {
        "name": "Weird Coral",
        "count": 15
      },
      {
        "name": "Mixtures",
        "count": 400
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources#resource-24"
  },
  {
    "id": "godlewski-t1-07-framed-stairs",
    "name": "Framed Stairs",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Structure",
    "crowns": 1250,
    "materials": [
      {
        "name": "Coral Chunk",
        "count": 75
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t1-08-motor-reactor",
    "name": "Motor-Reactor",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,750 Crowns",
    "category": "Propulsion",
    "crowns": 1750,
    "materials": [
      {
        "name": "Mixtures",
        "count": 200
      },
      {
        "name": "Weird Coral",
        "count": 15
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-01-shovel",
    "name": "Shovel",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Utility",
    "crowns": 5000,
    "materials": [
      {
        "name": "Weird Coral",
        "count": 30
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 2
      },
      {
        "name": "Coral Dust",
        "count": 400
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-02-captain-s-cabin",
    "name": "Captain's Cabin",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Crew",
    "crowns": 2800,
    "materials": [
      {
        "name": "Coral Chunk",
        "count": 75
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-03-wooden-corridor",
    "name": "Wooden Corridor",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Structure",
    "crowns": 2750,
    "materials": [
      {
        "name": "Coral Chunk",
        "count": 75
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-04-motor-reactor-ii",
    "name": "Motor-Reactor II",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Propulsion",
    "crowns": 3250,
    "materials": [
      {
        "name": "Raw Aurogen Crystal",
        "count": 4
      },
      {
        "name": "Mixtures",
        "count": 375
      },
      {
        "name": "Alloy Steel",
        "count": 15
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-05-middling-chassis",
    "name": "Middling Chassis",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Structure",
    "crowns": 3200,
    "materials": [
      {
        "name": "Mixtures",
        "count": 375
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-06-middling-chassis-832u",
    "name": "Middling Chassis (832U)",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Structure",
    "crowns": 3200,
    "materials": [
      {
        "name": "Mixtures",
        "count": 375
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-07-crew-room-ii",
    "name": "Crew Room II",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Crew",
    "crowns": 3500,
    "materials": [
      {
        "name": "Coral Chunk",
        "count": 100
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-08-motor-reactor-ii",
    "name": "Motor-Reactor II",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Propulsion",
    "crowns": 4000,
    "materials": [
      {
        "name": "Mixtures",
        "count": 475
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 4
      },
      {
        "name": "Coral Dust",
        "count": 270
      },
      {
        "name": "Alloy Steel",
        "count": 15
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-09-crew-room-ii",
    "name": "Crew Room II",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Crew",
    "crowns": 4300,
    "materials": [
      {
        "name": "Coral Chunk",
        "count": 125
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t2-10-small-engine-ii",
    "name": "Small Engine II",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 5,000 Crowns",
    "category": "Mobility",
    "crowns": 4900,
    "materials": [
      {
        "name": "Mixtures",
        "count": 550
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 5
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-01-crafting-materials",
    "name": "Crafting Materials",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Utility",
    "crowns": 8000,
    "materials": [
      {
        "name": "Optic Lenses",
        "count": 100
      },
      {
        "name": "Weird Coral",
        "count": 40
      },
      {
        "name": "Coral Dust",
        "count": 750
      },
      {
        "name": "Coral Chunk",
        "count": 200
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-02-metal-corridor",
    "name": "Metal Corridor",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Structure",
    "crowns": 5500,
    "materials": [
      {
        "name": "Leviathan Skin",
        "count": 360
      },
      {
        "name": "Coral Chunk",
        "count": 150
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-03-motor-reactor-iii",
    "name": "Motor-Reactor III",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Propulsion",
    "crowns": 6500,
    "materials": [
      {
        "name": "Mixtures",
        "count": 750
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 6
      },
      {
        "name": "Alloy Steel",
        "count": 30
      },
      {
        "name": "Coral Dust",
        "count": 360
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-04-medium-engine",
    "name": "Medium Engine",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Mobility",
    "crowns": 6300,
    "materials": [
      {
        "name": "Mixtures",
        "count": 750
      },
      {
        "name": "Weird Coral",
        "count": 40
      },
      {
        "name": "Coral Dust",
        "count": 360
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 4
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-05-great-chassis",
    "name": "Great Chassis",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Structure",
    "crowns": 5700,
    "materials": [
      {
        "name": "Coral Chunk",
        "count": 150
      },
      {
        "name": "Alloy Steel",
        "count": 5
      },
      {
        "name": "Leviathan Skin",
        "count": 360
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-06-smoke-grenade",
    "name": "Smoke Grenade",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Utility",
    "crowns": 8000,
    "materials": [
      {
        "name": "Raw Aurogen Crystal",
        "count": 3
      },
      {
        "name": "Coral Chunk",
        "count": 200
      },
      {
        "name": "Leviathan Skin",
        "count": 750
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/rg79s-smoke-grenade"
  },
  {
    "id": "godlewski-t3-07-motor-reactor-iii",
    "name": "Motor-Reactor III",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Propulsion",
    "crowns": 7600,
    "materials": [
      {
        "name": "Alloy Steel",
        "count": 30
      },
      {
        "name": "Coral Dust",
        "count": 410
      },
      {
        "name": "Coral Chunk",
        "count": 185
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 6
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-08-great-chassis",
    "name": "Great Chassis",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Structure",
    "crowns": 6700,
    "materials": [
      {
        "name": "Leviathan Skin",
        "count": 410
      },
      {
        "name": "Alloy Steel",
        "count": 5
      },
      {
        "name": "Optic Lenses",
        "count": 100
      },
      {
        "name": "Mixtures",
        "count": 1100
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t3-09-great-chassis",
    "name": "Great Chassis",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 8,000 Crowns",
    "category": "Structure",
    "crowns": 6700,
    "materials": [
      {
        "name": "Alloy Steel",
        "count": 5
      },
      {
        "name": "Coral Dust",
        "count": 410
      },
      {
        "name": "Mixtures",
        "count": 1100
      },
      {
        "name": "Optic Lenses",
        "count": 100
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t4-01-smokeless-rod",
    "name": "Smokeless Rod",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Utility",
    "crowns": 12000,
    "materials": [
      {
        "name": "Ficus",
        "count": 1
      },
      {
        "name": "Coral Dust",
        "count": 750
      },
      {
        "name": "Optic Lenses",
        "count": 150
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 3
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources#resource-37"
  },
  {
    "id": "godlewski-t4-02-royal-chassis",
    "name": "Royal Chassis",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Structure",
    "crowns": 9000,
    "materials": [
      {
        "name": "Optic Lenses",
        "count": 150
      },
      {
        "name": "Crystal",
        "count": 50
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 5
      },
      {
        "name": "Ficus",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "godlewski-t4-03-royal-chassis",
    "name": "Royal Chassis",
    "branch": "Godlewski's Expedition",
    "branchSlug": "godlewski",
    "branchOrder": 1,
    "branchColor": "#5fb3ff",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Structure",
    "crowns": 9000,
    "materials": [
      {
        "name": "Crystal",
        "count": 50
      },
      {
        "name": "Optic Lenses",
        "count": 150
      },
      {
        "name": "Ficus",
        "count": 2
      },
      {
        "name": "Raw Aurogen Crystal",
        "count": 5
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t1-01-shotgun-cannon",
    "name": "Shotgun Cannon",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,700 Crowns",
    "category": "Cannon",
    "crowns": 1500,
    "materials": [
      {
        "name": "Threads",
        "count": 150
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon"
  },
  {
    "id": "kaiser-t1-02-wooden-decks",
    "name": "Wooden Decks",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,700 Crowns",
    "category": "Structure",
    "crowns": 600,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t1-03-cargo-deck",
    "name": "Cargo Deck",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,700 Crowns",
    "category": "Storage",
    "crowns": 1400,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t1-04-autocannon",
    "name": "Autocannon",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,700 Crowns",
    "category": "Cannon",
    "crowns": 1500,
    "materials": [
      {
        "name": "Fabric Straps",
        "count": 150
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon"
  },
  {
    "id": "kaiser-t1-05-small-chassis",
    "name": "Small Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,700 Crowns",
    "category": "Structure",
    "crowns": 1700,
    "materials": [
      {
        "name": "Fabric Scraps",
        "count": 200
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t1-06-balconies",
    "name": "Balconies",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "600 – 1,700 Crowns",
    "category": "Structure",
    "crowns": 1300,
    "materials": [
      {
        "name": "Threads",
        "count": 200
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t2-01-cannon",
    "name": "Cannon",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Cannon",
    "crowns": 5000,
    "materials": [
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 2
      },
      {
        "name": "Metal Rods",
        "count": 300
      },
      {
        "name": "Alloy Steel",
        "count": 10
      },
      {
        "name": "Fabric",
        "count": 300
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon"
  },
  {
    "id": "kaiser-t2-02-armored-balconies",
    "name": "Armored Balconies",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Structure",
    "crowns": 2500,
    "materials": [
      {
        "name": "Threads",
        "count": 375
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t2-03-cargo-hold",
    "name": "Cargo Hold",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Storage",
    "crowns": 3500,
    "materials": [
      {
        "name": "Weird Coral",
        "count": 15
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 1
      },
      {
        "name": "Threads",
        "count": 475
      },
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 1
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t2-04-shotgun-cannon-ii",
    "name": "Shotgun Cannon II",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Cannon",
    "crowns": 5000,
    "materials": [
      {
        "name": "Alloy Steel",
        "count": 10
      },
      {
        "name": "Leviathan Skin",
        "count": 300
      },
      {
        "name": "Gunpowder",
        "count": 300
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon"
  },
  {
    "id": "kaiser-t2-05-middling-chassis",
    "name": "Middling Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Structure",
    "crowns": 3000,
    "materials": [
      {
        "name": "Fabric Scraps",
        "count": 375
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t2-06-middling-chassis",
    "name": "Middling Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Structure",
    "crowns": 3000,
    "materials": [
      {
        "name": "Fabric Scraps",
        "count": 375
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t2-07-autocannon-ii",
    "name": "Autocannon II",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Cannon",
    "crowns": 5000,
    "materials": [
      {
        "name": "District Officer's Portable Safe",
        "count": 2
      },
      {
        "name": "Gunpowder",
        "count": 300
      },
      {
        "name": "Metal Rods",
        "count": 300
      },
      {
        "name": "Alloy Steel",
        "count": 10
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon"
  },
  {
    "id": "kaiser-t2-08-cargo-bay",
    "name": "Cargo Bay",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Storage",
    "crowns": 6000,
    "materials": [
      {
        "name": "Leviathan Skin",
        "count": 300
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 1
      },
      {
        "name": "Fabric Scraps",
        "count": 500
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t2-09-cargo-bay",
    "name": "Cargo Bay",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Storage",
    "crowns": 6000,
    "materials": [
      {
        "name": "Metal Rods",
        "count": 300
      },
      {
        "name": "Threads",
        "count": 500
      },
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 1
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t2-10-cargo-bay",
    "name": "Cargo Bay",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,500 – 6,000 Crowns",
    "category": "Storage",
    "crowns": 6000,
    "materials": [
      {
        "name": "Fabric",
        "count": 300
      },
      {
        "name": "Reinforced Leather Strips",
        "count": 100
      },
      {
        "name": "Threads",
        "count": 500
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t3-01-resources",
    "name": "Resources",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Utility",
    "crowns": 7000,
    "materials": [
      {
        "name": "Alloy Steel",
        "count": 15
      },
      {
        "name": "Leviathan Skin",
        "count": 410
      },
      {
        "name": "Gunpowder",
        "count": 410
      },
      {
        "name": "Fabric Scraps",
        "count": 1100
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources"
  },
  {
    "id": "kaiser-t3-02-armored-deck",
    "name": "Armored Deck",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Structure",
    "crowns": 6000,
    "materials": [
      {
        "name": "Threads",
        "count": 750
      },
      {
        "name": "Metal Rods",
        "count": 360
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t3-03-cargo-hold-iii",
    "name": "Cargo Hold III",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Storage",
    "crowns": 6000,
    "materials": [
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 2
      },
      {
        "name": "Metal Rods",
        "count": 360
      },
      {
        "name": "Weird Coral",
        "count": 30
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t3-04-cannon-iii",
    "name": "Cannon III",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Cannon",
    "crowns": 9000,
    "materials": [
      {
        "name": "Fabric Scraps",
        "count": 1100
      },
      {
        "name": "Black Box",
        "count": 2
      },
      {
        "name": "Gunpowder",
        "count": 500
      },
      {
        "name": "Alloy Steel",
        "count": 20
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon"
  },
  {
    "id": "kaiser-t3-05-great-chassis",
    "name": "Great Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Structure",
    "crowns": 6000,
    "materials": [
      {
        "name": "Fabric",
        "count": 360
      },
      {
        "name": "Fabric Scraps",
        "count": 750
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t3-06-cargo-hold-iii",
    "name": "Cargo Hold III",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Storage",
    "crowns": 7000,
    "materials": [
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 2
      },
      {
        "name": "Weird Coral",
        "count": 30
      },
      {
        "name": "Leviathan Meat",
        "count": 410
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t3-07-shotgun-cannon-iii",
    "name": "Shotgun Cannon III",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Cannon",
    "crowns": 9000,
    "materials": [
      {
        "name": "Weird Coral",
        "count": 40
      },
      {
        "name": "Black Box",
        "count": 2
      },
      {
        "name": "Metal Rods",
        "count": 500
      },
      {
        "name": "Threads",
        "count": 1100
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon"
  },
  {
    "id": "kaiser-t3-08-great-chassis",
    "name": "Great Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Structure",
    "crowns": 7000,
    "materials": [
      {
        "name": "Fabric",
        "count": 410
      },
      {
        "name": "Fabric Scraps",
        "count": 1100
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t3-09-great-chassis",
    "name": "Great Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Structure",
    "crowns": 7000,
    "materials": [
      {
        "name": "Threads",
        "count": 1100
      },
      {
        "name": "Metal Rods",
        "count": 410
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t3-10-autocannon-iii",
    "name": "Autocannon III",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "6,000 – 9,000 Crowns",
    "category": "Cannon",
    "crowns": 9000,
    "materials": [
      {
        "name": "Black Box",
        "count": 2
      },
      {
        "name": "Leviathan Skin",
        "count": 500
      },
      {
        "name": "Reinforced Leather Strips",
        "count": 150
      },
      {
        "name": "Weird Coral",
        "count": 70
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon"
  },
  {
    "id": "kaiser-t4-01-resources",
    "name": "Resources",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Utility",
    "crowns": 9000,
    "materials": [
      {
        "name": "Reinforced Leather Strips",
        "count": 200
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 2
      },
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources"
  },
  {
    "id": "kaiser-t4-02-royal-chassis",
    "name": "Royal Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Structure",
    "crowns": 9000,
    "materials": [
      {
        "name": "Ficus",
        "count": 2
      },
      {
        "name": "Fabric Scraps",
        "count": 1200
      },
      {
        "name": "Metal Rods",
        "count": 450
      },
      {
        "name": "Reinforced Leather Strips",
        "count": 150
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t4-03-royal-chassis",
    "name": "Royal Chassis",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Structure",
    "crowns": 9000,
    "materials": [
      {
        "name": "Crystal",
        "count": 50
      },
      {
        "name": "Threads",
        "count": 1100
      },
      {
        "name": "Leviathan Meat",
        "count": 510
      },
      {
        "name": "Reinforced Leather Strips",
        "count": 150
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t4-04-cargo-bay-iv",
    "name": "Cargo Bay IV",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Storage",
    "crowns": 9000,
    "materials": [
      {
        "name": "Metal Rods",
        "count": 450
      },
      {
        "name": "Crystal",
        "count": 15
      },
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 2
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t4-05-cargo-bay-iv",
    "name": "Cargo Bay IV",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Storage",
    "crowns": 9000,
    "materials": [
      {
        "name": "Crystal",
        "count": 15
      },
      {
        "name": "Leviathan Meat",
        "count": 450
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 2
      },
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t4-06-cargo-bay-iv",
    "name": "Cargo Bay IV",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Storage",
    "crowns": 9000,
    "materials": [
      {
        "name": "Reinforced Leather Strips",
        "count": 150
      },
      {
        "name": "Crystal",
        "count": 15
      },
      {
        "name": "Crate of 1889 Chardonnay",
        "count": 2
      },
      {
        "name": "Canned Sea Deer XL",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "kaiser-t4-07-cannon-iv",
    "name": "Cannon IV",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Cannon",
    "crowns": 12000,
    "materials": [
      {
        "name": "Reinforced Leather Strips",
        "count": 150
      },
      {
        "name": "Black Box",
        "count": 5
      },
      {
        "name": "Ficus",
        "count": 2
      },
      {
        "name": "Crystal",
        "count": 30
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon"
  },
  {
    "id": "kaiser-t4-08-shotgun-cannon-iv",
    "name": "Shotgun Cannon IV",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Cannon",
    "crowns": 12000,
    "materials": [
      {
        "name": "Black Box",
        "count": 5
      },
      {
        "name": "Reinforced Leather Strips",
        "count": 150
      },
      {
        "name": "Weird Coral",
        "count": 80
      },
      {
        "name": "Ficus",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon"
  },
  {
    "id": "kaiser-t4-09-autocannon-iv",
    "name": "Autocannon IV",
    "branch": "Kaiser's Friends",
    "branchSlug": "kaiser",
    "branchOrder": 2,
    "branchColor": "#ffb15f",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Cannon",
    "crowns": 12000,
    "materials": [
      {
        "name": "Reinforced Leather Strips",
        "count": 150
      },
      {
        "name": "Black Box",
        "count": 5
      },
      {
        "name": "Ficus",
        "count": 2
      },
      {
        "name": "Alloy Steel",
        "count": 75
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon"
  },
  {
    "id": "landwehr-t1-01-weapons",
    "name": "Weapons",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Personal",
    "crowns": 1500,
    "materials": [
      {
        "name": "Scrapped Ammo",
        "count": 200
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons"
  },
  {
    "id": "landwehr-t1-02-artillery-decks",
    "name": "Artillery Decks",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Weapons",
    "crowns": 1000,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t1-03-framed-steering",
    "name": "Framed Steering",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Steering",
    "crowns": 700,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t1-04-small-armament-workshop",
    "name": "Small Armament Workshop",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Crafting",
    "crowns": 700,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t1-05-wooden-vestibule",
    "name": "Wooden Vestibule",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Structure",
    "crowns": 1000,
    "materials": [],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t1-06-armor",
    "name": "Armor",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Defense",
    "crowns": 1500,
    "materials": [
      {
        "name": "Scrap Metal",
        "count": 200
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t1-07-framed-artillery-deck",
    "name": "Framed Artillery Deck",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Weapons",
    "crowns": 1750,
    "materials": [
      {
        "name": "Scrapped Ammo",
        "count": 200
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t1-08-large-open-steering",
    "name": "Large Open Steering",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Steering",
    "crowns": 1250,
    "materials": [
      {
        "name": "Scrap Metal",
        "count": 200
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t1-09-large-framed-steering",
    "name": "Large Framed Steering",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 1,
    "tierLabel": "Tier I",
    "tierCostRange": "700 – 2,000 Crowns",
    "category": "Steering",
    "crowns": 2000,
    "materials": [
      {
        "name": "Scrap Metal",
        "count": 225
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t2-01-weapons-ii",
    "name": "Weapons II",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Personal",
    "crowns": 4000,
    "materials": [
      {
        "name": "District Officer's Portable Safe",
        "count": 1
      },
      {
        "name": "Black Box",
        "count": 1
      },
      {
        "name": "Weapon Parts",
        "count": 450
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons"
  },
  {
    "id": "landwehr-t2-02-armored-artillery-compartment",
    "name": "Armored Artillery Compartment",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Weapons",
    "crowns": 3250,
    "materials": [
      {
        "name": "Scrapped Ammo",
        "count": 375
      },
      {
        "name": "Black Box",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t2-03-steering-ii",
    "name": "Steering II",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Steering",
    "crowns": 3000,
    "materials": [
      {
        "name": "District Officer's Portable Safe",
        "count": 1
      },
      {
        "name": "Black Box",
        "count": 1
      },
      {
        "name": "Scrap Metal",
        "count": 375
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t2-04-large-armament-workshop",
    "name": "Large Armament Workshop",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Crafting",
    "crowns": 2750,
    "materials": [
      {
        "name": "Scrap Metal",
        "count": 375
      },
      {
        "name": "Scrapped Ammo",
        "count": 375
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t2-05-time-bomb",
    "name": "Time Bomb",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Breaching",
    "crowns": 4000,
    "materials": [
      {
        "name": "Gunpowder",
        "count": 450
      },
      {
        "name": "Black Box",
        "count": 1
      },
      {
        "name": "District Officer's Portable Safe",
        "count": 1
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/time-bomb"
  },
  {
    "id": "landwehr-t2-06-armored-artillery-decks",
    "name": "Armored Artillery Decks",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Weapons",
    "crowns": 4000,
    "materials": [
      {
        "name": "Black Box",
        "count": 2
      },
      {
        "name": "Scrapped Ammo",
        "count": 475
      },
      {
        "name": "Alloy Steel",
        "count": 5
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t2-07-armor-plate-ii",
    "name": "Armor Plate II",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Defense",
    "crowns": 3500,
    "materials": [
      {
        "name": "Weird Coral",
        "count": 30
      },
      {
        "name": "Scrap Metal",
        "count": 475
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t2-08-battering-ram",
    "name": "Battering Ram",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 2,
    "tierLabel": "Tier II",
    "tierCostRange": "2,750 – 4,500 Crowns",
    "category": "Breaching",
    "crowns": 4500,
    "materials": [
      {
        "name": "Weapon Parts",
        "count": 360
      },
      {
        "name": "Alloy Steel",
        "count": 40
      },
      {
        "name": "District Officer's Portable Safe",
        "count": 2
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t3-01-armor-iii",
    "name": "Armor III",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Defense",
    "crowns": 6000,
    "materials": [
      {
        "name": "Scrapped Ammo",
        "count": 750
      },
      {
        "name": "Black Box",
        "count": 2
      },
      {
        "name": "District Officer's Portable Safe",
        "count": 2
      },
      {
        "name": "Scrap Metal",
        "count": 750
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t3-02-framed-armored-artillery-deck",
    "name": "Framed Armored Artillery Deck",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Weapons",
    "crowns": 6500,
    "materials": [
      {
        "name": "Scrapped Ammo",
        "count": 750
      },
      {
        "name": "Alloy Steel",
        "count": 10
      },
      {
        "name": "Weapon Parts",
        "count": 360
      },
      {
        "name": "Black Box",
        "count": 3
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t3-03-armor-plate-iii",
    "name": "Armor Plate III",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Defense",
    "crowns": 5500,
    "materials": [
      {
        "name": "Weapon Parts",
        "count": 240
      },
      {
        "name": "Scrap Metal",
        "count": 500
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t3-04-steering-iii",
    "name": "Steering III",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Steering",
    "crowns": 6000,
    "materials": [
      {
        "name": "Gunpowder",
        "count": 410
      },
      {
        "name": "Scrap Metal",
        "count": 750
      },
      {
        "name": "District Officer's Portable Safe",
        "count": 3
      },
      {
        "name": "Alloy Steel",
        "count": 10
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t3-05-armored-vestibule",
    "name": "Armored Vestibule",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Structure",
    "crowns": 6000,
    "materials": [
      {
        "name": "District Officer's Portable Safe",
        "count": 1
      },
      {
        "name": "Black Box",
        "count": 1
      },
      {
        "name": "Gunpowder",
        "count": 410
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t3-06-grenade-iii",
    "name": "Grenade III",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Personal",
    "crowns": 7500,
    "materials": [
      {
        "name": "Gunpowder",
        "count": 400
      },
      {
        "name": "Black Box",
        "count": 3
      },
      {
        "name": "High-Grade Gunpowder",
        "count": 350
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/hg-6-contact-grenade"
  },
  {
    "id": "landwehr-t3-07-embrasure",
    "name": "Embrasure",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Defense",
    "crowns": 6000,
    "materials": [
      {
        "name": "Gunpowder",
        "count": 270
      },
      {
        "name": "Weapon Parts",
        "count": 270
      },
      {
        "name": "Scrapped Ammo",
        "count": 500
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t3-08-steering-iii",
    "name": "Steering III",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 3,
    "tierLabel": "Tier III",
    "tierCostRange": "5,500 – 7,500 Crowns",
    "category": "Steering",
    "crowns": 6000,
    "materials": [
      {
        "name": "Scrap Metal",
        "count": 750
      },
      {
        "name": "Black Box",
        "count": 3
      },
      {
        "name": "Gunpowder",
        "count": 410
      },
      {
        "name": "Weird Coral",
        "count": 40
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t4-01-improved-ammo",
    "name": "Improved Ammo",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Crafting",
    "crowns": 9000,
    "materials": [
      {
        "name": "Weird Coral",
        "count": 70
      },
      {
        "name": "High-Grade Gunpowder",
        "count": 350
      },
      {
        "name": "Scrapped Ammo",
        "count": 1000
      },
      {
        "name": "Gunpowder",
        "count": 600
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/ammunition"
  },
  {
    "id": "landwehr-t4-02-enclosed-artillery-compartment",
    "name": "Enclosed Artillery Compartment",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Weapons",
    "crowns": 9000,
    "materials": [
      {
        "name": "High-Grade Gunpowder",
        "count": 350
      },
      {
        "name": "Black Box",
        "count": 5
      },
      {
        "name": "Ficus",
        "count": 2
      },
      {
        "name": "Crystal",
        "count": 50
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "landwehr-t4-03-weapons-iv",
    "name": "Weapons IV",
    "branch": "K.K. Landwehr",
    "branchSlug": "landwehr",
    "branchOrder": 3,
    "branchColor": "#78d389",
    "tier": 4,
    "tierLabel": "Tier IV",
    "tierCostRange": "9,000 – 12,000 Crowns",
    "category": "Personal",
    "crowns": 12000,
    "materials": [
      {
        "name": "Weapon Parts",
        "count": 750
      },
      {
        "name": "Black Box",
        "count": 3
      },
      {
        "name": "Crystal",
        "count": 15
      },
      {
        "name": "Ficus",
        "count": 1
      }
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons"
  }
];
