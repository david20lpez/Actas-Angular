import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-dialog-proyecto',
  templateUrl: './dialog-proyecto.component.html',
  styleUrls: ['./dialog-proyecto.component.css']
})
export class DialogProyectoComponent implements OnInit {

  proyectoForm : FormGroup;
  proyecto : Proyecto;

  constructor(private dialogRef : DynamicDialogRef, private formBuilder : FormBuilder,
    private config: DynamicDialogConfig, private service: ProyectoService) {
      this.proyecto = this.config.data.proyecto;
   }

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

  public cancelRegistro(): void{
    this.dialogRef.close();
  }

  public saveProyecto(): void{
    this.service.saveProyecto(this.proyecto).subscribe( res => {
      this.dialogRef.close(res);
    }, err =>{
      console.log(err);
    });
  }
}
