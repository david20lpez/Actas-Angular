import { Component, OnInit } from '@angular/core';
import { DialogService, MessageService } from 'primeng/api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ActaService } from './acta.service';
import { Acta } from '../model/acta';
import { ActDialogComponent } from './act-dialog/act-dialog.component';
import { ProyectoService } from '../proyecto/proyecto.service';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-acta',
  templateUrl: './acta.component.html',
  styleUrls: ['./acta.component.css']
})
export class ActaComponent implements OnInit {

  public actas : Array<Acta>;

  constructor(private dialogService : DialogService, private actaService : ActaService) { }

  ngOnInit() {
    this.getActas();
  }

  public openDialog(): void {
      let dialogo = this.dialogService.open(ActDialogComponent , {
      header: 'Registro acta',
      width: '70%',
      data: {acta: new Acta()}
    });

    dialogo.onClose.subscribe( res => {
      if (res != null) {
        this.getActas();
      }
    });
  }

  public getActas(): void{
    this.actaService.getActas().subscribe( res => {
      this.actas = res;
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }

  public selectActa(actaK : Acta): void{
    let dialogo = this.dialogService.open(ActDialogComponent, {
      header: 'Edición elemento',
      width: '70%',
      data: {acta: actaK}
    });
  }

}
