import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { CompromisoService } from './compromiso.service';
import { Compromiso } from '../model/compromiso';

@Component({
  selector: 'app-compromiso',
  templateUrl: './compromiso.component.html',
  styleUrls: ['./compromiso.component.css']
})
export class CompromisoComponent implements OnInit {

  compromisos : Array<Compromiso> = [];
  constructor(private compromisoService : CompromisoService) { }

  ngOnInit() {
    this.getCompromisos();
  }

  public getCompromisos(): void{
    this.compromisoService.getCompromisos().subscribe( res => {
      this.compromisos = res;
    }, err => console.log(err));
  }

}
