import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  testeServico() {
    alert('O serviço funcionou!');
  }
}
