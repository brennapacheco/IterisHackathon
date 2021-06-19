import { Component, Input, OnInit } from '@angular/core';
import { LeisMulherModel } from '../../services/leis-mulher-model';

@Component({
  selector: 'app-leis-card',
  templateUrl: './leis-card.component.html',
  styleUrls: ['./leis-card.component.css']
})
export class LeisCardComponent implements OnInit {

  @Input() lei: LeisMulherModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
