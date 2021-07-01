import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  /*Metodo de conexão com a api*/
  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );

    /* Teste antes de conectar com o bd
    this.eventos = [
      {
        Tema: 'Angular 11',
        Local: 'São Paulo'
      },
      {
        Tema: '.Net Core',
        Local: 'São Paulo'
      },
      {
        Tema: 'Angular e suas novidades',
        Local: 'São Paulo'
      },


    ]
    */

  }

}
