//variables globales
const d = document;
let imagenes = [
    {
        "nombre": "luffy",
        "url": "imagenes/dluffy.png"
    },
    {
        "nombre": "usopp",
        "url": "imagenes/usopp.png"
    },
    {
        "nombre": "nico",
        "url": "imagenes/nico.webp"
    },
    {
        "nombre": "shanks",
        "url": "imagenes/Shanks.webp"
    },
    {
        "nombre": "shirohige",
        "url": "imagenes/shirohige.webp"
    },
    {
        "nombre": "zoro",
        "url": "imagenes/zoro.png"
    },
    {
        "nombre": "luffy",
        "url": "imagenes/dluffy.png"
    },
    {
        "nombre": "usopp",
        "url": "imagenes/usopp.png"
    },
    {
        "nombre": "nico",
        "url": "imagenes/nico.webp"
    },
    {
        "nombre": "shanks",
        "url": "imagenes/Shanks.webp"
    },
    {
        "nombre": "shirohige",
        "url": "imagenes/shirohige.webp"
    },
    {
        "nombre": "zoro",
        "url": "imagenes/zoro.png"
    }
];
let tablero = d.querySelector(".tablero");
let nombreImg = [];
let posImg = [];

//agregar imagenes al tablero
function agregarImagenes(){
    for(let x = 0; x < imagenes.length ; x++){
        let div = d.createElement("div");
        let img = d.createElement("img");
        div.setAttribute("class","col-3");
        img.setAttribute("src","imagenes/onepiece1.jpg");
        img.setAttribute("class","img-fluid altoimg");
        img.setAttribute("id",x);
        img.addEventListener("click", mostrarImagenes);
        div.appendChild(img);
        tablero.appendChild(div);
    }
}
agregarImagenes();
//funcion para mostrar las imagenes
function mostrarImagenes() {
    //guardar ID de la imagen
    let imgID = this.getAttribute("id");
    //alert("posImagen :"+imgID)
    this.setAttribute("src", imagenes[imgID].url);
    //guardando el nombre y id de la imagen
    nombreImg.push(imagenes[imgID].nombre);
    posImg.push(imgID);
    //alert(nombreImg[0]+" "+posImg[0]);
    //ejecutar la funcion comparar imagenes
    if (nombreImg.length == 2) {
       setTimeout(comparaImg, 300);
    }
}

//funcion para comparar las imagenes
function comparaImg() {
    let todasImg = d.querySelectorAll(".tablero .col-3 img");
    //comparar imagenes
    if (nombreImg[0] == nombreImg[1]) {
        todasImg[ posImg[0] ].setAttribute("src","imagenes/ok.jpg");
        todasImg[ posImg[1] ].setAttribute("src","imagenes/ok.jpg");
    }else{
        todasImg[ posImg[0] ].setAttribute("src","imagenes/onepiece1.jpg");
        todasImg[ posImg[1] ].setAttribute("src","imagenes/onepiece1.jpg");
    }
    nombreImg= [];
    posImg= [];
}