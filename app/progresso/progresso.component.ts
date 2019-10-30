import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //@Input (Decorator) - o componente progresso sera preenchido pelo painel (do pai para o filho)
  //validar linha 06 no template do painel
  @Input()  public progresso: number = 0
  
  constructor() { }

  ngOnInit() {
  }

}