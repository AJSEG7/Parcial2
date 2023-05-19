export class Partido {
  id: number;
  marcadorLocal: number;
  marcadorVisitante: number;

  constructor(
    id: number,
    marcadorLocal: number,
    marcadorVisitante: number,
  ){

    this.id = id;
    this.marcadorLocal= marcadorLocal;
    this.marcadorVisitante = marcadorVisitante;
  }
}

