class addTransactie {
    constructor() {
        this.submitBtn = document.querySelector("#submit");
    }
    transactieUitvoeren() {
        this.submitBtn.addEventListener("click", () => {
            this.bedragValue = document.querySelector("#bedrag").value;
            this.verzenderValue = document.querySelector("#verzender").value;
            this.ontvangerValue = document.querySelector("#ontvanger").value;

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

        this.oldDataVerzender = JSON.parse(localStorage.getItem('verzender'));
        this.newDataVerzender = this.verzender;

        this.oldDataVerzender.push(this.newDataVerzender);
        localStorage.setItem('verzender', JSON.stringify(this.oldDataVerzender));
    }
    transactieBedrag() {
        if (localStorage.getItem("bedrag") === null) {
            localStorage.setItem("bedrag", JSON.stringify([]));
        }

        this.oldDataBedrag = JSON.parse(localStorage.getItem('bedrag'));
        this.newDataBedrag = this.bedrag;

        this.oldDataBedrag.push(this.newDataBedrag);
        localStorage.setItem('bedrag', JSON.stringify(this.oldDataBedrag));
    }
    transactieOntvanger() {
        if (localStorage.getItem("ontvanger") === null) {
            localStorage.setItem("ontvanger", JSON.stringify([]));
        }

        this.oldDataOntvanger = JSON.parse(localStorage.getItem('ontvanger'));
        this.newDataOntvanger = this.ontvanger;

        this.oldDataOntvanger.push(this.newDataOntvanger);
        localStorage.setItem('ontvanger', JSON.stringify(this.oldDataOntvanger));
    }
}

const transactie = new addTransactie();
transactie.transactieUitvoeren();