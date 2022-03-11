var express = require('express');
var app = express();

app.listen(1000, () => {
    console.log('Executando na porta 1000!');

console.log('Desafio_02');
   
console.log ('Some a idade de todos os Ubuntus');

const nome1:string = 'Rafael Silva';
const idade1:number = 19;
const peso1:number = 68;
const altura1:number = 1.70
const ehDev1:boolean = true;

const nome2:string = 'Carlos Rodrigues';
const idade2:number = 22;
const peso2:number = 70;
const altura2:number = 1.74
const ehDev2:boolean = true;

const nome3:string = 'Gabriel Silva';
const idade3:number = 24;
const peso3:number = 77;
const altura3:number = 1.79
const ehDev3:boolean = false;

console.log('R01 – SOMAR A IDADE DE TODOS OS UBUNTUS:');
    console.log('- A soma das idades eh:' , idade1 + idade2 + idade3); // resultado 

console.log('R02 – AGRUPAR O NOME DE TODOS OS UBUNTUS:'),
    console.log ('- Agrupe todos os nomes:' , [nome1, nome2, nome3]); // resultado 

console.log('R03 – CALCULAR MÉDIA IMC DE TODOS UBUNTOS:')
    console.log ('- Imc de Rafael eh:' , peso1 / (altura1*altura1) ); // resultado 
    console.log ('- Imc de Carlos eh:' , peso2 / (altura2*altura2) ); // resultado 
    console.log ('- Imc de Gabriel eh:' , peso3 / (altura3*altura3) ); // resultado 

console.log('R04 – CONTAR QUANTOS UBUNTUS SÃO DEVS:'); // resultado 
    console.log('São Dev:' , [nome1 , nome2])

console.log('R05 – EXIBIR SOMENTE UBUNTUS COM SOBRENOME SILVA:');
    console.log('-Nomes com sobrenome Silva:' ,[ nome1 ,nome3 ]); // resultado 
});