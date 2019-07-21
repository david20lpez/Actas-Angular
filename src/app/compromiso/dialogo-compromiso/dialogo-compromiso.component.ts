import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compromiso } from 'src/app/model/compromiso';
import { Participante } from 'src/app/model/participantes';
import { ParticipanteService } from 'src/app/participante/participante.service';
import { Acta } from 'src/app/model/acta';

@Component({
  selector: 'app-dialogo-compromiso',
  templateUrl: './dialogo-compromiso.component.html',
  styleUrls: ['./dialogo-compromiso.component.css']
})
export class DialogoCompromisoComponent implements OnInit {

  compromisoForm : FormGroup;
  compromiso : Compromiso;
  responsable : Participante;
  participantes : Array<Participante>;
  acta : Acta;

  constructor(private dialogConfig : DynamicDialogConfig, private dialogRef : DynamicDialogRef,
    private messageService : MessageService, private formBuilder : FormBuilder,
    private participanteService : ParticipanteService) {
      this.compromiso = this.dialogConfig.data.compromiso;
      this.compromiso = dialogConfig.data.compromiso;
    }

  ngOnInit() {
    this.validateForm();
    this.getParticipantes();
  }

  public validateForm(): void{
    this.compromisoForm = this.formBuilder.group({
      descripcion : [this.compromiso, Validators.required],
      responsable : [this.responsable, Validators.required]
    })
  }

  public getParticipantes(): void{
    this.participanteService.getParticipantes().subscribe( res => {
      this.participantes = res;
    },
    err => console.log(err)
    );
  }

  public saveCompromiso(): void  {
    this.compromiso.idParticipante = this.responsable.id;
    console.log(this.compromiso);
    console.log(this.responsable);
    this.dialogRef.close(this.compromiso);
  }
}
