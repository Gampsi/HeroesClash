import { Hero } from "./hero";

export interface Player {
    hero: Hero;
    wins: number;
    losses: number;
}