import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumenComponent } from './components/resumen/resumen.component';


const routes: Routes = [
  { path: '', component: ResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
