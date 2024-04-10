/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros */ 


const function1 = (p, r, t) => {
juros = p * r * t;
montante = juros + p;
console.log(`o valor do montante é ${montante}`)
}

function1(10000,0.2,10)

const function2 = (p1,r1,t1) => {
    montante2 = p1 * (1+r1/2) ** (2*t1)
    console.log(`o montante é ${montante2}`)
}

function2(10000,0.2,10)