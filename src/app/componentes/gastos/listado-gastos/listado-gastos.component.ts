import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Igastos } from '../../../interfaces/igastos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrmGastosComponent } from '../frm-gastos/frm-gastos.component';
import { DbService } from '../../../servicios/db.service';

@Component({
  selector: 'app-listado-gastos',
  imports: [CommonModule],
  templateUrl: './listado-gastos.component.html',
  styleUrl: './listado-gastos.component.css',
})
export class ListadoGastosComponent {
  @Input() gastos: Igastos[] = [];
  @Output() idEliminado = new EventEmitter<string>();
  @Output() gastoSeleccionado = new EventEmitter<Igastos>();

  servicio = inject(DbService);

  eliminar(id: string) {
    this.idEliminado.emit(id);
    alert('Eliminando registro de gastos...');
  }

  editar(gst: Igastos) {
    this.gastoSeleccionado.emit(gst);
  }
}
