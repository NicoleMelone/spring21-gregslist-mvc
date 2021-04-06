import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";

function _draw() {
    let houses = ProxyState.houses
    let template = ''
    houses.forEach(house => {

        template += house.Template
    })
    document.getElementById('houses').innerHTML = template
}


export default class HousesController {
    constructor() {
        ProxyState.on('houses', _draw);
        this.getHouses()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            console.error(error)
        }
    }

    async createHouse() {
        try {
            window.event.preventDefault()
            const form = window.event.target

            let newHouse = {
                bedrooms: Number(form.bedrooms.value),
                bathrooms: Number(form.bathrooms.value),
                levels: Number(form.levels.value),
                price: Number(form.price.value),
                year: Number(form.year.value),
                description: form.description.value,
                imgUrl: form.imgUrl.value
            }
            await housesService.createHouse(newHouse)
            form.reset()
            $('#new-house-form').modal('hide')
        } catch (error) {
            console.error(error)
        }

    }

    deleteHouse(id) {
        try {
            housesService.deleteHouse(id)
        } catch (error) {
            console.error(error)
        }
    }

    bid(id) {
        housesService.bid(id)
    }
}

