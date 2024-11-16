import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service'; // Importa usando la ruta relativa // Si está en una carpeta de servicios
import validator from 'validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required]),
  });



  loginFormValidators = {
    userEmail: {
      empty: '',
      email: '',
    },
    userPassword: {
      empty: '',
    }
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService // Inyectamos el servicio de autenticación
  ) {}

  ngOnInit(): void {}

  // Método para enviar el formulario
  async onSubmit() {
    let valid = this.validateForm();

    if (valid) {
      try {
        const { userEmail, userPassword } = this.loginForm.value;
        
        // Llamamos al servicio de autenticación
        const user = await this.authService.login(userEmail!, userPassword!);
        console.log('Login exitoso:', user);
        
        // Navegamos a la página principal
        this.navCtrl.navigateForward('/principal');
      } catch (error) {
        console.error('Error de autenticación:', error);
        alert('Usuario o contraseña incorrectos');
      }
    }
  }

  // Validación personalizada del formulario
  private validateForm(): boolean {
    let valid = true;

    const email = this.loginForm.value.userEmail ?? '';
    const password = this.loginForm.value.userPassword ?? '';

    if (validator.isEmpty(email)) {
      this.loginFormValidators.userEmail.empty = 'La dirección de correo es requerida';
      valid = false;
    } else {
      this.loginFormValidators.userEmail.empty = '';
    }

    if (!validator.isEmail(email)) {
      this.loginFormValidators.userEmail.email = 'Ingrese una dirección de correo válida';
      valid = false;
    } else {
      this.loginFormValidators.userEmail.email = '';
    }

    if (validator.isEmpty(password)) {
      this.loginFormValidators.userPassword.empty = 'Ingrese la contraseña';
      valid = false;
    } else {
      this.loginFormValidators.userPassword.empty = '';
    }

    return valid;
  }
}
