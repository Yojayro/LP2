import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { ProductosComponent } from './view/productos/productos.component';
import { EspecialesComponent } from './view/especiales/especiales.component';
import { DescripcionesComponent } from './view/descripciones/descripciones.component';
import { ContactenosComponent } from './view/contactenos/contactenos.component';
import { ReglasComponent } from './view/reglas/reglas.component';
import { ProductoAddComponent } from './view/productos/producto-add/producto-add.component';
import { ProductoListComponent } from './view/productos/producto-list/producto-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    EspecialesComponent,
    DescripcionesComponent,
    ContactenosComponent,
    ReglasComponent,
    ProductoAddComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //Conexion a Firebase
    AngularFireAuthModule, //Para usar el Autentificacion a firebase
    AngularFireDatabaseModule  //Para usar la base de datos de firebase

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
