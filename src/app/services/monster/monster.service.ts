import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { identifierName } from '@angular/compiler';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

monsters: Monster[] = [];
currentIndex: number = 1;

  constructor() { 
    this.load();
  }

private save() {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }
}

private load() {
  if (typeof localStorage !== 'undefined') {
    const monsterdata = localStorage.getItem('monsters');
    if (monsterdata) {
      this.monsters = JSON.parse(monsterdata).map((monsterJSON: any) => Object.assign(new Monster(), monsterJSON));
      if (this.monsters.length > 0) {
        this.currentIndex = Math.max(...this.monsters.map(monster => monster.id ?? 1), 1) + 1;
      } else {
        this.currentIndex = 1;
      }
    } else {
      this.init();
      this.save();
    }
  } else {
    this.init();
  }
}

private init() {
  
this.monsters =[] 

        const monster1 = new Monster();
        monster1.id = this.currentIndex++;
        monster1.name = "Pik";
        monster1.hp = 40;
        monster1.figureCaption = "N°002 Pik";
        this.monsters.push(monster1);
    
        const monster2 = new Monster();
        monster2.id = this.currentIndex++;
        monster2.name = "Car";
        monster2.image = "eau.png"
        monster2.type = MonsterType.WATER;
        monster2.hp = 60; 
        monster2.figureCaption = "N°003 Car";
        this.monsters.push(monster2);
    
        const monster3 = new Monster();
        monster3.id = this.currentIndex++; 
        monster3.name = "Flam";
        monster3.image = "feu.png"
        monster3.type = MonsterType.FIRE;
        monster3.hp = 80;
        monster3.figureCaption = "N°004 Flam";
        this.monsters.push(monster3);
    
        const monster4 = new Monster();
        monster4.id = this.currentIndex++;
        monster4.name = "Plante";
        monster4.image = "plante.png"
        monster4.type = MonsterType.PLANT;
        monster4.hp = 100;
        monster4.figureCaption = "N°005 Plante";
        this.monsters.push(monster4);
}



getAll(): Monster[] {
    return this.monsters.map(monster => monster.copy());
  }

  get(id:number): Monster  | undefined{
    const monster = this.monsters.find(monster => monster.id === id);
    return monster ? monster.copy() : undefined;
  }
  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentIndex; // Set the id to the current index    
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;
    this.save();

    return monsterCopy;
   
  }

  update(monster :Monster): Monster | undefined {
      const monsterCopy = monster.copy();

      const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === monsterCopy.id);
      if (monsterIndex !== -1) {
        this.monsters[monsterIndex] = monsterCopy.copy();
        return monsterCopy;
        this.save();
      } 

      return undefined;
  }
  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === id);
    if (monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
      this.save();
      
    }
   
  }
}



