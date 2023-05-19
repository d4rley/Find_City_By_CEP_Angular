import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cep: string='';
  endereco: any;

  constructor(private cepService: CepService) {}

  buscarEndereco() {
    this.cepService.getEndereco(this.cep).subscribe((data: any) => {
      this.endereco = data;
    });
  }
}
