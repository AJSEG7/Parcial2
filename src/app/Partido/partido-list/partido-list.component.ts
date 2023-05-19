import { Component, OnInit } from '@angular/core';
import { Partido } from '../Partido';
import { PartidoService } from '../Partido.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<Partido> = [];
  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    });
  }

  ngOnInit(): void {
    this.getPartidos();
  }

}
