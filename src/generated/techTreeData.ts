import type { TechBranch, TechNode } from "../types";

export const techTreeSource = {
  "sourceUrl": "https://sandraidersofsophie.com/database",
  "generatedAt": "2026-07-02T19:02:04.335Z",
  "progressionDescriptionsFile": null,
  "progressionDescriptionCount": 0,
  "progressionMatchedNodes": 0,
  "sandGameDbResearchUrl": "https://sandgamedb.com/tools/research-checklist",
  "sandGameDbResearchNodeCount": 98,
  "sandGameDbMatchedNodes": 93,
  "cogAndCrownTechUrl": "https://cogandcrown.com/tech/",
  "cogAndCrownNodeCount": 97,
  "cogAndCrownMatchedNodes": 90,
  "cogAndCrownDependencyEdges": 86,
  "cogAndCrownMatchedDependencyEdges": 72,
  "hasProgressionLayout": true,
  "researchTreeFile": null,
  "researchTreeNodeCount": 0,
  "dependencyMatchedNodes": 90,
  "dependencyMatchedEdges": 72,
  "hasExplicitDependencies": true
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
    "id": "00a6a690-f10f-483b-9da9-1a7374aa6aa0",
    "guid": "00a6a690-f10f-483b-9da9-1a7374aa6aa0",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "ea6f7be5-8eec-4743-ad5d-b67000bacad1"
    ],
    "isRoot": true,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 3,
    "sandGameDbSlug": "energy-rod-t1",
    "sandGameDbDisplayName": "Energy Rod",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/resources#resource-20",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources#resource-20",
    "cogAndCrownId": "godlewski-1a-energy-rod"
  },
  {
    "id": "f67098d9-f21c-4cb2-a43c-1319e74b844b",
    "guid": "f67098d9-f21c-4cb2-a43c-1319e74b844b",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "87a93b7c-11af-43ab-94a2-22c284b86315"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 4,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 2,
    "sandGameDbSlug": "woodencrew4",
    "sandGameDbDisplayName": "Crew Room",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-1a-crew-room"
  },
  {
    "id": "71143b7b-2c75-4adc-bffc-8e2c007e6624",
    "guid": "71143b7b-2c75-4adc-bffc-8e2c007e6624",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "6b93cb6a-bce7-492f-962e-11edcdb949eb"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 9,
    "sandGameDbSlug": "stairs",
    "sandGameDbDisplayName": "Stairs (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-1a-stairs"
  },
  {
    "id": "08f073c6-c5b8-4074-909d-c8bc966e912e",
    "guid": "08f073c6-c5b8-4074-909d-c8bc966e912e",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "f73f99e1-eaac-4489-a46f-cc13be66d9d5"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 5,
    "sandGameDbSlug": "openreactor1x3",
    "sandGameDbDisplayName": "Motor-Reactor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-1a-motor-reactor"
  },
  {
    "id": "961890f7-e08a-4d21-a338-738563c384e4",
    "guid": "961890f7-e08a-4d21-a338-738563c384e4",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "0918117d-3d17-4d5b-8ff3-32152d0e841f"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 8,
    "sandGameDbSlug": "chassis-3x3",
    "sandGameDbDisplayName": "Small Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-1a-small-chassis"
  },
  {
    "id": "ea6f7be5-8eec-4743-ad5d-b67000bacad1",
    "guid": "ea6f7be5-8eec-4743-ad5d-b67000bacad1",
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
    "requiredNodeIds": [
      "00a6a690-f10f-483b-9da9-1a7374aa6aa0"
    ],
    "dependentNodeIds": [
      "846af560-1b57-415f-ae82-efa66a2746c6"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 19,
    "sandGameDbSlug": "medkit-t1",
    "sandGameDbDisplayName": "MedKit",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/resources#resource-24",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources#resource-24",
    "cogAndCrownId": "godlewski-1b-medkit"
  },
  {
    "id": "6b93cb6a-bce7-492f-962e-11edcdb949eb",
    "guid": "6b93cb6a-bce7-492f-962e-11edcdb949eb",
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
    "requiredNodeIds": [
      "71143b7b-2c75-4adc-bffc-8e2c007e6624"
    ],
    "dependentNodeIds": [
      "7e4b1db2-4765-4b19-aa37-cac3ff1bc548"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 17,
    "sandGameDbSlug": "framed-stairs",
    "sandGameDbDisplayName": "Framed Stairs",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-1b-framed-stairs"
  },
  {
    "id": "f73f99e1-eaac-4489-a46f-cc13be66d9d5",
    "guid": "f73f99e1-eaac-4489-a46f-cc13be66d9d5",
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
    "requiredNodeIds": [
      "08f073c6-c5b8-4074-909d-c8bc966e912e"
    ],
    "dependentNodeIds": [
      "c42f2a15-0ef7-494e-8a78-c24b0d9ff3a3"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 20,
    "sandGameDbSlug": "reactor-2x2-framed",
    "sandGameDbDisplayName": "Motor-Reactor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-1b-motor-reactor"
  },
  {
    "id": "846af560-1b57-415f-ae82-efa66a2746c6",
    "guid": "846af560-1b57-415f-ae82-efa66a2746c6",
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
    "requiredNodeIds": [
      "ea6f7be5-8eec-4743-ad5d-b67000bacad1"
    ],
    "dependentNodeIds": [
      "8bf4317c-4d38-4688-a8f3-0d51f22819ac"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 32,
    "sandGameDbSlug": "shovel-t2",
    "sandGameDbDisplayName": "Shovel",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2a-shovel"
  },
  {
    "id": "87a93b7c-11af-43ab-94a2-22c284b86315",
    "guid": "87a93b7c-11af-43ab-94a2-22c284b86315",
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
    "requiredNodeIds": [
      "f67098d9-f21c-4cb2-a43c-1319e74b844b"
    ],
    "dependentNodeIds": [
      "a02f9be8-5563-40ef-a075-145a4fe3f1b1"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 4,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 26,
    "sandGameDbSlug": "captainscrew",
    "sandGameDbDisplayName": "Captain's Cabin",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2a-captains-cabin"
  },
  {
    "id": "7e4b1db2-4765-4b19-aa37-cac3ff1bc548",
    "guid": "7e4b1db2-4765-4b19-aa37-cac3ff1bc548",
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
    "requiredNodeIds": [
      "6b93cb6a-bce7-492f-962e-11edcdb949eb"
    ],
    "dependentNodeIds": [
      "2d113fa5-bdc0-457a-93e7-c1fd00b46038"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 35,
    "sandGameDbSlug": "corridor-wooden",
    "sandGameDbDisplayName": "Wooden Corridor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2a-wooden-corridor"
  },
  {
    "id": "c42f2a15-0ef7-494e-8a78-c24b0d9ff3a3",
    "guid": "c42f2a15-0ef7-494e-8a78-c24b0d9ff3a3",
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
    "requiredNodeIds": [
      "f73f99e1-eaac-4489-a46f-cc13be66d9d5"
    ],
    "dependentNodeIds": [
      "ee23cb69-29cb-4aef-aea9-ff05dcd47fc6"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 31,
    "sandGameDbSlug": "woodenreactor2x2",
    "sandGameDbDisplayName": "Motor-Reactor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2a-motor-reactor"
  },
  {
    "id": "0918117d-3d17-4d5b-8ff3-32152d0e841f",
    "guid": "0918117d-3d17-4d5b-8ff3-32152d0e841f",
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
    "requiredNodeIds": [
      "961890f7-e08a-4d21-a338-738563c384e4"
    ],
    "dependentNodeIds": [
      "e96a149c-f046-437c-b31c-4513cca2cd46"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 29,
    "sandGameDbSlug": "chassis3x4",
    "sandGameDbDisplayName": "Middling Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2a-middling-chassis"
  },
  {
    "id": "fef52fa6-b14e-4004-9895-72c2457ff2f2",
    "guid": "fef52fa6-b14e-4004-9895-72c2457ff2f2",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 30,
    "sandGameDbSlug": "chassis4x3",
    "sandGameDbDisplayName": "Middling Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/database"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "a02f9be8-5563-40ef-a075-145a4fe3f1b1",
    "guid": "a02f9be8-5563-40ef-a075-145a4fe3f1b1",
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
    "requiredNodeIds": [
      "87a93b7c-11af-43ab-94a2-22c284b86315"
    ],
    "dependentNodeIds": [
      "983aebd7-b6d4-4707-b378-2918466968aa"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 39,
    "sandGameDbSlug": "metalcrew1",
    "sandGameDbDisplayName": "Crew Room",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2b-crew-room"
  },
  {
    "id": "ee23cb69-29cb-4aef-aea9-ff05dcd47fc6",
    "guid": "ee23cb69-29cb-4aef-aea9-ff05dcd47fc6",
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
    "requiredNodeIds": [
      "c42f2a15-0ef7-494e-8a78-c24b0d9ff3a3"
    ],
    "dependentNodeIds": [
      "3122fa7f-f40a-4490-9c22-f26fdd631329",
      "4bba1484-c57b-4451-a4a7-d54555cd944b"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 42,
    "sandGameDbSlug": "woodenreactor1x3",
    "sandGameDbDisplayName": "Motor-Reactor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2b-motor-reactor"
  },
  {
    "id": "983aebd7-b6d4-4707-b378-2918466968aa",
    "guid": "983aebd7-b6d4-4707-b378-2918466968aa",
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
    "requiredNodeIds": [
      "a02f9be8-5563-40ef-a075-145a4fe3f1b1"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 2,
    "treeSlot": "c",
    "treeOrder": 50,
    "sandGameDbSlug": "metalcrew2",
    "sandGameDbDisplayName": "Crew Room",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2c-crew-room-2p"
  },
  {
    "id": "3122fa7f-f40a-4490-9c22-f26fdd631329",
    "guid": "3122fa7f-f40a-4490-9c22-f26fdd631329",
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
    "requiredNodeIds": [
      "ee23cb69-29cb-4aef-aea9-ff05dcd47fc6"
    ],
    "dependentNodeIds": [
      "a8259e00-e745-40b8-9882-d9add19f7a49"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "c",
    "treeOrder": 52,
    "sandGameDbSlug": "smallengine",
    "sandGameDbDisplayName": "Small Engine",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-2c-small-engine"
  },
  {
    "id": "8bf4317c-4d38-4688-a8f3-0d51f22819ac",
    "guid": "8bf4317c-4d38-4688-a8f3-0d51f22819ac",
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
    "requiredNodeIds": [
      "846af560-1b57-415f-ae82-efa66a2746c6"
    ],
    "dependentNodeIds": [
      "65af152d-0a49-48c0-ab7a-ba372dfd3335"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 58,
    "sandGameDbSlug": "crafting-resources-t3",
    "sandGameDbDisplayName": "Crafting Materials",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3a-crafting-materials"
  },
  {
    "id": "2d113fa5-bdc0-457a-93e7-c1fd00b46038",
    "guid": "2d113fa5-bdc0-457a-93e7-c1fd00b46038",
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
    "requiredNodeIds": [
      "7e4b1db2-4765-4b19-aa37-cac3ff1bc548"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 4,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 62,
    "sandGameDbSlug": "corridor-metal",
    "sandGameDbDisplayName": "Metal Corridor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3a-metal-corridor"
  },
  {
    "id": "4bba1484-c57b-4451-a4a7-d54555cd944b",
    "guid": "4bba1484-c57b-4451-a4a7-d54555cd944b",
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
    "requiredNodeIds": [
      "ee23cb69-29cb-4aef-aea9-ff05dcd47fc6"
    ],
    "dependentNodeIds": [
      "ef262856-9040-4e10-991d-8965bf45909d"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 63,
    "sandGameDbSlug": "metalreactor2x2",
    "sandGameDbDisplayName": "Motor-Reactor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3a-motor-reactor"
  },
  {
    "id": "a8259e00-e745-40b8-9882-d9add19f7a49",
    "guid": "a8259e00-e745-40b8-9882-d9add19f7a49",
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
    "requiredNodeIds": [
      "3122fa7f-f40a-4490-9c22-f26fdd631329"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 61,
    "sandGameDbSlug": "medium-engine",
    "sandGameDbDisplayName": "Medium Engine",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3a-medium-engine"
  },
  {
    "id": "e96a149c-f046-437c-b31c-4513cca2cd46",
    "guid": "e96a149c-f046-437c-b31c-4513cca2cd46",
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
    "requiredNodeIds": [
      "0918117d-3d17-4d5b-8ff3-32152d0e841f"
    ],
    "dependentNodeIds": [
      "d02797bc-47d0-49d4-9698-bdff0869869e",
      "3271f0eb-c2fc-4435-9355-5c198f993ec3",
      "035f23d7-9399-48fd-be7c-02d085660a1f",
      "ea1b5710-fd30-40d4-a101-937843ca769e"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 60,
    "sandGameDbSlug": "chasiss-4x4",
    "sandGameDbDisplayName": "Great Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3a-great-chassis"
  },
  {
    "id": "65af152d-0a49-48c0-ab7a-ba372dfd3335",
    "guid": "65af152d-0a49-48c0-ab7a-ba372dfd3335",
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
    "requiredNodeIds": [
      "8bf4317c-4d38-4688-a8f3-0d51f22819ac"
    ],
    "dependentNodeIds": [
      "cba57cb2-a524-4578-8666-b524bbe9a154"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 74,
    "sandGameDbSlug": "smoke-grenade-t3",
    "sandGameDbDisplayName": "Smoke Grenade",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/rg79s-smoke-grenade",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/rg79s-smoke-grenade",
    "cogAndCrownId": "godlewski-3b-smoke-grenade"
  },
  {
    "id": "ef262856-9040-4e10-991d-8965bf45909d",
    "guid": "ef262856-9040-4e10-991d-8965bf45909d",
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
    "requiredNodeIds": [
      "4bba1484-c57b-4451-a4a7-d54555cd944b"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 73,
    "sandGameDbSlug": "metalreactor1x3",
    "sandGameDbDisplayName": "Motor-Reactor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3b-motor-reactor"
  },
  {
    "id": "d02797bc-47d0-49d4-9698-bdff0869869e",
    "guid": "d02797bc-47d0-49d4-9698-bdff0869869e",
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
    "requiredNodeIds": [
      "e96a149c-f046-437c-b31c-4513cca2cd46"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 69,
    "sandGameDbSlug": "chassis-3x5",
    "sandGameDbDisplayName": "Great Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3b-great-chassis-hb"
  },
  {
    "id": "3271f0eb-c2fc-4435-9355-5c198f993ec3",
    "guid": "3271f0eb-c2fc-4435-9355-5c198f993ec3",
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
    "requiredNodeIds": [
      "e96a149c-f046-437c-b31c-4513cca2cd46"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 4,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 70,
    "sandGameDbSlug": "chassis-hole-4x4",
    "sandGameDbDisplayName": "Great Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-3b-great-chassis-hl"
  },
  {
    "id": "cba57cb2-a524-4578-8666-b524bbe9a154",
    "guid": "cba57cb2-a524-4578-8666-b524bbe9a154",
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
    "requiredNodeIds": [
      "65af152d-0a49-48c0-ab7a-ba372dfd3335"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 88,
    "sandGameDbSlug": "smokeless-energy-rod-t4",
    "sandGameDbDisplayName": "Smokeless Rod",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/resources#resource-37",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources#resource-37",
    "cogAndCrownId": "godlewski-4a-smokeless-rod"
  },
  {
    "id": "035f23d7-9399-48fd-be7c-02d085660a1f",
    "guid": "035f23d7-9399-48fd-be7c-02d085660a1f",
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
    "requiredNodeIds": [
      "e96a149c-f046-437c-b31c-4513cca2cd46"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 86,
    "sandGameDbSlug": "chassis-hole-5x5",
    "sandGameDbDisplayName": "Royal Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-4a-royal-chassis"
  },
  {
    "id": "ea1b5710-fd30-40d4-a101-937843ca769e",
    "guid": "ea1b5710-fd30-40d4-a101-937843ca769e",
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
    "requiredNodeIds": [
      "e96a149c-f046-437c-b31c-4513cca2cd46"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 87,
    "sandGameDbSlug": "chassis-5x5",
    "sandGameDbDisplayName": "Royal Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "godlewski-4b-royal-chassis"
  },
  {
    "id": "f270bbaf-6727-403a-b41f-b76b06464ea2",
    "guid": "f270bbaf-6727-403a-b41f-b76b06464ea2",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "ac01a9ee-2043-4214-8591-436d00764eac"
    ],
    "isRoot": true,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 6,
    "sandGameDbSlug": "shotgun-cannon-t1",
    "sandGameDbDisplayName": "Shotgun Cannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
    "cogAndCrownId": "kaiser-1a-shotgun-cannon"
  },
  {
    "id": "3e6708b0-b7bd-4827-963a-add838d55194",
    "guid": "3e6708b0-b7bd-4827-963a-add838d55194",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "dc553237-db06-4a7b-8ebd-aec87c99eb95"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 4,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 11,
    "sandGameDbSlug": "woodendecks",
    "sandGameDbDisplayName": "Wooden Decks (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-1a-wooden-decks"
  },
  {
    "id": "1f5919e4-4d93-46cf-8468-dbf1c16c4572",
    "guid": "1f5919e4-4d93-46cf-8468-dbf1c16c4572",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "9968fc6c-426b-469e-bf2c-2e1d779636a9"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 1,
    "sandGameDbSlug": "cargoframe",
    "sandGameDbDisplayName": "Cargo Deck",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-1a-cargo-deck"
  },
  {
    "id": "ac01a9ee-2043-4214-8591-436d00764eac",
    "guid": "ac01a9ee-2043-4214-8591-436d00764eac",
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
    "requiredNodeIds": [
      "f270bbaf-6727-403a-b41f-b76b06464ea2"
    ],
    "dependentNodeIds": [
      "93c0ff7f-fd78-4e79-a2ac-a8a7f9ce607b"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 14,
    "sandGameDbSlug": "auto-cannon-t1",
    "sandGameDbDisplayName": "Auto Cannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
    "cogAndCrownId": "kaiser-1b-auto-cannon"
  },
  {
    "id": "efe43bfd-815a-4075-9db3-f7e8854cc8a3",
    "guid": "efe43bfd-815a-4075-9db3-f7e8854cc8a3",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "e9c038c2-015a-4c56-b3a2-11087773d2d9",
      "e36be025-1f40-4732-a2ce-4bad22b78474"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 4,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 21,
    "sandGameDbSlug": "chassis-hole-3x3",
    "sandGameDbDisplayName": "Small Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-1b-small-chassis"
  },
  {
    "id": "dc553237-db06-4a7b-8ebd-aec87c99eb95",
    "guid": "dc553237-db06-4a7b-8ebd-aec87c99eb95",
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
    "requiredNodeIds": [
      "3e6708b0-b7bd-4827-963a-add838d55194"
    ],
    "dependentNodeIds": [
      "376b8829-1b50-43bf-a965-8c9b9ee52879"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 15,
    "sandGameDbSlug": "balcony",
    "sandGameDbDisplayName": "Balconies (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-1b-balconies"
  },
  {
    "id": "93c0ff7f-fd78-4e79-a2ac-a8a7f9ce607b",
    "guid": "93c0ff7f-fd78-4e79-a2ac-a8a7f9ce607b",
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
    "requiredNodeIds": [
      "ac01a9ee-2043-4214-8591-436d00764eac"
    ],
    "dependentNodeIds": [
      "e8b3a2bd-9e8d-419a-8ba8-7884dfccb7a5"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 25,
    "sandGameDbSlug": "cannon-t2",
    "sandGameDbDisplayName": "Cannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon",
    "cogAndCrownId": "kaiser-2a-cannon"
  },
  {
    "id": "376b8829-1b50-43bf-a965-8c9b9ee52879",
    "guid": "376b8829-1b50-43bf-a965-8c9b9ee52879",
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
    "requiredNodeIds": [
      "dc553237-db06-4a7b-8ebd-aec87c99eb95"
    ],
    "dependentNodeIds": [
      "1a473794-8180-4823-9345-2e7763fb7334"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 24,
    "sandGameDbSlug": "armoredbalcony",
    "sandGameDbDisplayName": "Armored Balconies (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-2a-armored-balconies"
  },
  {
    "id": "9968fc6c-426b-469e-bf2c-2e1d779636a9",
    "guid": "9968fc6c-426b-469e-bf2c-2e1d779636a9",
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
    "requiredNodeIds": [
      "1f5919e4-4d93-46cf-8468-dbf1c16c4572"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 27,
    "sandGameDbSlug": "woodencargosmall",
    "sandGameDbDisplayName": "Cargo Hold",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-2a-cargo-hold"
  },
  {
    "id": "e8b3a2bd-9e8d-419a-8ba8-7884dfccb7a5",
    "guid": "e8b3a2bd-9e8d-419a-8ba8-7884dfccb7a5",
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
    "requiredNodeIds": [
      "93c0ff7f-fd78-4e79-a2ac-a8a7f9ce607b"
    ],
    "dependentNodeIds": [
      "648074b7-5854-4cdf-8b9c-e672c587fafb"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 43,
    "sandGameDbSlug": "shotgun-cannon-t2",
    "sandGameDbDisplayName": "Shotgun Cannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
    "cogAndCrownId": "kaiser-2b-shotgun-cannon"
  },
  {
    "id": "e9c038c2-015a-4c56-b3a2-11087773d2d9",
    "guid": "e9c038c2-015a-4c56-b3a2-11087773d2d9",
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
    "requiredNodeIds": [
      "efe43bfd-815a-4075-9db3-f7e8854cc8a3"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 40,
    "sandGameDbSlug": "chassis-hole-4x3",
    "sandGameDbDisplayName": "Middling Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-2b-middling-chassis-b"
  },
  {
    "id": "e36be025-1f40-4732-a2ce-4bad22b78474",
    "guid": "e36be025-1f40-4732-a2ce-4bad22b78474",
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
    "requiredNodeIds": [
      "efe43bfd-815a-4075-9db3-f7e8854cc8a3"
    ],
    "dependentNodeIds": [
      "74bec5db-ac65-4095-b995-d69109829937"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 41,
    "sandGameDbSlug": "chassis-hole-3x4",
    "sandGameDbDisplayName": "Middling Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-2b-middling-chassis-l"
  },
  {
    "id": "648074b7-5854-4cdf-8b9c-e672c587fafb",
    "guid": "648074b7-5854-4cdf-8b9c-e672c587fafb",
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
    "requiredNodeIds": [
      "e8b3a2bd-9e8d-419a-8ba8-7884dfccb7a5"
    ],
    "dependentNodeIds": [
      "2cffff5f-c3e1-4871-8122-f644bf24d1a6"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 2,
    "treeSlot": "c",
    "treeOrder": 45,
    "sandGameDbSlug": "auto-cannon-t2",
    "sandGameDbDisplayName": "Autocannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
    "cogAndCrownId": "kaiser-2c-autocannon"
  },
  {
    "id": "652f26dc-c603-4008-a8de-8ad32773e871",
    "guid": "652f26dc-c603-4008-a8de-8ad32773e871",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "c",
    "treeOrder": 47,
    "sandGameDbSlug": "cargo-bay-wood-p",
    "sandGameDbDisplayName": "Cargo Bay",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-2c-cargo-bay-l"
  },
  {
    "id": "9281d353-f03c-45c4-8a01-25378e974427",
    "guid": "9281d353-f03c-45c4-8a01-25378e974427",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "c",
    "treeOrder": 48,
    "sandGameDbSlug": "cargo-bay-wood-u",
    "sandGameDbDisplayName": "Cargo Bay",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-2c-cargo-bay-p"
  },
  {
    "id": "19dc0b92-9d48-44e4-8a8a-59526bbd8aed",
    "guid": "19dc0b92-9d48-44e4-8a8a-59526bbd8aed",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 2,
    "treeSlot": "c",
    "treeOrder": 49,
    "sandGameDbSlug": "cargo-bay-wood-l",
    "sandGameDbDisplayName": "Cargo Bay",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-2c-cargo-bay-u"
  },
  {
    "id": "2cffff5f-c3e1-4871-8122-f644bf24d1a6",
    "guid": "2cffff5f-c3e1-4871-8122-f644bf24d1a6",
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
    "requiredNodeIds": [
      "648074b7-5854-4cdf-8b9c-e672c587fafb"
    ],
    "dependentNodeIds": [
      "e311d44f-c2bc-48cf-9b9a-521a85744102"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 64,
    "sandGameDbSlug": "resources-t3",
    "sandGameDbDisplayName": "Resources",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/resources",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources",
    "cogAndCrownId": "kaiser-3a-resources"
  },
  {
    "id": "1a473794-8180-4823-9345-2e7763fb7334",
    "guid": "1a473794-8180-4823-9345-2e7763fb7334",
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
    "requiredNodeIds": [
      "376b8829-1b50-43bf-a965-8c9b9ee52879"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 55,
    "sandGameDbSlug": "armored-decks",
    "sandGameDbDisplayName": "Armored Deck",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-3a-armored-deck"
  },
  {
    "id": "a34fa631-cf64-442f-b423-675e0380454b",
    "guid": "a34fa631-cf64-442f-b423-675e0380454b",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "1426ac09-99ce-4b9d-9f32-2ed54223e4a0"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 57,
    "sandGameDbSlug": "metal-cargo-small",
    "sandGameDbDisplayName": "Cargo Hold",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-3a-cargo-hold"
  },
  {
    "id": "e311d44f-c2bc-48cf-9b9a-521a85744102",
    "guid": "e311d44f-c2bc-48cf-9b9a-521a85744102",
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
    "requiredNodeIds": [
      "2cffff5f-c3e1-4871-8122-f644bf24d1a6"
    ],
    "dependentNodeIds": [
      "5f977d25-40f9-423e-b1d0-76d4e601d475"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 66,
    "sandGameDbSlug": "cannon-t3",
    "sandGameDbDisplayName": "Cannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon",
    "cogAndCrownId": "kaiser-3b-cannon"
  },
  {
    "id": "74bec5db-ac65-4095-b995-d69109829937",
    "guid": "74bec5db-ac65-4095-b995-d69109829937",
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
    "requiredNodeIds": [
      "e36be025-1f40-4732-a2ce-4bad22b78474"
    ],
    "dependentNodeIds": [
      "2854b105-8eac-467e-8eed-0dd3d3952f8a",
      "2adc977b-b3f5-4529-8ac8-19187408921c"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 71,
    "sandGameDbSlug": "chassis-5x3",
    "sandGameDbDisplayName": "Great Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-3b-great-chassis"
  },
  {
    "id": "1426ac09-99ce-4b9d-9f32-2ed54223e4a0",
    "guid": "1426ac09-99ce-4b9d-9f32-2ed54223e4a0",
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
    "requiredNodeIds": [
      "a34fa631-cf64-442f-b423-675e0380454b"
    ],
    "dependentNodeIds": [
      "cbabdaf7-3399-4120-8bb3-1653ca8b950c",
      "cbe87784-6426-4454-b8a6-1ed35dc68769",
      "9abc48b0-eb61-4c0a-96c1-eefa4cd44dae"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 67,
    "sandGameDbSlug": "metal-cargo-medium",
    "sandGameDbDisplayName": "Cargo Hold",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-3b-cargo-hold"
  },
  {
    "id": "5f977d25-40f9-423e-b1d0-76d4e601d475",
    "guid": "5f977d25-40f9-423e-b1d0-76d4e601d475",
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
    "requiredNodeIds": [
      "e311d44f-c2bc-48cf-9b9a-521a85744102"
    ],
    "dependentNodeIds": [
      "df23ea85-7212-4d68-9c20-37ef8d7aef4b"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "c",
    "treeOrder": 78,
    "sandGameDbSlug": "shotgun-cannon-t3",
    "sandGameDbDisplayName": "Shotgun Cannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
    "cogAndCrownId": "kaiser-3c-shotgun-cannon"
  },
  {
    "id": "2854b105-8eac-467e-8eed-0dd3d3952f8a",
    "guid": "2854b105-8eac-467e-8eed-0dd3d3952f8a",
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
    "requiredNodeIds": [
      "74bec5db-ac65-4095-b995-d69109829937"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 3,
    "treeSlot": "c",
    "treeOrder": 76,
    "sandGameDbSlug": "chassis-hole-5x3",
    "sandGameDbDisplayName": "Great Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-3c-great-chassis-b"
  },
  {
    "id": "2adc977b-b3f5-4529-8ac8-19187408921c",
    "guid": "2adc977b-b3f5-4529-8ac8-19187408921c",
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
    "requiredNodeIds": [
      "74bec5db-ac65-4095-b995-d69109829937"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 3,
    "treeSlot": "c",
    "treeOrder": 77,
    "sandGameDbSlug": "chassis-hole-3x5",
    "sandGameDbDisplayName": "Great Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-3c-great-chassis-l"
  },
  {
    "id": "df23ea85-7212-4d68-9c20-37ef8d7aef4b",
    "guid": "df23ea85-7212-4d68-9c20-37ef8d7aef4b",
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
    "requiredNodeIds": [
      "5f977d25-40f9-423e-b1d0-76d4e601d475"
    ],
    "dependentNodeIds": [
      "e7013dd7-480c-45fe-9a61-0f8daab93046"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "d",
    "treeOrder": 79,
    "sandGameDbSlug": "auto-cannon-t3",
    "sandGameDbDisplayName": "Autocannon",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
    "cogAndCrownId": "kaiser-3d-autocannon"
  },
  {
    "id": "e7013dd7-480c-45fe-9a61-0f8daab93046",
    "guid": "e7013dd7-480c-45fe-9a61-0f8daab93046",
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
    "requiredNodeIds": [
      "df23ea85-7212-4d68-9c20-37ef8d7aef4b"
    ],
    "dependentNodeIds": [
      "0629d475-1252-4811-a8a4-dc5ee91fafec"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 85,
    "sandGameDbSlug": "resources-t4",
    "sandGameDbDisplayName": "Resources",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/resources",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/resources",
    "cogAndCrownId": "kaiser-4a-resources"
  },
  {
    "id": "aa8d7636-8ce1-49ca-98ed-2065a5d4950c",
    "guid": "aa8d7636-8ce1-49ca-98ed-2065a5d4950c",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 4,
    "treeSlot": "b",
    "treeOrder": 90,
    "sandGameDbSlug": "chassis-hole-4x6",
    "sandGameDbDisplayName": "Royal Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/database"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "6a65aabb-1b7a-4148-bdc9-0608336aaad5",
    "guid": "6a65aabb-1b7a-4148-bdc9-0608336aaad5",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 4,
    "treeSlot": "b",
    "treeOrder": 91,
    "sandGameDbSlug": "chassis-4x6",
    "sandGameDbDisplayName": "Royal Chassis",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/database"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database"
  },
  {
    "id": "cbabdaf7-3399-4120-8bb3-1653ca8b950c",
    "guid": "cbabdaf7-3399-4120-8bb3-1653ca8b950c",
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
    "requiredNodeIds": [
      "1426ac09-99ce-4b9d-9f32-2ed54223e4a0"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 80,
    "sandGameDbSlug": "cargo-bay-metal-p",
    "sandGameDbDisplayName": "Cargo Bay",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-4a-cargo-bay-l"
  },
  {
    "id": "cbe87784-6426-4454-b8a6-1ed35dc68769",
    "guid": "cbe87784-6426-4454-b8a6-1ed35dc68769",
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
    "requiredNodeIds": [
      "1426ac09-99ce-4b9d-9f32-2ed54223e4a0"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 81,
    "sandGameDbSlug": "cargo-bay-metal-u",
    "sandGameDbDisplayName": "Cargo Bay",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-4a-cargo-bay-p"
  },
  {
    "id": "9abc48b0-eb61-4c0a-96c1-eefa4cd44dae",
    "guid": "9abc48b0-eb61-4c0a-96c1-eefa4cd44dae",
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
    "requiredNodeIds": [
      "1426ac09-99ce-4b9d-9f32-2ed54223e4a0"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 82,
    "sandGameDbSlug": "cargo-bay-metal-l",
    "sandGameDbDisplayName": "Cargo Bay",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "kaiser-4a-cargo-bay-u"
  },
  {
    "id": "0629d475-1252-4811-a8a4-dc5ee91fafec",
    "guid": "0629d475-1252-4811-a8a4-dc5ee91fafec",
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
    "requiredNodeIds": [
      "e7013dd7-480c-45fe-9a61-0f8daab93046"
    ],
    "dependentNodeIds": [
      "3629b7bd-9052-470f-8cf8-e75a6252c177"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 4,
    "treeSlot": "b",
    "treeOrder": 89,
    "sandGameDbSlug": "cannon-t4",
    "sandGameDbDisplayName": "Cannon (alt.price)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/80mm-naval-cannon",
    "cogAndCrownId": "kaiser-4b-cannon-altprice"
  },
  {
    "id": "3629b7bd-9052-470f-8cf8-e75a6252c177",
    "guid": "3629b7bd-9052-470f-8cf8-e75a6252c177",
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
    "requiredNodeIds": [
      "0629d475-1252-4811-a8a4-dc5ee91fafec"
    ],
    "dependentNodeIds": [
      "b846c283-4d4b-4a39-abac-55bea7b510b1"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 4,
    "treeSlot": "c",
    "treeOrder": 93,
    "sandGameDbSlug": "shotgun-cannon-t4",
    "sandGameDbDisplayName": "Shotgun Cannon (alt.price)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/70mm-shotgun-cannon",
    "cogAndCrownId": "kaiser-4c-shotgun-cannon-altprice"
  },
  {
    "id": "b846c283-4d4b-4a39-abac-55bea7b510b1",
    "guid": "b846c283-4d4b-4a39-abac-55bea7b510b1",
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
    "requiredNodeIds": [
      "3629b7bd-9052-470f-8cf8-e75a6252c177"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 4,
    "treeSlot": "d",
    "treeOrder": 94,
    "sandGameDbSlug": "auto-cannon-t4",
    "sandGameDbDisplayName": "Autocannon (alt.price)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/40mm-autocannon",
    "cogAndCrownId": "kaiser-4d-autocannon-altprice"
  },
  {
    "id": "d8547d94-944d-4049-9d8a-407f3a39b01b",
    "guid": "d8547d94-944d-4049-9d8a-407f3a39b01b",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "23fad41b-5a73-4ee3-8b00-577c603ee869"
    ],
    "isRoot": true,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 10,
    "sandGameDbSlug": "weapons-t1",
    "sandGameDbDisplayName": "Weapons",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons",
    "cogAndCrownId": "landwehr-1a-shop-weapons"
  },
  {
    "id": "eba82774-c9c0-402c-a762-1f06a45ad7fb",
    "guid": "eba82774-c9c0-402c-a762-1f06a45ad7fb",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "c97a5276-239f-49fb-ba3c-ac92780172b8"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 0,
    "sandGameDbSlug": "corner-and-open-turret-slot",
    "sandGameDbDisplayName": "Artillery Decks (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1a-artillery-decks"
  },
  {
    "id": "dd2d62ec-6b96-4b91-a808-eb9ab3c8666f",
    "guid": "dd2d62ec-6b96-4b91-a808-eb9ab3c8666f",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "f3c0cf14-e26f-497c-868a-5146b7b43930",
      "07020bb4-4362-4c61-9bf7-4f5e0d3a5cc3"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 4,
    "sandGameDbSlug": "steering-framed-1x1",
    "sandGameDbDisplayName": "Framed Steering",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1a-framed-steering"
  },
  {
    "id": "f9cd9682-9346-4a8c-8820-20abd97826f2",
    "guid": "f9cd9682-9346-4a8c-8820-20abd97826f2",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "cb5bcfbf-dbba-435c-861d-6855953617cf"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 7,
    "sandGameDbSlug": "crafting-wood-small",
    "sandGameDbDisplayName": "Small Armament Workshop",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1a-armament-workshop"
  },
  {
    "id": "6f1be0f0-787d-4b0d-86ba-a80f363ea077",
    "guid": "6f1be0f0-787d-4b0d-86ba-a80f363ea077",
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
    "requiredNodeIds": [],
    "dependentNodeIds": [
      "47d2f87a-aaf8-4a04-82b2-4c398d957595"
    ],
    "isRoot": true,
    "isShop": false,
    "uiPriority": 0,
    "treeColumn": 1,
    "treeSlot": "a",
    "treeOrder": 12,
    "sandGameDbSlug": "enclosed-wooden-entry",
    "sandGameDbDisplayName": "Wooden Vestibule",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1a-wooden-vestibule"
  },
  {
    "id": "23fad41b-5a73-4ee3-8b00-577c603ee869",
    "guid": "23fad41b-5a73-4ee3-8b00-577c603ee869",
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
    "requiredNodeIds": [
      "d8547d94-944d-4049-9d8a-407f3a39b01b"
    ],
    "dependentNodeIds": [
      "f315a416-3369-484d-987d-9b32b37d7c93"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 13,
    "sandGameDbSlug": "armor-t1",
    "sandGameDbDisplayName": "Armor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1b-shop-armor"
  },
  {
    "id": "c97a5276-239f-49fb-ba3c-ac92780172b8",
    "guid": "c97a5276-239f-49fb-ba3c-ac92780172b8",
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
    "requiredNodeIds": [
      "eba82774-c9c0-402c-a762-1f06a45ad7fb"
    ],
    "dependentNodeIds": [
      "f2923d45-df8f-4d42-bdc9-236f27fab7fb"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 16,
    "sandGameDbSlug": "framed-turret-slot-1x1",
    "sandGameDbDisplayName": "Framed Artillery Deck",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1b-framed-artillery-deck"
  },
  {
    "id": "f3c0cf14-e26f-497c-868a-5146b7b43930",
    "guid": "f3c0cf14-e26f-497c-868a-5146b7b43930",
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
    "requiredNodeIds": [
      "dd2d62ec-6b96-4b91-a808-eb9ab3c8666f"
    ],
    "dependentNodeIds": [
      "b712db43-9e04-4b7d-8712-82c92359fad9"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 0,
    "treeColumn": 1,
    "treeSlot": "b",
    "treeOrder": 18,
    "sandGameDbSlug": "large-open-steerings",
    "sandGameDbDisplayName": "Large Open Steering (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1b-large-open-steering"
  },
  {
    "id": "b712db43-9e04-4b7d-8712-82c92359fad9",
    "guid": "b712db43-9e04-4b7d-8712-82c92359fad9",
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
    "requiredNodeIds": [
      "f3c0cf14-e26f-497c-868a-5146b7b43930"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 0,
    "treeColumn": 1,
    "treeSlot": "c",
    "treeOrder": 22,
    "sandGameDbSlug": "large-framed-steerings",
    "sandGameDbDisplayName": "Large Framed Steering (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-1c-large-framed-steering"
  },
  {
    "id": "f315a416-3369-484d-987d-9b32b37d7c93",
    "guid": "f315a416-3369-484d-987d-9b32b37d7c93",
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
    "requiredNodeIds": [
      "23fad41b-5a73-4ee3-8b00-577c603ee869"
    ],
    "dependentNodeIds": [
      "a99bb493-3f3f-4348-8468-18bcdfd75c0b"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 34,
    "sandGameDbSlug": "weapons-t2",
    "sandGameDbDisplayName": "Weapons",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons",
    "cogAndCrownId": "landwehr-2a-shop-weapons"
  },
  {
    "id": "f2923d45-df8f-4d42-bdc9-236f27fab7fb",
    "guid": "f2923d45-df8f-4d42-bdc9-236f27fab7fb",
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
    "requiredNodeIds": [
      "c97a5276-239f-49fb-ba3c-ac92780172b8"
    ],
    "dependentNodeIds": [
      "ae74ec88-08ff-4e3c-b423-818fa3955707"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 23,
    "sandGameDbSlug": "metal-turret-slot",
    "sandGameDbDisplayName": "Armored Artillery Compartment",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-2a-armored-artillery-compartment"
  },
  {
    "id": "07020bb4-4362-4c61-9bf7-4f5e0d3a5cc3",
    "guid": "07020bb4-4362-4c61-9bf7-4f5e0d3a5cc3",
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
    "requiredNodeIds": [
      "dd2d62ec-6b96-4b91-a808-eb9ab3c8666f"
    ],
    "dependentNodeIds": [
      "f600953e-de6a-4658-be88-6cc06864d92a",
      "12d8d5ab-80df-40a9-9d23-5b113f9d6da8"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 33,
    "sandGameDbSlug": "steering-wooden-1x2",
    "sandGameDbDisplayName": "Steering",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-2a-steering"
  },
  {
    "id": "cb5bcfbf-dbba-435c-861d-6855953617cf",
    "guid": "cb5bcfbf-dbba-435c-861d-6855953617cf",
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
    "requiredNodeIds": [
      "f9cd9682-9346-4a8c-8820-20abd97826f2"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "a",
    "treeOrder": 28,
    "sandGameDbSlug": "crafting-wood-large",
    "sandGameDbDisplayName": "Large Armament Workshop",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-2a-large-armament-workshop"
  },
  {
    "id": "a99bb493-3f3f-4348-8468-18bcdfd75c0b",
    "guid": "a99bb493-3f3f-4348-8468-18bcdfd75c0b",
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
    "requiredNodeIds": [
      "f315a416-3369-484d-987d-9b32b37d7c93"
    ],
    "dependentNodeIds": [
      "cf0a1391-0c08-4bd5-9005-259d40d755de"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 44,
    "sandGameDbSlug": "small-explosive-t2",
    "sandGameDbDisplayName": "Time Bomb",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/time-bomb",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/time-bomb",
    "cogAndCrownId": "landwehr-2b-shop-time-bomb"
  },
  {
    "id": "ae74ec88-08ff-4e3c-b423-818fa3955707",
    "guid": "ae74ec88-08ff-4e3c-b423-818fa3955707",
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
    "requiredNodeIds": [
      "f2923d45-df8f-4d42-bdc9-236f27fab7fb"
    ],
    "dependentNodeIds": [
      "732bc66c-ec33-406c-93e8-619bc30a50ca"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 37,
    "sandGameDbSlug": "other-open-metal-turret-slots",
    "sandGameDbDisplayName": "Armored Artillery Decks (multiple)",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-2b-armored-artillery-decks"
  },
  {
    "id": "f600953e-de6a-4658-be88-6cc06864d92a",
    "guid": "f600953e-de6a-4658-be88-6cc06864d92a",
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
    "requiredNodeIds": [
      "07020bb4-4362-4c61-9bf7-4f5e0d3a5cc3"
    ],
    "dependentNodeIds": [
      "3ba411a6-5ff4-46a7-b4e0-1b4f3cf1f54b",
      "124cb5da-99cb-4ba8-8831-90759383b596"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "b",
    "treeOrder": 36,
    "sandGameDbSlug": "armor-plate",
    "sandGameDbDisplayName": "Armor Plate",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-2b-armor-plate"
  },
  {
    "id": "3ba411a6-5ff4-46a7-b4e0-1b4f3cf1f54b",
    "guid": "3ba411a6-5ff4-46a7-b4e0-1b4f3cf1f54b",
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
    "requiredNodeIds": [
      "f600953e-de6a-4658-be88-6cc06864d92a"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 2,
    "treeSlot": "c",
    "treeOrder": 46,
    "sandGameDbSlug": "battering-ram",
    "sandGameDbDisplayName": "Battering Ram",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-2c-battering-ram"
  },
  {
    "id": "cf0a1391-0c08-4bd5-9005-259d40d755de",
    "guid": "cf0a1391-0c08-4bd5-9005-259d40d755de",
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
    "requiredNodeIds": [
      "a99bb493-3f3f-4348-8468-18bcdfd75c0b"
    ],
    "dependentNodeIds": [
      "8842ccc4-32ce-4690-a2ed-1685cdd5b361"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 53,
    "sandGameDbSlug": "armor-t3",
    "sandGameDbDisplayName": "Armor",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-3a-shop-armor"
  },
  {
    "id": "732bc66c-ec33-406c-93e8-619bc30a50ca",
    "guid": "732bc66c-ec33-406c-93e8-619bc30a50ca",
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
    "requiredNodeIds": [
      "ae74ec88-08ff-4e3c-b423-818fa3955707"
    ],
    "dependentNodeIds": [
      "d4c962a1-cd83-41e7-9f01-28f726916e09"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 59,
    "sandGameDbSlug": "framed-metal-turret-slot",
    "sandGameDbDisplayName": "Framed Armored Artillery Deck",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-3a-framed-armored-artillery-deck"
  },
  {
    "id": "124cb5da-99cb-4ba8-8831-90759383b596",
    "guid": "124cb5da-99cb-4ba8-8831-90759383b596",
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
    "requiredNodeIds": [
      "f600953e-de6a-4658-be88-6cc06864d92a"
    ],
    "dependentNodeIds": [
      "ce0a3581-1a63-4d5f-8016-2752bbe828ad"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 2,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 54,
    "sandGameDbSlug": "framed-armor",
    "sandGameDbDisplayName": "Armor Plate",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-3a-armor-plate"
  },
  {
    "id": "12d8d5ab-80df-40a9-9d23-5b113f9d6da8",
    "guid": "12d8d5ab-80df-40a9-9d23-5b113f9d6da8",
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
    "requiredNodeIds": [
      "07020bb4-4362-4c61-9bf7-4f5e0d3a5cc3"
    ],
    "dependentNodeIds": [
      "cb11624d-81ce-4952-b19c-84280d91beac"
    ],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 65,
    "sandGameDbSlug": "steeringmetal-1x2",
    "sandGameDbDisplayName": "Steering",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-3a-steering"
  },
  {
    "id": "47d2f87a-aaf8-4a04-82b2-4c398d957595",
    "guid": "47d2f87a-aaf8-4a04-82b2-4c398d957595",
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
    "requiredNodeIds": [
      "6f1be0f0-787d-4b0d-86ba-a80f363ea077"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 0,
    "treeColumn": 3,
    "treeSlot": "a",
    "treeOrder": 56,
    "sandGameDbSlug": "enclosed-metal-entry",
    "sandGameDbDisplayName": "Armored Vestibule",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-3a-armored-vestibule"
  },
  {
    "id": "8842ccc4-32ce-4690-a2ed-1685cdd5b361",
    "guid": "8842ccc4-32ce-4690-a2ed-1685cdd5b361",
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
    "requiredNodeIds": [
      "cf0a1391-0c08-4bd5-9005-259d40d755de"
    ],
    "dependentNodeIds": [
      "5f29c02a-3d1e-4a29-bb11-0a20275bd870"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 72,
    "sandGameDbSlug": "grenade-t3",
    "sandGameDbDisplayName": "Grenade",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons/hg-6-contact-grenade",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons/hg-6-contact-grenade",
    "cogAndCrownId": "landwehr-3b-shop-grenade"
  },
  {
    "id": "ce0a3581-1a63-4d5f-8016-2752bbe828ad",
    "guid": "ce0a3581-1a63-4d5f-8016-2752bbe828ad",
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
    "requiredNodeIds": [
      "124cb5da-99cb-4ba8-8831-90759383b596"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 3,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 68,
    "sandGameDbSlug": "embrasure",
    "sandGameDbDisplayName": "Embrasure",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-3b-embrasure"
  },
  {
    "id": "cb11624d-81ce-4952-b19c-84280d91beac",
    "guid": "cb11624d-81ce-4952-b19c-84280d91beac",
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
    "requiredNodeIds": [
      "12d8d5ab-80df-40a9-9d23-5b113f9d6da8"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 3,
    "treeSlot": "b",
    "treeOrder": 75,
    "sandGameDbSlug": "steeringmetal-2x1",
    "sandGameDbDisplayName": "Steering",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-3b-steering"
  },
  {
    "id": "5f29c02a-3d1e-4a29-bb11-0a20275bd870",
    "guid": "5f29c02a-3d1e-4a29-bb11-0a20275bd870",
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
    "requiredNodeIds": [
      "8842ccc4-32ce-4690-a2ed-1685cdd5b361"
    ],
    "dependentNodeIds": [
      "84ebe031-6120-436e-830d-2442314ecc99"
    ],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 84,
    "sandGameDbSlug": "improved-ammo-t4",
    "sandGameDbDisplayName": "Improved Ammo",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/ammunition",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/ammunition",
    "cogAndCrownId": "landwehr-4a-shop-improved-ammo"
  },
  {
    "id": "d4c962a1-cd83-41e7-9f01-28f726916e09",
    "guid": "d4c962a1-cd83-41e7-9f01-28f726916e09",
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
    "requiredNodeIds": [
      "732bc66c-ec33-406c-93e8-619bc30a50ca"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": false,
    "uiPriority": 1,
    "treeColumn": 4,
    "treeSlot": "a",
    "treeOrder": 83,
    "sandGameDbSlug": "enclosed-turret-slot",
    "sandGameDbDisplayName": "Enclosed Artillery Compartment",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/database",
    "cogAndCrownId": "landwehr-4a-enclosed-artillery-compartment"
  },
  {
    "id": "84ebe031-6120-436e-830d-2442314ecc99",
    "guid": "84ebe031-6120-436e-830d-2442314ecc99",
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
    "requiredNodeIds": [
      "5f29c02a-3d1e-4a29-bb11-0a20275bd870"
    ],
    "dependentNodeIds": [],
    "isRoot": false,
    "isShop": true,
    "uiPriority": 10,
    "treeColumn": 4,
    "treeSlot": "b",
    "treeOrder": 92,
    "sandGameDbSlug": "weapons-t4",
    "sandGameDbDisplayName": "Weapons",
    "sourceUrls": [
      "https://sandraidersofsophie.com/database",
      "https://sandgamedb.com/tools/research-checklist",
      "https://sandraidersofsophie.com/wiki/weapons",
      "https://cogandcrown.com/tech/"
    ],
    "sourceUrl": "https://sandraidersofsophie.com/wiki/weapons",
    "cogAndCrownId": "landwehr-4b-shop-weapons"
  }
];
