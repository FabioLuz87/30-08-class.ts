export default class Calculator {
    historicalOprations: Array<string> = [];

    constructor() {};

    sum(firstTerm: number, secondTerm: number) {
        let result: string = `A soma de ${firstTerm} e ${secondTerm} é iagual a ${firstTerm + secondTerm}`;
        this.historicalOprations.push(result);
        console.log(result);
    }

    subtraction(firstTerm: number, secondTerm: number) {
        let result: string = `A subtração de ${firstTerm} e ${secondTerm} é iagual a ${firstTerm - secondTerm}`;
        this.historicalOprations.push(result);
        console.log(result);
    }

    multiplication(firstTerm: number, secondTerm: number) {
        let result: string = `A multiplicação de ${firstTerm} por ${secondTerm} é iagual a ${firstTerm * secondTerm}`;
        this.historicalOprations.push(result);
        console.log(result);
    }

    division(firstTerm: number, secondTerm: number) {
        let result: string = `A divisão de ${firstTerm} por ${secondTerm} é iagual a ${firstTerm / secondTerm}`;
        this.historicalOprations.push(result);
        console.log(result);
    }

    showHistorical() {
        this.historicalOprations.forEach((item, index) => {
            console.log(`A ${index + 1}ª operação foi ${item}`);
        })
    }
    
}

let calculator = new Calculator();

calculator.sum( 1, 1);
calculator.division(4,2);
calculator.showHistorical();