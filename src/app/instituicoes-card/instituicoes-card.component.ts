import { Component, Input, OnInit } from '@angular/core';
import { InstituicoesMulherModel } from '../services/instituicoes-mulher-model';

@Component({
  selector: 'app-instituicoes-card',
  templateUrl: './instituicoes-card.component.html',
  styleUrls: ['./instituicoes-card.component.css']
})
export class InstituicoesCardComponent implements OnInit {

  @Input() instituicao: InstituicoesMulherModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
