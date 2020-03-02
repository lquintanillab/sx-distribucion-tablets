interface EntregaParcial {
  id: string;
  estado: string;
  venta: string;
  partidas: EntregaParcialDet[];
  folioFac: number;
  tipoDeVenta: string;
  inicio: string;
  entregaLocal: boolean;
  tipo: string;
  fecha: string;
  documento: number;
  nombre: string;
  cliente: string;
  autorizo?: User;
  facturo?: User;
}



