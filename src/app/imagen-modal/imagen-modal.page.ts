import { Component, OnInit} from '@angular/core';
import { ModalController, NavParams} from "@ionic/angular";


@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

  imagen: string;

  constructor(private modalController: ModalController, private navparams:NavParams) { 
    this.navparams.get('imagen');
  }

  ngOnInit() {
  }

  cerrar(){
    this.modalController.dismiss();
  }

}
