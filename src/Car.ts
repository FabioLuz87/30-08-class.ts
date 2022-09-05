export default class Car{
    consumo: number;
    tanque: number = 0;

    constructor(consumo: number) {
        this.consumo = consumo;
        console.log(`O consumo deste carro é ${this.consumo} km/l.`);
    }

    andar(distancia: number) {
        this.tanque -= (distancia / this.consumo);
        console.log(`Você andou ${distancia} kms e o o tanque do carro tem ${this.tanque}`)

    }

    obterGasolina() {
        console.log(`O nível de gasolina no tanque é de ${this.tanque} litros`);
        

    }

    adicionarGasolina(litrosDeGasolina: number) {
        this.tanque += litrosDeGasolina;
        console.log(`Você abasteceu ${litrosDeGasolina} litros e seu tanque tem ${this.tanque}  litros.`);
    }
}

let car = new Car(15);

car.adicionarGasolina(100);

car.andar(50);

car.obterGasolina();