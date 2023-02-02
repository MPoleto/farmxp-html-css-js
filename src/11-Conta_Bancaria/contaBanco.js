class ContaBancaria {
    constructor(agencia, numero, saldo, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = saldo;
        this.tipo = tipo;
    }

    get saldo () {
        return this._saldo;
    }

    set saldo (valor) {
        return this._saldo = valor;
    }

    sacar (valor) {
        if (valor > this._saldo) return 'Valor acima do disponível';

        this._saldo = this._saldo - valor;
        return `Saque ${valor} - Saldo atual ${this._saldo}`;
    }

    depositar (valor) {
        this._saldo = this._saldo + valor;
        return `Depósito ${valor} - Saldo atual ${this._saldo}`;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        return this._cartaoCredito = valor;
    }
}


class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero, saldo, tipo) {
        super(agencia, numero, saldo, tipo);
    }
}


class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero, saldo, tipo) {
        super (agencia, numero, saldo, tipo)
    }

    sacar(valor) {
        if (valor > 500) return 'Operação negada. Valor acima do permitido.';
        
        this._saldo = this._saldo - valor;
        return `Saque ${valor} - Saldo atual ${this._saldo}`;
    }
}

//---------------------------------------------------------------------------------------

let novaConta = new ContaBancaria(58341, 339719, 650.21, 'Conta Bancária');

console.log(novaConta);
console.log('Saldo: ' + novaConta.saldo);
console.log('Novo saldo: ' + (novaConta.saldo = 1050.21));
console.log(novaConta.sacar(300));
console.log(novaConta.depositar(100));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let novaCCorrente = new ContaCorrente(94857, 387662, 55.24, 1000)

console.log(novaCCorrente);
console.log('Novo saldo: ' + (novaCCorrente.saldo = 900));
console.log('Cartão de crédito: ' + novaCCorrente.cartaoCredito);
console.log(novaCCorrente.sacar(20));
console.log(novaCCorrente.depositar(600));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let novaPoupanca = new ContaPoupanca(81732, 448296, 3000, 'Conta Poupança');

console.log(novaPoupanca);
console.log('Novo saldo: ' + (novaPoupanca.saldo = 3500));
console.log('Saque maior que o saldo: ' + novaPoupanca.sacar(4000));
console.log(novaPoupanca.sacar(492));
console.log(novaPoupanca.depositar(1000));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let novaContaUni = new ContaUniversitaria(23487, 847238, 815,  'Conta Universitária');

console.log(novaContaUni);
console.log('Novo saldo: ' + (novaContaUni.saldo = 807));
console.log(novaContaUni.sacar(700));
console.log('Saldo: ' + novaContaUni.saldo);
console.log(novaContaUni.sacar(70));
console.log(novaContaUni.depositar(230));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


