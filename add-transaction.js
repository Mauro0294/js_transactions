class Transactie {
    constructor() {
        this.submitBtn = document.querySelector("#submit");
    }
    transactieUitvoeren() {
        this.submitBtn.addEventListener("click", () => {
            this.bedrag = document.querySelector("#bedrag").value;
            this.verzender = document.querySelector("#verzender").value;
            this.ontvanger = document.querySelector("#ontvanger").value;

            document.querySelector("#bedrag").value = "";
            document.querySelector("#verzender").value = "";
            document.querySelector("#ontvanger").value = "";

            this.transactieVerzender();
            this.transactieBedrag();
            this.transactieOntvanger();
        });
    }
    transactieVerzender() {
        if (localStorage.getItem("verzender") === null) {
            localStorage.setItem("verzender", JSON.stringify([]));
        }

        const oldDataVerzender = JSON.parse(localStorage.getItem('verzender'));
        const newDataVerzender = this.verzender;

        oldDataVerzender.push(newDataVerzender);
        localStorage.setItem('verzender', JSON.stringify(oldDataVerzender));
    }
    transactieBedrag() {
        if (localStorage.getItem("bedrag") === null) {
            localStorage.setItem("bedrag", JSON.stringify([]));
        }

        const oldDataBedrag = JSON.parse(localStorage.getItem('bedrag'));
        const newDataBedrag = this.bedrag;

        oldDataBedrag.push(newDataBedrag);
        localStorage.setItem('bedrag', JSON.stringify(oldDataBedrag));
    }
    transactieOntvanger() {
        if (localStorage.getItem("ontvanger") === null) {
            localStorage.setItem("ontvanger", JSON.stringify([]));
        }

        const oldDataOntvanger = JSON.parse(localStorage.getItem('ontvanger'));
        const newDataOntvanger = this.ontvanger;

        oldDataOntvanger.push(newDataOntvanger);
        localStorage.setItem('ontvanger', JSON.stringify(oldDataOntvanger));
    }
}

const transactie = new Transactie();
transactie.transactieUitvoeren();
