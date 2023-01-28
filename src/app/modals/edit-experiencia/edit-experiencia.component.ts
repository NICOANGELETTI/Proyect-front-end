import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  formExp: FormGroup;
  url: string = 'http://localhost:8080/experiencia';
  //Instanciar
  puesto: '';
  inicio: '';
  fin: '';
  empresa: '';
  url_imagen: '';
  constructor(  private sExperiencia: ExperienciaService,
    private formBuilder: FormBuilder,
    private router : Router) { this.formExp = this.formBuilder.group({
      puesto: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      url_imagen: ['', [Validators.required]],
    });}

  ngOnInit(): void {
  }
  get puestoExp() {
    return this.formExp.get('puesto');
  }

  get inicioExp() {
    return this.formExp.get('inicio');
  }

  get finExp() {
    return this.formExp.get('fin');
  }

  get empresaExp() {
    return this.formExp.get('empresa');
  }
  get urlExp() {
    return this.formExp.get('url_imagen');
  }
}
