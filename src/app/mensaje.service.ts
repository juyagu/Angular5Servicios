import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private subject = new Subject<any>();

  enviarMensaje(mensaje:string){
    this.subject.next({text : mensaje});
  }

  limpiarMensaje(){
    this.subject.next();
  }

  getMensaje(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}
