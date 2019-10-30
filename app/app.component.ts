import { Component } from '@angular/core';
import { TentativasComponent } from './tentativas/tentativas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public jogoAndamento: boolean = true
  public tipoEncerramento: string
  
  public encerrarJogo(tipo: string): void{
    this.jogoAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo():void{
    this.jogoAndamento = true
    this.tipoEncerramento = undefined
  }
}
