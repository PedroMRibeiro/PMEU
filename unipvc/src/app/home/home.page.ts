import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public nomeInstituto: string;

  constructor(private router: Router) {
    this.nomeInstituto = 'Instituto Politécnico de Viana do Castelo';
  }

  verDetalhe() {
    this.router.navigateByUrl('/detalhe/123');
  }



}