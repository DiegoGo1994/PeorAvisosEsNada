import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AvisosListComponent } from './avisos-list/avisos-list.component';
import { CrearAvisoComponent } from './crear-aviso/crear-aviso.component';

const routes: Routes = [
  { path: '', redirectTo: 'avisos', pathMatch: 'full' },
  { path: 'avisos', component: AvisosListComponent },
  { path: 'crear-aviso', component: CrearAvisoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
