import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Habilidades } from '../model/habilidades';
import { HabilidadesService} from '../services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {


  constructor(private sHabilidades:HabilidadesService) { }
  habilidad: Habilidades[] = [];
  ngOnInit(): void {
   
     
    this.cargarHabilidad();
  }
  cargarHabilidad():void { 
    this.sHabilidades.list().subscribe(data => {this.habilidad=data} 
       );  }

}


