
const carrito = [];
let contenedor = document.getElementById("misprods");
let botonFinalizar = document.getElementById("finalizar");
let carrito1 = document.getElementById("carrito");




function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-md-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>   
        `;
    }

    //Aplicando Eventos
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    });
}

renderizarProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);

    Swal.fire({
        title: productoAComprar.nombre,
        text: 'Se agrego al carrito.',
        imageUrl: productoAComprar.foto,
        imageWidth: 350,
        imageHeight: 400,
        imageAlt: productoAComprar.nombre,
      })

    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
            <td><button class="btn btn-danger" onclick="eliminar(event)">🗑️</button></td>
            
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
    document.getElementById("tablabody").innerHTML += `
    
    `;
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;


}

function eliminar(ev){
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);

    let id = fila.children[0].innerText;
    console.log(id);

    let indice = carrito.findIndex(producto => producto.id == id);
    console.log(indice)
    
    
    carrito.splice(indice,1);
    console.table(carrito);

    
    fila.remove();

    //recalcular el total
    let preciosAcumulados = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    total.innerText="Total a pagar $: "+preciosAcumulados;

    
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
   


botonFinalizar.onclick = () => {
    if(carrito.length==0){
        Swal.fire({
            title: 'El carro está vacío',
            text: 'compre algun producto',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        carrito1;
        document.getElementById("tablabody").innerHTML="";
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: ";
        
        Swal.fire(
            'Tu compra fue realizada con éxito!',
            'Recibiras un mail con el detalle de tu pedido!',
            'success'
          )
       

    
    }
}



