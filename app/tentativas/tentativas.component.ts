import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {  

  @Input()public tentativas: number

  //array objetos de coracao
  public coracoes: Coracao[]=[new Coracao(true), new Coracao(true), new Coracao(true)]

  constructor() { }

  //executa uma unica vez quando o componente é iniciado
  ngOnInit() {}  

  //sera executado durante o processo de decoracao dos valores de componente pai para filho
  //durante o input dos dados, ele será executado
  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio = false
    }
  }
}