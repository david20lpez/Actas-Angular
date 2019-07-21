import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Acta } from 'src/app/model/acta';
import { DynamicDialogRef, MessageService, DynamicDialogConfig, DialogService } from 'primeng/api';
import { ActaService } from 'src/app/acta/acta.service';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/proyecto/proyecto.service';
import { Participante } from 'src/app/model/participantes';
import { ParticipanteService } from 'src/app/participante/participante.service';
import { ParticipanteActa } from 'src/app/model/participanteActa';
import { DialogoCompromisoComponent } from 'src/app/compromiso/dialogo-compromiso/dialogo-compromiso.component';
import { Compromiso } from 'src/app/model/compromiso';

@Component({
  selector: 'app-act-dialog',
  templateUrl: './act-dialog.component.html',
  styleUrls: ['./act-dialog.component.css']
})
export class ActDialogComponent implements OnInit {

  actaForm : FormGroup;
  acta : Acta;
  proyecto : Proyecto;
  proyectos : Array<Proyecto>;
  participantes : Array<Participante> = [];
  partSeleccionados : Array<Participante> = [];
  compromisos : Array<Compromiso> = [];

  constructor(private dinamicDialogRef : DynamicDialogRef, private dinamicDialogConfig : DynamicDialogConfig,
    private formBuilder : FormBuilder, private message : MessageService, private actaService : ActaService,
    private proyectoService : ProyectoService, private participanteService : ParticipanteService,
    private dialogService : DialogService) {
      this.acta = this.dinamicDialogConfig.data.acta;
    }

  ngOnInit() {
    this.validateForm();
    this.proyectoService.listarProyectos().subscribe(
        proyectos => this.proyectos = proyectos,
        error => console.log(error)
      );
    this.participanteService.getParticipantes().subscribe(
      participantes => this.participantes = participantes,
      error => console.log(error)
    )
    this.acta = this.dinamicDialogConfig.data.acta;
  }

  public validateForm() {
    this.actaForm = this.formBuilder.group({
      ubicacion : [this.acta.ubicacion, [Validators.required]],
      contenido : [this.acta.contenido, [Validators.required]],
      idProyecto : [this.proyecto, [Validators.required]],
      partSeleccionados : [this.partSeleccionados]
    });
  }

  public cancelSave() {
    this.dinamicDialogRef.close();
    this.message.add({severity : 'info', summary : 'Info', detail : 'Se canceló la creación del acta'});
  }

  public saveActa() {
    this.acta.idProyecto = this.proyecto.id;
    this.acta.participantes = this.convertParticipantes(this.partSeleccionados);
    this.acta.compromisos = this.compromisos;
    this.actaService.saveActa(this.acta).subscribe(
      res => {
        this.dinamicDialogRef.close(new Acta());
        this.message.add({severity: 'success', summary: 'Info', detail: 'Acta creada'});
      },
      error => console.log(error)
    );
  }

  public convertParticipantes(participants : Array<Participante>): Array<ParticipanteActa>{
    let partActs : Array<ParticipanteActa> = [];
    for (const participante of participants) {
      let partAct : ParticipanteActa = new ParticipanteActa();
      partAct.idParticipante = participante.id;
      console.log("the participant id is: " + partAct.idParticipante);
      partActs.push(partAct);
    }
    return partActs;
  }

  public openDialog(): void{
    let dialog = this.dialogService.open(DialogoCompromisoComponent, {
      header : 'Agregar compromiso',
      width : '40%',
      data : {compromiso : new Compromiso()}
    });

    dialog.onClose.subscribe( res => {
      if(res !=null){
        this.compromisos.push(res);
      }
    }, err => console.log(err));
  }
}
