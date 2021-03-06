import { orderBy } from 'lodash';
import { equipments as Equipments } from "./dbs/equipments";
import { specialEquipments as SpecialEquipments } from "./dbs/special-equipments";
import { buffSkills as BuffSkills } from './dbs/buffSkills';
import { atkSkills as AtkSkills } from './dbs/atkSkills';
import { potionItems as PotionItems } from './dbs/potion';

export const equipments = orderBy([...Equipments], ['id', 'name'], ['asc', 'asc']);
export const specialEquipments = orderBy([...SpecialEquipments], ['id', 'name'], ['asc', 'asc']);
export const allEquipments = orderBy([...Equipments, ...SpecialEquipments], ['id', 'name'], ['asc', 'asc']);
export const version = require('../package.json').version;
export const buffSkills = orderBy(BuffSkills, ['id'], ['asc']);
export const atkSkills = orderBy(AtkSkills, ['id'], ['asc']);
export const potionItems = orderBy(PotionItems, ['id'], ['asc']);
