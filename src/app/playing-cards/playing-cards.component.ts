import { Component, computed, Input, input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Monster } from '../models/monster.model';
import { __values } from 'tslib';
import { Transform } from 'stream';
import { MonsterTypeProperties } from '../utils/monster.utils';


@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.scss'
})
export class PlayingCardsComponent {

 monster =input(new Monster());
 monsterTypeIcon = computed(() => MonsterTypeProperties[this.monster().type].imageUrl);
 backgroundColor = computed(() => MonsterTypeProperties[this.monster().type].color);



}