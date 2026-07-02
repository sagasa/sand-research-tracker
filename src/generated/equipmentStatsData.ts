import type { AmmoStat, ArmorStat, EquipmentStatsSource, ProjectileStat, WeaponStat } from "../types";

export const equipmentStatsSource: EquipmentStatsSource = {
  "generatedAt": "2026-07-02T00:49:57.306Z",
  "sourceFiles": [
    "infantry_weapon_summary.tsv",
    "infantry_ammo_summary.tsv",
    "infantry_projectile_summary.tsv",
    "player_armor_summary.tsv",
    "infantry_weapon_icon_manifest.tsv"
  ],
  "notes": [
    "Generated from local SAND reference tables bundled at build time.",
    "Damage display uses item damage and range modifiers from the local data tables. Runtime server or balance modifiers may differ.",
    "Weapon icons are bundled for convenience; SAND assets and trademarks belong to their respective rightsholders.",
    "Damage notes indicate headshot multiplier is applied from ammo when present, otherwise weapon; critical multiplier is shown as reference data."
  ]
};

export const weaponStats: WeaponStat[] = [
  {
    "textAsset": "DevSiegeRevolver",
    "category": "pistol/revolver",
    "itemId": "DevSiegeRevolver",
    "templateChain": [
      "item_semiAutomaticPistol"
    ],
    "niceName": "O'Donnel \"Blitz\" SA Pistol",
    "rarity": "UNCOMMON",
    "iconName": "icon_pistol",
    "iconPath": "/equipment-icons/DevSiegeRevolver.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [
      {
        "type": "Siege",
        "amount": 800
      }
    ],
    "clipSize": 85,
    "ammoTypeIds": [
      "DevSiegeRevolverAmmo"
    ],
    "rangeActions": [
      {
        "name": "DevSiegeRevolverAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.27,
        "projectileName": "DevSiegeRevolverProjectile"
      },
      {
        "name": "DevSiegeRevolverAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.27,
        "projectileName": "DevSiegeRevolverProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RevolverPistolReload",
        "mode": "",
        "intervalSeconds": 2.4,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1.5..1.5,y-1.5..1.5;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.055..0.055;scope:0.055..0.055",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.75
    },
    "spawnBlueprint": "DevSiegeRevolver",
    "rewardCount": 100
  },
  {
    "textAsset": "Artefacts",
    "category": "other",
    "itemId": "item_antiReactorGun",
    "templateChain": [],
    "niceName": "###TODO: item_antiReactorGunAmmo name",
    "rarity": "EXPERIMENTAL",
    "iconName": "icon_item_antiReactorGun",
    "iconPath": "/equipment-icons/item_antiReactorGun.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_antiReactorGunAmmo"
    ],
    "rangeActions": [],
    "reloadActions": [],
    "spread": "hip:x..,y..;scope:x..,y..",
    "weaponRangeModifiers": [],
    "recoilPower": "idle:..;hip:..;scope:..",
    "headshotMultiplier": {},
    "criticalMultiplier": {},
    "magnification": {
      "idle": 1,
      "hip": 1.1,
      "scope": 1.6
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.5
    },
    "spawnBlueprint": "item_antiReactorGun",
    "rewardCount": 600
  },
  {
    "textAsset": "Artefacts",
    "category": "other",
    "itemId": "item_orbitalStrikeGun",
    "templateChain": [],
    "niceName": "Orbital Strike Gun",
    "rarity": "EXPERIMENTAL",
    "iconName": "icon_item_orbitalStrikeGun",
    "iconPath": "/equipment-icons/item_orbitalStrikeGun.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_orbitalStrikeAmmo"
    ],
    "rangeActions": [
      {
        "name": "item_orbitalStrikeGunAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.6,
        "projectileName": "item_orbitalStrikeGunProjectile"
      },
      {
        "name": "item_orbitalStrikeGunAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.6,
        "projectileName": "item_orbitalStrikeGunProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "item_orbitalStrikeGunReload",
        "mode": "orbitalstrikegunreload",
        "intervalSeconds": 3.05,
        "projectileName": ""
      }
    ],
    "spread": "",
    "weaponRangeModifiers": [],
    "recoilPower": "",
    "headshotMultiplier": {},
    "criticalMultiplier": {},
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 0.9,
      "scope": 0.8
    },
    "spawnBlueprint": "item_orbitalStrikeGun",
    "rewardCount": 600
  },
  {
    "textAsset": "RepeaterRifle",
    "category": "rifle",
    "itemId": "item_repeaterRifle",
    "templateChain": [],
    "niceName": "SGOW M82 Revolver Rifle",
    "rarity": "RARE",
    "iconName": "icon_rifle",
    "iconPath": "/equipment-icons/item_repeaterRifle.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 6,
    "ammoTypeIds": [
      "item_rifleAmmo",
      "item_rifleAmmo_Armor",
      "item_rifleAmmo_Fire",
      "item_rifleAmmo_Toxic",
      "item_rifleAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RepeaterRifleAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 1.25,
        "projectileName": "RepeaterRifleProjectile"
      },
      {
        "name": "RepeaterRifleAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1.25,
        "projectileName": "RepeaterRifleProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RepeaterRifleReload",
        "mode": "",
        "intervalSeconds": 1.434,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1..1,y-1..1;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 5,
        "modifier": 1.5
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 0.7
      },
      {
        "distance": 200,
        "modifier": 0.7
      },
      {
        "distance": 300,
        "modifier": 0.7
      }
    ],
    "recoilPower": "idle:0..0;hip:0.25..0.25;scope:0.2..0.2",
    "headshotMultiplier": {
      "all": 3
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.6
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_repeaterRifle",
    "rewardCount": 100
  },
  {
    "textAsset": "RevolverSmall",
    "category": "pistol/revolver",
    "itemId": "item_revolverSmall",
    "templateChain": [],
    "niceName": "EB Zseb Revolver",
    "rarity": "COMMON",
    "iconName": "icon_revolverSmall",
    "iconPath": "/equipment-icons/item_revolverSmall.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 6,
    "ammoTypeIds": [
      "item_pistolAmmo",
      "item_pistolAmmo_Fire",
      "item_pistolAmmo_Armor",
      "item_pistolAmmo_Toxic",
      "item_pistolAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RevolverSmallAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 1,
        "projectileName": "RevolverSmallProjectile"
      },
      {
        "name": "RevolverSmallAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1,
        "projectileName": "RevolverSmallProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RevolverSmallReload",
        "mode": "",
        "intervalSeconds": 2.783,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1.5..1.5,y-1.5..1.5;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 150,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.075..0.075;scope:0.075..0.085",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 0.9,
      "scope": 0.75
    },
    "spawnBlueprint": "item_revolverSmall",
    "rewardCount": 50
  },
  {
    "textAsset": "RevolverSmall",
    "category": "pistol/revolver",
    "itemId": "item_revolverSmall_dusters",
    "templateChain": [],
    "niceName": "EB Zseb Revolver",
    "rarity": "UNCOMMON",
    "iconName": "icon_lowTierRevolverBrass",
    "iconPath": "/equipment-icons/item_revolverSmall_dusters.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 6,
    "ammoTypeIds": [
      "item_pistolAmmo",
      "item_pistolAmmo_Fire",
      "item_pistolAmmo_Armor",
      "item_pistolAmmo_Toxic",
      "item_pistolAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RevolverSmallAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 1,
        "projectileName": "RevolverSmallProjectile"
      },
      {
        "name": "RevolverSmallAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1,
        "projectileName": "RevolverSmallProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RevolverSmallDustersReload",
        "mode": "",
        "intervalSeconds": 2.783,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1.5..1.5,y-1.5..1.5;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 150,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.075..0.075;scope:0.075..0.085",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.8
    },
    "spawnBlueprint": "item_revolverSmall_dusters",
    "rewardCount": 100
  },
  {
    "textAsset": "item_rifleMusket",
    "category": "rifle",
    "itemId": "item_rifleMusket",
    "templateChain": [
      "item_repeaterRifle"
    ],
    "niceName": "SGOW M82 Revolver Rifle",
    "rarity": "COMMON",
    "iconName": "icon_item_repeaterRifleOneShot",
    "iconPath": "/equipment-icons/item_rifleMusket.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_rifleAmmo",
      "item_rifleAmmo_Armor",
      "item_rifleAmmo_Fire",
      "item_rifleAmmo_Toxic",
      "item_rifleAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RepeaterRifleAttackOneShot_Hip",
        "mode": "hip",
        "intervalSeconds": 0.63,
        "projectileName": "SingleShotRifleProjectile"
      },
      {
        "name": "RepeaterRifleAttackOneShot_Scope",
        "mode": "scope",
        "intervalSeconds": 0.63,
        "projectileName": "SingleShotRifleProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RepeaterRifleOneShotReload",
        "mode": "",
        "intervalSeconds": 2.95,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1..1,y-1..1;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 5,
        "modifier": 1.5
      },
      {
        "distance": 8,
        "modifier": 1.5
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 300,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.15..0.15;scope:0.1..0.1",
    "headshotMultiplier": {
      "all": 3
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.6
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_rifleMusket",
    "rewardCount": 50
  },
  {
    "textAsset": "item_rifleMusketClip",
    "category": "rifle",
    "itemId": "item_rifleMusketClip",
    "templateChain": [
      "item_repeaterRifle"
    ],
    "niceName": "SGOW M82 Revolver Rifle",
    "rarity": "NOTEWORTHY",
    "iconName": "icon_rifleMusketClip",
    "iconPath": "/equipment-icons/item_rifleMusketClip.png",
    "iconWidth": 241,
    "iconHeight": 189,
    "damageParts": [],
    "clipSize": 6,
    "ammoTypeIds": [
      "item_rifleAmmo",
      "item_rifleAmmo_Armor",
      "item_rifleAmmo_Fire",
      "item_rifleAmmo_Toxic",
      "item_rifleAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "item_rifleMusketClipAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 1.883,
        "projectileName": "item_rifleMusketClipProjectile"
      },
      {
        "name": "item_rifleMusketClipAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1.883,
        "projectileName": "item_rifleMusketClipProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "item_rifleMusketClipReload",
        "mode": "riflemusketclipreload",
        "intervalSeconds": 3,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1..1,y-1..1;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 5,
        "modifier": 1.5
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 300,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.35..0.35;scope:0.3..0.3",
    "headshotMultiplier": {
      "all": 3
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.6
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_rifleMusketClip",
    "rewardCount": 300
  },
  {
    "textAsset": "item_rifleMusket",
    "category": "rifle",
    "itemId": "item_rifleMusketVeteran",
    "templateChain": [
      "item_repeaterRifle"
    ],
    "niceName": "SGOW M82 Revolver Rifle",
    "rarity": "COMMON",
    "iconName": "icon_rifleMusketVeteran",
    "iconPath": "/equipment-icons/item_rifleMusketVeteran.png",
    "iconWidth": 246,
    "iconHeight": 196,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_rifleAmmo",
      "item_rifleAmmo_Armor",
      "item_rifleAmmo_Fire",
      "item_rifleAmmo_Toxic",
      "item_rifleAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RepeaterRifleAttackOneShot_Hip",
        "mode": "hip",
        "intervalSeconds": 0.63,
        "projectileName": "SingleShotRifleProjectile"
      },
      {
        "name": "RepeaterRifleAttackOneShot_Scope",
        "mode": "scope",
        "intervalSeconds": 0.63,
        "projectileName": "SingleShotRifleProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RepeaterRifleOneShotReload",
        "mode": "",
        "intervalSeconds": 2.95,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1..1,y-1..1;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 5,
        "modifier": 1.5
      },
      {
        "distance": 8,
        "modifier": 1.5
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 300,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.15..0.15;scope:0.1..0.1",
    "headshotMultiplier": {
      "all": 3
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.6
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_rifleMusketVeteran",
    "rewardCount": 50
  },
  {
    "textAsset": "RifleRepeaterAperture",
    "category": "rifle",
    "itemId": "item_rifleRepeaterAperture",
    "templateChain": [
      "item_repeaterRifle"
    ],
    "niceName": "SGOW M82 Revolver Rifle",
    "rarity": "NOTEWORTHY",
    "iconName": "icon_item_rifleRepeaterAperture",
    "iconPath": "/equipment-icons/item_rifleRepeaterAperture.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 6,
    "ammoTypeIds": [
      "item_rifleAmmo",
      "item_rifleAmmo_Armor",
      "item_rifleAmmo_Fire",
      "item_rifleAmmo_Toxic",
      "item_rifleAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RifleRepeaterApertureAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 1.25,
        "projectileName": "RepeaterRifleProjectile"
      },
      {
        "name": "RifleRepeaterApertureAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1.25,
        "projectileName": "RepeaterRifleProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RifleRepeaterApertureReload",
        "mode": "",
        "intervalSeconds": 1.434,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1..1,y-1..1;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 5,
        "modifier": 1.5
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 0.7
      },
      {
        "distance": 200,
        "modifier": 0.7
      },
      {
        "distance": 300,
        "modifier": 0.7
      }
    ],
    "recoilPower": "idle:0..0;hip:0.25..0.25;scope:0.2..0.2",
    "headshotMultiplier": {
      "all": 3
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 2
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_rifleRepeaterAperture",
    "rewardCount": 300
  },
  {
    "textAsset": "RocketLauncher",
    "category": "explosive/special",
    "itemId": "item_rocketLauncher",
    "templateChain": [],
    "niceName": "",
    "rarity": "REMARKABLE",
    "iconName": "icon_item_rocketLauncher",
    "iconPath": "/equipment-icons/item_rocketLauncher.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_rocketLauncherAmmoArmorPiercing",
      "item_rocketLauncherAmmoHighExplosion"
    ],
    "rangeActions": [
      {
        "name": "RocketLauncherAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.667,
        "projectileName": "RocketLauncherProjectile"
      },
      {
        "name": "RocketLauncherAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.667,
        "projectileName": "RocketLauncherProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RocketLauncherReload",
        "mode": "",
        "intervalSeconds": 5,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1.5..1.5,y-1.5..1.5;scope:x0..0,y0..0",
    "weaponRangeModifiers": [],
    "recoilPower": "idle:0..0;hip:0.075..0.075;scope:0.075..0.085",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.4
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.75
    },
    "spawnBlueprint": "item_rocketLauncher",
    "rewardCount": 600
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "category": "pistol/revolver",
    "itemId": "item_semiAutomaticPistol",
    "templateChain": [],
    "niceName": "O'Donnel \"Blitz\" SA Pistol",
    "rarity": "UNCOMMON",
    "iconName": "icon_pistol",
    "iconPath": "/equipment-icons/item_semiAutomaticPistol.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 10,
    "ammoTypeIds": [
      "item_pistolAmmo",
      "item_pistolAmmo_Fire",
      "item_pistolAmmo_Armor",
      "item_pistolAmmo_Toxic",
      "item_pistolAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RevolverPistolAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.27,
        "projectileName": "SemiautomaticPistolProjectile"
      },
      {
        "name": "RevolverPistolAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.27,
        "projectileName": "SemiautomaticPistolProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RevolverPistolReload",
        "mode": "",
        "intervalSeconds": 2.4,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1.5..1.5,y-1.5..1.5;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 15,
        "modifier": 0.8
      },
      {
        "distance": 35,
        "modifier": 0.7
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.5
      },
      {
        "distance": 150,
        "modifier": 0.5
      }
    ],
    "recoilPower": "idle:0..0;hip:0.055..0.055;scope:0.055..0.055",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.75
    },
    "spawnBlueprint": "item_semiAutomaticPistol",
    "rewardCount": 100
  },
  {
    "textAsset": "SemiAutomaticPistolDecreasedMag",
    "category": "pistol/revolver",
    "itemId": "item_semiAutomaticPistol_decreasedMag",
    "templateChain": [],
    "niceName": "O'Donnel \"Blitz\" SA Pistol",
    "rarity": "COMMON",
    "iconName": "icon_pistol_rust",
    "iconPath": "/equipment-icons/item_semiAutomaticPistol_decreasedMag.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 5,
    "ammoTypeIds": [
      "item_pistolAmmo",
      "item_pistolAmmo_Fire",
      "item_pistolAmmo_Armor",
      "item_pistolAmmo_Toxic",
      "item_pistolAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RevolverPistol_decreasedMagAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.27,
        "projectileName": "SemiautomaticPistolDecreasedMagProjectile"
      },
      {
        "name": "RevolverPistol_decreasedMagAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.27,
        "projectileName": "SemiautomaticPistolDecreasedMagProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RevolverPistol_decreasedMagReload",
        "mode": "decreasedmagreload",
        "intervalSeconds": 1.8,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1.5..1.5,y-1.5..1.5;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 15,
        "modifier": 0.8
      },
      {
        "distance": 35,
        "modifier": 0.7
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.5
      },
      {
        "distance": 150,
        "modifier": 0.5
      }
    ],
    "recoilPower": "idle:0..0;hip:0.035..0.035;scope:0.035..0.035",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.4
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.75
    },
    "spawnBlueprint": "item_semiAutomaticPistol_decreasedMag",
    "rewardCount": 50
  },
  {
    "textAsset": "SemiAutomaticPistolIncreasedMag",
    "category": "pistol/revolver",
    "itemId": "item_semiAutomaticPistol_increasedMag",
    "templateChain": [],
    "niceName": "O'Donnel \"Blitz\" SA Pistol",
    "rarity": "RARE",
    "iconName": "icon_item_semiAutomaticPistol_increasedMag",
    "iconPath": "/equipment-icons/item_semiAutomaticPistol_increasedMag.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 15,
    "ammoTypeIds": [
      "item_pistolAmmo",
      "item_pistolAmmo_Fire",
      "item_pistolAmmo_Armor",
      "item_pistolAmmo_Toxic",
      "item_pistolAmmo_highVelocity"
    ],
    "rangeActions": [
      {
        "name": "RevolverPistolAttack_increasedMag_Hip",
        "mode": "hip",
        "intervalSeconds": 0.27,
        "projectileName": "SemiautomaticPistolIncreasedMagProjectile"
      },
      {
        "name": "RevolverPistolAttack_increasedMag_Scope",
        "mode": "scope",
        "intervalSeconds": 0.27,
        "projectileName": "SemiautomaticPistolIncreasedMagProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "RevolverPistolReload",
        "mode": "",
        "intervalSeconds": 2.4,
        "projectileName": ""
      }
    ],
    "spread": "hip:x-1.5..1.5,y-1.5..1.5;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 15,
        "modifier": 0.8
      },
      {
        "distance": 35,
        "modifier": 0.7
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.5
      },
      {
        "distance": 150,
        "modifier": 0.5
      }
    ],
    "recoilPower": "idle:0..0;hip:0.07..0.07;scope:0.07..0.07",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.4
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.75
    },
    "spawnBlueprint": "item_semiAutomaticPistol_increasedMag",
    "rewardCount": 300
  },
  {
    "textAsset": "Shotgun",
    "category": "shotgun",
    "itemId": "item_shotgun",
    "templateChain": [],
    "niceName": "O'Donnel \"Pepper Mill\" Shothgun",
    "rarity": "RARE",
    "iconName": "icon_shotgun",
    "iconPath": "/equipment-icons/item_shotgun.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 3,
    "ammoTypeIds": [
      "item_shotgunAmmo",
      "item_shotgunAmmo_slug",
      "item_shotgunAmmo_explosive"
    ],
    "rangeActions": [
      {
        "name": "ShotgunAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 1.22,
        "projectileName": "ShotgunShotProjectile"
      },
      {
        "name": "ShotgunAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1.22,
        "projectileName": "ShotgunShotProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "ShotgunReload",
        "mode": "",
        "intervalSeconds": 5.15,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 10,
        "modifier": 0.8
      },
      {
        "distance": 30,
        "modifier": 0.7
      }
    ],
    "recoilPower": "idle:0..0;hip:0.2..0.2;scope:0.2..0.2",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_shotgun",
    "rewardCount": 100
  },
  {
    "textAsset": "HandmadeShotgun",
    "category": "shotgun",
    "itemId": "item_shotgunHandmade",
    "templateChain": [],
    "niceName": "KF \"Drobulet\" Shotgun",
    "rarity": "COMMON",
    "iconName": "icon_shotgunHandmade",
    "iconPath": "/equipment-icons/item_shotgunHandmade.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_shotgunAmmo",
      "item_shotgunAmmo_Armor",
      "item_shotgunAmmo_Fire",
      "item_shotgunAmmo_Toxic",
      "item_shotgunAmmo_slug",
      "item_shotgunAmmo_explosive"
    ],
    "rangeActions": [
      {
        "name": "HandmadeShotgunAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.7,
        "projectileName": "HandmadeShotgunShotProjectile"
      },
      {
        "name": "HandmadeShotgunAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1.22,
        "projectileName": "HandmadeShotgunShotProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "HandmadeShotgunReload",
        "mode": "",
        "intervalSeconds": 2.5,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 0.8
      },
      {
        "distance": 10,
        "modifier": 0.7
      },
      {
        "distance": 30,
        "modifier": 0.6
      }
    ],
    "recoilPower": "idle:0..0;hip:0.2..0.2;scope:0.2..0.2",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_shotgunHandmade",
    "rewardCount": 50
  },
  {
    "textAsset": "HandmadeShotgunChoke",
    "category": "shotgun",
    "itemId": "item_shotgunHandmade_choke",
    "templateChain": [
      "item_shotgunHandmade"
    ],
    "niceName": "KF \"Drobulet\" Shotgun",
    "rarity": "UNCOMMON",
    "iconName": "icon_item_shotgunHandmade_choke",
    "iconPath": "/equipment-icons/item_shotgunHandmade_choke.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_shotgunAmmo",
      "item_shotgunAmmo_Armor",
      "item_shotgunAmmo_Fire",
      "item_shotgunAmmo_Toxic",
      "item_shotgunAmmo_slug",
      "item_shotgunAmmo_explosive"
    ],
    "rangeActions": [
      {
        "name": "HandmadeShotgun_chokeAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.7,
        "projectileName": "HandmadeShotgunChokeShotProjectile"
      },
      {
        "name": "HandmadeShotgun_chokeAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1.22,
        "projectileName": "HandmadeShotgunChokeShotProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "HandmadeShotgun_chokeReload",
        "mode": "chokereload",
        "intervalSeconds": 2.5,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 0.8
      },
      {
        "distance": 10,
        "modifier": 0.7
      },
      {
        "distance": 30,
        "modifier": 0.6
      }
    ],
    "recoilPower": "idle:0..0;hip:0.2..0.2;scope:0.2..0.2",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_shotgunHandmade_choke",
    "rewardCount": 100
  },
  {
    "textAsset": "ShotgunTriplet",
    "category": "shotgun",
    "itemId": "item_shotgunTriplet",
    "templateChain": [
      "item_shotgun"
    ],
    "niceName": "O'Donnel \"Pepper Mill\" Shothgun",
    "rarity": "NOTEWORTHY",
    "iconName": "icon_item_shotgunTriplet",
    "iconPath": "/equipment-icons/item_shotgunTriplet.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 3,
    "ammoTypeIds": [
      "item_shotgunAmmo"
    ],
    "rangeActions": [
      {
        "name": "ShotgunTripletAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 1.22,
        "projectileName": "ShotgunTripletShotProjectile"
      },
      {
        "name": "ShotgunTripletAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 1.22,
        "projectileName": "ShotgunTripletShotProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "ShotgunTripletReload",
        "mode": "",
        "intervalSeconds": 5.15,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y0..0",
    "weaponRangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 10,
        "modifier": 0.8
      },
      {
        "distance": 30,
        "modifier": 0.7
      }
    ],
    "recoilPower": "idle:0..0;hip:0.3..0.3;scope:0.3..0.3",
    "headshotMultiplier": {
      "all": 2
    },
    "criticalMultiplier": {
      "all": 2
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.3
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_shotgunTriplet",
    "rewardCount": 300
  },
  {
    "textAsset": "SniperRifle",
    "category": "sniper",
    "itemId": "item_sniperRifle",
    "templateChain": [],
    "niceName": "Bartka \"Petros\" Sniper Rifle",
    "rarity": "NOTEWORTHY",
    "iconName": "icon_item_sniperRifle",
    "iconPath": "/equipment-icons/item_sniperRifle.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_sniperRifleAmmo",
      "item_sniperRifleAmmo_highPenetration"
    ],
    "rangeActions": [
      {
        "name": "SniperRifleAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.65,
        "projectileName": "SniperRifleProjectile"
      },
      {
        "name": "SniperRifleAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.65,
        "projectileName": "SniperRifleProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "SniperRifleReload",
        "mode": "",
        "intervalSeconds": 3.8,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 150,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 250,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.3..0.3;scope:0.06..0.06",
    "headshotMultiplier": {
      "all": 2.5
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.1
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.2
    },
    "spawnBlueprint": "item_sniperRifle",
    "rewardCount": 400
  },
  {
    "textAsset": "SniperRifleDoubleBarrel",
    "category": "sniper",
    "itemId": "item_sniperRifleDoubleBarrel",
    "templateChain": [
      "item_sniperRifle"
    ],
    "niceName": "Bartka \"Petros\" Sniper Rifle",
    "rarity": "NOTEWORTHY",
    "iconName": "icon_item_sniperRifle_2",
    "iconPath": "/equipment-icons/item_sniperRifleDoubleBarrel.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 2,
    "ammoTypeIds": [
      "item_sniperRifleAmmo",
      "item_sniperRifleAmmo_highPenetration"
    ],
    "rangeActions": [
      {
        "name": "SniperRifleDoubleBarrelAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.65,
        "projectileName": "SniperRifleProjectile"
      },
      {
        "name": "SniperRifleDoubleBarrelAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.65,
        "projectileName": "SniperRifleProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "SniperRifleDoubleBarrelReload",
        "mode": "",
        "intervalSeconds": 5,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 150,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 250,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.3..0.3;scope:0.06..0.06",
    "headshotMultiplier": {
      "all": 2.5
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.1
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.2
    },
    "spawnBlueprint": "item_sniperRifleDoubleBarrel",
    "rewardCount": 400
  },
  {
    "textAsset": "SniperRifle",
    "category": "sniper",
    "itemId": "item_sniperRifle_ironSights",
    "templateChain": [],
    "niceName": "Bartka \"Petros\" Sniper Rifle",
    "rarity": "UNCOMMON",
    "iconName": "icon_item_sniperRifle_ironSights",
    "iconPath": "/equipment-icons/item_sniperRifle_ironSights.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_sniperRifleAmmo",
      "item_sniperRifleAmmo_highPenetration"
    ],
    "rangeActions": [
      {
        "name": "SniperRifleAttack_Hip",
        "mode": "hip",
        "intervalSeconds": 0.65,
        "projectileName": "SniperRifleProjectile"
      },
      {
        "name": "SniperRifleAttack_Scope",
        "mode": "scope",
        "intervalSeconds": 0.65,
        "projectileName": "SniperRifleProjectile"
      }
    ],
    "reloadActions": [
      {
        "name": "SniperRifleIronSightsReload",
        "mode": "",
        "intervalSeconds": 2.5,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 150,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 250,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.3..0.3;scope:0.06..0.06",
    "headshotMultiplier": {
      "all": 2.5
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.6
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_sniperRifle_ironSights",
    "rewardCount": 100
  },
  {
    "textAsset": "SniperRifle",
    "category": "sniper",
    "itemId": "item_sniperRifle_ironSights_silencer",
    "templateChain": [
      "item_sniperRifle_ironSights"
    ],
    "niceName": "Bartka \"Petros\" Sniper Rifle",
    "rarity": "RARE",
    "iconName": "icon_item_sniperRifle_ironSights_silencer",
    "iconPath": "/equipment-icons/item_sniperRifle_ironSights_silencer.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_sniperRifleAmmo",
      "item_sniperRifleAmmo_highPenetration"
    ],
    "rangeActions": [],
    "reloadActions": [
      {
        "name": "SniperRifleReload",
        "mode": "",
        "intervalSeconds": 3.8,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1.12
      },
      {
        "distance": 150,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 250,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.3..0.3;scope:0.06..0.06",
    "headshotMultiplier": {
      "all": 2.5
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.6
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.6
    },
    "spawnBlueprint": "item_sniperRifle_ironSights_silencer",
    "rewardCount": 200
  },
  {
    "textAsset": "SniperRifle",
    "category": "sniper",
    "itemId": "item_sniperRifle_silencer",
    "templateChain": [
      "item_sniperRifle"
    ],
    "niceName": "Bartka \"Petros\" Sniper Rifle",
    "rarity": "REMARKABLE",
    "iconName": "icon_item_sniperRifle_silencer",
    "iconPath": "/equipment-icons/item_sniperRifle_silencer.png",
    "iconWidth": 256,
    "iconHeight": 256,
    "damageParts": [],
    "clipSize": 1,
    "ammoTypeIds": [
      "item_sniperRifleAmmo",
      "item_sniperRifleAmmo_highPenetration"
    ],
    "rangeActions": [],
    "reloadActions": [
      {
        "name": "SniperRifleReload",
        "mode": "",
        "intervalSeconds": 3.8,
        "projectileName": ""
      }
    ],
    "spread": "hip:x0..0,y0..0;scope:x0..0,y-0..0",
    "weaponRangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1.12
      },
      {
        "distance": 150,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 250,
        "modifier": 1
      }
    ],
    "recoilPower": "idle:0..0;hip:0.2..0.2;scope:0.04..0.04",
    "headshotMultiplier": {
      "all": 2.5
    },
    "criticalMultiplier": {
      "idle": 2,
      "hip": 2,
      "scope": 3
    },
    "magnification": {
      "idle": 1,
      "hip": 1,
      "scope": 1.1
    },
    "movementSpeedModifier": {
      "idle": 1,
      "hip": 1,
      "scope": 0.2
    },
    "spawnBlueprint": "item_sniperRifle_silencer",
    "rewardCount": 600
  }
];

export const ammoStats: AmmoStat[] = [
  {
    "textAsset": "DevSiegeRevolver",
    "itemId": "DevSiegeRevolverAmmo",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "8x21mm Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 1000,
    "rewardCount": 2,
    "spawnBlueprint": "DevSiegeRevolverAmmo"
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "itemId": "IncendiaryPistolAmmo",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "8x21mm Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      },
      {
        "type": "Heat",
        "amount": 2
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.4
      },
      {
        "distance": 150,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 1000,
    "rewardCount": 1,
    "spawnBlueprint": "item_pistolAmmo"
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "itemId": "LowQualityPistolAmmo",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "8x21mm Ammo",
    "rarity": "COMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": null,
        "modifier": 0.9
      },
      {
        "distance": null,
        "modifier": 0.8
      },
      {
        "distance": null,
        "modifier": 0.7
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 1000,
    "rewardCount": 1,
    "spawnBlueprint": "item_pistolAmmo"
  },
  {
    "textAsset": "Artefacts",
    "itemId": "item_antiReactorGunAmmo",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "###TODO name",
    "rarity": "COMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 500
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.4
      },
      {
        "distance": 150,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 3,
    "stackMedium": 3,
    "stackLarge": 3,
    "rewardCount": 2,
    "spawnBlueprint": "item_antiReactorGunAmmo"
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "itemId": "item_pistolAmmo",
    "templateChain": [],
    "niceName": "8x21mm Ammo",
    "rarity": "COMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.4
      },
      {
        "distance": 150,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 1000,
    "rewardCount": 2,
    "spawnBlueprint": "item_pistolAmmo"
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "itemId": "item_pistolAmmo_Armor",
    "templateChain": [],
    "niceName": "8x21mm FMJ Ammo",
    "rarity": "RARE",
    "damageParts": [
      {
        "type": "True",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 0.7
      },
      {
        "distance": 50,
        "modifier": 0.4
      },
      {
        "distance": 100,
        "modifier": 0.2
      },
      {
        "distance": 150,
        "modifier": 0.1
      }
    ],
    "customProjectile": "PistolAmmoArmorPiercingProjectile",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 500,
    "rewardCount": 6,
    "spawnBlueprint": "item_pistolAmmo_Armor"
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "itemId": "item_pistolAmmo_Fire",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "8x21mm Incendiary Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      },
      {
        "type": "Siege",
        "amount": 1000
      },
      {
        "type": "Fire",
        "amount": 12
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.4
      },
      {
        "distance": 150,
        "modifier": 0.3
      }
    ],
    "customProjectile": "TurretProjectile",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 1000,
    "rewardCount": 1,
    "spawnBlueprint": "item_pistolAmmo_Fire"
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "itemId": "item_pistolAmmo_Toxic",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "8x21mm Toxic Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      },
      {
        "type": "True",
        "amount": 8
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.4
      },
      {
        "distance": 150,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 1000,
    "rewardCount": 1,
    "spawnBlueprint": "item_pistolAmmo_Toxic"
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "itemId": "item_pistolAmmo_highVelocity",
    "templateChain": [],
    "niceName": "8x21mm Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 0.7
      },
      {
        "distance": 150,
        "modifier": 0.6
      }
    ],
    "customProjectile": "PistolAmmoHighVelocityProjectile",
    "raytraceSpread": "",
    "stackSmall": 50,
    "stackMedium": 250,
    "stackLarge": 750,
    "rewardCount": 4,
    "spawnBlueprint": "item_pistolAmmo_highVelocity"
  },
  {
    "textAsset": "RepeaterRifle",
    "itemId": "item_rifleAmmo",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "9x42mm Ammo",
    "rarity": "COMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": 5,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 0.8
      },
      {
        "distance": 300,
        "modifier": 0.6
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 30,
    "stackMedium": 150,
    "stackLarge": 500,
    "rewardCount": 4,
    "spawnBlueprint": "item_rifleAmmo"
  },
  {
    "textAsset": "RepeaterRifle",
    "itemId": "item_rifleAmmo_Armor",
    "templateChain": [],
    "niceName": "9x42mm FMJ Ammo",
    "rarity": "RARE",
    "damageParts": [
      {
        "type": "True",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": 5,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 0.8
      },
      {
        "distance": 100,
        "modifier": 0.7
      },
      {
        "distance": 200,
        "modifier": 0.6
      },
      {
        "distance": 300,
        "modifier": 0.5
      }
    ],
    "customProjectile": "RifleAmmoArmorPiercingProjectile",
    "raytraceSpread": "",
    "stackSmall": 30,
    "stackMedium": 150,
    "stackLarge": 300,
    "rewardCount": 8,
    "spawnBlueprint": "item_rifleAmmo_Armor"
  },
  {
    "textAsset": "RepeaterRifle",
    "itemId": "item_rifleAmmo_Fire",
    "templateChain": [
      "item_rifleAmmo",
      "item_pistolAmmo"
    ],
    "niceName": "9x42mm Incendiary Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      },
      {
        "type": "Fire",
        "amount": 12
      }
    ],
    "rangeModifiers": [
      {
        "distance": 5,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 0.8
      },
      {
        "distance": 300,
        "modifier": 0.6
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 30,
    "stackMedium": 150,
    "stackLarge": 500,
    "rewardCount": 5,
    "spawnBlueprint": "item_rifleAmmo_Fire"
  },
  {
    "textAsset": "RepeaterRifle",
    "itemId": "item_rifleAmmo_Toxic",
    "templateChain": [
      "item_rifleAmmo",
      "item_pistolAmmo"
    ],
    "niceName": "9x42mm Toxic Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      },
      {
        "type": "Poison",
        "amount": 8
      }
    ],
    "rangeModifiers": [
      {
        "distance": 5,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 0.8
      },
      {
        "distance": 300,
        "modifier": 0.6
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 30,
    "stackMedium": 150,
    "stackLarge": 500,
    "rewardCount": 5,
    "spawnBlueprint": "item_rifleAmmo_Toxic"
  },
  {
    "textAsset": "RepeaterRifle",
    "itemId": "item_rifleAmmo_highVelocity",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "9x42mm Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 50
      }
    ],
    "rangeModifiers": [
      {
        "distance": 5,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 80,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 1
      },
      {
        "distance": 200,
        "modifier": 1
      },
      {
        "distance": 300,
        "modifier": 1
      }
    ],
    "customProjectile": "RifleAmmoHighVelocityProjectile",
    "raytraceSpread": "",
    "stackSmall": 30,
    "stackMedium": 150,
    "stackLarge": 400,
    "rewardCount": 6,
    "spawnBlueprint": "item_rifleAmmo_highVelocity"
  },
  {
    "textAsset": "RocketLauncher",
    "itemId": "item_rocketLauncherAmmoArmorPiercing",
    "templateChain": [
      "item_pistolAmmo"
    ],
    "niceName": "8x21mm FMJ Ammo",
    "rarity": "NOTEWORTHY",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 300
      },
      {
        "type": "Siege",
        "amount": 700
      }
    ],
    "rangeModifiers": [
      {
        "distance": 15,
        "modifier": 1
      },
      {
        "distance": 35,
        "modifier": 1
      },
      {
        "distance": 50,
        "modifier": 0.6
      },
      {
        "distance": 100,
        "modifier": 0.4
      },
      {
        "distance": 150,
        "modifier": 0.3
      }
    ],
    "customProjectile": "RocketLauncherProjectile",
    "raytraceSpread": "",
    "stackSmall": 2,
    "stackMedium": 5,
    "stackLarge": 10,
    "rewardCount": 150,
    "spawnBlueprint": "item_rocketLauncherAmmoArmorPiercing"
  },
  {
    "textAsset": "RocketLauncher",
    "itemId": "item_rocketLauncherAmmoHighExplosion",
    "templateChain": [],
    "niceName": "8x21mm Ammo",
    "rarity": "NOTEWORTHY",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 300
      },
      {
        "type": "Siege",
        "amount": 150
      }
    ],
    "rangeModifiers": [],
    "customProjectile": "RocketLauncherProjectileHighExplosive",
    "raytraceSpread": "",
    "stackSmall": 2,
    "stackMedium": 5,
    "stackLarge": 10,
    "rewardCount": 300,
    "spawnBlueprint": "item_rocketLauncherAmmoHighExplosion"
  },
  {
    "textAsset": "Shotgun",
    "itemId": "item_shotgunAmmo",
    "templateChain": [],
    "niceName": "12 GA Ammo",
    "rarity": "COMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 22
      }
    ],
    "rangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 0.8
      },
      {
        "distance": 10,
        "modifier": 0.6
      },
      {
        "distance": 30,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 15,
    "stackMedium": 150,
    "stackLarge": 500,
    "rewardCount": 4,
    "spawnBlueprint": "item_shotgunAmmo"
  },
  {
    "textAsset": "Shotgun",
    "itemId": "item_shotgunAmmo_Armor",
    "templateChain": [
      "item_shotgunAmmo"
    ],
    "niceName": "12 GA Heavy Buckshot Ammo",
    "rarity": "COMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 12
      }
    ],
    "rangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 0.8
      },
      {
        "distance": 10,
        "modifier": 0.6
      },
      {
        "distance": 30,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 15,
    "stackMedium": 150,
    "stackLarge": 500,
    "rewardCount": 4,
    "spawnBlueprint": "item_shotgunAmmo_Armor"
  },
  {
    "textAsset": "Shotgun",
    "itemId": "item_shotgunAmmo_Fire",
    "templateChain": [
      "item_shotgunAmmo"
    ],
    "niceName": "12 GA Dragon Breath Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 22
      },
      {
        "type": "Fire",
        "amount": 12
      }
    ],
    "rangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 0.8
      },
      {
        "distance": 10,
        "modifier": 0.6
      },
      {
        "distance": 30,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "{\"items\":[{\"angle\":0,\"offsetFromCenter\":0}]}",
    "stackSmall": 15,
    "stackMedium": 150,
    "stackLarge": 500,
    "rewardCount": 7,
    "spawnBlueprint": "item_shotgun_Fire"
  },
  {
    "textAsset": "Shotgun",
    "itemId": "item_shotgunAmmo_Toxic",
    "templateChain": [
      "item_shotgunAmmo"
    ],
    "niceName": "12 GA Toxic Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 22
      },
      {
        "type": "Poison",
        "amount": 9
      }
    ],
    "rangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 0.8
      },
      {
        "distance": 10,
        "modifier": 0.6
      },
      {
        "distance": 30,
        "modifier": 0.3
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 15,
    "stackMedium": 150,
    "stackLarge": 500,
    "rewardCount": 7,
    "spawnBlueprint": "item_shotgun_Toxic"
  },
  {
    "textAsset": "Shotgun",
    "itemId": "item_shotgunAmmo_explosive",
    "templateChain": [
      "item_shotgunAmmo"
    ],
    "niceName": "12 GA Dragon Breath Ammo",
    "rarity": "RARE",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 10
      },
      {
        "type": "Siege",
        "amount": 10
      }
    ],
    "rangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 10,
        "modifier": 1
      },
      {
        "distance": 30,
        "modifier": 1
      }
    ],
    "customProjectile": "ShotgunAmmoExplosiveProjectile",
    "raytraceSpread": "{\"items\":[{\"angle\":0,\"offsetFromCenter\":0},{\"angle\":40,\"offsetFromCenter\":0.5},{\"angle\":120,\"offsetFromCenter\":0.3},{\"angle\":240,\"offsetFromCenter\":0.15},{\"angle\":310,\"offsetFromCenter\":0.2},{\"angle\":20,\"offsetFromCenter\":0.5},{\"angle\":80,\"offsetFromCenter\":0.15},{\"angle\":180,\"offsetFromCenter\":0.1},{\"angle\":290,\"offsetFromCenter\":0.3},{\"angle\":340,\"offsetFromCenter\":0.4},{\"angle\":30,\"offsetFromCenter\":0.2},{\"angle\":100,\"offsetFromCenter\":0.5},{\"angle\":140,\"offsetFromCenter\":0.15},{\"angle\":220,\"offsetFromCenter\":0.6},{\"angle\":210,\"offsetFromCenter\":0.1}]}",
    "stackSmall": 15,
    "stackMedium": 150,
    "stackLarge": 300,
    "rewardCount": 8,
    "spawnBlueprint": "item_shotgunAmmo_explosive"
  },
  {
    "textAsset": "Shotgun",
    "itemId": "item_shotgunAmmo_slug",
    "templateChain": [
      "item_shotgunAmmo"
    ],
    "niceName": "12 GA Slug Ammo",
    "rarity": "UNCOMMON",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 150
      }
    ],
    "rangeModifiers": [
      {
        "distance": 4,
        "modifier": 1
      },
      {
        "distance": 6,
        "modifier": 1
      },
      {
        "distance": 8,
        "modifier": 1
      },
      {
        "distance": 10,
        "modifier": 0.75
      },
      {
        "distance": 30,
        "modifier": 0.3
      }
    ],
    "customProjectile": "ShotgunAmmoSlugProjectile",
    "raytraceSpread": "{\"items\":[{\"angle\":0,\"offsetFromCenter\":0}]}",
    "stackSmall": 15,
    "stackMedium": 150,
    "stackLarge": 400,
    "rewardCount": 6,
    "spawnBlueprint": "item_shotgunAmmo_slug"
  },
  {
    "textAsset": "SniperRifle",
    "itemId": "item_sniperRifleAmmo",
    "templateChain": [],
    "niceName": "11x54mm Ammo",
    "rarity": "RARE",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 100
      }
    ],
    "rangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 0.9
      },
      {
        "distance": 150,
        "modifier": 0.8
      },
      {
        "distance": 200,
        "modifier": 0.7
      },
      {
        "distance": 250,
        "modifier": 0.6
      }
    ],
    "customProjectile": "",
    "raytraceSpread": "",
    "stackSmall": 6,
    "stackMedium": 60,
    "stackLarge": 120,
    "rewardCount": 6,
    "spawnBlueprint": "item_sniperRifleAmmo"
  },
  {
    "textAsset": "SniperRifle",
    "itemId": "item_sniperRifleAmmo_highPenetration",
    "templateChain": [],
    "niceName": "11x54mm Ammo",
    "rarity": "NOTEWORTHY",
    "damageParts": [
      {
        "type": "Physical",
        "amount": 75
      }
    ],
    "rangeModifiers": [
      {
        "distance": 50,
        "modifier": 1
      },
      {
        "distance": 100,
        "modifier": 0.7
      },
      {
        "distance": 150,
        "modifier": 0.6
      },
      {
        "distance": 200,
        "modifier": 0.5
      },
      {
        "distance": 250,
        "modifier": 0.5
      }
    ],
    "customProjectile": "SniperRifleAmmoHighPenetrationProjectile",
    "raytraceSpread": "",
    "stackSmall": 6,
    "stackMedium": 60,
    "stackLarge": 100,
    "rewardCount": 10,
    "spawnBlueprint": "item_sniperRifleAmmo_highPenetration"
  }
];

