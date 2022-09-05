export default class Counter {
    value: number

    constructor() {
        this.value = 0;
    }

    resetValue() {
        this.value = 0;
        console.log(`Reset deixou o valor com ${this.value}`);
    }

    increaseValue(increaseValue: number){
        this.value += increaseValue
        console.log(`O valor do contador ficou em ${this.value} após ser incrementado com ${increaseValue}`);
    }

    getValue(){
        return this.value;
    }
}

let counter = new Counter()

console.log(counter.getValue());

counter.increaseValue(2);

counter.increaseValue(2);

counter.resetValue();