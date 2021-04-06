export default class House {
    constructor({ bedrooms, bathrooms, levels, price, description, imgUrl, id }) {
        this.id = id
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.price = price
        this.description = description
        this.imgUrl = imgUrl

    }

    get Template() {
        debugger
        return `
    <div class="col-md-4 mb-3">
        <div class="card shadow">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">$${this.price}! ${this.bedrooms}/bd  ${this.bathrooms}/ba - House for Sale</h4>
                <p class="card-text">${this.description}</p>
        </div>
        <div class="px-3 pb-3 d-flex justify-content-between">
            <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
            <button type="button" class="btn btn-info" onclick="app.housesController.bid('${this.id}')">Bid</button>
        </div>
    </div>
</div>
`
    }
}