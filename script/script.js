const listaSpesa =["latte","cacao","biscotti","mortadella","pane","acqua","pasta","pomodoro"];

let index=0;


const container= document.querySelector("ul.container");


while( index<listaSpesa.length){

    let liEl =document.createElement("li");
    
    container.appendChild(liEl);

    liEl.append(listaSpesa[index])
    
    index++;

}

console.log(listaSpesa.length)


// aggiungere un function che riceve come parametro una delle stringhe contenute nell'array e che restituisce  un elemnto li con all'interno quella stringa
