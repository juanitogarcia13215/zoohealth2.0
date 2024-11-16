import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {  } from 'typeorm';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private AFauth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // Método de inicio de sesión
  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.signInWithEmailAndPassword(username, password)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  // Registro de usuario
  register(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(username, password)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  // Crear nuevo usuario en Firestore
  create_NewUser(record: any) {
    return this.firestore.collection('User').add(record);
  }

  // Leer usuarios
  read_User() {
    return this.firestore.collection('User').snapshotChanges();
  }

  // Actualizar usuario
  update_User(recordID: string, record: any) {
    return this.firestore.doc('User/' + recordID).update(record);
  }

  // Eliminar usuario
  delete_User(recordID: string) {
    return this.firestore.doc('User/' + recordID).delete();
  }

  // Cerrar sesión
  logout() {
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
