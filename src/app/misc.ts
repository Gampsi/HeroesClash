export class ExtraMath {
    static Clamp(num: number, min: number, max: number): number {
        return Math.min(Math.max(num, min), max);
    }

    static RandomRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}