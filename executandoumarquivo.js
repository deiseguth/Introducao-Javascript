/*ABRA O GOOGLE e use o atalho windows
Ctrl + shift +i 
depois clique em 'console'
*/
// var a = 0

// a

// a + 1

//no terminal digite ls para saber onde o que tem onde você está.
//Obs: terminal deve ser o bash
// use node +  nome do arquivo que deseja executar. node executandoumarquivo
//console.log("Hello world!");

function returnEvenValues(array){
   let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array [i] %2 === 0){
          evenNums.push(array[i])
        }else{
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log("Os números pares são: ", evenNums);
} 
let array = [1, 2, 3, 4, 5, 6, 7, 8]
returnEvenValues(array)
//even nums numeros pares