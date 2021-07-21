import { Character2 } from "../../models/character2";
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from "../../models/equipment";

export const garments: IBaseEquipment[] = [
  {
    id: 2576,
    name: 'Bravery Bag [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 20,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;

      if (upgrade >= 7) {
        if (baseStr >= 90) {
          _this.eATK = 20;
        }

        if (baseLuk >= 90) {
          _this.criticalPercent = 0.1;
        }

        if (upgrade >= 9) {
          if (baseStr >= 90) {
            _this.eATK = 30;
          }

          if (baseLuk >= 90) {
            _this.criticalPercent = 0.15;
          }
        }
      }
    }
  },
  {
    id: 20773,
    name: 'Excelion Wing',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: false,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 40,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 2519,
    name: `Morrigane's Manteau`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    baseDef: 9,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 2524,
    name: 'Valkyrian Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    compoundOn: null,
    baseDef: 10,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 2589,
    name: 'Fallen Angel Wing [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    compoundOn: null,
    baseDef: 18,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;

      _this.eATK = Math.floor(baseStr / 20) * 1;
      _this.criticalPercent = Math.floor(baseLuk / 20) * 0.01;
    }
  },
  {
    id: 20718,
    name: 'Giant God Snake Skin [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    compoundOn: null,
    baseDef: 38,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { },
  }
];
