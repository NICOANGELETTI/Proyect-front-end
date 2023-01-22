import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {

  estudios: Educacion[] = [];

  
  constructor(private sEducacion: EducacionService) {}

  ngOnInit(): void {
    this.cargarEducacion();

  }



  //Cargamos metodos

      //Guardamos habilidad
      cargarEducacion(): void {
        this.sEducacion.list().subscribe((data) => {
          this.estudios = data;
        });
      }
}

      //Borramos educacion
/*
        delete(id:number){
          if(id != undefined){
            this.sEducacion.delete(id).subscribe(data =>{
              //alert("Estudio Eliminado Correctamente")
              this.cargarEducacion();
            }, err => {
              alert("no se pudo eliminar la experiencia")
            }
            )
          }
        }
}*/


