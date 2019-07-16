import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { DialogoRegistroComponent } from './dialogo-registro/dialogo-registro.component';
import { Participante } from '../model/participantes';
import { MessageService } from "primeng/api";
import { ParticipanteService } from './participante.service';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {

  participantes: Array<Participante> = [];

  constructor(private dialog: DialogService, private message: MessageService, private service: ParticipanteService) { }

  ngOnInit() {
    this.getParticipantes();
  }

  public openDialog(): void {
    let dialogo = this.dialog.open(DialogoRegistroComponent, {
      header: 'Registro Participante',
      width: '60%',
      data: {participante: new Participante()}
    });

    dialogo.onClose.subscribe( res => {
      if (res != null) {
        this.message.add({severity: 'success', summary: 'Info', detail: 'Participante creado'});
        this.getParticipantes();
      }
    });
  }

  public getParticipantes(): void{
    this.service.getParticipantes().subscribe( res => {
      this.participantes = res;
    }, err => {
      console.log(err);
    });
  }

  public selectParticipante(participanteK: Participante): void{
    let dialogo = this.dialog.open(DialogoRegistroComponent, {
      header: 'Edición elemento',
      width: '60%',
      data: {participante: participanteK}
    });
  }
}
