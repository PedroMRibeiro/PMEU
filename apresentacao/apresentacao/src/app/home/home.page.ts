import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public nomeAluno: string;

  constructor() {
    this.nomeAluno = 'Pedro Ribeiro';
  }

}
