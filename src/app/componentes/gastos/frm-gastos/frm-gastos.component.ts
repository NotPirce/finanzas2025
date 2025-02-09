import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Igastos } from '../../../interfaces/igastos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frm-gastos',
  imports: [FormsModule, CommonModule],
  templateUrl: './frm-gastos.component.html',
  styleUrl: './frm-gastos.component.css',
})
export class FrmGastosComponent {
  @Input() gastoParaEditar: Igastos | null = null;
  @Output() gastoAgregado = new EventEmitter<Igastos>();
  @Output() editame = new EventEmitter<Igastos>();

  gastos: Igastos[] = [];

  nuevoGasto: Igastos = {
    id: '',
    ingresoId: '',
    monto: 0,
    fecha: '',
    descripcion: '',
  };

  ngOnChanges() {
    if (this.gastoParaEditar) {
      this.nuevoGasto = { ...this.gastoParaEditar };
    }
  }

  agregarGasto() {
    if (this.nuevoGasto.id == '') {
      this.gastoAgregado.emit({ ...this.nuevoGasto });
      alert('Gasto agregado');
    } else {
      this.editame.emit({ ...this.nuevoGasto });
      this.gastoParaEditar = null;
    }
    this.limpiar();
  }

  // Esto lo que hace es que busca si hay un elemento dentro del array gastos que tenga el mismo id
  // que nuevoGasto si lo encuentra lo asigna a la variable item si no esta sera undefined
  // const item = this.gastos.find((item) => item.id == this.nuevoGasto.id);

  limpiar() {
    this.nuevoGasto.id = '';
    this.nuevoGasto.ingresoId = '';
    this.nuevoGasto.monto = 0;
    this.nuevoGasto.descripcion = '';
    this.nuevoGasto.fecha = '';
  }
  editar(id: string): void {
    const aux = this.gastos.find((item) => item.id == id);
    if (aux) {
      this.nuevoGasto = { ...aux };
    }
  }
  eliminar(id: string) {
    this.gastos = this.gastos.filter((item) => item.id !== id);
  }
}
