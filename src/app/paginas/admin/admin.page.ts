import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  public nome: string = 'Joãozinho';
  public foto: string = '../../../assets/imgs/clientes/cliente-01.jpg';

  constructor(private cliente: ClientesService) {
  }

  ngOnInit() {
  }


  chamarServico() {
    this.cliente.testeServico();
  }

}
