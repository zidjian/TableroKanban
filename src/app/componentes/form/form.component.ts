import { Component } from '@angular/core';

//  Servicios
import { ActividadesService } from 'src/app/servicios/actividades.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    nueva_actividad: string = '';

    constructor(
        private actividadesService: ActividadesService
    ) {

    }

    anadirActividad() {
        this.actividadesService.addActividad(this.nueva_actividad);
        this.nueva_actividad = "";
    }
}
