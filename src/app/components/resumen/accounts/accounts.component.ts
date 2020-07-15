import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  openAcc = false;
  openMov = false;

  public  movimientos = [{
    fecha: "30/05",
    detalle: "Transferencia por CBU",
    pago: "- $ 270,00",
    imagen: "arrow-down"
  }, {
    fecha: "28/05",
    detalle: "Crédito por Transferen…",
    pago: "$ 150,00",
    imagen: "arrow-up"
  }, {
    fecha: "",
    detalle: "Transferencia por CBU",
    pago: "- $ 230,50",
    imagen: "arrow-down"
  }, {
    fecha: "26/05",
    detalle: "Crédito por Transferen…",
    pago: "$ 480,00",
    imagen: "arrow-up"
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
