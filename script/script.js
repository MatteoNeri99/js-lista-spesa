const listaSpesa =["latte","cacao","biscotti","mortadella","pane","acqua","pasta","pomodoro"];

let index=0;




while( index<listaSpesa.length){
    const container= document.querySelector("ul.container");

    let liEl =document.createElement("li");

    container.appendChild(document.createElement("li"));

    liEl.append(listaSpesa[index])
    
    index++;

}

console.log(listaSpesa.length)
