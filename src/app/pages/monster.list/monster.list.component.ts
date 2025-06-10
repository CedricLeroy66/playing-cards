import { Component, computed, effect, inject, model, signal } from '@angular/core';		
import { Monster } from '../../models/monster.model';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MonsterType } from '../../utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from '../../services/monster/monster.service';
import { PlayingCardsComponent } from '../../playing-cards/playing-cards.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-monster-list',
	standalone: true,
	imports: [CommonModule, PlayingCardsComponent, SearchBarComponent],
	templateUrl:'./monster.list.component.html',
	styleUrl: './monster.list.component.scss',
})
export class MonsterListComponent {

	private monstersService = inject (MonsterService);
	private router = inject(Router);

	monsterService = inject(MonsterService);
	monsters = signal<Monster[]>([]);
	search = model('');

	filteredMonsters = computed(() => {
		return this.monsters().filter(monster => monster.name.includes(this.search()));
	});

	constructor() {
		this.monsters.set(this.monsterService.getAll());
	}

	addMonster() {
		this.router.navigate(['monster']);
	}
	openMonster(monster: Monster) {
		this.router.navigate(['monster', monster.id]);
	}

}