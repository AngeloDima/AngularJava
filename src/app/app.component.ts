import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ContainerData: any[] = [];

  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data) => {
      this.ContainerData = data;
      console.log("DATI", this.ContainerData);

    });
  }
}
