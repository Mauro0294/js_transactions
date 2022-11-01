class Statistieken {
    constructor() {
        this.array = [];
        this.verzender = JSON.parse(localStorage.getItem('verzender'));
        this.bedrag = JSON.parse(localStorage.getItem('bedrag'));
        this.ontvanger = JSON.parse(localStorage.getItem('ontvanger'));
        for (let x = JSON.parse(localStorage.bedrag).length - 1; x >= 0; x--) {
            const newTransaction = document.createElement("h4");
            newTransaction.innerHTML = `
            ${this.verzender[x]} sent ${this.bedrag[x]} bits to ${this.ontvanger[x]}
            `;
            document.body.appendChild(newTransaction);

            this.array.push(parseInt(this.bedrag[x]));
        }
    }
    berekenGemiddelde() {
        const average = this.array.reduce((a, b) => a + b, 0) / this.array.length;
        document.querySelector(".average").innerText = average;
    }
    berekenKleinste() {
        const smallest = Math.min(...this.array);
        document.querySelector(".smallest").innerText = smallest;
    }
    berekenGrootste() {
        const biggest = Math.max(...this.array);
        document.querySelector(".biggest").innerText = biggest;
    }
    berekenAlles() {
        this.berekenGemiddelde();
        this.berekenKleinste();
        this.berekenGrootste();
    }
}

const statistieken = new Statistieken();
statistieken.berekenAlles();