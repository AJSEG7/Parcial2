import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Equipo';
import { EquipoService } from '../Equipo.service';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {

  equipos: Array<Equipo> = [];
  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equipos = equipos;
    });
  }

  ngOnInit(): void {
    this.getEquipos();
  }

}
