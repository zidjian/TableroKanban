import { Component } from '@angular/core';

@Component({
    selector: 'app-tablero',
    templateUrl: './tablero.component.html',
    styleUrls: ['./tablero.component.css']
})
export class TableroComponent {

    por_hacer: number = 0;
    en_proceso: number = 1;
    finalizado: number = 2;
}
