import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Poucos caracteres',
      autoria: 'Dev',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propiedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
