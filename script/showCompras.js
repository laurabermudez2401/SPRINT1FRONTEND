export const showCompras = async (list, element) => {
    const items = await list

    items.forEach(item => {
        const {precio, id, title,thumbnailUrl} = item
        
        element.innerHTML += `
                <table class="table table-dark table-hover">
                <thead>
                    <tr class="tex-primrary">
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td class="table__productos">${title}
                        <img src=${thumbnailUrl} class="card-img-top" alt="...">
                        </td>
                        <td class="table__precio">${precio}</td>
                        <td class="table__cantidad">
                            <input type="number" min="1" value="1">
                            <button class="delete btn btn-danger">x</button>
                        </td>
                    </tr>
                </tbody>
                </table>
                <br> 
                <div class="row mx-4">
                    <div class="col">
                        <h3 class="itemCartTotal">Total:0</h3>
                    </div> 
                <div class="col d-flex justity content-end>   
                    <button class="btn btn-success">COMPRAR</button>
                </div>   
            `
        
    });
}