export const projectileStats: ProjectileStat[] = [
  {
    "textAsset": "DevSiegeRevolver",
    "projectileName": "DevSiegeRevolverProjectile",
    "projectileType": "BULLET",
    "velocity": null,
    "weight": 0.01,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.5,
    "autoDestroy": 1.5,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "GrenadeEMP",
    "projectileName": "GrenadeEMPProjectile",
    "projectileType": "GRENADE",
    "velocity": 32,
    "weight": 1,
    "gravity": 9.81,
    "drag": 0.2,
    "radiusStart": 0.05,
    "radiusEnd": 0.1,
    "autoDestroy": 15,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "Grenade",
    "projectileName": "GrenadeProjectile",
    "projectileType": "GRENADE",
    "velocity": 32,
    "weight": 1,
    "gravity": 9.81,
    "drag": 0.2,
    "radiusStart": 0.05,
    "radiusEnd": 0.1,
    "autoDestroy": 15,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "HandmadeShotgunChoke",
    "projectileName": "HandmadeShotgunChokeShotProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 1,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "HandmadeShotgun",
    "projectileName": "HandmadeShotgunShotProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 1,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "LightMachineGun",
    "projectileName": "LightMachineGunProjectileT1",
    "projectileType": "BULLET",
    "velocity": 400,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.7,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "LightMachineGun",
    "projectileName": "LightMachineGunProjectileT2",
    "projectileType": "BULLET",
    "velocity": 400,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.7,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "LightMachineGun",
    "projectileName": "LightMachineGunProjectileT3",
    "projectileType": "BULLET",
    "velocity": 400,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.7,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "LightMachineGun",
    "projectileName": "LightMachineGunProjectileT4",
    "projectileType": "BULLET",
    "velocity": 400,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.7,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "projectileName": "PistolAmmoArmorPiercingProjectile",
    "projectileType": "BULLET",
    "velocity": 200,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.4,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "projectileName": "PistolAmmoHighVelocityProjectile",
    "projectileType": "BULLET",
    "velocity": 500,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.075,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "RepeaterRifle",
    "projectileName": "RepeaterRifleProjectile",
    "projectileType": "BULLET",
    "velocity": 400,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.7,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "RevolverSmall",
    "projectileName": "RevolverDustersSmallProjectile",
    "projectileType": "BULLET",
    "velocity": 250,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "RevolverSmall",
    "projectileName": "RevolverSmallProjectile",
    "projectileType": "BULLET",
    "velocity": 350,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "RepeaterRifle",
    "projectileName": "RifleAmmoArmorPiercingProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "RepeaterRifle",
    "projectileName": "RifleAmmoHighVelocityProjectile",
    "projectileType": "BULLET",
    "velocity": 750,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "RocketLauncher",
    "projectileName": "RocketLauncherProjectile",
    "projectileType": "TURRET_BULLET",
    "velocity": 125,
    "weight": 100,
    "gravity": 4,
    "drag": 0.2,
    "radiusStart": 0.05,
    "radiusEnd": 0.1,
    "autoDestroy": 30,
    "ricochetAngle": 20,
    "ricochetCount": 1,
    "penetrationAngle": 5,
    "penetrationCount": 1,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "RocketLauncher",
    "projectileName": "RocketLauncherProjectileHighExplosive",
    "projectileType": "TURRET_BULLET",
    "velocity": 125,
    "weight": 100,
    "gravity": 4,
    "drag": 0.2,
    "radiusStart": 0.05,
    "radiusEnd": 0.1,
    "autoDestroy": 30,
    "ricochetAngle": 20,
    "ricochetCount": 1,
    "penetrationAngle": 5,
    "penetrationCount": 1,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "SemiAutomaticPistolDecreasedMag",
    "projectileName": "SemiautomaticPistolDecreasedMagProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "SemiAutomaticPistolIncreasedMag",
    "projectileName": "SemiautomaticPistolIncreasedMagProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "SemiAutomaticPistol",
    "projectileName": "SemiautomaticPistolProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "Shotgun",
    "projectileName": "ShotgunAmmoExplosiveProjectile",
    "projectileType": "BULLET",
    "velocity": 200,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 1,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "Shotgun",
    "projectileName": "ShotgunAmmoSlugProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.15,
    "radiusEnd": 0.6,
    "autoDestroy": 1,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "Shotgun",
    "projectileName": "ShotgunShotProjectile",
    "projectileType": "BULLET",
    "velocity": 150,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 1,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "ShotgunTriplet",
    "projectileName": "ShotgunTripletShotProjectile",
    "projectileType": "BULLET",
    "velocity": 300,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.6,
    "autoDestroy": 1,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "item_rifleMusket",
    "projectileName": "SingleShotRifleProjectile",
    "projectileType": "BULLET",
    "velocity": 400,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.7,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "SniperRifle",
    "projectileName": "SniperRifleAmmoHighPenetrationProjectile",
    "projectileType": "BULLET",
    "velocity": 400,
    "weight": 0.2,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.5,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": 360,
    "penetrationCount": null,
    "newProjectileOnPenetration": "SniperRifleProjectile",
    "newAmmoOnPenetration": "item_sniperRifleAmmo"
  },
  {
    "textAsset": "SniperRifle",
    "projectileName": "SniperRifleProjectile",
    "projectileType": "BULLET",
    "velocity": 500,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.01,
    "radiusEnd": 0.8,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "SniperRifle",
    "projectileName": "SniperRifleSuppressedProjectile",
    "projectileType": "BULLET",
    "velocity": 650,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.6,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "BaseTurret",
    "projectileName": "TurretProjectile",
    "projectileType": "TURRET_BULLET",
    "velocity": null,
    "weight": 100,
    "gravity": 9.8,
    "drag": 0.2,
    "radiusStart": 0.05,
    "radiusEnd": 0.1,
    "autoDestroy": 10,
    "ricochetAngle": 20,
    "ricochetCount": 1,
    "penetrationAngle": 5,
    "penetrationCount": 1,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "Artefacts",
    "projectileName": "item_orbitalStrikeGunProjectile",
    "projectileType": "BULLET",
    "velocity": null,
    "weight": null,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.05,
    "radiusEnd": 0.5,
    "autoDestroy": 10,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  },
  {
    "textAsset": "item_rifleMusketClip",
    "projectileName": "item_rifleMusketClipProjectile",
    "projectileType": "BULLET",
    "velocity": 350,
    "weight": 0.05,
    "gravity": 9.8,
    "drag": 0,
    "radiusStart": 0.1,
    "radiusEnd": 0.7,
    "autoDestroy": 3,
    "ricochetAngle": null,
    "ricochetCount": null,
    "penetrationAngle": null,
    "penetrationCount": null,
    "newProjectileOnPenetration": "",
    "newAmmoOnPenetration": ""
  }
];

