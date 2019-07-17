import { Component, OnInit } from '@angular/core';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participante } from 'src/app/model/participantes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-dialogo-registro',
  templateUrl: './dialogo-registro.component.html',
  styleUrls: ['./dialogo-registro.component.css']
})
export class DialogoRegistroComponent implements OnInit {

  participanteForm: FormGroup;
  participante: Participante;
  constructor(private dialogRef: DynamicDialogRef, private config: DynamicDialogConfig,
    private formBuilder: FormBuilder, private service: ParticipanteService, private message : MessageService) {
    this.participante = this.config.data.participante;
   }

  ngOnInit() {
    this.validateForm();
  }

  public validateForm(): void {
    this.participanteForm = this.formBuilder.group({
      id: [this.participante.id, [
        Validators.required
      ]],
      nombre: [this.participante.nombre, [
        Validators.required
      ]]
    });
  }

  public cancelSave(): void {
    this.dialogRef.close();
  }

  public saveParticipante(): void {
    this.service.saveParticipante(this.participante).subscribe( res => {
      this.dialogRef.close(new Participante());
      this.message.add({severity: 'success', summary: 'Info', detail: 'Participante creado'});

    }, err => {
      console.log(err);
    });
  }
}
