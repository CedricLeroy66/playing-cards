import { MonsterType } from "../utils/monster.utils";

export class Monster {

id : number = -1;    
name: string ="MyMonster";
image: string = "electrique.png"
type: MonsterType = MonsterType.ELECTRIQUE;
hp: number = 40;
figureCaption: string = "N°001 Monster";

attackName: string = "Geo Impact";
attackStrength: number = 60;
attackDescription: string = "jneefjnfkjznk";

copy(): Monster {
    return Object.assign(new Monster(), this);
}

}