export const armorStats: ArmorStat[] = [
  {
    "kind": "health",
    "textAsset": "Game",
    "entryName": "DestructibleWalkerModuleTemplate",
    "templateChain": [],
    "healthValue": 1000,
    "healthCount": 1,
    "damageMasks": [
      "SIEGE"
    ],
    "regenDelay": null,
    "regenSpeed": null,
    "initialItems": []
  },
  {
    "kind": "health",
    "textAsset": "SharedEntityBlueprints",
    "entryName": "AttackDummy",
    "templateChain": [],
    "healthValue": 1000,
    "healthCount": 1,
    "damageMasks": [
      "PHYSICAL",
      "COLD",
      "HEAT",
      "FIRE",
      "POISON",
      "RAD",
      "TRUE"
    ],
    "regenDelay": 10,
    "regenSpeed": 100,
    "initialItems": []
  },
  {
    "kind": "health",
    "textAsset": "SharedEntityBlueprints",
    "entryName": "AttackDummy_PlayerAvatarLike",
    "templateChain": [],
    "healthValue": 50,
    "healthCount": 3,
    "damageMasks": [
      "PHYSICAL",
      "COLD",
      "HEAT",
      "FIRE",
      "POISON",
      "RAD",
      "TRUE"
    ],
    "regenDelay": 8,
    "regenSpeed": 10,
    "initialItems": []
  },
  {
    "kind": "health",
    "textAsset": "SharedEntityBlueprints",
    "entryName": "AttackDummy_PlayerAvatarLike_Armored",
    "templateChain": [
      "AttackDummy_PlayerAvatarLike"
    ],
    "healthValue": 50,
    "healthCount": 3,
    "damageMasks": [
      "PHYSICAL",
      "COLD",
      "HEAT",
      "FIRE",
      "POISON",
      "RAD",
      "TRUE"
    ],
    "regenDelay": 8,
    "regenSpeed": 10,
    "initialItems": [
      "3:Old_JacketT3"
    ]
  },
  {
    "kind": "health",
    "textAsset": "SharedEntityBlueprints",
    "entryName": "AttackDummy_PlayerAvatarLike_Armored_TeamMate",
    "templateChain": [
      "AttackDummy_PlayerAvatarLike_Armored",
      "AttackDummy_PlayerAvatarLike"
    ],
    "healthValue": 50,
    "healthCount": 3,
    "damageMasks": [
      "PHYSICAL",
      "COLD",
      "HEAT",
      "FIRE",
      "POISON",
      "RAD",
      "TRUE"
    ],
    "regenDelay": 8,
    "regenSpeed": 10,
    "initialItems": [
      "3:Old_JacketT3"
    ]
  },
  {
    "kind": "health",
    "textAsset": "SharedEntityBlueprints",
    "entryName": "PlayerAvatar",
    "templateChain": [],
    "healthValue": 50,
    "healthCount": 3,
    "damageMasks": [
      "PHYSICAL",
      "COLD",
      "HEAT",
      "FIRE",
      "POISON",
      "RAD",
      "TRUE"
    ],
    "regenDelay": 8,
    "regenSpeed": 10,
    "initialItems": []
  },
  {
    "kind": "armor",
    "textAsset": "Items",
    "entryName": "Old_Jacket",
    "templateChain": [],
    "healthValue": 50,
    "healthCount": null,
    "damageMasks": [
      "PHYSICAL_ARMOR"
    ],
    "regenDelay": 6,
    "regenSpeed": 7,
    "initialItems": []
  },
  {
    "kind": "armor",
    "textAsset": "Items",
    "entryName": "Old_JacketT2",
    "templateChain": [
      "Old_Jacket"
    ],
    "healthValue": 100,
    "healthCount": null,
    "damageMasks": [
      "PHYSICAL_ARMOR"
    ],
    "regenDelay": 8,
    "regenSpeed": 6,
    "initialItems": []
  },
  {
    "kind": "armor",
    "textAsset": "Items",
    "entryName": "Old_JacketT3",
    "templateChain": [
      "Old_Jacket"
    ],
    "healthValue": 150,
    "healthCount": null,
    "damageMasks": [
      "PHYSICAL_ARMOR"
    ],
    "regenDelay": 10,
    "regenSpeed": 5,
    "initialItems": []
  }
];
