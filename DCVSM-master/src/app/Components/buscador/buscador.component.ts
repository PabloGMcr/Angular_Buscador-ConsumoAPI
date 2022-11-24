import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  mivariable:any[]=[]
  constructor(private _route:ActivatedRoute,
              private _heroeservice:ConsultasService) { }

  ngOnInit(): void {
    
    this._route.params.subscribe(data=>{
      
      console.log(data);
      this.mivariable = this._heroeservice.buscador(data['busqueda'])
    })
  }

}
