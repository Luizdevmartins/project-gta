/*When the button is clicked, we need to show the platforms. Here we need to specify it's a class */
const botao = document.querySelector(".btn-plataforma");

/*It's going inside the ul, so it shows each of the platfomrs */
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

/*Now the method to make something when clicked, so the action happens cause of the button */
botao.addEventListener("click", () => {
/*A more simple way of doing a condition. active, it removes, and removed, it adds  */
    elementoPlataformas.classList.toggle("ativo");

    /* 
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    if(botaoEstaAberto){
        elementoPlataformas.classList.remove("ativo");
    }else{
        elementoPlataformas.classList.add("ativo");
    } */
});

