export const showData = async (list, element) => {
    const products = await list

    products.forEach(product => {
        const {precio, id, title,thumbnailUrl} = product
        
        element.innerHTML += `
           
            <li class="card" style="width: 16rem; heigth: 20rem">
                 <div class="card-body">
                     <img src=${thumbnailUrl} class="card-img-top" alt="...">
                         <h5 class="card-title">${title}</h5>
                         <h5 class="card-title">$ ${precio}</h5>
                         <a data-target="#exampleModalLong" id=${id} class="btn btn-dark"
                         ;">ver más</a>
                         <button class="btn btn-dark">Agregar Producto</button>
                 </div>
            </li>
              `
   });
}
