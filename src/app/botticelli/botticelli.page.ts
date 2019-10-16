import { Component} from '@angular/core';
import { ModalController} from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page";

@Component({
  selector: 'app-botticelli',
  templateUrl: 'botticelli.page.html',
  styleUrls: ['botticelli.page.scss'],
})
export class BotticelliPage {

  constructor(private modalCtrl : ModalController){

  }
imagenes=[
  'laprimavera.jpg',
  'lavirgendelagranada.jpg',
  'lavisitadelosmagos.jpg',
  'nacimientodevenus.jpg',
  'palasyelcentauro.jpg',
  'templanza.jpg',
  'venusymarte.jpg',
];


  verImagen(imagen){

    this.modalCtrl.create({
      component : ImagenModalPage,
      componentProps:{
        imagen:imagen
      }
      
    }).then(modal => modal.present())
  }
}

