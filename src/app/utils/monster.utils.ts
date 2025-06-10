import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Monster } from "../models/monster.model";

export enum MonsterType{
    PLANT = "plant",
    ELECTRIQUE = "electrique",
    FIRE = "fire",
    WATER = "water",
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;

}

export const MonsterTypeProperties: { [key in MonsterType]: IMonsterProperties } = {
    [MonsterType.PLANT]: {
        imageUrl: 'energy_plante.png',
        color: 'rgba(135, 255, 124)'
    },
    [MonsterType.ELECTRIQUE]: {
        imageUrl: 'energy_electrique.png',
        color: 'rgba(255, 255, 104)'
    },
    [MonsterType.FIRE]: {
        imageUrl: "energy_feu.png",
        color: 'rgba(255, 104, 104)'
    },
    [MonsterType.WATER]: {
        imageUrl: "energy_eau.png",
        color: 'rgba(118, 235, 255)'
    },
};