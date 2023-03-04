import { Component } from '@angular/core';

//  Servicios
import { ActividadesService } from './servicios/actividades.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private actividadesService: ActividadesService
    ) {
    }
}
