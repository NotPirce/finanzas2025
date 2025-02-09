import { Injectable, signal } from '@angular/core';
import { Iingresos } from '../interfaces/iingresos';
import { Igastos } from '../interfaces/igastos';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private static ingresos = signal<Iingresos[]>([]);

  constructor() {}

  getIngresos(): Iingresos[] {
    return DbService.ingresos();
  }

  agregarIngreso(ingreso: Iingresos) {
    const id = DbService.ingresos().length
      ? (
          Math.max(...DbService.ingresos().map((i) => parseInt(i.id))) + 1
        ).toString()
      : '1';
    const aux = { ...ingreso, id };
    const aux2 = [...DbService.ingresos(), aux];
    DbService.ingresos.set(aux2);
  }

  eliminar(id: string) {
    const aux = DbService.ingresos().filter((i) => i.id !== id);
    DbService.ingresos.set(aux);
  }
  actualizarIngreso(ingreso: Iingresos) {
    const aux = DbService.ingresos().map((ing) =>
      ing.id == ingreso.id ? ingreso : ing
    );
    DbService.ingresos.set(aux);
  }

  /////////////////////////////////////////////////////////////////////////////

  private static gastos = signal<Igastos[]>([]);

  getGastos(): Igastos[] {
    return DbService.gastos();
  }

  agregarGasto(gasto: Igastos) {
    const id = DbService.gastos().length
      ? (
          Math.max(...DbService.gastos().map((i) => parseInt(i.id))) + 1
        ).toString()
      : '1';
    const aux = { ...gasto, id };
    const aux2 = [...DbService.gastos(), aux];
  }

  eliminarGasto(id: string) {
    const aux = DbService.gastos().filter((i) => i.id !== id);
    DbService.gastos.set(aux);
  }

  actualizarGasto(gasto: Igastos) {
    const aux = DbService.gastos().map((gst) =>
      gst.id == gasto.id ? gasto : gst
    );
    DbService.gastos.set(aux);
  }
}
