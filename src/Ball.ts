export default class{
    color: string;
    circunference: number;
    material: string;

    constructor(initialColor: string, initialCircunference: number, initialMaterial: string) {
        this.color = initialColor;
        this.circunference = initialCircunference;
        this.material = initialMaterial
    }

    setColor(newColor: string) {
        this.color = newColor;
    }

    getColor() {
        return this.color;
    }

}