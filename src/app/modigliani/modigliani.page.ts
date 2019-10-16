import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page";

@Component({
  selector: 'app-modigliani',
  templateUrl: './modigliani.page.html',
  styleUrls: ['./modigliani.page.scss'],
})
export class ModiglianiPage{

  constructor(private modalCtrl : ModalController){
  }
  imagenes=[
    'alice.jpg',
    'blackdress.jpg',
    'JeanneHebuterne.jpg',
    'madameracheleosterlind.jpg',
    'madamereynouard.jpg',
    'WomanWithBlackCravat.jpg',
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
