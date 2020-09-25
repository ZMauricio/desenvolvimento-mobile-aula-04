import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.page.html',
  styleUrls: ['./clientes-lista.page.scss'],
})
export class ClientesListaPage implements OnInit {


  private clientes = [
    {
      id: 1,
      nome: 'Goku',
      email: 'goku@dbz.jp',
      telefone: '1234567',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-01.jpg'
    },
    {
      id: 2,
      nome: 'Vegeta',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-02.jpg'
    },
    {
      id: 3,
      nome: 'Vegeta',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-03.jpg'
    },
    {
      id: 4,
      nome: 'Bulma',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-04.jpg'
    },
    {
      id: 5,
      nome: 'Gohan',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-05.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
