import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrosComponent } from './carros/carros.component';


const routes: Routes = [
  {path: 'carros', component: CarrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
