import getData from './getData.js'
import { showCompras } from './showCompras.js'
import { showData } from './showData.js'

const elementCar = document.querySelector('.list-car')
const element = document.querySelector('.list-group')
const endpoint = 'http://localhost:4000/producto/'

// clickBtn.forEach(btn => {
//     btn.addEventListener('click', console.log('button'))
// })

document.addEventListener('DOMContentLoaded', () => {
    const data =  getData(endpoint)
    showData(data, element)
    showCompras(data, elementCar)
    // const clickBtn = document.getElementById('btnAgregar')
    // console.log(clickBtn)
})







