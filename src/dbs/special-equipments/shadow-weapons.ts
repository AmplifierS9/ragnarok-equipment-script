import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';
import { MonsterRace } from '../../models/monster';

export const shadowWeapons: IBaseEquipment[] = [
  {
    id: 24163,
    name: 'Formless Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.FORMLESS) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.FORMLESS) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24032,
    name: 'Critical Hit Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 10,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (upgrade >= 7) {
        _this.criticalPercent = 0.01;
      }

      if (character.shadowBodyGear && character.shadowBodyGear?.id === 24030) {
        const shadowBodyGearRefine = character.shadowBodyGear.equipUpgradeValue;

        const sumAll = shadowBodyGearRefine + _this.equipUpgradeValue;
        _this.eATK += sumAll;

        if (sumAll >= 15) {
          _this.criticalPercent = Number((new Big(_this.criticalPercent)).plus(0.01).valueOf());
        }
      }
    }
  },
  {
    id: 24156,
    name: 'Demi-Human Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.DEMI_HUMAN) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.DEMI_HUMAN) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24157,
    name: 'Exorcist Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.DEMON) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.DEMON) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24158,
    name: 'Hunting Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.BRUTE) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.BRUTE) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24159,
    name: 'Insect Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.INSECT) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.INSECT) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24160,
    name: 'Fishing Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.FISH) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.FISH) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24161,
    name: 'Dragon Killer Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.DRAGON) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.DRAGON) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24162,
    name: 'Angelus Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.ANGEL) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.ANGEL) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24164,
    name: 'Holy Water Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.UNDEAD) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.UNDEAD) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24165,
    name: 'Plant Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.monster.race === MonsterRace.PLANT) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowRightAccessory && character.shadowRightAccessory?.id === 24166
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.PLANT) {
          const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if ((earringRefine + pendantRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24416,
    name: 'Temporal Transcendent Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0.07,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
    }
  },
  {
    id: 24288,
    name: 'Rune Knight Weapon Shadow',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (character.playerTypeAtk === 2002) {
        character.buffSkillPercert = Number(new Big(character.buffSkillPercert).plus(0.2).valueOf());
        character.buffSkillPercert = Number(new Big(upgrade).mul(0.05).plus(character.buffSkillPercert).valueOf());
      }
    }
  },
  {
    id: 24738,
    name: 'Critical Hit Weapon Shadow',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    hpModA: 0,
    hpModB: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
    }
  },
  {
    id: 24386,
    name: 'Infinity Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
    compoundOn: null,
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
    hpModA: 0,
    hpModB: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    options: {
      ignoreSizePenalty: false
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.options.ignoreSizePenalty = false;
      _this.additionAtk.size = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.size = Number((new Big(Math.floor(upgrade / 3))).mul(0.01).valueOf());

      if (upgrade >= 10) {
        _this.options.ignoreSizePenalty = true;
      }
    }
  },
];
