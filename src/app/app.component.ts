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

  getTitolo(): void {
    if (this.titolo) {
      this.api.getDataTitolo(this.titolo).subscribe((titolo) => {
        this.ContainerData = titolo;
        console.log("FIND", this.ContainerData);
      });
    } else {
      // Se il campo di ricerca è vuoto, ricarica tutti i dati
      this.loadData();
    }
  }
}
