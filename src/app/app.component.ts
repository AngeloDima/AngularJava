import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ContainerData: any[] = [];
  titolo: string = "";
  prezzo: number = 0;

  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.api.getData().subscribe((data) => {
      this.ContainerData = data;
      console.log("DATI", this.ContainerData);
    });
  }

  search(): void {
    if (this.titolo) {
      this.api.getDataTitolo(this.titolo).subscribe((titolo) => {
        this.ContainerData = titolo;
        console.log("FIND", this.ContainerData);
      });
    } else if (this.prezzo > 0) {
      this.api.getDataPrezzo(this.prezzo).subscribe((prezzo) => {
        this.ContainerData = prezzo;
        console.log("FIND PREZZO", this.ContainerData);
      });
    } else {
      this.loadData();
    }
  }

  prezzoCreate: number = 0;
  titoloCreate: string = "";

  createFelpe(): void {
    this.api.postData(this.titoloCreate, this.prezzoCreate).subscribe((response) => {
      console.log("CREATED", response);
      this.loadData();
    });
  }

  idProdottoDaAggiornare: number = 0;
  titoloUpdate: string = "";
  prezzoUpdate: number = 0;

  updateFelpe(): void {
    if (this.idProdottoDaAggiornare <= 0 || !this.titoloUpdate || this.prezzoUpdate <= 0) {
      console.log("Inserisci un ID, un titolo e un prezzo validi per l'aggiornamento.");
      return;
    }

    // Crea l'oggetto con i dati da aggiornare
    const prodottoAggiornato = {
      prezzo: this.prezzoUpdate,
      titolo: this.titoloUpdate

    };

    // Chiamata al servizio per effettuare la richiesta PUT
    this.api.putData(this.idProdottoDaAggiornare, prodottoAggiornato).subscribe((response) => {
      console.log("AGGIORNATO", response);
      // Puoi fare altre operazioni dopo l'aggiornamento, come ricaricare i dati
      this.loadData();
    });
  }


  //DELETE
  deleteFelpe(productId: number): void {


    this.api.deleteData(productId).subscribe(() => {
      console.log("Prodotto con ID " + productId + " ELIMINATO");
      // You can perform other operations after successful deletion, such as reloading the data
      this.loadData();
    });
  }




}



