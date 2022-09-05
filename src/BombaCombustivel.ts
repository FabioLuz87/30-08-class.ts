export default class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(combustivel, valorLitro, litros) {
        this.tipoCombustivel = combustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = litros;
    }

    abastecerPorValor(valor: number) {
        this.quantidadeCombustivel -= (valor / this.valorLitro);
        console.log(`Você pagou R$ ${valor} por ${(valor / this.valorLitro)} litros e a bomba está com ${this.quantidadeCombustivel} litros.`);
        
    }

    abastecerPorLitro(quantidade: number) {
        this.quantidadeCombustivel -= quantidade;
        console.log(`Você gastou R$ ${quantidade * this.valorLitro}`);        
    }
    
    alterarValor(value: number) {
        this.valorLitro = value;
        console.log(`O novo valor do combustível é R$ ${this.valorLitro}`);
        
    }

    alterarCombustivel(novoCombustível: string) {
        this.tipoCombustivel = novoCombustível;
        console.log(`O novo combustível é ${novoCombustível}`);
    }

    alterarQuantidadeDeCombustivel(quantidade: number) {
        this.quantidadeCombustivel += quantidade;
        console.log(`A disposição de combustível na bomba é de ${this.quantidadeCombustivel}`);  
    }
}

const bomba = new BombaCombustivel('Gasolina', 5.5, 200);

bomba.abastecerPorValor(5.5);
bomba.abastecerPorLitro(10);