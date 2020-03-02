import { Surtido } from './surtido';

export interface Corte {
  id: string;
  clave: string;
  estado?: string;
  surtido: Surtido;
  origen: string;
  auxiliares?: User;
  descripcion: string;
  instruccion?: string;
  venta: number;
  factura: number;
  cantidad: number;
  inicio?: Date;
  fin?: Date;
  parcial?: boolean;
  parcializado?: boolean;
}

