import Big from 'big.js';
import { Character2 } from "../../models/character2";
import { ClassKey } from '../../models/class';
import { E_Element } from '../../models/element';
import { IBaseEquipment, EquipmentType, CompoundOn } from "../../models/equipment";
import { MonsterRace, MonsterType } from "../../models/monster";

export const cards: IBaseEquipment[] = [
  {
    id: 4508,
    name: 'Gold Scaraba Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
    baseDef: 0,
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
    eATK: 20,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Mad Berserker',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4468,
    name: 'Dark Pinguicula Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
    baseDef: 0,
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
    eATK: 10,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Pollution',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4337,
    name: 'Porcellio Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
    baseDef: 0,
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
    eATK: 25,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Wild Cat',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4608,
    name: 'White Knight Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
      size: 0.2,
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
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Knight',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4594,
    name: 'Petal Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.GARMENT,
    baseDef: 0,
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
    suffix: 'of Death Blow',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseLuk = character.class.luk0;
      _this.criticalPercent = Number((new Big(Math.floor((baseLuk) / 10))).mul(0.02).valueOf());
    }
  },
  {
    id: 4140,
    name: 'Abysmal Knight Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
    prefix: 'Liberation',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;

      if (character.monster.type === MonsterType.BOSS) {
        _this.additionAtk.class = 0.25;
      }
    }
  },
  {
    id: 300291,
    name: '1st Anniversary Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
    baseDef: 0,
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
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'The First',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4521,
    name: 'Sedora Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
    criticalPercent: 0.15,
    penetrationPercent: 0,
    prefix: 'Mortal Blow',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4643,
    name: 'Infinite Vagabond Wolf Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
    baseDef: 0,
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
    prefix: 'Strike',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 10;

      const upgrade = _this.equipUpgradeValue;
      if (upgrade >= 7) {
        _this.eATK += 10;
        if (upgrade >= 9) {
          _this.eATK += 15;
        }
      }
    }
  },
  {
    id: 4091,
    name: 'Kobold Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
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
    suffix: 'of Counter',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4464,
    name: 'Aunoe Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
    penetrationPercent: 0.2,
    prefix: 'Fatal',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4137,
    name: 'Drake Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
    options: {
      ignoreSizePenalty: true
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Infinity',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4305,
    name: 'Turtle General Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
      atkPercent: 0.2
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Blast',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4494,
    name: 'Sealed Turtle General Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
    prefix: 'Half Blast',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent = 0.1;
      const upgrade = _this.equipUpgradeValue;
      if (upgrade >= 15) {
        _this.additionAtk.atkPercent = Number((new Big(_this.additionAtk.atkPercent)).plus(0.05).valueOf());
      }
    }
  },
  {
    id: 31017,
    name: 'Vicious Cookie Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
    baseDef: 0,
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
    suffix: 'of Hate',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent = 0.01;

      const upgrade = _this.equipUpgradeValue;
      const tempPercentUpgrade = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
      _this.additionAtk.atkPercent = Number((new Big(_this.additionAtk.atkPercent)).plus(tempPercentUpgrade).valueOf());
    }
  },
  {
    id: 31024,
    name: 'Immortal Bloody Knight Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: 0,
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
      atkPercent: 0,
      atkPercent2: 0.1
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Volcanic',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4583,
    name: 'Engkanto Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
    baseDef: 0,
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
    suffix: 'of Poison Grass',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.element = 0;
      _this.penetrationPercent = 0;
      if (character.monster.element === E_Element.POISON) {
        _this.additionAtk.element = 0.3;
      }

      if (character.monster.race === MonsterRace.PLANT) {
        _this.penetrationPercent = 0.3;
      }
    }
  },
  {
    id: 4601,
    name: 'Amdarais Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
    baseDef: 0,
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
      atkPercent: 0.15
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Explosion',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4602,
    name: 'Realized Amdarais Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
    baseDef: 0,
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
      atkPercent: 0.2
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Fury',
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4513,
    name: 'Angra Mantis Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
    baseDef: 0,
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
    suffix: 'of Thief',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.02;

      if (character.class.classKey === ClassKey.GuillotineCross) {
        const upgrade = _this.equipUpgradeValue;
        const tempPercentUpgrade = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.criticalPercent = Number((new Big(_this.criticalPercent)).plus(tempPercentUpgrade).valueOf());
      }
    }
  },
];
