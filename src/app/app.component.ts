import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Actas';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {
            label: 'Participante',
            url: '/participante'
        },
        {
            label: 'Proyecto',
            url: '/proyecto'
        },
        {
          label: 'Actas',
          url: '/actas'
        },
        {
          label: 'Compromisos',
          url: '/compromisos'
        }
    ];
}
}
