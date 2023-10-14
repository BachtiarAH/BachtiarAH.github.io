

class PortfolioItem extends Component{
    #img;
    #title;
    #startDate;
    #endDate;
    #description;
    #techList;

    constructor(img="assets/img/default-portfolio.png",title = "My Portfolio", startDate = null, endDate = null, description = null, techList = []) {
        super(props);
        this.#img = img;
        this.#title = title;
        this.#startDate = startDate;
        this.#endDate = endDate;
        this.#description = description;
        this.#techList = techList;
    }

    get img() {
        return this.#img;
    }

    set img(value) {
        this.#img = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get startDate() {
        return this.#startDate;
    }

    set startDate(value) {
        this.#startDate = value;
    }

    get endDate() {
        return this.#endDate;
    }

    set endDate(value) {
        this.#endDate = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get techList() {
        return this.#techList;
    }

    set techList(value) {
        this.#techList = value;
    }
    

}