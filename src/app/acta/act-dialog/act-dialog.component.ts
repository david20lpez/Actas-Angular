import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Acta } from 'src/app/model/acta';
import { DynamicDialogRef, MessageService, DynamicDialogConfig } from 'primeng/api';
import { ActaService } from 'src/app/acta/acta.service';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/proyecto/proyecto.service';

@Component({
  selector: 'app-act-dialog',
  templateUrl: './act-dialog.component.html',
  styleUrls: ['./act-dialog.component.css']
})
export class ActDialogComponent implements OnInit {

  actaForm : FormGroup;
  acta : Acta;
  proyecto : Proyecto = new Proyecto();
  proyectos : Array<Proyecto>;

  constructor(private dinamicDialogRef : DynamicDialogRef, private dinamicDialogConfig : DynamicDialogConfig,
    private formBuilder : FormBuilder, private message : MessageService, private actaService : ActaService,
    private proyectoService : ProyectoService) {
      this.acta = this.dinamicDialogConfig.data.acta;
    }

  ngOnInit() {
    this.validateForm();
    this.proyectoService.listarProyectos().subscribe(
        proyectos => this.proyectos = proyectos,
        error => console.log(error)
      );
    this.acta = this.dinamicDialogConfig.data.acta;
  }

  public validateForm() {
    this.actaForm = this.formBuilder.group({
      ubicacion : [this.acta.ubicacion, [Validators.required]],
      contenido : [this.acta.contenido, [Validators.required]],
      idProyecto : [this.proyecto, [Validators.required]]
    });
  }

  public cancelSave() {
    this.dinamicDialogRef.close();
    this.message.add({severity : 'info', summary : 'Info', detail : 'Se canceló la creación del acta'});
  }

  public saveActa() {
    this.acta.idProyecto = this.proyecto.id;
    this.actaService.saveActa(this.acta).subscribe(
      res => {
        this.dinamicDialogRef.close(new Acta());
        this.message.add({severity: 'success', summary: 'Info', detail: 'Acta creada'});
      },
      error => console.log(error)
    );
  }
}
