class Transactie {
    constructor() {
        this.submitBtn = document.querySelector("#submit");
        if ((localStorage.length) > 0) {
            this.transactieId = JSON.parse(localStorage.bedrag).length;
        } else {
            this.transactieId = 0;
        }
        document.querySelector('#transactieid').value = this.transactieId;
    }
    transactieUitvoeren() {
        this.submitBtn.addEventListener("click", () => {
            this.verzender = document.querySelector("#verzender").value;
            this.bedrag = document.querySelector("#bedrag").value;
            this.ontvanger = document.querySelector("#ontvanger").value;


            if (this.verzender === "" || this.bedrag === "" || this.ontvanger === "") {
                this.transactieMelding("Transactie mislukt, probeer het opnieuw!");
            } else {
                document.querySelector("#verzender").value = "";
                document.querySelector("#bedrag").value = "";
                document.querySelector("#ontvanger").value = "";

                this.transactieVerzender();
                this.transactieBedrag();
                this.transactieOntvanger();
                this.giveTransactieId();
                this.transactieMelding("Transactie aangemaakt!");
            }
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
    giveTransactieId() {
        if (localStorage.getItem("transactieId") === null) {
            localStorage.setItem("transactieId", JSON.stringify([]));
        }

        const oldDataId = JSON.parse(localStorage.getItem('transactieId'));
        const newDataId = this.transactieId;

        oldDataId.push(newDataId);
        localStorage.setItem('transactieId', JSON.stringify(oldDataId));
    }
    transactieMelding(bericht) {
        document.querySelector(".message").innerText = bericht;
    }
}

const transactie = new Transactie();
transactie.transactieUitvoeren();