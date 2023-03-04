import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ActividadesService {

    por_hacer: string[] = [];
    en_proceso = [];
    finalizado = [];

    constructor() { }

    addActividad(actividad: string) {
        this.por_hacer.unshift(actividad);
    }
}
