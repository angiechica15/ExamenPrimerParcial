import { Component, OnInit } from '@angular/core';

interface Componente 
{
  icon: string;
  name:  string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componente: Componente[]= [
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/imput'

    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
