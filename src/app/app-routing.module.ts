import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProductosComponent } from './view/productos/productos.component';
import { EspecialesComponent } from './view/especiales/especiales.component';
import { DescripcionesComponent } from './view/descripciones/descripciones.component';
import { ContactenosComponent } from './view/contactenos/contactenos.component';
import { ReglasComponent } from './view/reglas/reglas.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'productos',component:ProductosComponent},
  {path:'especiales',component:EspecialesComponent},
  {path:'descripciones',component:DescripcionesComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'reglas',component:ReglasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
