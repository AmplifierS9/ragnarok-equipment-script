import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const upperHeadgear: IBaseEquipment[] = [
  {
    id: 19263,
    name: 'General Helm [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 12,
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
      _this.eATK = Math.floor(upgrade / 2) * 15;

      if (upgrade >= 9) {
        _this.additionAtk.atkPercent = 0.05;
      }

      if (upgrade >= 11) {
        _this.criticalPercent = 0.15;
      }
    }
  },
  {
    id: 18971,
    name: 'Old Rune Circlet [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 10,
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
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 4;
    }
  },
  {
    id: 18982,
    name: 'Old Bone Circlet [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 10,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 19328,
    name: 'Spider Seduction [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent = 0;
      _this.penetrationPercent = 0;

      const baseStr = character.class.str0;
      const multiplierStrLuk = Math.floor((baseStr) / 12);
      _this.eATK = multiplierStrLuk * 5;
      _this.penetrationPercent = Number((new Big(multiplierStrLuk)).mul(0.1).valueOf());

      const upgrade = _this.equipUpgradeValue;
      if (upgrade >= 9) {
        _this.additionAtk.atkPercent = 0.02;
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(0.05).valueOf());

        if (upgrade >= 12) {
          _this.additionAtk.atkPercent = Number((new Big(_this.additionAtk.atkPercent)).plus(0.03).valueOf());
          _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(0.05).valueOf());
        }
      }
    }
  },
];
