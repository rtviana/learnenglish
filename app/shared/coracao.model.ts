export class Coracao{
    //construtor
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = './assets/coracao_cheio.png',
        public urlCoracaoVazio: string = './assets/coracao_vazio.png'
    ){}

    //funcao para controlar os corações
    public exibeCoracao(): string{
        if(this.cheio){
            return this.urlCoracaoCheio
        }
            else{
                return this.urlCoracaoVazio
            }
    }
}