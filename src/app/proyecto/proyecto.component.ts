import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { DialogProyectoComponent } from './dialog-proyecto/dialog-proyecto.component';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  public showDialog(): void {
    let dialog = this.dialog.open(DialogProyectoComponent, {
      header : 'proyecto',
      width : '60%',
      data : { proyecto: new Proyecto()}
    });
  }
}
