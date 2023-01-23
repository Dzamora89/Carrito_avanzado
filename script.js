let listaProductos = ["Caja de herramientas;12.5€;Herramientas profesionales para pequeños trabajos de bricolaje;./images/herramientas.jpg", "Silla ordenador;150€;Silla perfecta para pasar varias horas frente al PC;./images/silla.jpg", "Boligrafo;4.5€;Kit de bolígrafos, todos los colores;./images/boligrafo.jpg", "Boligrafo 3D;5€;Bolígrafo para pintar en 3 dimensiones;./images/boligrafo3d.jpg", "Gomas de borrar;2€;Kit de 4 gomas de borrar Milan;./images/gomas.jpg", "Pantalón de deporte;10€;Pantalón de deporte Adidas;./images/pantalon.jpg", "Destornillador/Taladro eléctrico;45.5€;Destornillador y taladro eléctrico marca NAC;./images/taladro.jpg"]

function cargarProductos() {

}

function AnadirAlCarrito(indiceProducto) {

}

function aumentarCantidad(nombreProducto) {

}

function reducirCantidad(nombreProducto) {

}

function eliminarProducto(nombreProducto) {

}

function seleccionarFilaProducto(indice) {

}

function reEnumerar() {

}

function obtenerLineaHtmlDelProducto(indice, nombreProducto, precioProducto, descripcionProducto, imagenProducto) {
    let filaHtml = "<div class = 'row filasProducto'><div class = 'col-3'><img src = '" + imagenProducto + "' class = 'img-fluid'> </div> "
    filaHtml += "<div class = 'col-3'><p>" + nombreProducto + "</p><p>" + precioProducto + "</p><p>" + descripcionProducto + "</p></div>"
    filaHtml += "<div class='col-6 d-flex align-items-center'><button class='main-btn' onclick='AnadirAlCarrito(" + indice + ")'>Añadir al carrito <i class='bi bi-bag-plus-fill'></i></button></div>"
    return filaHtml
}

function obtenerLineaHtmlDelCarrito(nombre, precio, cantidad, imagen) {
    let filaHtml = "<div class='row filaCarrito'><span>1.</span><div class='col-5'><img src='" + imagen + "' class='img-fluid'></div><div class='col-7'>"
    filaHtml += "<p id='nombreCarrito'>" + nombre + "</p><span> " + precio + "</span><p>Cantidad: " + cantidad + "</p><button onclick='aumentarCantidad(\"" + nombre + "\")'>+</button><button onclick='reducirCantidad(\"" + nombre + "\")'>-</button><button type='button' onclick='eliminarProducto(\"" + nombre + "\")'><i class='bi bi-trash-fill'></i></button></div></div>"
    return filaHtml
}