import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { type } from 'os';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  nombre: string = ' ';
  apellido: string= ' ';
  descripcionmateria: string = ' ';
  usuario = {
  email: '',
  password: ''
  }

  handlerMessage = '';
  roleMessage = '';



  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Promt!',
      buttons: ['OK', 'Cancel'],
      inputs: [
        {
          placeholder: 'Nombre',
        },

        {
          placeholder: 'Apelllido',
        },
        {
          placeholder: 'Descipcion materia',
        },
        {
          value: 'hhht//ionicframework.com',
        },

        {
          placeholder: '',
          type: 'date',
        },

        {
          placeholder: 'clave',
          type: 'password',
        },

        {
          placeholder: 'Nickname (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        
      ],
    });

    await alert.present();
  }

}
