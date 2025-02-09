import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Iingresos } from '../../../interfaces/iingresos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrmIngresosComponent } from '../frm-ingresos/frm-ingresos.component';
import { DbService } from '../../../servicios/db.service';

@Component({
  selector: 'app-listado-ingresos',
  imports: [CommonModule],
  templateUrl: './listado-ingresos.component.html',
  styleUrl: './listado-ingresos.component.css',
})
export class ListadoIngresosComponent {
  @Input() ingresos: Iingresos[] = [];
  @Output() idEliminado = new EventEmitter<string>();
  @Output() ingresoSeleccionado = new EventEmitter<Iingresos>();

  servicio = inject(DbService);

  eliminar(id: string) {
    this.idEliminado.emit(id);
    alert('Eliminando registro...');
  }
  editar(ing: Iingresos) {
    this.ingresoSeleccionado.emit(ing);
  }
}
