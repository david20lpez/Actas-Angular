import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipanteComponent } from './participante/participante.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ActaComponent } from './acta/acta.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/participante'},
  {path: 'participante', component: ParticipanteComponent},
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'actas', component: ActaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
