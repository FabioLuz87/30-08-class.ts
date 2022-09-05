export default class Ball{
    color: string;
    circunference: number;
    material: string;

    constructor(initialColor: string, initialCircunference: number, initialMaterial: string) {
        this.color = initialColor;
        this.circunference = initialCircunference;
        this.material = initialMaterial
        console.log(`A sua bola é ${this.color}, tem circuferência de ${this.circunference} cm e é de ${initialMaterial}`);
        
    }

    setColor(newColor: string) {
        this.color = newColor;

        console.log(`A nova cor de sua bola é ${this.color}`);
        
    }

    getColor() {
        return this.color;
        
    }

}

let ball = new Ball("azul", 50, 'couro');
ball.setColor('Vermelha');
console.log(ball.getColor());


