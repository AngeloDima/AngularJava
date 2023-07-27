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

}
