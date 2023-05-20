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
  //paisesGolesocal: { páis: string, golesMarcados: number}[];
  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    });
  }
  //getPaisesGolesLocal():{
    //const golesPorPais={};

    //for (const partido of this.partidos){
      //const paisLocal = partido.home_team_country;

      //if (!golesPorPais.hasOwnProperty(paisLocal)) {
        //golesPorPais[paisLocal]= 0;
      //}
      //golesPorPais[paisLocal] += partido.home_team.goals_for;
    //}

    //this.paisesGolesLocal= Object.keys(golesPorPais).map(pais => ({
      //pais: pais,
      //golesMarcados: golesPorPais[pais]
    //}));

    //this.paisesGolesLocal.sort((a,b) => b.golesMarcados - a.golesMarcados);
  //}



  ngOnInit(): void {
    this.getPartidos();
    //this.getPaisesGolesLocal();
  }

}
// LO QUE ESTA COMENTADO ERA PARA EL PUNTO 2 "GOLES DE LOCAL" sIN EMBARGO NO ME FUNCIONO CORRECTAMENTE
