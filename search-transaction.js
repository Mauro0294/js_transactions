class Search {
    constructor() {
        this.submitBtn = document.querySelector('.button');
        this.searchField = document.querySelector('.search_input');
        this.output = document.querySelector('.output');
    }
    searchTransaction() {
        this.submitBtn.addEventListener('click', () => {
            const searchValue = this.searchField.value;

            if (searchValue === "" || searchValue >= JSON.parse(localStorage.bedrag).length) {
                this.isValid = false;
            } else {
                this.verzender = JSON.parse(localStorage.getItem('verzender'))[searchValue];
                this.bedrag = JSON.parse(localStorage.getItem('bedrag'))[searchValue];
                this.ontvanger = JSON.parse(localStorage.getItem('ontvanger'))[searchValue];
                this.isValid = true;
            }
            this.showTransaction();
        });
    }
    showTransaction() {
        this.isValid ? this.output.innerHTML = `${this.verzender} sent ${this.bedrag} bits to ${this.ontvanger}`
        : this.output.innerHTML = "Transactie niet gevonden, probeer het opnieuw!";
    }
}

const searchId = new Search();
searchId.searchTransaction();