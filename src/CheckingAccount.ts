export default class CheckingAccount {
    idAccount: number;
    nameAccount: string;
    balance: number;

    constructor (initialId: number, initialName: string, initialBalance?: number) {
        this.idAccount = initialId;
        this.nameAccount = initialName;
        this.balance = initialBalance ? initialBalance : 0;         
    }

    setName(newName: string) {
        this.nameAccount = newName;
        console.log(`O nome de sua conta foi alterado para ${this.nameAccount}.`);
        
    }

    deposite(deposite: number) {
        this.balance += deposite;
        console.log(`Você depositou R$ ${deposite} . Seu saldo é de R$ ${this.balance}`);       
    }

    withdraw(withdraw: number){
        if(this.balance - withdraw >= 0) {
            this.balance -= withdraw;
            console.log(`Você sacou r$ ${withdraw} . Seu saldo é de R$ ${this.balance}`);
        
        } else
            console.log('Você não poderá sacar o valor, pois sua conta não possui cheque especial');
    }
}