import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './componentes/form/form.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ActividadComponent } from './componentes/actividad/actividad.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        TableroComponent,
        ActividadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
