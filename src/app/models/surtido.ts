

 export interface Surtido {
  id: string;
  estado?: string;
  kilos?: number;
  tipoDeVenta?: string;
  inicio?: string;
  clasificacionVale?: string;
  origen: string;
  entregaLocal?: boolean;
  auxiliares?: any[];
  tiempoSurtido?: number;
  tipo?: string;
  fecha?: string;
  kilosCorte?: number;
  prodsCorte?: number;
  documento?: number;
  asignado?: User;
  nombre: string;
  prods?: number;
  tiempoCorte: number;
  parcial: boolean;
  facturo?: User;
  folioFac?: number;
  autorizo?: User;
  cerrado?: Date;
  revisado?: Date;
  entregado?: Date;
  dateCreated?: Date;
}


