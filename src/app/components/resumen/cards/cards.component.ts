import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cards = [{
    path: "./assets/png/tarjeta_2.png",
    number: "#xxxx - 4567",
    pago: "Últimos Consumos",
    cierra: "12/11",
    vence: "05/12",
    pesos: "14.500",
    dolares: "45",
  }, {
    path: "./assets/png/tarjeta_2.png",
    number: "#xxxx - 4567",
    pago: "Últimos Consumos",
    cierra: "12/11",
    vence: "05/12",
    pesos: "14.500",
    dolares: "45",
  },];
  constructor() { }

  ngOnInit(): void {

  }

}
