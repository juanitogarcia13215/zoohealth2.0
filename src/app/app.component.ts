import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'principal', url: '/principal', icon: 'archive' },
    { title: 'servicios', url: '/atencion-medica', icon: 'warning' },
    { title: '¿otro tipo de servicio?', url: '/consultas', icon: 'warning' },
    { title: 'Perfil', url: '/perfil', icon: 'warning' },
    

  ];
  public labels = [];
  constructor() {}
}
