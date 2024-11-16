import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
 
  {
    path: 'check-general',
    loadChildren: () => import('./check-general/check-general.module').then( m => m.CheckGeneralPageModule)
  },
  {
    path: 'check-personal',
    loadChildren: () => import('./check-personal/check-personal.module').then( m => m.CheckPersonalPageModule)
  },
  {
    path: 'peluqueria',
    loadChildren: () => import('./peluqueria/peluqueria.module').then( m => m.PeluqueriaPageModule)
  },
  {
    path: 'limpieza-bucal',
    loadChildren: () => import('./limpieza-bucal/limpieza-bucal.module').then( m => m.LimpiezaBucalPageModule)
  },
  {
    path: 'sala-de-partos',
    loadChildren: () => import('./sala-de-partos/sala-de-partos.module').then( m => m.SalaDePartosPageModule)
  },
  {
    path: 'ecografias',
    loadChildren: () => import('./ecografias/ecografias.module').then( m => m.EcografiasPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'atencion-medica',
    loadChildren: () => import('./atencion-medica/atencion-medica.module').then( m => m.AtencionMedicaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
