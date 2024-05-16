const listaSpesa =["latte","cacao","biscotti","mortadella","pane","acqua","pasta","pomodoro"];

let index=0;

const container= document.querySelector("ul.container");

let liEl =document.createElement("li");


while(listaSpesa.length > index){

    container.appendChild(document.createElement("li"));
    
    

    index++;

}

console.log(listaSpesa.length)
