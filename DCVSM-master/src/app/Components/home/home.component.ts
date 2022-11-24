import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _pato:ConsultasService) { }

  ngOnInit(): void {

    this._pato.LlamaraWarnert();
  }

}
