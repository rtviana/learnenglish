import { Component } from '@angular/core'

//dizer ao Angular que sera um componente
//como decorator, permite encaminhar para classe, metadados(objeto)
@Component({
    //seletor
    selector: 'app-topo',
    //template que a classe ira controlar
    templateUrl: './topo.component.html',
    //css
    styleUrls: ['./topo.component.css']
})export class TopoComponent{
    public titulo: string = 'String Interpolation'
}