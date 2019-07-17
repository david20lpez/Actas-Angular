import { Component, OnInit } from '@angular/core';
import { DialogService, MessageService } from 'primeng/api';
import { DialogProyectoComponent } from './dialog-proyecto/dialog-proyecto.component';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from './proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: Array<Proyecto> = [];

  constructor(private dialog: DialogService, private messageService : MessageService,
    private service: ProyectoService
    ) { }

  ngOnInit() {
    this.getProyectos();
  }

  public showDialog(): void {
    let dialog = this.dialog.open(DialogProyectoComponent, {
      header : 'Proyecto',
      width : '60%',
      data : { proyecto: new Proyecto()}
    });

    dialog.onClose.subscribe( res => {
      this.messageService.add({severity: 'success', summary: 'Información', detail: 'Proyecto creado'});
      this.getProyectos();
    })
  }

  public getProyectos(): void{
    this.service.listarProyectos().subscribe(res => {
      this.proyectos = res;
    }, err =>{
      console.log(err);
    });
  }

  public selectProyecto(proyecto: Proyecto): void{
    let dialogo = this.dialog.open(DialogProyectoComponent, {
      header: 'Edición proyectos',
      width : '60%',
      data : { proyecto: proyecto }
    });

    dialogo.onClose.subscribe( res => {
      if (res != null && res != undefined) {
        this.messageService.add({severity : 'success', summary : 'editar proyecto', detail : 'Proyecto editado exitosamente'});
        this.getProyectos();
      }
    });
  }
}
