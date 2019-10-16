import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page";

@Component({
  selector: 'app-velazquez',
  templateUrl: './velazquez.page.html',
  styleUrls: ['./velazquez.page.scss'],
})
export class VelazquezPage{

  constructor(private modalCtrl : ModalController){ }

  imagenes=[
    'Eldiosmarte.jpg',
    'InmaculadaConcepción.jpg',
    'Lacosturera.jpg',
    'Ladamadelabanico.jpg',
    'LaInfantaMargaritaEnAzul.jpg',
    'LasMeninas.jpg',
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
