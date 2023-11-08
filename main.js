let boton = document.querySelector(".btn");
let input = document.querySelectorAll("input");
let form = document.querySelector(".formulario")
let valorInput;



//Guardamos la información y convertimos a string el objeto
let dict;

function wait(event)
{
    event.preventDefault()
    boton.addEventListener('click',()=>{
        input.forEach(element => {
            valorInput=element.value
            localStorage.setItem('Juanito', JSON.stringify(valorInput));

            //Obtenemos el objeto del local storage y lo guardamos

            let mascotaGuardada = localStorage.getItem('Juanito');

            //Convertimos la información a un objeto nuevamente

            mascotaGuardada = JSON.parse(mascotaGuardada);
        });
    })
    console.log(localStorage);
}
form.addEventListener('submit', wait)
//Obtenemos el objeto del local storage y lo guardamos

//Convertimos la información a un objeto nuevamente

/* mascotaGuardada = JSON.parse(mascotaGuardada); */



/* console.log(boton); */