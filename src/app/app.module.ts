import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipanteComponent } from './participante/participante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { DialogoRegistroComponent } from './participante/dialogo-registro/dialogo-registro.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { DialogService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import { ProyectoComponent } from './proyecto/proyecto.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { DialogProyectoComponent } from './proyecto/dialog-proyecto/dialog-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipanteComponent,
    DialogoRegistroComponent,
    ProyectoComponent,
    DialogProyectoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    DynamicDialogModule,
    MenubarModule,
    InputTextareaModule
  ],
  entryComponents: [
    DialogoRegistroComponent,
    DialogProyectoComponent
  ],
  providers: [DialogService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
