import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
 
  //atributos
  public frases: Frase[] = FRASES
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  
  //o output cria um atributo do componente painel, associa uma instancia do event emitter e ao termine, decore o atributo e o exponha para componentes pai
  @Output()public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    //atualiza a frase da rodada
    this.atualizaRodada()    
  }

  ngOnInit() {}

  public atualizaRespostas(resposta: Event): any{
    this.resposta = (<HTMLInputElement>resposta.target).value    
  }

  ngOnDestroy(){}

  public verificarResposta(): void{
    
    //validar respostas
    if(this.rodadaFrase.frasePtBr  == this.resposta){

    //trocar pergunta da rodada (incremento)
    this.rodada++
    this.progresso = this.progresso + 25
    
    //verificar se ganhou o game
    if(this.rodada === 4){
      //quando ganhar, deve-se concluir o game
      //o emitter 
      this.encerrarJogo.emit('vitoria')
    }

    //movimentação das frases
    this.atualizaRodada()
    
    }       
      else{
            //diminuir as vidas (Tentativas)
            this.tentativas--
      
            //verificar se a variavel tentativa eh igual a -1
            if(this.tentativas === -1){
              this.encerrarJogo.emit('derrota')
    }
  } 
}
    //atualiza rodada
    public atualizaRodada(): void{
    
    //define a frase da rodada com base na logicas
    this.rodadaFrase = this.frases[this.rodada]

    //limpeza do campo para proxima digitação
    this.resposta='';
  }
}