import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterClientPage } from "../index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pageNewclient;

  constructor(public navCtrl: NavController) {
    this.pageNewclient = RegisterClientPage;
  }


  slides = [
    {
      title: "Créditos de viajes!",
      description: "Con nuestra tarjeta Destinos el plástico no se requiere, Aviatur tramita y valida directamente la operación con el banco.",
      image: "https://static.iris.net.co/semana/upload/images/2018/8/31/581501_1.jpg",
    },
    {
      title: "Créditos para educación",
      description: "Con el Crédito Educativo usted puede financiar hasta el 100% del valor de sus estudios de pregrado y posgrado en cualquier universidad o institución educativa del país.",
      image: "https://profesionistas.org.mx/wp-content/uploads/2018/06/Evita-fraudes-en-tu-fiesta-de-graduaci%C3%B3n-640x400.png",
    },
    {
      title: "Créditos de vivienda",
      description: "Adquiere, construye o reforma tu vivienda nueva o usada con los Créditos de Vivienda que en Bancolombia tenemos para ti.",
      image: "https://vanesaezquerra.com/wp-content/uploads/2017/12/201711001-BOSQUE-REAL-002.jpg",
    }
  ];

}
