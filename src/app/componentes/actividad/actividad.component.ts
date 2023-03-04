import { Component, Input, OnInit } from '@angular/core';

// Servicios
import { ActividadesService } from "./../../servicios/actividades.service";

@Component({
    selector: 'app-actividad',
    templateUrl: './actividad.component.html',
    styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

    @Input() tipo: number = 0;

    actividades: string[][] = [
        [],
        [],
        []
    ];

    constructor(
        public actividadesService: ActividadesService
    ) {

    }

    ngOnInit() {
        this.actividades[0] = this.actividadesService.por_hacer;
        this.actividades[1] = this.actividadesService.en_proceso;
        this.actividades[2] = this.actividadesService.finalizado;
    }

    pasarActividad( tipo: number, indice: number ) {
        if(tipo <= 1) {
            const valor = this.actividades[tipo].splice(indice, 1);
            this.actividades[tipo+1].unshift(...valor);
        }
    }

    regresarActividad( tipo: number, indice: number ) {
        if(tipo >= 1) {
            const valor = this.actividades[tipo].splice(indice, 1);
            this.actividades[tipo-1].unshift(...valor);
        }
    }

    eliminarActividad( tipo: number, indice: number ) {
        this.actividades[tipo].splice(indice, 1);
    }
}
