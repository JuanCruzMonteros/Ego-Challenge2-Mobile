import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  openAcc = false;
  openMov = false;

  public accPesos = [{
    icon: "star",
    caja: "CA",
    numero: "1234 2345",
    importe: "$ 20.000,00"
  }, {
    icon: "no",
    caja: "CC",
    numero: "4567 2345",
    importe: "$ 20.000,00"
  }];

  public accDolares = [{
    icon: "star",
    caja: "CA",
    numero: "2345 1234",
    importe: "u$s 45,00"
  }, {
    icon: "no",
    caja: "CC",
    numero: "4567 1234",
    importe: "u$s 0,00"
  }];
  



  public movimientos = [{
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
