function obtenerDatosJson(){
    let URLJSON="/marcas.json";
    fetch(URLJSON)
        .then(res => res.json())
        .then(datosRecibidos => {
            let misJuegos=datosRecibidos.videojuegos;
            misJuegos.forEach(videojuegos => {
                document.getElementById("videojuegos").innerHTML += `
                     <tr>
                        <th>${videojuegos.titulo}</th> 
                        <th><img src=${videojuegos.imagen}></th>
                        
                        
                    </tr>
                    
                `;
            })
            
        })
}

obtenerDatosJson();