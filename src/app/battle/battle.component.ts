import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ExtraMath } from '../misc';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  messagges: string[] = [];

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
  }

  StartBattle($event: MouseEvent): void {
    let player = this.heroService.player.hero;
    let enemy = this.heroService.enemy;
    ($event.target as HTMLButtonElement).disabled = true;

    enemy.ReceiveDamage(player.damage);

    setTimeout(() => {
      player.ReceiveDamage(enemy.damage);

      if (enemy.health <= 0) {
        this.heroService.player.wins += 1;
        ($event.target as HTMLButtonElement).disabled = false;

        switch (ExtraMath.RandomRange(0, 2)) {
          case 0:
            player.maxHealth++;
            this.messagges.push("Player got +1 Health.");
            break;

          case 1:
            player.damage++;
            this.messagges.push("Player got +1 Damage.");
            break;
        }

        this.messagges.push(`Player Won against: ${enemy.name} (Lvl ${this.heroService.player.wins})`);
        this.Reset();

      } else if (player.health <= 0) {
        this.heroService.player.losses += 1;
        ($event.target as HTMLButtonElement).disabled = false;

        this.messagges.push(`Player Lost against: ${enemy.name} (Lvl ${this.heroService.player.wins})`);
        setTimeout(() => {
          this.Reset();

        }, 1000);
      }
      else {
        this.StartBattle($event);
      }
    }, 1000);

  }

  Reset(): void {
    this.heroService.player.hero.health = this.heroService.player.hero.maxHealth;
    this.heroService.enemy = new Hero(this.heroService.namesList[ExtraMath.RandomRange(0, this.heroService.namesList.length)],
      ExtraMath.RandomRange(this.heroService.player.hero.damage - 1, this.heroService.player.hero.damage + 2),
      ExtraMath.RandomRange(this.heroService.player.hero.maxHealth - 1, this.heroService.player.hero.maxHealth + 2));
  }

  ClearMessages(): void {
    this.messagges = [];
  }

}
