import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  titulo:string = 'Mini Proyecto';

  valorUusario:string = '';
  valorMaquina:string = '';
  ganadorCompeticion:string = '';

  valorDeMaquina () {
    let numeroRamdom: number = Math.trunc((Math.random())*99);
      if(numeroRamdom <= 33){
        this.valorMaquina = "piedra";
      }else if(numeroRamdom <= 66){
        this.valorMaquina = "papel";
      }else{
        this.valorMaquina = "tijera";
      }
  }

  ganadorCompe(){
    this.valorDeMaquina();
    if(this.valorMaquina == "piedra" && this.valorUusario == "tijera"){
      this.ganadorCompeticion = 'Gana la maquina :(';
    }else if(this.valorMaquina == "papel" && this.valorUusario == "piedra"){
      this.ganadorCompeticion = 'Gana la maquina :(';
    }else if(this.valorMaquina == "tijera" && this.valorUusario == "papel"){
      this.ganadorCompeticion = 'Gana la maquina :(';
    }else if(this.valorMaquina == "papel" && this.valorUusario == "tijera"){
      this.ganadorCompeticion = 'Gana la Usuario :)';
    }else if(this.valorMaquina == "piedra" && this.valorUusario == "papel"){
      this.ganadorCompeticion = 'Gana la Usuario :)';
    }else if(this.valorMaquina == "papel" && this.valorUusario == "tijera"){
      this.ganadorCompeticion = 'Gana la Usuario :)';
    }else{
      this.ganadorCompeticion = 'Empate :/';
    }
  }

}
