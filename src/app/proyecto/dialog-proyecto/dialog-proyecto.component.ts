import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-dialog-proyecto',
  templateUrl: './dialog-proyecto.component.html',
  styleUrls: ['./dialog-proyecto.component.css']
})
export class DialogProyectoComponent implements OnInit {

  proyectoForm : FormGroup;
  proyecto : Proyecto;

  constructor(private dialogRef : DynamicDialogRef, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.validate();
  }

  public validate(): void {
    this.proyectoForm = this.formBuilder.group({
      nombre : [this.proyecto.nombre, [
        Validators.required
      ]],
      descripcion : [this.proyecto.descripcion]
    });
  }
}
