class Statistieken {
    constructor() {
        this.array = [];
        for (let x = 0; x < JSON.parse(localStorage.bedrag).length; x++) {
            const newDiv = document.createElement("h2");
            newDiv.innerHTML = `
            ${JSON.parse(localStorage.getItem('verzender'))[x]} heeft ${JSON.parse(localStorage.getItem('bedrag'))[x]} overgemaakt naar ${JSON.parse(localStorage.getItem('ontvanger'))[x]}
            `;
            document.body.appendChild(newDiv);

            const bedrag = JSON.parse(localStorage.getItem('bedrag'))[x];
            this.array.push(parseInt(bedrag));
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