import { Injectable } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Hero } from './hero';
import { ExtraMath } from './misc';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public namesList: string[] = [
    "Maximilian",
    "Zavier",
    "Paris",
    "Anton",
    "Keith",
    "Giovanny Giorgio"
  ];

  public player: Player = { hero: new Hero("Best Hero", 5, 5), wins: 0, losses: 0 };
  public enemy: Hero = new Hero(this.namesList[ExtraMath.RandomRange(0, this.namesList.length + 1)],
    ExtraMath.RandomRange(this.player.hero.maxHealth - 1, this.player.hero.maxHealth + 2),
    ExtraMath.RandomRange(this.player.hero.maxHealth - 1, this.player.hero.maxHealth + 2));


  constructor() { }
}
