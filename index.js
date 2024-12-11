console.log("DOM de la consola");

var head = document.getElementById('head');
console.log(head);

var encabezado = document.getElementsByClassName('encabezado');
console.log(encabezado);

var heade = document.getElementsByTagName('header');
console.log(heade);

var titulo = document.querySelector('.titulo');
console.log(titulo);

var nombre = document.querySelector('#nombre_T');
console.log(nombre);

var h1s = document.querySelector('h1');
console.log(h1s);

var container = document.querySelector('#container');
console.log(container);

var cuerpo = document.querySelector('.cuerpo');
console.log(cuerpo);

var main = document.querySelector('main');
console.log(main);


var pie_pag = document.querySelector('.pie_pag');

var footerid = document.querySelector('#footer');

var footer = document.querySelector('footer');

var parrafo = document.querySelectorAll('.parrafo');
console.log(parrafo);

var h3 = document.createElement('h3');
var h4 = document.createElement('h4');
h3.textContent = "Node";
h4.textContent = "HS";

var header = document.querySelector('.encabezado');
console.log(header);
header.appendChild(h3);
header.appendChild(h4);

var mainProductos = document.createElement('main');
mainProductos.style.padding = "20px";
mainProductos.style.backgroundColor = "#f4f4f4";
mainProductos.style.width = "80%";
mainProductos.style.margin = "0 auto";

var title = document.createElement('h1');
title.textContent = 'PRODUCTOS';
title.style.textAlign = "center";
title.style.fontSize = "32px";
title.style.marginBottom = "20px";
mainProductos.appendChild(title);

var section = document.createElement('section');
section.style.display = "flex";
section.style.justifyContent = "space-around";
section.style.gap = "20px";

var article1 = document.createElement('article');
article1.style.border = "1px solid #ddd";
article1.style.padding = "15px";
article1.style.backgroundColor = "#ffffff";
article1.style.width = "45%";

var paragraph1 = document.createElement('p');
paragraph1.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
article1.appendChild(paragraph1);

var image1 = document.createElement('img');
image1.src = 'img/js.jpg';
image1.alt = 'Imagen del producto 1';
image1.style.width = "100%";
image1.style.borderRadius = "8px";
article1.appendChild(image1);

section.appendChild(article1);

var article2 = document.createElement('article');
article2.style.border = "1px solid #ddd";
article2.style.padding = "15px";
article2.style.backgroundColor = "#ffffff";
article2.style.width = "45%";

var paragraph2 = document.createElement('p');
paragraph2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
paragraph2.style.marginBottom = "15px";
article2.appendChild(paragraph2);

var image2 = document.createElement('img');
image2.src = 'img/js2.jpg';
image2.alt = 'Imagen del producto 2';
image2.style.width = "100%";
image2.style.borderRadius = "8px";
article2.appendChild(image2);

section.appendChild(article2);

mainProductos.appendChild(section);

document.querySelector('.cuerpo').appendChild(mainProductos);

header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.gap = "10px";
header.style.backgroundColor = "#333";
header.style.color = "#fff";
header.style.padding = "15px";

h3.style.fontSize = "18px";
h3.style.margin = "0";
h4.style.fontSize = "18px";
h4.style.margin = "0";

var h1 = document.querySelector('h1');
h1.style.color = "red";
h1.style.fontSize = "30px";

footer.style.border = "1px solid #ddd";
footer.style.padding = "20px"
footer.style.margin = "0"

