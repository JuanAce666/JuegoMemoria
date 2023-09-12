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





/*もう一つの問題が解決されました
let tablero = d.querySelector(".tablero");
let nombreImg = [];
let posImg = [];
let enComparacion = false; // Nueva variable para controlar si se están comparando imágenes

// Función para agregar imágenes al tablero
function agregarImagenes() {
    for (let x = 0; x < imagenes.length; x++) {
        let div = d.createElement("div");
        let img = d.createElement("img");
        div.setAttribute("class", "col-3");
        img.setAttribute("src", "imagenes/onepiece1.jpg");
        img.setAttribute("class", "img-fluid altoimg");
        img.setAttribute("id", x);
        div.appendChild(img);
        tablero.appendChild(div);
    }
}
agregarImagenes();

// Función para mostrar las imágenes
function mostrarImagenes() {
    if (enComparacion) {
        return; // Evita que se haga clic en imágenes mientras se están comparando
    }

    let imgID = this.getAttribute("id");

    // Evitar clic en la misma imagen ya revelada
    if (nombreImg.includes(imgID)) {
        return;
    }

    this.setAttribute("src", imagenes[imgID].url);
    nombreImg.push(imgID);
    posImg.push(imgID);

    if (nombreImg.length == 2) {
        enComparacion = true; // Establece la bandera de comparación en true
        setTimeout(comparaImg, 300);
    }
}

// Función para comparar las imágenes
function comparaImg() {
    let todasImg = d.querySelectorAll(".tablero .col-3 img");

    if (nombreImg.length === 2) {
        const img1 = imagenes[nombreImg[0]].nombre;
        const img2 = imagenes[nombreImg[1]].nombre;

        if (img1 === img2) {
            todasImg[posImg[0]].setAttribute("src", "imagenes/ok.jpg");
            todasImg[posImg[1]].setAttribute("src", "imagenes/ok.jpg");
        } else {
            todasImg[posImg[0]].setAttribute("src", "imagenes/onepiece1.jpg");
            todasImg[posImg[1]].setAttribute("src", "imagenes/onepiece1.jpg");
        }

        nombreImg = [];
        posImg = [];
        enComparacion = false; // Restablece la bandera de comparación a false
    }
}

// Agregar el evento clic a todas las imágenes
let imagenesTablero = d.querySelectorAll(".tablero .col-3 img");
imagenesTablero.forEach((img) => {
    img.addEventListener("click", mostrarImagenes);
});*/






/*
解決済み-これを翻訳した人は、あなたが私のコードを盗んでいることを忘れないでください。
resolve
let tablero = d.querySelector(".tablero");
let nombreImg = [];
let posImg = [];
let cartasSeleccionadas = 0;

// Función para embarajar las cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para agregar imágenes al tablero
function agregarImagenes() {
    shuffle(imagenes); // Embarajar las imágenes

    for (let x = 0; x < imagenes.length; x++) {
        let div = d.createElement("div");
        let img = d.createElement("img");
        div.setAttribute("class", "col-3");
        img.setAttribute("src", "imagenes/onepiece1.jpg");
        img.setAttribute("class", "img-fluid altoimg");
        img.setAttribute("id", x);
        img.addEventListener("click", mostrarImagen);
        div.appendChild(img);
        tablero.appendChild(div);
    }
}
agregarImagenes();

// Función para mostrar las imágenes
function mostrarImagen() {
    if (cartasSeleccionadas >= 2 || this.getAttribute("data-seleccionada") === "si") {
        return;
    }

    let imgID = this.getAttribute("id");
    this.setAttribute("src", imagenes[imgID].url);
    this.setAttribute("data-seleccionada", "si");
    nombreImg.push(imagenes[imgID].nombre);
    posImg.push(imgID);
    cartasSeleccionadas++;

    if (cartasSeleccionadas === 2) {
        setTimeout(comparaImagenes, 1000); // Ocultar después de 1 segundo
    }
}

// Función para comparar las imágenes
function comparaImagenes() {
    if (nombreImg[0] === nombreImg[1]) {
        // Dejar las cartas visibles
        for (let i = 0; i < 2; i++) {
            let img = d.querySelector(`[id="${posImg[i]}"]`);
            img.setAttribute("src", "imagenes/ok.jpg");
            img.removeEventListener("click", mostrarImagen);
        }
    } else {
        // Ocultar las cartas nuevamente
        for (let i = 0; i < 2; i++) {
            let img = d.querySelector(`[id="${posImg[i]}"]`);
            img.setAttribute("src", "imagenes/onepiece1.jpg");
            img.removeAttribute("data-seleccionada");
        }
    }

    nombreImg = [];
    posImg = [];
    cartasSeleccionadas = 0;
} 
*/