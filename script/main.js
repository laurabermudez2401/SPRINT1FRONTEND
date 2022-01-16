import getData from './getData.js'
import { showCompras } from './showCompras.js'
import { showData } from './showData.js'

const element = document.querySelector('.list-group')
const endpoint = 'http://localhost:4000/producto/'


document.addEventListener('DOMContentLoaded', () => {
    const data =  getData(endpoint)
    showData(data, element)
    showCompras(data, element)
})




