import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MensajeService } from './mensaje.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje: any;
  subscription: Subscription;

  constructor(private mensageService: MensajeService) {
    this.subscription = this.mensageService.getMensaje().subscribe(mensaje => {
      this.mensaje = mensaje;
    })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  title = 'AplicacionAlumnos';

  showHeroes = true;
}
