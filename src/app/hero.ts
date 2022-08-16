import { ExtraMath } from "./misc";

export class Hero {
    name: string;
    health: number;
    maxHealth: number;
    damage: number;

    constructor(name: string, health: number, damage: number) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.damage = damage;
    }

    ReceiveDamage(damage: number) {
        this.health -= ExtraMath.Clamp(this.health, 0, damage);
    }

}