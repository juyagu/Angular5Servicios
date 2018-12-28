import { Component, OnInit } from '@angular/core';

import { MensajeService } from './../mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor(private mensajeService: MensajeService) { }

  enviarMensaje():void {
    this.mensajeService.enviarMensaje("Hola a todos desde el componente MensajeComponent");
  }

  limpiarMensaje(): void {
    this.mensajeService.limpiarMensaje();
  }

  ngOnInit() {
  }

}
