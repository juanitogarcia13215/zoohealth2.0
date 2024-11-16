import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }
  usuario = {
    nombre: '',
    correo: '',
    contrasena: '',

  };

   async onSubmit(){
    try{
      const { correo, contrasena } = this.usuario;
      const resultado = await this.authService.register(
        correo,
        contrasena
      );
      alert("usuario registrado ${resultado.user?.email}");
    } catch(error) {
      alert ("error en el registro:" + error);
    }
    
  }


}
