import { Injectable } from '@angular/core';

import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';
import { Observable, of, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return new Observable((observer:Observer<Cliente[]>)=>{
      observer.next(CLIENTES);
      observer.complete();
    })
  }


}
